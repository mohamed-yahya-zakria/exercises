const arrisInFunc = [{tile: "N", score: 1},
    
    
 {  tile: "K", score: 5},
 { tile: "Z", score: 10}]
    

// unpack outer array
console.log(tiles[0]); //{ tile: 'N', score: 1 }
// unpack the inner object
console.log(arrisInFunc[0]["tile"]); // N
console.log(arrisInFunc[0]["score"]); // 1
console.log(arrisInFunc[0].score); // 1 same as above 