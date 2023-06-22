using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Task.Models;
using Tasks.Models;

namespace Task.Models
{
    public class TaskDBContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
    {
        public TaskDBContext(DbContextOptions<TaskDBContext> options) : base(options)
        {
        }

        public DbSet<SuperAdmin> SuperAdmins { get; set; }
        public DbSet<Users> Userss { get; set; }
        public DbSet<Teams> Teams { get; set; }
        public DbSet<TeamMembers> TeamMembers { get; set; }
        public DbSet<TeamTasks> TeamTasks { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<TeamMembers>().HasKey(x => new { x.UsersId, x.TeamsId });

            builder.Entity<Users>(d =>
            {
                d.HasOne(u => u.User)
                .WithOne(c => c.Users)
                .HasForeignKey<Users>(c => c.UsersId)
                .HasConstraintName("Users_User")
                .OnDelete(DeleteBehavior.Cascade);

            });

            builder.Entity<SuperAdmin>(ms =>
            {
                ms.HasOne(d => d.User)
               .WithOne(p => p.SuperAdmin)
               .HasForeignKey<SuperAdmin>(d => d.SuperAdminId)
               .HasConstraintName("User_SuperAdmin")
               .OnDelete(DeleteBehavior.Cascade);

            });

        }

    }
}