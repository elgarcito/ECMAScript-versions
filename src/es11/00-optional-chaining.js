// we can have an object that in the inside can have the 
//representation of value key and thath key value can be also an object
//with this characteristic we could validate and not brake the app

const users ={
    edg: {
        country:'arg'
    },
    ana: {
        country:'col'
    }
}

console.log(users.edg.country)

//what happens if i want to get in the age if i don´t have that attribute
console.log(users.edg.age)
//this give undefined 

//if we try to find one attribute  that its erased this give error
//console.log(users.bebeloper.country);

//To fix this we add ? marks in the places that i don t know that exist and gives undefined not error

console.log(users?.bebeloper?.country);
