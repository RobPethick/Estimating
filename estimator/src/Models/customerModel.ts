import {RateModel} from '../Models/RateModel';

export class CustomerModel{
    public name: string;
    public rates: Array<RateModel>;

    constructor(name: string, rates: Array<RateModel>){
        this.name = name;
        this.rates = rates;
    }
}