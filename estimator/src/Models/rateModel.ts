export class RateModel{
    public name;
    public ratePerDay;
    public originalRatePerDay;

    constructor(name, ratePerDay){
        this.name = name;
        this.ratePerDay = ratePerDay;
        this.originalRatePerDay = ratePerDay;
    }

    get ratePerHour(){
        return this.ratePerDay / 7;
    }

    get ratePerHourText(){
        return this.ratePerHour.toFixed();
    }

    public resetRate(){
        this.ratePerDay = this.originalRatePerDay;
    }
}