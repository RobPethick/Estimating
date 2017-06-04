import { HttpClient, HttpClientConfiguration, json } from 'aurelia-fetch-client';
import { EstimateModel } from "../Models/estimateModel";
import { MetricModel } from "../Models/MetricModel";
import { RateTypeModel } from "../Models/rateTypeModel";
import { CustomerModel } from "../Models/CustomerModel";
import { RateModel } from "../Models/RateModel";

export class EstimateService {
    public Save(estimate: EstimateModel): Promise<string> {
        let httpClient = new HttpClient();
        httpClient.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('api/');
        });

        return httpClient.fetch('estimates',
            {
                method: 'post',
                body: json(estimate )
            })
            .then(response => response.json()).then(responseJson => responseJson as string);
    }

    public Get(estimateId: string): Promise<EstimateModel> {
        let httpClient = new HttpClient();
        httpClient.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('api/');
        });

        return httpClient.fetch('estimates/?id=' + estimateId, {method: 'get'})
            .then(response => response.json())
            .then(responseJson => {
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
            });

    }

}