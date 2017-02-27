using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Code.Controllers
{
    [Route("api/[controller]")]
    public class MetricsController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Metric> Get()
        {
            return new Metric[] { 
                new Metric(){Description = "Analysis", Default = 20, Order = -1}, 
                new Metric(){Description = "Testing", Default = 50, Order = 1}};
        }
    }
}
