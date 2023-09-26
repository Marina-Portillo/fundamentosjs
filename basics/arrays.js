//Arrays en Javascript
const miArray = [1,2,4,true,'Hello','A',2.1,[1,1]]
console.log(miArray);
console.log(miArray[0]);
console.log(miArray[1]);
miArray[0] = "One";
miArray[3] = false;
console.log(miArray);

//Pilas en JS
//Last in first out
//Ingresar valores al final
//Extraer valores del final
//pop,shift,unshift,push
const pila = [];
//Insertar con
pila.push(1);
pila.push(2);
pila.push(3);
console.log(pila)
console.log(pila.pop())
console.log(pila)

//Cola en JS
//first in first out
const Cola = []
Cola.unshift(1);
Cola.unshift(2);
Cola.unshift(3);
console.log(Cola);
console.log(Cola.shift());
console.log(Cola);
console.log(Cola.shift());
console.log(Cola);