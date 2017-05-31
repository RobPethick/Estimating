using Microsoft.AspNetCore.Mvc;
using Estimator.Web.Models;
using System;

namespace Estimator.Web.Controllers
{
    public class EstimateContoller : Controller
    {
        [Route("api/estimates")]
        public JsonResult Save(dynamic json)
        {
            Console.WriteLine(json);
            json.toString();
            return Json(12);
        }

    }
}
