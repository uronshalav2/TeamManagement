using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TeamManagement.Models
{
    public class TaskDBContext : DbContext
    {
        public TaskDBContext(DbContextOptions<TaskDBContext> options) : base(options)
        {
        }

        public DbSet<Users> Users { get; set; }
        public DbSet<Teams> Teams { get; set; }
        public DbSet<TeamMembers> TeamMembers { get; set; }
        public DbSet<Tasks> Tasks { get; set; }
        public DbSet<TaskAssignees> TaskAssignees { get; set; }
        public DbSet<Comments> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>().ToTable("Users");
            modelBuilder.Entity<Teams>().ToTable("Teams");
            modelBuilder.Entity<TeamMembers>().ToTable("TeamMembers");
            modelBuilder.Entity<Tasks>().ToTable("Tasks");
            modelBuilder.Entity<TaskAssignees>().ToTable("TaskAssignees");
            modelBuilder.Entity<Comments>().ToTable("Comments");
        }
    }
}