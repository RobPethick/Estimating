using System.Collections.Generic;

namespace estimator.Models
{
    public class Customer
    {
        public string Name { get; set; }
        public IEnumerable<Rate> Rates { get; set; }
    }
}