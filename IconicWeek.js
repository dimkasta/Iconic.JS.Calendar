"use strict";
exports.__esModule = true;
var IconicDay_1 = require("./IconicDay");
/**
 * Created by DKASTANI on 19/5/2017.
 */
var IconicWeekStart;
(function (IconicWeekStart) {
    IconicWeekStart[IconicWeekStart["Sunday"] = 0] = "Sunday";
    IconicWeekStart[IconicWeekStart["Monday"] = 1] = "Monday";
})(IconicWeekStart || (IconicWeekStart = {}));
var IconicWeek = (function () {
    //Creates a week from a given date
    function IconicWeek(date, weekStart) {
        this.WeekStart = weekStart;
        this.Days = [];
        var x;
        for (x = 0; x < 7; x++) {
            this.Days.push(new IconicDay_1.IconicDay(date.Year, date.Month, date.Date - this.GetDay(date) + x));
        }
    }
    //Get day number based on when week starts
    IconicWeek.prototype.GetDay = function (date) {
        if (this.WeekStart == IconicWeekStart.Monday) {
            //Shift days
            var day = date.Day - 1;
            if (day == -1) {
                day = 6;
            }
            return day;
        }
        else {
            return date.Day;
        }
    };
    return IconicWeek;
}());
var week = new IconicWeek(new IconicDay_1.IconicDay(2017, 4, 1), IconicWeekStart.Monday);
console.log(week);
//# sourceMappingURL=IconicWeek.js.map