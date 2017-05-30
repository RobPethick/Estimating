using Microsoft.AspNetCore.Mvc;
using estimator.web.Models;
using System;

namespace estimator.web.Controllers
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
