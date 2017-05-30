using System;

namespace estimator.web.Models
{
    public class Metric
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double DefaultPercentage { get; set; }
        public string RateCode{ get; set; }
    }
}