//Funciones en Javascript

/*
function nombre(params){
    body function
}
const nombre = function (params){
    body function
}
*/

// Funciones sin parametros, y sin retorno
function saludo(){
    console.log('Hellooo!');
}
saludo();

//Funciones con parametros
const saludaA = function(name){
    console.log('Hola'+name);
}
saludaA('Clack kent');

//Funciones con parametros y con retorno
const fact = function(num){
    if(num === 0) return 1;
    return fact(num -1) * num;
}
const result = fact(5);
console.log(result);

//Arrow Functions o funciones de flecha
//Sin parametros y sin retorno
const saludaEnChino = () => {
    console.log('Ni Hao');
}
saludaEnChino();

//con 1 parametro sin retorno
const mayuscula = (word) => {
    console.log(word.toUpperCase());
}
mayuscula('hola');

const minuscula = (word) => {
    console.log(word.toLowerCase());
}
mayuscula('hello');

//Dos o más parámetros y con retorno
const fullName = (firstName,lastName) =>{
    return firstName + ' ' + lastName;
}
const nombreCompleto = fullName('Bruce','Wayne');
console.log(nombreCompleto);

//Si el return es la unica linea se puede simplificar
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);

