

class user {
    //constructor
    constructor(name,age){
        this.name =name;
        this.age =age;
    }
    //metodos
    // when we add #before a class we say that that method is private
    //it just can be acceded inside the same class 
    #speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }


//uso palabras reservadas para definir el get

    get #uAge(){
        return this.age;
    }
    set uAge(n){
        this.age=n;
    }
    
}

const bebeloper1 =new user('david',15);
console.log (bebeloper1.uAge);
console.log (bebeloper1.uAge=20);
