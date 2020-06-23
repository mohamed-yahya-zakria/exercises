'use strict';



//console.log();
function monthName (months) {
    let monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthsOfYear[months -1]
}
console.log(monthName(12));