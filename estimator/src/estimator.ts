import { MetricModel } from './Models/MetricModel';
import { CustomerModel } from './Models/CustomerModel';
import { MetricService } from './Services/MetricService';
import { CustomerService } from './Services/CustomerService';
import { autoinject } from 'aurelia-framework';
import { RateTypeModel } from "./Models/rateTypeModel";
import { RateService } from "./Services/rateService";
import { MetricDefaultsModel } from "./Models/metricDefaultsModel";
import { EstimateService } from "./Services/estimateService";
import { EstimateModel } from "./Models/estimateModel";

@autoinject
export class Estimator {
  public heading = 'Estimator';
  public estimate: EstimateModel = new EstimateModel();
  public metricDefaults: Array<MetricDefaultsModel>;
  public customers: Array<CustomerModel>;
  public devMetric: MetricModel = new MetricModel("Development", 100, RateTypeModel.DevTest());

  constructor(private metricService: MetricService, private customerService: CustomerService, private rateService: RateService, private estimateService: EstimateService) {
    this.metricDefaults = metricService.getDefaultMetrics();
    customerService.getCustomers()
                   .then(customers => this.customers = customers);
    this.selectedDefaultMetric = this.metricDefaults[0];
  }
  get pertEstimateText(): string {
    return this.pertEstimate.toFixed(2);
  }

  get pertEstimate(): number {
    let pertEstimate = (Number(this.estimate.optimisticEstimate) + Number(this.estimate.mostLikelyEstimate) + Number(this.estimate.pessimisticEstimate)) / 3
    this.estimate.metrics.forEach(metric => {
      metric.pertValue = pertEstimate;
    });
    this.devMetric.pertValue = pertEstimate;
    return pertEstimate;
  }

  get totalTime(): string {
    var totalTime = this.pertEstimate;
    this.estimate.metrics.forEach(metric => {
      totalTime += metric.metricValue
    });
    return totalTime.toFixed(2);
  }

  get metricListWithDev(): Array<MetricModel> {
    return this.estimate.metrics.concat(this.devMetric);
  }

  get nonZeroMetrics(): Array<MetricModel> {
    return this.estimate.metrics.filter(metric => { return metric.metricValue != 0; })
  }

  get descriptionText(): string {
    var introLine = "The time and materials estimate for this work is " + this.totalTime + " hours. ";
    var metricsLine = "";
    var priceLine = "";
    if (this.nonZeroMetrics.length > 0) {
      metricsLine = "This contains: Development [" + this.pertEstimateText + "]"
      this.nonZeroMetrics.slice(0, -1).forEach(metric => {
        metricsLine += ", " + metric.name + " [" + metric.trimmedMetricValue + "]"
      })
      var lastMetric = this.nonZeroMetrics.slice(-1)[0];
      metricsLine += " and " + lastMetric.name + " [" + lastMetric.trimmedMetricValue + "]."
    }
    if (this.estimate.customer) {
      priceLine = " The estimated cost is: £" + this.totalCostText;
    }
    return introLine + metricsLine + priceLine;
  }

  get showCustomerRatesSection(): boolean {
    return this.estimate.customer != null;
  }

  get rateNames(): Array<RateTypeModel> {
    return this.rateService.getRateTypes();
  }

  get totalCostText(): string {
    if(!this.estimate.customer){
      return "";
    }
    var cost = 0;
    this.estimate.customer.rates.forEach(rate => {
      cost += rate.cost;
    });
    return cost.toFixed();
  }

  set selectedDefaultMetric(defaultMetric: MetricDefaultsModel)
  {
    this.estimate.metrics = defaultMetric.metrics;
    this.updateRatesWithMetricModel();
  } 

  public updateRatesWithMetricModel(){
    if(!this.customers){
      return;
    }
      this.customers.forEach(customer => {
        customer.rates.forEach(rate => {
          rate.metricList = this.metricListWithDev;
        })
      });
  }

  public addMetric(): void {
    this.estimate.metrics.push(new MetricModel("New Metric", 0, RateTypeModel.DevTest()));
    this.customers.forEach(customer => {
      customer.rates.forEach(rate => {
        rate.metricList = this.metricListWithDev;
      })
    });
  }

  public removeMetric(metric: MetricModel): void {
    var index = this.estimate.metrics.indexOf(metric);
    this.estimate.metrics.splice(index, 1);
  }

  public copyTextToClipboard(): void {
    var textArea = document.querySelector("#finalText") as HTMLTextAreaElement;
    textArea.select();
    document.execCommand('copy');
    textArea.selectionEnd = 0;
  }

  public saveAndShare(): void {
    this.estimateService.Save(this.estimate)
      .then(estimateId => alert(estimateId));
  }
}
