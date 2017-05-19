"use strict";
/**
 * Created by DKASTANI on 19/5/2017.
 */
exports.__esModule = true;
//Wrapper for JS Date
var IconicDay = (function () {
    function IconicDay(year, month, date) {
        this._date = new Date();
        this._date.setFullYear(year, month - 1, date);
        this.ZeroBasedMonth = this._date.getMonth();
        this.Month = this.ZeroBasedMonth + 1;
        this.Year = this._date.getFullYear();
        this.Date = this._date.getDate();
        this.Day = this._date.getDay();
    }
    return IconicDay;
}());
exports.IconicDay = IconicDay;
var mm = new IconicDay(2017, 5, 19);
console.log(mm);
//# sourceMappingURL=IconicDay.js.map