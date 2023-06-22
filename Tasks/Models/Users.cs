using System.ComponentModel.DataAnnotations;
using Tasks.Models;

namespace Task.Models
{
    public class Users
    {
        [Key]
        public Guid UsersId { get; set; }
        public virtual User User { get; set; }
        public ICollection<TeamMembers> TeamMembers { get; set; }
    }
}
