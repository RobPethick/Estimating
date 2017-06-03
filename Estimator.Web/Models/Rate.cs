using System;

namespace Estimator.Web.Models{
    public class Rate{
        public Guid Id { get; set; }
        public string RateCode { get; set; } 
        public double RatePerDay { get; set; }
    }
}