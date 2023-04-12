using Microsoft.VisualBasic;

namespace TeamManagement.Controllers.Models
{
    public class Comments
    {
        public int CommentId { get; set; }
        public int TaskId { get; set; }
        public int UserId { get; set; }
        public string CommentText { get; set; }
        
        public DateAndTime CommentDate { get; set; }
    }
}
