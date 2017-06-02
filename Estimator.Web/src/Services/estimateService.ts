import { HttpClient, HttpClientConfiguration, json } from 'aurelia-fetch-client';
import { EstimateModel } from "../Models/estimateModel";

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

}