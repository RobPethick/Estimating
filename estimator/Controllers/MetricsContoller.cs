using Microsoft.AspNetCore.Mvc;
using estimator.Models;

namespace estimator.Controllers
{
    public class MetricsContoller : Controller
    {
        public JsonResult Get()
        {
            var metricDefaults = new Metrics();
            return new JsonResult(metricDefaults);
        }

    }
}
