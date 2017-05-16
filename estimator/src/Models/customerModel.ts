import {RateModel} from '../Models/RateModel';

export class CustomerModel{
    public name;
    public rates = new Array<RateModel>();

    constructor(name, rates){
        this.name = name;
        this.rates = rates;
    }
}