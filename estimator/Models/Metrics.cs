using System.Collections.Generic;

namespace estimator.Models
{
    internal class MetricDefaults
    {
        public string Name;
        public IEnumerable<Metric> Metrics;
        public MetricDefaults(string name, IEnumerable<Metric> metrics)
        {
            this.Name = name;
            this.Metrics = metrics;
        }
    }
}