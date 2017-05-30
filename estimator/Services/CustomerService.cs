using System.Collections.Generic;
using estimator.web.Models;

namespace estimator.web.Services
{

    public class CustomerService
    {

        public IEnumerable<Customer> GetAllCustomers()
        {
            var ratesA = new List<Rate>() { new Rate { Code = "DT", DailyRate = 200 }, new Rate { Code = "TC", DailyRate = 300 }, new Rate { Code = "LTC", DailyRate = 400 }, new Rate { Code = "PM", DailyRate = 350 } };
            var ratesB = new List<Rate>() { new Rate { Code = "DT", DailyRate = 2000 }, new Rate { Code = "TC", DailyRate = 3000 }, new Rate { Code = "LTC", DailyRate = 4000 }, new Rate { Code = "PM", DailyRate = 3500 } };
            
            return new List<Customer>(){new Customer{ Name="Rob", Rates = ratesA}, new Customer{ Name="Bob", Rates= ratesB}};
        }
    }
}