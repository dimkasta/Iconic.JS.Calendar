///<reference path="Iconic/CalendarService.ts"/>
import CalendarService = Iconic.CalendarService;
/**
 * Created by DKASTANI on 19/5/2017.
 */

///<reference path="Iconic/CalendarService.ts"/>

let today = CalendarService.Today();
console.log(today);

let date = CalendarService.GetDay(2017,4,21);
//console.log(date);

let thisWeek = CalendarService.GetWeek(WeekStart.Monday);
//console.log(thisWeek);

let aweek = CalendarService.GetWeek(WeekStart.Monday, date );
//console.log(aweek);

let month = CalendarService.GetMonth(WeekStart.Monday);
//console.log(month.Weeks[0]);

let amonth = CalendarService.GetMonth(WeekStart.Monday, date);
//console.log(amonth.Weeks[0]);