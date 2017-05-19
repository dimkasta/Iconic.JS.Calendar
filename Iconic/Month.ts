/**
 * Created by DKASTANI on 19/5/2017.
 */

namespace Iconic {
    export class Month{
        FirstOfMonth: Day;
        Weeks: Array<Week>;

        constructor(day: Day, weekStart: WeekStart) {
            this.FirstOfMonth = new Day(day.Year, day.Month, 1);

            this.Weeks = [];
            let x: number;
            for (x = 0; x < 6; x++) this.Weeks.push(new Week(new Day(this.FirstOfMonth.Year, this.FirstOfMonth.Month, this.FirstOfMonth.Date + x * 7), weekStart));
        }
    }
}