/**
 * Created by DKASTANI on 19/5/2017.
 */

///<reference path="Month.ts"/>
///<reference path="Week.ts"/>
///<reference path="Day.ts"/>
import Month = Iconic.Month;
import Day = Iconic.Day;
import WeekStart = Iconic.WeekStart;

namespace Iconic {
    export class CalendarService {
        static GetDay(year: number, month: number, date: number) {
            return new Day(year, month, date);
        }

        static Today()
        {
            //let today = new Date();
            return new Day();
        }

        //Returns the current, or a week for a date
        static GetWeek(weekstart: WeekStart, date?: Day) {
            return new Week(weekstart, date);
        }
    }
}