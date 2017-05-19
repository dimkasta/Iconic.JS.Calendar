import { IconicDay } from "./IconicDay"
/**
 * Created by DKASTANI on 19/5/2017.
 */

enum IconicWeekStart {
    Sunday,
    Monday
}

class IconicWeek {

    WeekStart: IconicWeekStart;
    Days: Array<IconicDay>;

    //Creates a week from a given date
    constructor(date: IconicDay, weekStart: IconicWeekStart) {
        this.WeekStart = weekStart;

        this.Days = [];
        var x: number;
        for(x = 0; x < 7; x++) {
            this.Days.push(new IconicDay(date.Year, date.Month, date.Date - this.GetDay(date) + x));
        }
    }

    //Get day number based on when week starts
    GetDay(date: IconicDay) {
        if (this.WeekStart == IconicWeekStart.Monday) {
            //Shift days
            var day = date.Day - 1;
            if (day == -1)
            {
                day = 6;
            }
            return day;
        }
        else
        {
            return date.Day;
        }
    }
}

var week = new IconicWeek(new IconicDay(2017,4,1), IconicWeekStart.Monday);
console.log(week);