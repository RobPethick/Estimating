import {RateTypeModel} from '../Models/RateTypeModel';

export class RateService{
    public getRateTypes(): Array<RateTypeModel>{
        return [ RateTypeModel.DevTest(), RateTypeModel.TechnicalConsultant(), RateTypeModel.LeadTechnicalConsultant(), 
                 RateTypeModel.ProjectManager()];
    }
}