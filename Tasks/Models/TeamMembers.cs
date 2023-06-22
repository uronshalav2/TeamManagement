using Task.Models;

namespace Tasks.Models
{
    public class TeamMembers
    {
        public Guid TeamsId { get; set; }
        public Teams Teams { get; set; }
        public Guid UsersId { get; set; }
        public Users Users { get; set; }

    }
}
