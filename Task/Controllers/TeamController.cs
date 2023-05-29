using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task.Models;

namespace Task.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private readonly TaskDBContext _taskDBContext;

        public TeamsController(TaskDBContext taskDBContext)
        {
            _taskDBContext = taskDBContext;
        }
        [HttpGet]
        [Route("GetTeams")]

        public async Task<IEnumerable<Teams>> GetTeams()
        {
            return await _taskDBContext.Teams.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Teams>> GetTeamById(int id)
        {
            var team = await _taskDBContext.Teams.FindAsync(id);

            if (team == null)
            {
                return NotFound();
            }

            return team;
        }

        [HttpPost]
        [Route("AddTeam")]

        public async Task<Teams> AddTeams(Teams objTeams)
        {
            _taskDBContext.Teams.Add(objTeams);
            await _taskDBContext.SaveChangesAsync();
            return objTeams;

        }
        [HttpPatch]
        [Route("UpdateTeam")]
        public async Task<Teams> UpdateTeams(Teams objTeams)
        {
            _taskDBContext.Entry(objTeams).State = EntityState.Modified;
            await _taskDBContext.SaveChangesAsync();
            return objTeams;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTeam(int id, Teams updatedTeam)
        {
            if (id != updatedTeam.TeamId)
            {
                return BadRequest();
            }

            _taskDBContext.Entry(updatedTeam).State = EntityState.Modified;

            try
            {
                await _taskDBContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }

            return NoContent();
        }
        [HttpDelete]
        [Route("DeleteTeam/{id}")]
        public bool DeleteTeams(int id)
        {
            bool a = false;
            var Teams = _taskDBContext.Teams.Find(id);
            if (Teams != null)
            {
                a = true;
                _taskDBContext.Entry(Teams).State = EntityState.Deleted;

                _taskDBContext.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;
        }

    }
}
