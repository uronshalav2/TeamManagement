using AutoMapper;
using Task.Models;
using Tasks.Models;
using Tasks.ViewModels;

namespace Tasks.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UsersModel, Users>();
            CreateMap<UsersModel, User>();
            CreateMap<SuperAdminModel, SuperAdmin>();
            CreateMap<SuperAdminModel, User>();
            CreateMap<TeamModel, Teams>();
            CreateMap<TeamResponseModel, Teams>();
        }
    }
}
