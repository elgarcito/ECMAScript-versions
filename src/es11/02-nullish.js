//we use it when we want to return a default option when
// an option is null

const anotherNumber=1;
//value comes null
const anotherNumber2=null;


//operator ?? ask if it is null and if it is null it return 5
const validate = anotherNumber ?? 5;
console.log(validate);

//operator ?? ask if it is null and if it is null it return 5
const validate2 = anotherNumber2 ?? 5;
console.log(validate2);