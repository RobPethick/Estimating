import { bindable, bindingMode } from 'aurelia-framework';
import { RateTypeModel } from "./Models/rateTypeModel";
import { MetricModel } from "./Models/MetricModel";

export class MetricCustomElement {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) metric: MetricModel;
    @bindable({ defaultBindingMode: bindingMode.oneTime }) rateCodes: Array<RateTypeModel>;


    public rateTypeMatcher = (a: RateTypeModel, b: RateTypeModel) => a && b && a.code === b.code;

    public resetDefault() {
        this.metric.percentage = this.metric.defaultPercentage;
    }
}