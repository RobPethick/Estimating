using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using estimator.DataAccess;

namespace estimator.Migrations
{
    [DbContext(typeof(EstimatorContext))]
    partial class EstimatorContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.3")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("estimator.Models.Customer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("estimator.Models.Metric", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("DefaultPercentage");

                    b.Property<Guid?>("MetricDefaultsId");

                    b.Property<string>("Name");

                    b.Property<string>("RateCode");

                    b.HasKey("Id");

                    b.HasIndex("MetricDefaultsId");

                    b.ToTable("Metrics");
                });

            modelBuilder.Entity("estimator.Models.MetricDefaults", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("MetricDefaults");
                });

            modelBuilder.Entity("estimator.Models.Rate", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code");

                    b.Property<Guid?>("CustomerId");

                    b.Property<double>("DailyRate");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.ToTable("Rate");
                });

            modelBuilder.Entity("estimator.Models.Metric", b =>
                {
                    b.HasOne("estimator.Models.MetricDefaults")
                        .WithMany("Metrics")
                        .HasForeignKey("MetricDefaultsId");
                });

            modelBuilder.Entity("estimator.Models.Rate", b =>
                {
                    b.HasOne("estimator.Models.Customer")
                        .WithMany("Rates")
                        .HasForeignKey("CustomerId");
                });
        }
    }
}
