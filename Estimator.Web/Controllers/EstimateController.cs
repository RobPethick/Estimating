using Microsoft.AspNetCore.Mvc;
using Estimator.Web.Models;
using System;

namespace Estimator.Web.Controllers
{
    public class EstimateContoller : Controller
    {
        [Route("api/estimates")]
        public JsonResult Save([FromBody] Estimate json)
        {
            Console.WriteLine(json); 
            return Json(12);
        }

    }
}
