import {MetricModel} from '../Models/MetricModel';

export class MetricService{
    public getDefaultMetrics(){
        return [new MetricModel("Analysis", 90, "DT"), new MetricModel("Testing", 90, "DT")];
    }
}