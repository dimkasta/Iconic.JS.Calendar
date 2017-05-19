/**
 * Created by DKASTANI on 19/5/2017.
 */
class IconicMonth {
    CurrentDay: number;
    CurrentMonth: number;
    CurrentMonthZeroBased: number;
    CurrentYear: number;
    FirstDay: Date;
    LastDay: Date;
    NumberOfDays: number;
    PreviousMonthOffset: number;

    constructor(date: Date) {
        this.CurrentMonthZeroBased = date.getMonth();
        this.CurrentMonth = this.CurrentMonthZeroBased + 1;

        this.CurrentYear = date.getFullYear();
        this.CurrentDay = date.getDate();
        this.FirstDay = new Date();
        this.FirstDay.setFullYear(this.CurrentYear, this.CurrentMonthZeroBased, 1);
        this.LastDay = new Date();
        this.LastDay.setFullYear(this.CurrentYear, this.CurrentMonthZeroBased+1, 0);

        this.NumberOfDays = this.LastDay.getDate();

        //Week starts on Sunday
        this.PreviousMonthOffset = this.FirstDay.getDay();
    }
}

var testDate = new Date();
var mm = new IconicMonth(testDate);
console.log(mm);
