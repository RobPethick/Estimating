import { RateModel } from '../Models/RateModel';
import { CustomerModel } from '../Models/CustomerModel';
import { RateTypeModel } from '../Models/RateTypeModel';
import { HttpClient, HttpClientConfiguration, json } from 'aurelia-fetch-client';

export class CustomerService {
    public getCustomers(): Promise<Array<CustomerModel>> {
        let httpClient = new HttpClient();
        httpClient.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('api/');
        });

        return httpClient.fetch('customers', { method: 'get' })
            .then(response => response.json())
            .then(responseJson => {
                let customers = new Array<CustomerModel>();
                responseJson as Array<any>;
                responseJson.forEach(customerJson => {
                    let customer = new CustomerModel(customerJson.name, []);
                    customerJson.rates.forEach(rate => {
                        customer.rates.push(new RateModel(rate.dailyRate, rate.code, null))
                    });
                    customers.push(customer);
                });
                return customers;
            });
    }
}