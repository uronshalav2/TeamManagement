using System;
using System.ComponentModel.DataAnnotations;

namespace TeamManagement.Models
{
    public class Teams
    {
        public int TeamId { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public string Description { get; set; } = string.Empty;
    }
}
