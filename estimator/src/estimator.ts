import {MetricModel} from './Models/MetricModel';

export class Estimator {
  public heading = 'Welcome to the Aurelia Navigation App!';
  public optimisticEstimate = 0;
  public mostLikelyEstimate = 0;
  public pessimisticEstimate = 0;
  public metrics = [new MetricModel("Analysis", 20), new MetricModel("Testing", 50)]

  get pertEstimateText() {
    return this.pertEstimate().toFixed(2).toString();
  }

  public pertEstimate() {
    let pertEstimate = (Number(this.optimisticEstimate) + Number(this.mostLikelyEstimate) + Number(this.pessimisticEstimate)) / 3
    this.metrics.forEach(metric => {
      metric.pertValue = pertEstimate;
    });
    return pertEstimate;
  }

  get totalTime(){
    var totalTime = this.pertEstimate();
    this.metrics.forEach(metric => {
      totalTime += metric.metricValue
    });
    return totalTime.toFixed(2);
  }

  public addMetric(){
    this.metrics.push(new MetricModel("New Metric", 0));
  }
  public submit() {
    alert(`Welcome, ${this.pertEstimate}!`);
  }

}
