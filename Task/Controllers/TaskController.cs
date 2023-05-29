using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task.Models;

namespace Task.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TaskDBContext _taskDBContext;

        public TaskController(TaskDBContext taskDBContext)
        {
            _taskDBContext = taskDBContext;
        }
    }
}

