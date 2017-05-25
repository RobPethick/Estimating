import {MetricModel} from '../Models/MetricModel';
import {RateTypeModel} from '../Models/RateTypeModel';
import { MetricDefaultsModel } from "../Models/metricDefaultsModel";

export class MetricService{
    public getDefaultMetrics(): Array<MetricDefaultsModel>{
        var metricDefaultA = new MetricDefaultsModel("Sprint story", [new MetricModel("Analysis", 40, RateTypeModel.DevTest()), new MetricModel("Testing", 40, RateTypeModel.DevTest())])
        var metricDefaultB = new MetricDefaultsModel("Support IR", [new MetricModel("Analysis", 30, RateTypeModel.DevTest()), new MetricModel("Testing", 60, RateTypeModel.DevTest()), new MetricModel("ProjectManagement", 60, RateTypeModel.ProjectManager())])
        return [metricDefaultA, metricDefaultB];
    }
}