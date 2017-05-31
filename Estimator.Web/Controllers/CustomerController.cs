using Microsoft.AspNetCore.Mvc;
using Estimator.Web.Models;
using Estimator.Web.Services;

namespace Estimator.Web.Controllers
{
    public class CustomerContoller : Controller
    {
        private CustomerService customerService;
        public CustomerContoller(CustomerService customerService){
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
