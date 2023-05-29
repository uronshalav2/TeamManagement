using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task.Models;

namespace Task.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly TaskDBContext _taskDBContext;

        public UserController(TaskDBContext taskDBContext)
        {
            _taskDBContext = taskDBContext;
        }
        [HttpGet]
        [Route("GetUsers")]
          
        public async Task<IEnumerable<Users>> GetUsers()
        {
            return await _taskDBContext.Users.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Users>> GetUserById(int id)
        {
            var user = await _taskDBContext.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpPost]
        [Route("AddUser")]
        
        public async Task<Users> AddUsers(Users objUsers)
        {
            _taskDBContext.Users.Add(objUsers);
            await _taskDBContext.SaveChangesAsync();
            return objUsers;
            
        }
        [HttpPatch]
        [Route("UpdateUser")]
        public async Task<Users>UpdateUsers(Users objUsers)
        {
            _taskDBContext.Entry(objUsers).State = EntityState.Modified;
            await _taskDBContext.SaveChangesAsync();
            return objUsers;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, Users updatedUser)
        {
            if (id != updatedUser.UserId)
            {
                return BadRequest();
            }

            _taskDBContext.Entry(updatedUser).State = EntityState.Modified;

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
        [Route("DeleteUser")]
        public bool DeleteUsers(int id) 
        {
            bool a = false;
            var users = _taskDBContext.Users.Find(id);
            if(users != null)
            {
                a = true;
                _taskDBContext.Entry(users).State = EntityState.Deleted;

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
