// enhanced object literals
//Asi se hacia antes se tenia que definir el nombre devuelta
//in order to create the atributes
function newUser(user,age,country){
    return {
        user:user,
        age:age,
        country:country
    }
}
console.log(newUser("gndx",34,"arg"));

//now we can done it directly
function newUser(user,age,country){
    return {
        user,
        age,
        country
    }
}

console.log(newUser("gndx",34,"arg"));