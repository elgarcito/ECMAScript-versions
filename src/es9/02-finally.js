

const anotherFunction=()=>{
    return new Promise((resolve,reject)=> {
        if (false){
            resolve('hey')
        } else {
            reject('no');
        }
    })

}

anotherFunction()
.then(response=> console.log(response))
.catch(err =>console.log(err))
// Finally allows us to have an anonym function to do something when 
//the promise ended
.finally(()=>console.log('finnaly'));
