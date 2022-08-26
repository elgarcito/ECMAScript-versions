//array destructuring

let fruits = ['Apple','Banana'];
let [a,b]=fruits;
console.log(a,b);
//otra forma
console.log(a,fruits[1]);

//Object destructuring

let user ={ username: 'edgar',age:22};
let {username,age}=user;
console.log (username,age);
console.log (username,user.age);


//spread operator.Add all the information of the 
//array used inside the array ...person and add country

let person ={name: 'oscar',age:28};
let country ='MX';
let data ={...person,country};
let datas={id:'edgar',...person,country};

console.log(data);

console.log(datas);

// rest it add a default number to an array

function sum(num,...values){
    console.log (values);
    console.log (num + values[0]);
    return num +values[0];
}

sum(1,2,3,4,5);