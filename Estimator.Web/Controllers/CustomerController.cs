using Microsoft.AspNetCore.Mvc;
using Estimator.Domain.Models;
using Estimator.Web.ApplicationServices;

namespace Estimator.Web.Controllers
{
    public class CustomerContoller : Controller
    {
        private CustomerApplicationService customerService;
        public CustomerContoller(CustomerApplicationService customerService){
            this.customerService = customerService;
        }

        [Route("api/customers")]
        public JsonResult Get()
        {
            var customers = customerService.GetAllCustomers();
            return Json(customers);
        }

    }
}
