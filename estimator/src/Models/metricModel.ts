export class MetricModel{
    public name;
    public percentage;
    public defaultPercentage;
    public pertValue;

    constructor(name, percentage){
        this.name = name;
        this.percentage = percentage;
        this.defaultPercentage = percentage;
    }

    get metricValue(){
        return this.percentage * this.pertValue / 100;
    } 
}