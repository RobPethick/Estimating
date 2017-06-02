using Microsoft.AspNetCore.Mvc;
using Estimator.Web.Models;
using System;
using Estimator.Web.Services;

namespace Estimator.Web.Controllers
{
    public class EstimateContoller : Controller
    {
        private EstimateService estimateService;
        public EstimateContoller(EstimateService estimateService){
            this.estimateService = estimateService;
        }
        [Route("api/estimates")]
        public JsonResult Save([FromBody] Estimate estimate)
        {
            var id = estimateService.Save(estimate);
            return Json(id);
        }

    }
}
