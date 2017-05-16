export class MetricModel{
    public name;
    public percentage;
    public defaultPercentage;
    public pertValue;
    public rateCode;

    constructor(name, percentage, rateCode){
        this.name = name;
        this.percentage = percentage;
        this.defaultPercentage = percentage;
        this.rateCode = rateCode;
    }

    get metricValue(){
        return this.percentage * this.pertValue / 100;
    } 

    get trimmedMetricValue(){
        return this.metricValue.toFixed(2);
    }
}