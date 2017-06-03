import { RateTypeModel } from "./rateTypeModel";

export class MetricModel {
    public name: string;
    public percentage: number;
    public defaultPercentage: number;
    public pertValue: number;
    public rateCode: string;

    constructor(name: string, percentage: number, rateType: RateTypeModel) {
        this.name = name;
        this.percentage = percentage;
        this.defaultPercentage = percentage;
        this.rateCode = rateType.code;
    }
    
    get rateType(): RateTypeModel{
        return RateTypeModel.GetRateTypeModelFromCode(this.rateCode);
    }

    set rateType(rateType: RateTypeModel){
        this.rateCode = rateType.code;
    }


    get metricValue(): number {
        return this.percentage * this.pertValue / 100;
    }

    get trimmedMetricValue(): string {
        return this.metricValue.toFixed(2);
    }
}