import { MetricModel } from "./MetricModel";
import { CustomerModel } from "./CustomerModel";

export class EstimateModel {
  public optimisticEstimate: number = 0;
  public mostLikelyEstimate: number = 0;
  public pessimisticEstimate: number = 0;
  public metrics: Array<MetricModel> = [];
  public customer: CustomerModel = null;
}