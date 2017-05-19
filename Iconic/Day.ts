/**
 * Created by DKASTANI on 19/5/2017.
 */

namespace Iconic {
//Wrapper for JS Date
    export class Day {
        _date: Date;
        Day: number;
        Date: number;
        Month: number;
        ZeroBasedMonth: number;
        Year: number;

        constructor(year: number, month: number, date: number) {
            this._date = new Date();
            this._date.setFullYear(year, month - 1, date);
            this.ZeroBasedMonth = this._date.getMonth();
            this.Month = this.ZeroBasedMonth + 1;

            this.Year = this._date.getFullYear();
            this.Date = this._date.getDate();
            this.Day = this._date.getDay();
        }

    }

    //var mm = new Day(2017, 5, 19);
    //console.log(mm);
}