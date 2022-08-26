//The dynamic import allow us to import not all the modules 
//but just the one we need when we need it

const button =document.getElementById('btn');

button.addEventListener("click",async function(){
    const module =await import('./module.js')
    module.hello();
});