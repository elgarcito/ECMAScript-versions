//to know that it s a generator we use an asterisc
function* iterate(array){
    //algorithm of resolution
    for (let value of array){
       //reserved word yield that return each one of those values
        yield value;
    }
}

const it = iterate(['edgar','juan','etc']);

//we have an algorithm and a way to remember the state 
//the reserver method next() allows me to get into the first value
//then the next one and so on

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);