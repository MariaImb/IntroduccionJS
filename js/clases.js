// classes, las classes siempre deben ir con mayusculas, se agregan llaves similar a un objeto. Los valores se pasan a traves de lo que se llama un constructor, es igual una funcion pero no es necesario colocar la palabbra function, js ya lo sobreentiende.

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

console.log(producto2);
console.log(producto3);