import {MetricModel} from '../Models/MetricModel';


export class MetricService{
    public getDefaultMetrics(){
        return [new MetricModel("Analysis", 90), new MetricModel("Testing", 90)]
    }
}