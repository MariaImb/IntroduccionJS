
//OBJETOS podemos crear una variable que contenga 3 valores, en lugar de usar el signo igual se utilizan dos puntos y llaves

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto);


//Si queremos acceder a una propiedad del objeto

console.log(producto.precio); //esta es mas sencilla

//Otra sintaxis
console.log(producto["precio"]);

//MODIFICAR OBJETOS

//AGREGAR NUEVAS PROPIEDADES

producto.imagen = 'imagen.jpg';

console.log(producto);

//ELIMINAR UNA PROPIEDAD

delete producto.disponible;
console.log(producto);

//DESTRUCTURING DE OBJETOS
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//Selecciono el preocio y creo una variable. Forma anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;


console.log(precioProducto);

//Destructuring objetos, extrae el valor y crea la variable en un solo paso, entre {va la prop que quiero extraer} y se pueden colocar dentro de la misma linea.
// const {precio, nombreProducto} = producto;


console.log(precio)

console.log(nombreProducto)

 "use strict"; //correr js en modo estricto

//OBJECT METHODS un objeto a pesar de estar como un const se puede modificar
    const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); // permite no modificar el objeto ni agregar ni eliminar nada
producto.imagen = 'imagen.jpg';

//para saber si un objeto esta congelado

console.log(Object.isFrozen(producto));

console.log(producto)

Object.seal(producto); //no permite agregar ni quitar pero si modificar

producto.precio = 'Nuevo precio';

console.log(producto)

//UNIR DOS OBJETOS con spread operator
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m',
}
const nuevoProducto = { ...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);
