using Microsoft.AspNetCore.Mvc;
using estimator.Models;

namespace estimator.Controllers
{
    public class EstimateContoller : Controller
    {
        [Route("api/estimates")]
        public JsonResult Save()
        {
            return Json(12);
        }

    }
}
