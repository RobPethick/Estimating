import {MetricModel} from './Models/MetricModel';
import {CustomerModel} from './Models/CustomerModel';
import {MetricService} from './Services/MetricService';
import {CustomerService} from './Services/CustomerService';
import {autoinject} from 'aurelia-framework';
import { RateTypeModel } from "./Models/rateTypeModel";
import { RateService } from "./Services/rateService";

@autoinject
export class Estimator {
  public heading = 'Estimator';
  public optimisticEstimate: number = 0;
  public mostLikelyEstimate: number = 0;
  public pessimisticEstimate: number = 0;
  public selectedCustomer: CustomerModel;
  public metrics: Array<MetricModel>;
  public customers: Array<CustomerModel>;
  public devMetric: MetricModel = new MetricModel("Development", 100, RateTypeModel.DevTest());

  constructor(private metricService: MetricService, private customerService: CustomerService, private rateService: RateService){
    this.metrics = metricService.getDefaultMetrics();
    this.customers = customerService.getCustomers();
    this.customers.forEach(customer => {
      customer.rates.forEach(rate => {
        rate.metricList = this.metricListWithDev;
      })
    });
  }
  get pertEstimateText(): string {
    return this.pertEstimate.toFixed(2);
  }

  get pertEstimate(): number {
    let pertEstimate = (Number(this.optimisticEstimate) + Number(this.mostLikelyEstimate) + Number(this.pessimisticEstimate)) / 3
    this.metrics.forEach(metric => {
      metric.pertValue = pertEstimate;
    });
    this.devMetric.pertValue = pertEstimate;
    return pertEstimate;
  }

  get totalTime(): string{
    var totalTime = this.pertEstimate;
    this.metrics.forEach(metric => {
      totalTime += metric.metricValue
    });
    return totalTime.toFixed(2);
  }

  get metricListWithDev(): Array<MetricModel>{
    return this.metrics.concat(this.devMetric);
  }

  get nonZeroMetrics(): Array<MetricModel>{
    return this.metrics.filter(metric => {return metric.metricValue != 0;})
  }
  
  get descriptionText(): string{
    var introLine = "The time and materials estimate for this work is " + this.totalTime + " hours. ";
    var metricsLine = "";
    var priceLine = "";
    if(this.nonZeroMetrics.length > 0){
      metricsLine = "This contains: Development [" + this.pertEstimateText + "]"
      this.nonZeroMetrics.slice(0, -1).forEach(metric=>{
        metricsLine += ", " + metric.name + " [" + metric.trimmedMetricValue + "]"
      })
      var lastMetric = this.nonZeroMetrics.slice(-1)[0];
      metricsLine += " and " + lastMetric.name + " [" + lastMetric.trimmedMetricValue + "]." 
    }
    if(this.selectedCustomer){
      priceLine = " The estimated cost is: £" + this.totalCostText;
    }
    return introLine + metricsLine + priceLine;
  }

  get showCustomerRatesSection(): boolean{
    return this.selectedCustomer != null;
  }

  get rateNames(): Array<RateTypeModel>{
    return this.rateService.getRateTypes();
  }

  get totalCostText(): string{
    var cost = 0;
    this.selectedCustomer.rates.forEach( rate => {
      cost += rate.cost;
    });
    return cost.toFixed();
  }

  public addMetric(): void{
    this.metrics.push(new MetricModel("New Metric", 0, RateTypeModel.DevTest()));
    this.customers.forEach(customer => {
      customer.rates.forEach(rate => {
        rate.metricList = this.metricListWithDev;
      })
    });
  }

  public removeMetric(metric:MetricModel): void{
    var index = this.metrics.indexOf(metric);
    this.metrics.splice(index, 1);
  }

  public copyTextToClipboard(): void{
    var textArea = document.querySelector("#finalText") as HTMLTextAreaElement;
    textArea.select();
    document.execCommand('copy');
    textArea.selectionEnd = 0;
  }
}
