namespace TeamManagement.Models
{
    public class TaskAssignees
    {
        public int TaskAssigneeId { get; set; }
        public int TaskId { get; set; }
        public int UserId { get; set; }
    }
}
