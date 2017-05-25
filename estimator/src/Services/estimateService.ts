import { HttpClient, HttpClientConfiguration, json } from 'aurelia-fetch-client';
import { EstimateModel } from "../Models/estimateModel";

export class EstimateService {
    public Save(estimate: EstimateModel): Promise<number> {
        let httpClient = new HttpClient();
        httpClient.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('api/');
        });

        return httpClient.fetch('estimates',
            {
                method: 'post',
                body: json(12)
            })
            .then(response => response.json()).then(responseJson => responseJson as number);
    }

}