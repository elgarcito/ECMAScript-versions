//we have a series of promises 
const promise1 =new Promise((resolve,reject)=> reject('reject'));
const promise2 =new Promise((resolve,reject)=> reject('resolve'));
const promise3 =new Promise((resolve,reject)=> reject('resolve 2'));

//we can settle a how all promises had finished with the Promise.allSettled([promise1,...,promisen])

Promise.allSettled([promise1,promise2,promise3])
.then(response=>console.log(response));