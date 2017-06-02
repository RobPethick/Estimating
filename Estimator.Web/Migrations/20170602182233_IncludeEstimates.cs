using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Estimator.Web.Migrations
{
    public partial class IncludeEstimates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DailyRate",
                table: "Rate",
                newName: "RatePerDay");

            migrationBuilder.AddColumn<Guid>(
                name: "EstimateId",
                table: "Metrics",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Estimates",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CustomerId = table.Column<Guid>(nullable: true),
                    MostLikelyEstimate = table.Column<int>(nullable: false),
                    OptimisticEstimate = table.Column<int>(nullable: false),
                    PessimisticEstimate = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estimates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Estimates_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Metrics_EstimateId",
                table: "Metrics",
                column: "EstimateId");

            migrationBuilder.CreateIndex(
                name: "IX_Estimates_CustomerId",
                table: "Estimates",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Metrics_Estimates_EstimateId",
                table: "Metrics",
                column: "EstimateId",
                principalTable: "Estimates",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Metrics_Estimates_EstimateId",
                table: "Metrics");

            migrationBuilder.DropTable(
                name: "Estimates");

            migrationBuilder.DropIndex(
                name: "IX_Metrics_EstimateId",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "EstimateId",
                table: "Metrics");

            migrationBuilder.RenameColumn(
                name: "RatePerDay",
                table: "Rate",
                newName: "DailyRate");
        }
    }
}
