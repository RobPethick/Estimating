import { RateTypeModel } from "./rateTypeModel";

export class MetricModel {
    public name: string;
    public percentage: number;
    public defaultPercentage:number;
    public pertValue;
    public rateType;

    constructor(name: string, percentage: number, rateType: RateTypeModel){
        this.name = name;
        this.percentage = percentage;
        this.defaultPercentage = percentage;
        this.rateType = rateType;
    }

    get metricValue(){
        return this.percentage * this.pertValue / 100;
    } 

    get trimmedMetricValue(){
        return this.metricValue.toFixed(2);
    }
}