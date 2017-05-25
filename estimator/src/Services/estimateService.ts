import { HttpClient, HttpClientConfiguration, json } from 'aurelia-fetch-client';

export class EstimateService {
    public Save(): Promise<number>{
        let httpClient = new HttpClient();
        httpClient.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('api/');
        });
        
        return httpClient.fetch('customers', { method: 'get' })
            .then(response => response.json()).then(responseJson => responseJson as number);
    }

}