export class RateTypeModel{
    public code: string;
    public name: string;
    constructor(code, name){
        this.code = code;
        this.name = name;
    }

    static DevTest(): RateTypeModel{
        return new RateTypeModel("DT", "Dev/Test");
    }
    
    static TechnicalConsultant(): RateTypeModel{
        return new RateTypeModel("TC", "Technical Consultant");
    }
    
    static LeadTechnicalConsultant(): RateTypeModel{
        return new RateTypeModel("LTC", "Lead Tech Consultant");
    }

    static ProjectManager(): RateTypeModel{
        return new RateTypeModel("PM", "Project Manager");
    }
}