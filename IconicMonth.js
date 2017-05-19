/**
 * Created by DKASTANI on 19/5/2017.
 */
var IconicMonth = (function () {
    function IconicMonth(date) {
        this.CurrentMonthZeroBased = date.getMonth();
        this.CurrentMonth = this.CurrentMonthZeroBased + 1;
        this.CurrentYear = date.getFullYear();
        this.CurrentDay = date.getDate();
        this.FirstDay = new Date();
        this.FirstDay.setFullYear(this.CurrentYear, this.CurrentMonthZeroBased, 1);
        this.LastDay = new Date();
        this.LastDay.setFullYear(this.CurrentYear, this.CurrentMonthZeroBased + 1, 0);
        this.NumberOfDays = this.LastDay.getDate();
        //Week starts on Sunday
        this.PreviousMonthOffset = this.FirstDay.getDay();
    }
    return IconicMonth;
}());
var testDate = new Date();
var mm = new IconicMonth(testDate);
console.log(mm);
//# sourceMappingURL=IconicMonth.js.map