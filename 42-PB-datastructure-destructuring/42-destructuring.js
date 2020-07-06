const all = [fruit, vegetable, ...food] = ["banna", "cucumber", "bread", "cakes", "pizza"]


console.log(all); 
console.log(vegetable);
console.log(fruit);
console.log(food);

//tassk 02
// OBJECT DESTRUCTURING MUST HAVE SAME IDENTIFIER
    const namesOfcelbirate = {
        max: 'Marzahn',
        alex: 'wediing',
        sarah: 'tempelhif'
    };
    let max, alex,sarah;
    ({max, alex,sarah} = namesOfcelbirate)
    console.log(max);
    console.log(alex);
    console.log(sarah);

    //task 03
    const myObj2 = {
        name: 'maxs-band',
        city: 'Berlin',
        since: 1997
    }
    function printBand ({name, city, since}){
     return `${name} Spektor is a ${city}singer/songwriter and pianist. The musician sings since ${since} `
    }
    console.log(printBand(myObj2));