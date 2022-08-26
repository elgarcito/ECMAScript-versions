try {
    hello();
} catch (error){
    console.log(error);
}
// now i can personalize the message of the error
try {
    anotherFn();
} catch {
    console.log('this is an error');
}

