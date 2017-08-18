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
import { DialogService } from 'aurelia-dialog';
import { ShareDialog } from "./shareDialog";

@autoinject
export class Estimator {
  public heading = 'Estimator';
  public estimate: EstimateModel = new EstimateModel();
  public metricDefaults: Array<MetricDefaultsModel>;
  public loadedMetricSet: MetricDefaultsModel;
  public customers: Array<CustomerModel>;
  public devMetric: MetricModel = new MetricModel("Development", 100, RateTypeModel.DevTest());
  public customerMatcher = (customerA, customerB) => customerA && customerB && customerA.name === customerB.name;

  constructor(private metricService: MetricService, private customerService: CustomerService, private rateService: RateService, private estimateService: EstimateService, private dialogService: DialogService) {

  }

  public async activate(params) {
    let metricDefaults = await this.metricService.getDefaultMetrics();
    this.metricDefaults = metricDefaults;
    this.selectedDefaultMetric = this.metricDefaults[0];
    
    let customers = await this.customerService.getCustomers();    
    this.customers = customers;
    if (params && params.id) 
    {
      let result = await this.estimateService.Get(params.id);
      this.loadedMetricSet = new MetricDefaultsModel("From Estimate", result.metrics);
      this.selectedDefaultMetric = this.loadedMetricSet;
      this.estimate = result;
      this.estimate.metrics.forEach(metric => {
        metric.pertValue = this.pertEstimate;
      });
      this.updateRatesWithMetricModel();
    };
  }
  
  get pertEstimateText(): string {
    return this.pertEstimate.toFixed(2);
  }

  get pertEstimate(): number {
    let pertEstimate = this.estimate.pertEstimate;
    this.estimate.metrics.forEach(metric => {
      metric.pertValue = pertEstimate;
    });
    this.devMetric.pertValue = pertEstimate;
    return pertEstimate;
  }

  get totalTimeWithoutContingency(): number {
    var totalTime = this.pertEstimate;
    this.estimate.metrics.forEach(metric => {
      totalTime += metric.metricValue
    });
    return totalTime;
  }

  get totalTimeWithoutContingencyText(): string {
    return this.totalTimeWithoutContingency.toFixed(2);
  }

  get contingencyTime(): number{
    return this.totalTimeWithoutContingency * this.estimate.contingencyPercentage / 100;
  }

  get totalTimeWithContingency(): number {
    return this.totalTimeWithoutContingency + this.contingencyTime;
  }

  get totalTimeWithContingencyText(): string {
    return this.totalTimeWithContingency.toFixed(2);
  }


  get metricListWithDev(): Array<MetricModel> {
    return this.estimate.metrics.concat(this.devMetric);
  }

  get nonZeroMetrics(): Array<MetricModel> {
    return this.estimate.metrics.filter(metric => { return metric.metricValue != 0; })
  }
  get isNewEstimate(): boolean {
    return this.estimate.id == undefined || this.estimate.id == null || this.estimate.id == "";
  }
  get descriptionText(): string {
    var introLine = `The time and materials estimate for this work is ${this.totalTimeWithoutContingencyText} hours${this.contingencyTime === 0 ? "" : " + " + this.contingencyTime.toFixed(2) + " hours of contingency time"}. `;
    var metricsLine = "";
    var priceLine = "";
    if (this.nonZeroMetrics.length > 0) {
      metricsLine = `This contains: Development [${this.pertEstimateText}]`
      this.nonZeroMetrics.slice(0, -1).forEach(metric => {
        metricsLine += `, ${metric.name} [${metric.trimmedMetricValue}]`
      })
      var lastMetric = this.nonZeroMetrics.slice(-1)[0];
      metricsLine += ` and ${lastMetric.name} [${lastMetric.trimmedMetricValue}].`
    }
    if (this.estimate.customer) {
      priceLine = ` The estimated cost is: £${this.totalCost.toFixed()}${this.contingencyCost > 0 ? " + £" + this.contingencyCost.toFixed() + " contingency":""}.`;
    }
    return introLine + metricsLine + priceLine;
  }

  get showCustomerRatesSection(): boolean {
    return this.estimate.customer != null;
  }

  get rateNames(): Array<RateTypeModel> {
    return this.rateService.getRateTypes();
  }

  get totalCost(): number{
    if (!this.estimate.customer) {
      return -1;
    }
    var cost = 0;
    this.estimate.customer.rates.forEach(rate => {
      cost += rate.cost;
    });
    return cost;
  }

  get contingencyCost(): number{
    return this.totalCost * this.estimate.contingencyPercentage / 100;
  }

  set selectedDefaultMetric(defaultMetric: MetricDefaultsModel) {
    this.estimate.metrics = defaultMetric.metrics;
    this.updateRatesWithMetricModel();
  }

  get saveText(): string {
    if (this.estimate.isNewEstimate) {
      return "Save & Share";
    }
    else {
      return "Update & Share";
    }
  }

  public updateRatesWithMetricModel() {
    if (!this.customers) {
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
      .then(estimateId => {
        this.dialogService.open({ viewModel: ShareDialog, model: estimateId, overlayDismiss: true })
      });
  }
}
