﻿using Microsoft.AspNetCore.Mvc;
using Estimator.Web.Models;
using System.Collections.Generic;
using Estimator.Web;
using Estimator.Web.Services;

namespace Estimator.Web.Controllers
{
    public class MetricsContoller : Controller
    {
        [Route("api/metrics")]
        public JsonResult GetMetricDefaults()
        {
            var service = new MetricsService();
            var supportMetricList = new List<Metric>(){
                new Metric{Name = "Analysis", DefaultPercentage = 20, RateCode = "DT"},
                new Metric{Name = "Test", DefaultPercentage = 60, RateCode = "DT"},
                new Metric{Name = "CodeReview", DefaultPercentage = 30, RateCode = "DT"},
                new Metric{Name = "Project Management", DefaultPercentage = 30, RateCode = "PM"}
            };
            var supportMetricDefaults = new MetricDefaults("Sprint Story", supportMetricList);

            
            var projectMetricList = new List<Metric>(){
                new Metric{Name = "Analysis", DefaultPercentage = 20, RateCode = "DT"},
                new Metric{Name = "Test", DefaultPercentage = 60, RateCode = "DT"},
                new Metric{Name = "Project Management", DefaultPercentage = 30, RateCode = "PM"}
            };
            var projectMetricDefaults = new MetricDefaults("Support IR", projectMetricList);
            return Json(new []{supportMetricDefaults, projectMetricDefaults});
        }

    }
}
