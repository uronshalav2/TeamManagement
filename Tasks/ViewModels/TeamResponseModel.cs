using Task.Models;
using Tasks.Models;

namespace Tasks.ViewModels
{
    public class TeamResponseModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public List<ResponseTaskModel> TeamsTasks { get; set; }
        public List<UsersResponseModel> Users { get; set; }
    }
}
