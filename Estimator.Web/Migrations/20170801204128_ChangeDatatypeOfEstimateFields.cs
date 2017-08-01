using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Estimator.Web.Migrations
{
    public partial class ChangeDatatypeOfEstimateFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "PessimisticEstimate",
                table: "Estimates",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<decimal>(
                name: "OptimisticEstimate",
                table: "Estimates",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<decimal>(
                name: "MostLikelyEstimate",
                table: "Estimates",
                nullable: false,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "PessimisticEstimate",
                table: "Estimates",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<int>(
                name: "OptimisticEstimate",
                table: "Estimates",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<int>(
                name: "MostLikelyEstimate",
                table: "Estimates",
                nullable: false,
                oldClrType: typeof(decimal));
        }
    }
}
