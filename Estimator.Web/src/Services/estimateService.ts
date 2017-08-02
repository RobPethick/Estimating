import { HttpClient, HttpClientConfiguration, json } from 'aurelia-fetch-client';
import { EstimateModel } from "../Models/estimateModel";
import { MetricModel } from "../Models/MetricModel";
import { RateTypeModel } from "../Models/rateTypeModel";
import { CustomerModel } from "../Models/CustomerModel";
import { RateModel } from "../Models/RateModel";

export class EstimateService {
    public async Save(estimate: EstimateModel): Promise<string> {
        let httpClient = new HttpClient();
        httpClient.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('api/');
        });

        let response = await httpClient.fetch('estimates',
            {
                method: 'post',
                body: json(estimate )
            })
        let responseJson = await response.json();
        return responseJson as string;
    }

    public async Get(estimateId: string): Promise<EstimateModel> {
        let httpClient = new HttpClient();
        httpClient.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('api/');
        });

        let result = await httpClient.fetch('estimates/?id=' + estimateId, {method: 'get'});
        let responseJson = await result.json();
        
        let estimate = new EstimateModel();
        estimate.id = responseJson.id;
        estimate.optimisticEstimate = responseJson.optimisticEstimate;
        estimate.mostLikelyEstimate = responseJson.mostLikelyEstimate;
        estimate.pessimisticEstimate = responseJson.pessimisticEstimate;
        estimate.metrics = new Array<MetricModel>();
        responseJson.metrics.forEach(metricJson => {
            let metric = new MetricModel(metricJson.name, metricJson.percentage, RateTypeModel.GetRateTypeModelFromCode(metricJson.rateCode));
            metric.pertValue = estimate.pertEstimate;
            metric.id = metricJson.id;
            estimate.metrics.push(metric);
        });
        let rates = new Array<RateModel>();
        responseJson.customer.rates.forEach(rateJson => {
            let rate = new RateModel(rateJson.ratePerDay, rateJson.rateCode, null);
            rate.metricList = estimate.metrics;
            rates.push(rate);
        });
        estimate.customer = new CustomerModel(responseJson.customer.name, rates);
        estimate.customer.id = responseJson.customer.id;
        return estimate;            

    }

}