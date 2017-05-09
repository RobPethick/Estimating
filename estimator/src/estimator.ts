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
  public metrics = [{name: "Analysis", value: 3}, {name: "Testing", value:5}]

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

}
