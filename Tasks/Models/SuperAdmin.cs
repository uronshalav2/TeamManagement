using System.ComponentModel.DataAnnotations;

namespace Task.Models
{
    public class SuperAdmin
    {
        [Key]
        public Guid SuperAdminId { get; set; }
        public virtual User User { get; set; }
    }
}
