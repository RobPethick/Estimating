import {bindable, bindingMode} from 'aurelia-framework';

export class MetricCustomElement {
    @bindable({ defaultBindingMode: bindingMode.twoWay })  metric;

    public resetDefault(){
        this.metric.percentage = this.metric.defaultPercentage;
    }
}