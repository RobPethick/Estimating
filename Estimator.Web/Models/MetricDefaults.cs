using System;
using System.Collections.Generic;

namespace Estimator.Web.Models
{
    public class MetricDefaults
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Metric> Metrics { get; set; }
        public MetricDefaults(string name, IEnumerable<Metric> metrics)
        {
            this.Name = name;
            this.Metrics = metrics;
        }
    }
}