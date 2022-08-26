
//we use at for arrays manipulation

//create a constant

const array =["one","two","three","four","five","six"];

//how can we access to the last element of this array if we
//doesn´t know how many element does it has

//this was the previous logic to solve this problem
console.log(array[array.length-1]);

//now we use the method .at
console.log(array.at(-1));