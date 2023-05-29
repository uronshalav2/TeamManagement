using System.ComponentModel.DataAnnotations;

namespace Task.Models
{
    public class Teams
    {
        [Key]
        public int TeamId { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public ICollection<Users> Members { get; set; }
    }
}
