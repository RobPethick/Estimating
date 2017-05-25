using Microsoft.AspNetCore.Mvc;
using estimator.Models;
using System.Collections.Generic;

namespace estimator.Controllers
{
    public class MetricsContoller : Controller
    {
        [Route("api/metrics")]
        public JsonResult GetMetricDefaults()
        {
            var supportMetricList = new List<Metric>(){
                new Metric{Name = "Analysis", DefaultPercentage = 20, RateCode = "DT"},
                new Metric{Name = "Test", DefaultPercentage = 60, RateCode = "DT"},
                new Metric{Name = "Project Management", DefaultPercentage = 30, RateCode = "PM"}
            };
            var supportMetricDefaults = new MetricDefaults("Support", supportMetricList);

            
            var projectMetricList = new List<Metric>(){
                new Metric{Name = "Analysis", DefaultPercentage = 20, RateCode = "DT"},
                new Metric{Name = "Test", DefaultPercentage = 60, RateCode = "DT"},
                new Metric{Name = "Project Management", DefaultPercentage = 30, RateCode = "PM"}
            };
            var projectMetricDefaults = new MetricDefaults("Project", projectMetricList);
            return Json(new []{supportMetricDefaults, projectMetricDefaults});
        }

    }
}
