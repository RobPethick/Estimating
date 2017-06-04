import { MetricModel } from "./MetricModel";
import { CustomerModel } from "./CustomerModel";

export class EstimateModel {
  public optimisticEstimate: number = 0;
  public mostLikelyEstimate: number = 0;
  public pessimisticEstimate: number = 0;
  public metrics: Array<MetricModel> = [];
  public customer: CustomerModel = null;
  public id: string;
  get isNewEstimate(): boolean{
    return this.id == undefined || this.id == null || this.id == "";
  }

  get pertEstimate(): number{
    return (Number(this.optimisticEstimate) + Number(this.mostLikelyEstimate) + Number(this.pessimisticEstimate)) / 3
   
  }
}