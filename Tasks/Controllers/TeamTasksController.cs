using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task.Models;
using Tasks.Migrations;
using Tasks.Models;
using Tasks.ViewModels;

namespace Tasks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamTasksController : ControllerBase
    {
        private readonly TaskDBContext _context;

        public TeamTasksController(TaskDBContext context)
        {
            _context = context;
        }

        // GET: api/TeamTasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeamTasks>>> GetTeamTasks()
        {
            return await _context.TeamTasks.ToListAsync();
        }

        // GET: api/TeamTasks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TeamTasks>> GetTeamTasks(Guid id)
        {
            var teamTasks = await _context.TeamTasks.FindAsync(id);

            if (teamTasks == null)
            {
                return NotFound();
            }

            return teamTasks;
        }

        // PUT: api/TeamTasks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeamTasks(Guid id, TaskModel teamTasks)
        {
            var task = await _context.TeamTasks.FindAsync(id);

            // Check if the task exists
            if (task == null)
                return NotFound();

            // Update the task properties
            task.Title = teamTasks.Title;
            task.Description = teamTasks.Description;
            task.Status = teamTasks.Status;

            try
            {
                // Save the changes to the database
                await _context.SaveChangesAsync();
                return Ok(task);
            }
            catch (Exception)
            {
                // Handle any errors that occurred during the update process
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        // POST: api/TeamTasks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TeamTasks>> PostTeamTasks(Guid teamId , TaskModel teamTasks)
        {
            var team = await _context.Teams.FindAsync(teamId);

            if (team == null)
                return NotFound();

            // Create a new TeamTask entity
            var task = new TeamTasks
            {
                Title = teamTasks.Title,
                Description = teamTasks.Description,
                Status = teamTasks.Status,
                TeamsId = teamId
            };

            // Add the task to the team
            _context.TeamTasks.Add(task);

            // Save the changes to the database
            await _context.SaveChangesAsync();

            return Ok(task);
        }

        // DELETE: api/TeamTasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeamTasks(Guid id)
        {
            var teamTasks = await _context.TeamTasks.FindAsync(id);
            if (teamTasks == null)
            {
                return NotFound();
            }

            _context.TeamTasks.Remove(teamTasks);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
