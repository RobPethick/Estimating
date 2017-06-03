using System.Collections.Generic;
using Estimator.Web.Models;

namespace Estimator.Web.ApplicationServices{
    public class CustomerApplicationService{
        public IEnumerable<Customer> GetAllCustomers(){
            var ratesA = new List<Rate>() { new Rate { RateCode = "DT", RatePerDay = 200 }, new Rate { RateCode = "TC", RatePerDay = 300 }, new Rate { RateCode = "LTC", RatePerDay = 400 }, new Rate { RateCode = "PM", RatePerDay = 350 } };
            var ratesB = new List<Rate>() { new Rate { RateCode = "DT", RatePerDay = 2000 }, new Rate { RateCode = "TC", RatePerDay = 3000 }, new Rate { RateCode = "LTC", RatePerDay = 4000 }, new Rate { RateCode = "PM", RatePerDay = 3500 } };
            
            return new List<Customer>(){new Customer{ Name="Rob", Rates = ratesA}, new Customer{ Name="Bob", Rates= ratesB}};
        }
    }
}