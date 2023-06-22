using System.ComponentModel.DataAnnotations;

namespace Tasks.Models
{
    public class Teams
    {
        [Key]
        public Guid TeamsId { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<TeamMembers> TeamsMembers { get; set; }
        public ICollection<TeamTasks> TeamsTasks { get; set; }

    }
}
