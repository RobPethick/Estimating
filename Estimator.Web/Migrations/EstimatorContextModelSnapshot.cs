using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Estimator.Web.DataAccess;

namespace Estimator.Web.Migrations
{
    [DbContext(typeof(EstimatorContext))]
    partial class EstimatorContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Estimator.Web.Models.Customer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("Estimator.Web.Models.Estimate", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CustomerId");

                    b.Property<int>("MostLikelyEstimate");

                    b.Property<int>("OptimisticEstimate");

                    b.Property<int>("PessimisticEstimate");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.ToTable("Estimates");
                });

            modelBuilder.Entity("Estimator.Web.Models.Metric", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("DefaultPercentage");

                    b.Property<Guid?>("EstimateId");

                    b.Property<Guid?>("MetricDefaultsId");

                    b.Property<string>("Name");

                    b.Property<string>("RateCode");

                    b.HasKey("Id");

                    b.HasIndex("EstimateId");

                    b.HasIndex("MetricDefaultsId");

                    b.ToTable("Metrics");
                });

            modelBuilder.Entity("Estimator.Web.Models.MetricDefaults", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("MetricDefaults");
                });

            modelBuilder.Entity("Estimator.Web.Models.Rate", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code");

                    b.Property<Guid?>("CustomerId");

                    b.Property<double>("RatePerDay");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.ToTable("Rate");
                });

            modelBuilder.Entity("Estimator.Web.Models.Estimate", b =>
                {
                    b.HasOne("Estimator.Web.Models.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");
                });

            modelBuilder.Entity("Estimator.Web.Models.Metric", b =>
                {
                    b.HasOne("Estimator.Web.Models.Estimate")
                        .WithMany("Metrics")
                        .HasForeignKey("EstimateId");

                    b.HasOne("Estimator.Web.Models.MetricDefaults")
                        .WithMany("Metrics")
                        .HasForeignKey("MetricDefaultsId");
                });

            modelBuilder.Entity("Estimator.Web.Models.Rate", b =>
                {
                    b.HasOne("Estimator.Web.Models.Customer")
                        .WithMany("Rates")
                        .HasForeignKey("CustomerId");
                });
        }
    }
}
