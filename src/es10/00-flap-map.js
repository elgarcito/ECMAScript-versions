//flap return a matrix of any sub-matrix(the matrix inside of a matrix)
const array =[3,3,3,3,3,[2,2,2,2,[1,1,1]]];

console.log(array.flat(1));

//flap map it applies a logical function to each element of the array

const array2 =[1,2,3,4,5];

console.log(array2.flatMap(v=>[v,v*2]));
