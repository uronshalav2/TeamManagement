using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task.Models;
using Tasks.ViewModels;
using System.Threading.Tasks;
using IdentitySignInResult = Microsoft.AspNetCore.Identity.SignInResult;
using TaskNet = System.Threading.Tasks.Task;
using Tasks.Interfaces;
using System.Security.Claims;

namespace Tasks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {

        private readonly TaskDBContext _context;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IMapper _mapper;
        private readonly IUserAuthenticationRepository _userAuth;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UsersController(TaskDBContext context, IUserAuthenticationRepository userAuth, UserManager<User> userManager, SignInManager<User> signInManager, IMapper mapprer, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapprer;
            _userAuth = userAuth;
            _httpContextAccessor = httpContextAccessor;
        }



        [HttpPost]
        public async Task<IdentityResult> RegisterClient(UsersModel users)
        {
            await using var transaction = await _context.Database.BeginTransactionAsync();
            var user = _mapper.Map<User>(users);
            user.Id = Guid.NewGuid();
            var clients = _mapper.Map<Users>(users);

            try
            {
                var result = await _userManager.CreateAsync(user, users.Password);
                if (!result.Succeeded) return result;
                var addToRoleResult = await _userManager.AddToRoleAsync(user, "Client");
                if (addToRoleResult.Succeeded)
                {
                    clients.UsersId = user.Id;
                    await _context.Userss.AddAsync(clients);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    await _signInManager.SignInAsync(user, isPersistent: false);
                }
                else
                    return addToRoleResult;
                return result;


            }
            catch (Exception)
            {
                await transaction.RollbackAsync();
                return IdentityResult.Failed();
            }

        }

        [Authorize(Roles = "SuperAdmin")]
        [HttpPost("RegisterSuperAdmin")]
        public async Task<IdentityResult> RegisterSuperAdmin(SuperAdminModel users)
        {
            await using var transaction = await _context.Database.BeginTransactionAsync();
            var user = _mapper.Map<User>(users);
            user.Id = Guid.NewGuid();
            var admin = _mapper.Map<SuperAdmin>(users);

            try
            {
                var result = await _userManager.CreateAsync(user, users.Password);
                if (!result.Succeeded) return result;
                var addToRoleResult = await _userManager.AddToRoleAsync(user, "SuperAdmin");
                if (addToRoleResult.Succeeded)
                {
                    admin.SuperAdminId = user.Id;
                    await _context.SuperAdmins.AddAsync(admin);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    await _signInManager.SignInAsync(user, isPersistent: false);
                }
                else
                    return addToRoleResult;
                return result;


            }
            catch (Exception)
            {
                await transaction.RollbackAsync();
                return IdentityResult.Failed();
            }

        }

        [Authorize(Roles = "SuperAdmin")]
        [HttpGet("GetAllUsers")]
        public async Task<IEnumerable<UsersResponseModel>> GetAllUsers()
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var users = await _context.Users.Where(u => u.Id != currentUser.Id).ToListAsync();
            var user = users.Select(ut => new UsersResponseModel
            {
                UsersId = ut.Id,
                Name = ut.Name,
                Surname = ut.Surname,
                UserName = ut.UserName
            }).ToList();

            return user;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Authenticate([FromBody] LoginModel user)
        {
            return !await _userAuth.ValidateUserAsync(user)
                ? Unauthorized()
                : Ok(new { Token = await _userAuth.CreateTokenAsync() });
        }

        [Authorize]
        [HttpPost("Logout")]
        public async TaskNet Logout() { 
            await _signInManager.SignOutAsync();
        }

        [Authorize]
        [HttpGet("GetCurrentUser")]
        public async Task<User> GetUser()
        {
            return await _userManager.GetUserAsync(_httpContextAccessor.HttpContext?.User);
        }
    }
}
