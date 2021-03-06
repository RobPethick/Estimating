using System;
using System.Collections.Generic;

namespace Estimator.Web.Models
{
    public class Customer
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Rate> Rates { get; set; }
    }
}