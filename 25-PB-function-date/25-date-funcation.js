
'use strict';

const currentDay = new Date();
const userFutureDay = new Date('2020-7-2');

const bookFutureDay = (today, futureday) => {
    console.log(futureday);
    
    if ( futureday > today) {
        console.log(`Your book to the event for ${futureday} is already guaranteed!`);
    }

    else {
        console.log(`please choose futur date`);
    } 
}
bookFutureDay(currentDay, userFutureDay);