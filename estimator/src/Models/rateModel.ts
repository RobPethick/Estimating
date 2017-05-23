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
        this.ratePerDay = ratePerDay;
        this.originalRatePerDay = ratePerDay;
    }

    get ratePerHour(): number{
        return this.ratePerDay / 7;
    }

    get ratePerHourText(): string{
        return this.ratePerHour.toFixed();
    }

    public resetRate(): void{
        this.ratePerDay = this.originalRatePerDay;
    }

    get hoursOnRateText(): string{
        return this.hoursOnRate.toFixed(2);
    }

    get hoursOnRate(): number{
        var total = 0;
        this.metricList.forEach(metric =>{
            if(metric.rateType.code == this.rateType.code){
                total += metric.metricValue;
            }
        })
        return total;
    }

    get cost(){
        return this.hoursOnRate * this.ratePerHour;
    }

    get costText(){
        return this.cost.toFixed();
    }
}