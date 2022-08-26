const user={
    username:'edg',
    age:22,
    country:'arg'
}

//we can add all the values that follows of an object
const{...values}= user;
console.log(values);