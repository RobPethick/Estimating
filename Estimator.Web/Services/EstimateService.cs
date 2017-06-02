using System;
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
    }
}
