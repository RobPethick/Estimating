import {MetricModel} from '../Models/MetricModel';

export class RateModel{
    public code;
    public name;
    public ratePerDay;
    public originalRatePerDay;
    public metricList = new Array<MetricModel>();

    constructor(code, name, ratePerDay){
        this.code = code;
        this.name = name;
        this.ratePerDay = ratePerDay;
        this.originalRatePerDay = ratePerDay;
    }

    get ratePerHour(){
        return this.ratePerDay / 7;
    }

    get ratePerHourText(){
        return this.ratePerHour.toFixed();
    }

    public resetRate(){
        this.ratePerDay = this.originalRatePerDay;
    }

    get hoursOnRate(){
        var total = 0;
        this.metricList.forEach(metric =>{
            if(metric.rateCode == this.code){
                total += metric.metricValue;
            }
        })
        return total;
    }
}