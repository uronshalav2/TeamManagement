using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tasks.Migrations
{
    /// <inheritdoc />
    public partial class RelationShip : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "SuperAdmins_Admin",
                table: "SuperAdmins");

            migrationBuilder.CreateIndex(
                name: "IX_SuperAdmins_AdminId",
                table: "SuperAdmins",
                column: "AdminId");

            migrationBuilder.AddForeignKey(
                name: "SuperAdmins_Admin",
                table: "SuperAdmins",
                column: "AdminId",
                principalTable: "Admins",
                principalColumn: "AdminId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "SuperAdmins_Admin",
                table: "SuperAdmins");

            migrationBuilder.DropIndex(
                name: "IX_SuperAdmins_AdminId",
                table: "SuperAdmins");

            migrationBuilder.AddForeignKey(
                name: "SuperAdmins_Admin",
                table: "SuperAdmins",
                column: "SuperAdminId",
                principalTable: "Admins",
                principalColumn: "AdminId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
