/**
 * Created by DKASTANI on 19/5/2017.
 */

namespace Iconic {

    export enum WeekStart {
        Sunday,
        Monday
    }

    export class Week {

        WeekStart: WeekStart;
        Days: Array<Day>;

        //Creates a week from a given date
        constructor(date: Day, weekStart: WeekStart) {
            this.WeekStart = weekStart;

            this.Days = [];
            var x: number;
            for (x = 0; x < 7; x++) {
                this.Days.push(new Day(date.Year, date.Month, date.Date - this.GetDay(date) + x));
            }
        }

        //Get day number based on when week starts
        GetDay(date: Day) {
            if (this.WeekStart == WeekStart.Monday) {
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
        }
    }

    var week = new Week(new Day(2017, 4, 1), WeekStart.Monday);
    console.log(week);
}

