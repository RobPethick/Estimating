import {bindable, bindingMode} from 'aurelia-framework';


export class MetricCustomElement {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) metric;

}