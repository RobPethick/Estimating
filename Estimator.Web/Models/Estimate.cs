using System;
using System.Collections.Generic;

namespace Estimator.Web.Models
{
    public class Estimate
    {
        public Guid Id {get; set;}
        public decimal OptimisticEstimate { get; set; }
        public decimal MostLikelyEstimate {get;set;}
        public decimal PessimisticEstimate { get; set; }
        public Customer Customer {get ; set;}
        public IEnumerable<Metric> Metrics {get ; set;}
    }
}