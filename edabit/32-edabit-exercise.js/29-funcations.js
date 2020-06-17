sum = 0;
function length(str) {
	if (str === 0){
		return sum;
	}
	else { 
		sum+= str
		return length (str -1)
    }
}
console.log(length(" apple"))