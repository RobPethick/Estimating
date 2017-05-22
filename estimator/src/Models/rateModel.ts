import {MetricModel} from '../Models/MetricModel';
import {RateTypeModel} from '../Models/RateTypeModel';

export class RateModel{
    public rateType: RateTypeModel;
    public ratePerDay: number;
    public originalRatePerDay: number;
    public metricList: Array<MetricModel>;

    constructor(code, name, ratePerDay){
        this.rateType = new RateTypeModel(code, name);
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
            if(metric.rateCode == this.rateType.code){
                total += metric.metricValue;
            }
        })
        return total;
    }
}