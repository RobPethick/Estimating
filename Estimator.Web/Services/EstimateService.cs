using System;
using System.Threading.Tasks;
using Estimator.Web.DataAccess;
using Estimator.Web.Models;
using Microsoft.EntityFrameworkCore;

namespace Estimator.Web.Services
{
    public class EstimateService
    {
        private EstimatorContext context;
        public EstimateService(EstimatorContext context)
        {
            this.context = context;
        }

        public Guid Save(Estimate estimate)
        {
            context.Add(estimate);
            context.SaveChanges();
            return estimate.Id;
        }

        public async Task<Estimate> Get(Guid estimateId)
        {
            return await context.Estimates
                            .Include(e => e.Customer)
                            .Include(e=>e.Customer.Rates)
                            .Include(e => e.Metrics)
                            .SingleOrDefaultAsync(e => e.Id == estimateId);
        }
    }
}
