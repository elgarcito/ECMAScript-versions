//template literals permiten concatenar palabras

let hello='Hello';
let world ='World';
let epicPhrase = hello +' '+world+ '!';
console.log(epicPhrase);

//template literals
let epicPhrase2 = `${hello} ${world} !` ;
console.log(epicPhrase2);

//multi-line strings

let lorem ='esto es un string \n '+ 'esto es otra linea';
console.log (lorem);

let lorem2=` esto es una frase loquilla
y asi continua.
`;
console.log (lorem2);