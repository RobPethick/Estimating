using System;
using System.Collections.Generic;

namespace estimator.Models
{
    public class Customer
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Rate> Rates { get; set; }
    }
}