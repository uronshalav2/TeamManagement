using System.ComponentModel.DataAnnotations;

namespace Tasks.Models
{
    public class TeamTasks
    {
        [Key]
        public Guid TaskId { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }

        [Required]
        public string Status { get; set; }

        public Guid TeamsId { get; set; }
        public Teams Teams { get; set; }
    }
}
