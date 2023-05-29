using System.ComponentModel.DataAnnotations;

namespace Task.Models
{
    public class Comments
    {
        [Key]
        public int CommentId { get; set; }

        [Required]
        public string Content { get; set; }

        public DateTime CreatedAt { get; set; }

        public int UserId { get; set; }

        public Users User { get; set; }

        public int TaskId { get; set; }

        public Tasks Task { get; set; }
    }
}
