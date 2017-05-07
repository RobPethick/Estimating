using Microsoft.AspNetCore.Mvc;
using skeleton.Models;

namespace skeleton.Controllers
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
