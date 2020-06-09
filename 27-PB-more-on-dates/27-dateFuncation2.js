'use strict';

/* const remainDays = new Date().getDay();
let checkDay = 15;

const remainOfday = (day, checkofdays) => {
   // if (day % checkofdays)
   //console.log(day % checkofdays);
   let x = (checkofdays - day);
   console.log(x) */

let today = new Date();
today.setFullYear(2020, 2, 2);

const remainingDays = (now) => {
    let yearToday = now.getFullYear();
    let monthToday = now.getMonth();
    let dayToday = now.getDate();
    let endOfMonth = new Date(yearToday, monthToday + 1, 0).getDate();
    console.log(endOfMonth - dayToday);
}
remainingDays(today);

}

remainOfday(remainDays, checkDay);