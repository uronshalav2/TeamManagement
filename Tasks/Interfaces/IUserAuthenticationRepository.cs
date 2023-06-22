using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Task.Models;
using Tasks.ViewModels;

namespace Tasks.Interfaces
{
    public interface IUserAuthenticationRepository
    {
        Task<IdentityResult> RegisterUserAsync(UsersModel userForRegistration);
        Task<bool> ValidateUserAsync(LoginModel loginDto);
        Task<string> CreateTokenAsync();
        Task<User> GetUser(ClaimsPrincipal principal);




    }
}
