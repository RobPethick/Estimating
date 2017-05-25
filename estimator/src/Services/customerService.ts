import { RateModel } from '../Models/RateModel';
import { CustomerModel } from '../Models/CustomerModel';
import { RateTypeModel } from '../Models/RateTypeModel';

export class CustomerService {
    public getCustomers(): Array<CustomerModel> {
        var rateA = new RateModel(100, null, RateTypeModel.DevTest());
        var rateB = new RateModel(200, null, RateTypeModel.TechnicalConsultant());
        var rateC = new RateModel(250, null, RateTypeModel.LeadTechnicalConsultant());
        var rateD = new RateModel(200, null, RateTypeModel.ProjectManager());
        return [new CustomerModel("CustomerA", [rateA, rateB, rateC, rateD]), new CustomerModel("CustomerB", [rateA, rateB, rateC, rateD])];
    }
}