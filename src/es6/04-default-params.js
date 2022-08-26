//como se hacia antes
//parameter by default
function newUser(name,age,country){
    var name =name || 'oscar';//asi se asignaba by default
    var age =age ||34;
    var country =country || 'arg';
    console.log(name,age,country)
}
 newUser();
 newUser('edgar',22,'arg');


 // nueva forma de ECMAScript
 function newAdmin(name='egar',age=22,country='arg'){
    console.log(name,age,country);
 }

 newAdmin();
 newAdmin('edgar',22,'arg');