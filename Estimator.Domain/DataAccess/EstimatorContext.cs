using Estimator.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Estimator.Domain.DataAccess{
    public class EstimatorContext: DbContext{
        
        public EstimatorContext(DbContextOptions<EstimatorContext> options): base(options){}
        public EstimatorContext(){}
        public DbSet<Customer> Customers{get; set;}
        public DbSet<Metric> Metrics{get; set;}
        public DbSet<MetricDefaults> MetricDefaults{get; set;}
    }
}