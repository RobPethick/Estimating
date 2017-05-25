export class RateTypeModel {
    public code: string;
    public name: string;
    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }

    static DevTest(): RateTypeModel {
        return new RateTypeModel("DT", "Dev/Test");
    }

    static TechnicalConsultant(): RateTypeModel {
        return new RateTypeModel("TC", "Technical Consultant");
    }

    static LeadTechnicalConsultant(): RateTypeModel {
        return new RateTypeModel("LTC", "Lead Tech Consultant");
    }

    static ProjectManager(): RateTypeModel {
        return new RateTypeModel("PM", "Project Manager");
    }

    static GetRateTypeModelFromCode(code: string): RateTypeModel {
        if (RateTypeModel.DevTest().code == code) {
            return RateTypeModel.DevTest();
        }
        if (RateTypeModel.TechnicalConsultant().code == code) {
            return RateTypeModel.TechnicalConsultant();
        }
        if (RateTypeModel.LeadTechnicalConsultant().code == code) {
            return RateTypeModel.LeadTechnicalConsultant();
        }
        if (RateTypeModel.ProjectManager().code == code) {
            return RateTypeModel.ProjectManager();
        }
    }
}