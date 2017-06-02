using System;
using System.Collections.Generic;

namespace Estimator.Web.Models
{
    public class Estimate
    {
        public Guid Id {get; set;}
        public int OptimisticEstimate { get; set; }
        public int MostLikelyEstimate {get;set;}
        public int PessimisticEstimate { get; set; }
        public Customer Customer {get ; set;}
        public IEnumerable<Metric> Metrics {get ; set;}
    }
}