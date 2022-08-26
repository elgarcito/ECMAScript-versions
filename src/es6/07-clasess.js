
//COMILLAS INVERTIDAS ALT+96

//declaring a clss
class User{};
//instance of a class
//const newUser= new user();

//class with new methods

class user {
// metodos que puedo usar en esa clase declarada
greetings(){
    return 'hello';
}
};


//creo una instancia

const elgar = new user();
console.log (elgar.greetings());

//la herencia nueva refernecia a esta clase

const bebeloper = new user();
console.log(bebeloper.greetings());

// constructor

class user {
    //constructor
    constructor(){
        console.log('nuevo Usuario');
    }
    greetings(){
        return 'hello';
    }
}

const david =new user();


//this hace referencia al elemento padre que lo contiene

class user {
    constructor(name){
        this.name =name;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greetings(){
       return `${this.speak()} ${this.name}`; 
    }
}

const ana =new user('Ana');
console.log (ana.greetings());


//setters and getters

class user {
    //constructor
    constructor(name,age){
        this.name =name;
        this.age =age;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }


//uso palabras reservadas para definir el get

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age=n;
    }
    
}

const bebeloper1 =new user('david',15);
console.log (bebeloper1.uAge);
console.log (bebeloper1.uAge=20);
