//.fromEntries allows us go from an array of arrays to an object

const entries=new Map([['name','oscar'],['age',33]]);
console.log(entries);
console.log(Object.fromEntries(entries));