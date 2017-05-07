// import {computedFrom} from 'aurelia-framework';
interface IEstimator {
    optimisticEstimate: number;
    mostLikelyEstimate: number;
    pessimisticEstimate: number;
}

export class Estimator implements IEstimator{
  public heading = 'Welcome to the Aurelia Navigation App!';
  public optimisticEstimate = 0;
  public mostLikelyEstimate = 0;
  public pessimisticEstimate = 0;

  // @computedFrom('firstName', 'lastName')
  get pertEstimateText() {
    return this.pertEstimate().toFixed(2).toString();
  }

  public pertEstimate(){
    return (Number(this.optimisticEstimate) + Number(this.mostLikelyEstimate) + Number(this.pessimisticEstimate))/3;
  }

  public submit() {
    alert(`Welcome, ${this.pertEstimate}!`);
  }

  public canDeactivate() {
    //if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    //}
  }
}

export class UpperValueConverter {
  public toView(value) {
    return value && value.toUpperCase();
  }
}
