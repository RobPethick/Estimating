import {MetricModel} from '../Models/MetricModel';
import {RateTypeModel} from '../Models/RateTypeModel';

export class MetricService{
    public getDefaultMetrics(){
        return [new MetricModel("Analysis", 90, new RateTypeModel("DT", "Dev/Test")), new MetricModel("Testing", 90, new RateTypeModel("DT", "Dev/Test"))];
    }
}