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
        constructor(weekStart: WeekStart, date?: Day) {
            this.WeekStart = weekStart;

            if(date == null) {
                date = new Day();
            }

            this.Days = [];
            let x: number;
            for (x = 0; x < 7; x++) {
                this.Days.push(new Day(date.Year, date.Month, date.Date - this.GetDay(date) + x));
            }
        }

        //Get day number based on when week starts
        GetDay(date: Day) {
            if (this.WeekStart == WeekStart.Monday) {
                //Shift days
                let day = date.Day - 1;
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
}

