using Microsoft.AspNetCore.Mvc;
using Estimator.Web.Models;
using System;
using Estimator.Web.Services;
using System.Threading.Tasks;

namespace Estimator.Web.Controllers
{
    public class EstimateContoller : Controller
    {
        private EstimateService estimateService;
        public EstimateContoller(EstimateService estimateService){
            this.estimateService = estimateService;
        }

        [HttpGet]
        [Route("api/estimates")]
        public async Task<JsonResult> Get(Guid id)
        {
            var estimate = await estimateService.Get(id);
            return Json(estimate);
        }

        [HttpPost]
        [Route("api/estimates")]
        public JsonResult Post([FromBody] Estimate estimate)
        {
            var id = estimateService.Save(estimate);
            return Json(id);
        }

    }
}
