using Microsoft.AspNetCore.Mvc;
using estimator.web.Models;
using estimator.web.Services;

namespace estimator.web.Controllers
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
