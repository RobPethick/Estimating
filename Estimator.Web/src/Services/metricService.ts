import { MetricModel } from '../Models/MetricModel';
import { RateTypeModel } from '../Models/RateTypeModel';
import { MetricDefaultsModel } from "../Models/metricDefaultsModel";
import { HttpClient } from "aurelia-fetch-client";

export class MetricService {
    public async getDefaultMetrics(): Promise<Array<MetricDefaultsModel>> {
        let httpClient = new HttpClient();
        httpClient.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('api/');
        });

        var response = await httpClient.fetch('metrics', { method: 'get' });
        var responseJson = await response.json();
        let metricDefaults = new Array<MetricDefaultsModel>();
        responseJson as Array<any>;
        responseJson.forEach(metricDefaultJson => {
            let metricDefault = new MetricDefaultsModel(metricDefaultJson.name, []);
            metricDefaultJson.metrics.forEach(metric => {
                metricDefault.metrics.push(new MetricModel(metric.name, metric.defaultPercentage, RateTypeModel.GetRateTypeModelFromCode(metric.rateCode)))
            });
            metricDefaults.push(metricDefault);
        });
        return metricDefaults;
    }
}