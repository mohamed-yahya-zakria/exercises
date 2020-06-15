'use strict';

/* const remainDays = new Date().getDay();
let checkDay = 15;

const remainOfday = (day, checkofdays) => {
   // if (day % checkofdays)
   //console.log(day % checkofdays);
   let x = (checkofdays - day);
   console.log(x) */
//remainingDays(remainDays, checkDay);


let today = new Date();
today.setFullYear(2020, 4, 2);

const remainingDays = (now) => {
    let yearToday = now.getFullYear();
   
    let monthToday = now.getMonth();//[0 : 11]
   
    let dayToday = now.getDate();
    
    let endOfMonth = new Date(yearToday, monthToday + 1, 0).getDate(); // getDate = 1:31
    // and we put zero for get the last day
    console.log(endOfMonth);
    console.log(endOfMonth - dayToday);
}
remainingDays(today);



