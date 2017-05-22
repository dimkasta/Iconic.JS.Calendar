/**
 * Created by DKASTANI on 19/5/2017.
 */

namespace Iconic {
    export class Month{
        FirstOfMonth: Day;
        Weeks: Array<Week>;

        constructor(weekStart: WeekStart, day?: Day) {
            if(day == null) {
                day = new Day();
            }

            this.FirstOfMonth = new Day(day.Year, day.Month, 1);

            this.Weeks = [];
            let x: number;
            for (x = 0; x < 6; x++) this.Weeks.push(new Week(weekStart, new Day(this.FirstOfMonth.Year, this.FirstOfMonth.Month, this.FirstOfMonth.Date + x * 7)));
        }
    }
}