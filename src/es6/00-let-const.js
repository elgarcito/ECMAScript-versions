

// variable var
var lastName= 'edgar';
lastName= 'edgyi';
console.log(lastname);

//variable tipo let
let fruit ='apple';
fruit ='kiwi';
console.log(fruit);

//variable tipo const
const animal ='dog';
animal ='cat';
console.log(animal);


const fruits = ()=> {
    if(true){
        var fruit1='apple'; //function scope 
        let fruit2='kiwi';//It can only be used in the block in witch is defined
        const fruit3 ='Banana';//It can only be used in the block in witch is defined
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();