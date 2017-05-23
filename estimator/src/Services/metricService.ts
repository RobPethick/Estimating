import {MetricModel} from '../Models/MetricModel';
import {RateTypeModel} from '../Models/RateTypeModel';

export class MetricService{
    public getDefaultMetrics(): Array<MetricModel>{
        return [new MetricModel("Analysis", 90, RateTypeModel.DevTest()), new MetricModel("Testing", 90, RateTypeModel.DevTest())];
    }
}