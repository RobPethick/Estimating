import {RateModel} from '../Models/RateModel';
import {CustomerModel} from '../Models/CustomerModel';

export class CustomerService{
    public getCustomers(){
        var rateA = new RateModel("DT", "Dev/Test", 100);
        var rateB = new RateModel("TC", "Technical Consultant", 200);
        var rateC = new RateModel("LTC", "Lead TC", 250);
        var rateD = new RateModel("PM", "Project Manager", 200);
        return [new CustomerModel("CustomerA", [rateA, rateB, rateC, rateD]), new CustomerModel("CustomerB", [rateA, rateB, rateC, rateD])];
    }
}