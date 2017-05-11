export class MetricModel{
    public name;
    public percentage;
    public pertValue;

    constructor(name, percentage){
        this.name = name;
        this.percentage = percentage;
    }

    get metricValue(){
        return this.percentage * this.pertValue / 100;
    } 
}