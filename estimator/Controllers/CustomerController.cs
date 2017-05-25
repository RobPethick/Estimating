﻿using Microsoft.AspNetCore.Mvc;
using estimator.Models;
using estimator.Services;

namespace estimator.Controllers
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
