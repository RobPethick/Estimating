import {MetricModel} from '../Models/MetricModel';
import {RateTypeModel} from '../Models/RateTypeModel';

export class RateModel{
    public rateType: RateTypeModel;
    public ratePerDay: number;
    public originalRatePerDay: number;
    public metricList: Array<MetricModel>;

    constructor(ratePerDay: number, code: string, rateType: RateTypeModel){
        if(rateType){
            this.rateType = rateType;
        }
        else{
            this.rateType = RateTypeModel.GetRateTypeModelFromCode(code);
        }
        this.rateType = RateTypeModel.GetRateTypeModelFromCode(code);
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
            if(metric.rateType == this.rateType.code){
                total += metric.metricValue;
            }
        })
        return total;
    }
}