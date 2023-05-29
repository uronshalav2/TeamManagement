using System.ComponentModel.DataAnnotations;

namespace Task.Models
{
    public class TeamMembers
    {
        [Key]
        public int TeamMemberId { get; set; }

        public int TeamId { get; set; }

        public Teams Team { get; set; }

        public int UserId { get; set; }

        public Users User { get; set; }
    }
}
