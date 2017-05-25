using Microsoft.AspNetCore.Mvc;
using estimator.Models;
using System;

namespace estimator.Controllers
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
