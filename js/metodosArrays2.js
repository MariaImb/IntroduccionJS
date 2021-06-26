//Array methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//Arreglo de objetos

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisor 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },    
];

// forEach

meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
})


//Includes funciona bien en un arreglo plano como en meses, no es un arreglo de objetos

let resultado = meses.includes('Marzo');
console.log(resultado);

// Some ideal para arreglo de objetos
let resultados = carrito.some(function(producto) {
    return producto.nombre === 'Celular';
})

console.log(resultados);

//utilizando arrow function

let resultadoss = carrito.some( producto => producto.nombre === 'Celular');

console.log(resultadoss);

//reduce, itera sobre los elementos e indica el total a pagar

resultado3 = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0); //se coloca 0 como valor inicial


console.log(resultado3);

//filter sirve para obtener un elemento o todos menos  uno o mayores a... etc

resultado4 = carrito.filter(function(producto){
    return producto.precio > 400;
});

console.log(resultado4);

//si quiero traer los que son diferentes a uno en especial
resultado5 = carrito.filter(function(producto){
    return producto.nombre !== 'Celular';
});

console.log(resultado5);

//prueba