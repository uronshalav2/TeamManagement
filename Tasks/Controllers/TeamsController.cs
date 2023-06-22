using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task.Models;
using Tasks.Interfaces;
using Tasks.Models;
using Tasks.ViewModels;

namespace Tasks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private readonly TaskDBContext _context;
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;


        public TeamsController(TaskDBContext context, UserManager<User> userManager, IMapper mapper)
        {
            _context = context;
            _userManager = userManager;
            _mapper = mapper;
        }

        // GET: api/Teams
        [Authorize(Roles = "SuperAdmin")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Teams>>> GetTeams()
        {
            var teams = await _context.Teams
            .Include(t => t.TeamsMembers)
            .ThenInclude(ut => ut.Users)
            .ToListAsync();

            return teams;
        }

        // PUT: api/Teams/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = "Client")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeams(Guid id, TeamModel teams)
        {
            var team = await _context.Teams.FindAsync(id);

            // Check if the task exists
            if (team == null)
                return NotFound();

            // Update the task properties
            team.Name = teams.Name;
            team.Description = teams.Description;

            try
            {
                // Save the changes to the database
                await _context.SaveChangesAsync();
                return Ok(team);
            }
            catch (Exception)
            {
                // Handle any errors that occurred during the update process
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        // POST: api/Teams
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = "Client")]
        [HttpPost("AddTeam")]
        public async Task<IActionResult> AddTeam(TeamModel teamModel)
        {
            // Retrieve the currently authenticated user
            var currentUser = await _userManager.GetUserAsync(User);

            // Map the team model to the Team entity
            var team = _mapper.Map<Teams>(teamModel);

            // Create a UserTeam entry for the user who created the team
            var currentUserTeam = new TeamMembers { UsersId = currentUser.Id };
            team.TeamsMembers = new List<TeamMembers> { currentUserTeam };

            // Save the team to the database
            await _context.Teams.AddAsync(team);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeams", new { id = team.TeamsId }, team); 
        }

        [Authorize(Roles = "Client")]
        [HttpPost("add/Members")]
        public async Task<IActionResult> AddTeamMember(Guid teamId, string username)
        {
            // Retrieve the currently authenticated user
            var currentUser = await _userManager.GetUserAsync(User);

            // Retrieve the team from the database including the associated users
            var team = await _context.Teams
                .Include(t => t.TeamsMembers)
                .FirstOrDefaultAsync(t => t.TeamsId == teamId);

            if (team == null)
                return NotFound();

            // Ensure that the current user is the one who created the team
            var currentUserTeam = team.TeamsMembers.FirstOrDefault(ut => ut.UsersId == currentUser.Id);
            if (currentUserTeam == null)
                return Forbid();

            // Retrieve the user to add from the UserManager
            var userToAdd = await _context.Users.FirstOrDefaultAsync(t => t.UserName == username);
            if (userToAdd == null)
                return NotFound();

            // Check if the user is already a member of the team
            var existingMember = team.TeamsMembers.FirstOrDefault(ut => ut.UsersId == userToAdd.Id);
            if (existingMember != null)
                return BadRequest("User is already a member of the team.");

            // Create a UserTeam entry for the user and add it to the team
            var userTeam = new TeamMembers { UsersId = userToAdd.Id, TeamsId = team.TeamsId };
            team.TeamsMembers.Add(userTeam);

            // Save the team to the database
            await _context.SaveChangesAsync();

            return StatusCode(201); 
        }

        [Authorize]
        [HttpGet("GetTeam/{teamId}")]
        public async Task<IActionResult> GetTeam(Guid teamId)
        {
            // Retrieve the team from the database including the associated users
            var team = await _context.Teams
                .Include(tt => tt.TeamsTasks)
                .Include(t => t.TeamsMembers)
                .ThenInclude(ut => ut.Users)
                .FirstOrDefaultAsync(t => t.TeamsId == teamId);


            if (team == null)
                return NotFound();

            var teamMembersIds = team.TeamsMembers.Select(ut => ut.UsersId).ToList();

            var users = await _context.Users
                .Where(u => teamMembersIds.Contains(u.Id))
                .ToListAsync();
            // Map the team to a response model
            var teamResponse = new TeamResponseModel
            {
                Name = team.Name,
                Description = team.Description,
                Users = users.Select(ut => new UsersResponseModel
                {
                    UsersId = ut.Id,
                    Name = ut.Name,
                    Surname = ut.Surname,
                    UserName = ut.UserName
                }).ToList(),
                TeamsTasks = team.TeamsTasks.Select(tt => new ResponseTaskModel
                {
                    TaskId = tt.TaskId,
                    Title = tt.Title,
                    Description = tt.Description,
                    Status = tt.Status
                }).ToList()
            };

            return Ok(teamResponse);
        }

        // DELETE: api/Teams/5
        [Authorize(Roles = "Client")]
        [HttpDelete("{teamId}")]
        public async Task<IActionResult> DeleteTeams(Guid teamId)
        {
            // Retrieve the team from the database
            var team = await _context.Teams.FindAsync(teamId);

            if (team == null)
                return NotFound();

            // Remove the team from the context
            _context.Teams.Remove(team);

            // Remove all UserTeam entries associated with the team
            var userTeams = _context.TeamMembers.Where(ut => ut.TeamsId == teamId);
            _context.TeamMembers.RemoveRange(userTeams);

            // Save the changes to the database
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [Authorize(Roles = "Client")]
        [HttpGet("GetTeamsOfCurrentUser")]
        public async Task<IActionResult> GetTeamsOfCurrentUser()
        {
            var currentUser = await _userManager.GetUserAsync(User);

            var teams = await _context.Teams.Where(t => t.TeamsMembers.Any(ut => ut.UsersId == currentUser.Id)).ToListAsync();

            return Ok(teams);
        }

        

        private bool TeamsExists(Guid id)
        {
            return _context.Teams.Any(e => e.TeamsId == id);
        }
    }
}
