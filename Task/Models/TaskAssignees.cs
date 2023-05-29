using System.ComponentModel.DataAnnotations;

namespace Task.Models
{
    public class TaskAssignees
    {
        [Key]
        public int TaskAssigneeId { get; set; }

        public int TaskId { get; set; }

        public Tasks Task { get; set; }

        public int UserId { get; set; }

        public Users User { get; set; }
    }
}
