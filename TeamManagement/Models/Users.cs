using System.ComponentModel.DataAnnotations;

namespace TeamManagement.Models
{
    public class Users
    {
        public int UserId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

        public string Access { get; set; }
    }
}
