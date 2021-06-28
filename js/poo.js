//Programacion orientada a objetos


/*Object literal, es el mas utilizado pero no es el mas dinamico, un objeto tiene diferentes variables en una sola*/
const producto = {
    nombre: 'Tablet',
    precio: 580
}

// Object Contructor, tiene una sintaxis similar a una funcion, luego ingresamos un nombre de "Clase", es una forma en la que podemos almacenar la "forma" lo datos que va a tener un objeto en especifico. La clase es un contenedor de toda la forma, de todos los datos, o todos los metodos y funciones y va a tener en el. EN el parentesis de Producto arriba, van los parametros y en el 2do parentesis del Producto de abajo van los argumentos. Se pueden ir agregando productos, es una forma mas dinamica.

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

//Los prototypes permiten crear funciones que van a ser utilizadas en un objeto especifico

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);


function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`
}
console.log(producto2.formatearProducto())
console.log(producto3.formatearProducto())

//console.log(formatearProducto(producto2));

//Un prototype es una funcion que esta asociada a un tipo de objeto, son funciones que solo pueden ser utilizadas para un tipo de objeto especifico

