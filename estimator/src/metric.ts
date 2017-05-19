import {bindable, bindingMode} from 'aurelia-framework';

export class MetricCustomElement {
    @bindable({ defaultBindingMode: bindingMode.twoWay })  metric;
    @bindable({ defaultBindingMode: bindingMode.oneTime })  rateCodes;

    public resetDefault(){
        this.metric.percentage = this.metric.defaultPercentage;
    }
}