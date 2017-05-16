export class RateModel{
    public code;
    public name;
    public ratePerDay;
    public originalRatePerDay;

    constructor(code, name, ratePerDay){
        this.code = code;
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