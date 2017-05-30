using System;

namespace estimator.web.Models{
    public class Rate{
        public Guid Id { get; set; }
        public string Code { get; set; }
        public double DailyRate { get; set; }
    }
}