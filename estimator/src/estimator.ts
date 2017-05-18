import {MetricModel} from './Models/MetricModel';
import {CustomerModel} from './Models/CustomerModel';
import {MetricService} from './Services/MetricService';
import {CustomerService} from './Services/CustomerService';
import {autoinject} from 'aurelia-framework';

@autoinject
export class Estimator {
  public heading = 'Welcome to the Aurelia Navigation App!';
  public optimisticEstimate = 0;
  public mostLikelyEstimate = 0;
  public pessimisticEstimate = 0;
  public selectedCustomer;
  public metrics = new Array<MetricModel>();
  public customers = new Array<CustomerModel>();

  constructor(private metricService: MetricService, private customerService: CustomerService){
    this.metrics = metricService.getDefaultMetrics();
    this.customers = customerService.getCustomers();
    this.customers.forEach(customer => {
      customer.rates.forEach(rate => {
        rate.metricList = this.metrics;
      })
    });
  }
  get pertEstimateText() {
    return this.pertEstimate.toFixed(2).toString();
  }

  get pertEstimate() {
    let pertEstimate = (Number(this.optimisticEstimate) + Number(this.mostLikelyEstimate) + Number(this.pessimisticEstimate)) / 3
    this.metrics.forEach(metric => {
      metric.pertValue = pertEstimate;
    });
    return pertEstimate;
  }

  get totalTime(){
    var totalTime = this.pertEstimate;
    this.metrics.forEach(metric => {
      totalTime += metric.metricValue
    });
    return totalTime.toFixed(2);
  }

  get metricListWithDev(){
    return this.metrics.push(new MetricModel("Development", 100, "DT"));
  }

  get nonZeroMetrics(){
    return this.metrics.filter(metric => {return metric.metricValue != 0;})
  }
  
  get descriptionText(){
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

  get showCustomerRatesSection(){
    return this.selectedCustomer != null;
  }

  get ratesNames(){
    if(this.selectedCustomer){
      return this.selectedCustomer.rates;
    }
  }

  get totalCostText(){
    var cost = 0;
    this.selectedCustomer.rates.forEach( rate => {
      cost += rate.cost;
    });
    return cost.toFixed();
  }

  public addMetric(){
    this.metrics.push(new MetricModel("New Metric", 0, "DT"));
  }

  public removeMetric(metric:MetricModel){
    var index = this.metrics.indexOf(metric);
    this.metrics.splice(index, 1);
  }

  public copyTextToClipboard(){
    var textArea = document.querySelector("#finalText") as HTMLTextAreaElement;
    textArea.select();
    document.execCommand('copy');
    textArea.selectionEnd = 0;
  }
  public submit() {
    alert(`Welcome, ${this.pertEstimate}!`);
  }

}
