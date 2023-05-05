using Microsoft.VisualBasic;

namespace TeamManagement.Models
{
    public class Tasks
    {
        public int TaskId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public DateAndTime DueDate { get; set; }
        public int TeamId { get; set; }
    }
}
