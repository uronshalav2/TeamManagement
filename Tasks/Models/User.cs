
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Task.Models
{
    public class User : IdentityUser<Guid>
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        [StringLength(100)]
        public string Surname { get; set; }
        public virtual SuperAdmin SuperAdmin { get; set; }
        public virtual Users Users { get; set; }
    }
}

