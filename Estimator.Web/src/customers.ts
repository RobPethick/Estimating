import { CustomerModel } from './Models/CustomerModel';
import { CustomerService } from './Services/CustomerService';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Customers{
 
    private customers: Array<CustomerModel>;
    constructor(private customerService:CustomerService) {
        
    }
    
    async activate() {
        this.customers = await this.customerService.getCustomers();
    }
}