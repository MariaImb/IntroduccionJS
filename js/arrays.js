//Arrays sirven para agrupar elementos relacionados como un carrito de compras, a diferencia de los objetosestos van etre corchetes

const numeros = [10, 20, 30, 40, 50];

console.log(numeros);

console.table(numeros); //me los muestra como una tabla

//tambien se pueden crear con el constructor
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.log(meses);


//puedo tener todo tipo de cosas, numeros, objetos, strings, otro arreglo
const arreglo = ["Hola", 10, true, null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3]]

console.log(arreglo)

//acceder al nombre del arreglo, a traves de la posicion del indice

console.log(numeros[4]);

//Conocer la extension de un arreglo, cuantos elementos hay
console.log(meses.length)

//recorrer arreglos, con forEach un iterador

meses.forEach(function(mes){
    console.log(mes);
})