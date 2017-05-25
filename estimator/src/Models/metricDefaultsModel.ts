import { MetricModel } from "./metricModel";

export class MetricDefaultsModel {
    public name: string;
    public metrics: Array<MetricModel>;

    constructor(name: string, metrics: Array<MetricModel>){
        this.name = name;
        this.metrics = metrics;
    }
}