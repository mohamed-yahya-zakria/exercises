
'use strict';

const currentDay = new Date();
const userFutureDay = new Date('2020-7-2');
let name = 'Mohamed';
const bookFutureDay = (today, futureday, nameofuser) => {
    console.log(futureday);
    
    if ( futureday > today) {
        console.log(`Your book for name ${nameofuser} to the event for ${futureday} is already guaranteed!`);
    }

    else {
        console.log(`please choose futur date`);
    } 
}
bookFutureDay(currentDay, userFutureDay ,name);