//FUNCIONES CON PARAMETROS Y ARGUMENTOS



function sumar1 (numero1, numero2) { //Los parametros se pasan en el () donde este definiendo la funcion, van en el cuerpo de la funcion
    console.log(numero1+numero2);
}
sumar1(10,10); // Argumentos o los valores reales
sumar1(2,2); 

//Expresion de la funcion

 const sumar2 = function (n1, n2) {
    console.log(n1+n2);
 }
 sumar2(5, 10);

 function sumar3 (numero1 = 0, numero2 = 0) { //Establecer como los parametros iguales a cero por defoult permite que en el caso de un formulario si no se completa algun campo, no salte error y tome por defecto el valor asignado, en este caso cero.
    console.log(numero1+numero2);
}
sumar3(10,0); // Argumentos o los valores reales
sumar3(0,0); 

//FUNCIONES QUE RETORNAN UN VALOR

function sumar4(n1,n2) {
    return n1 + n2; //no imprime el valor, no se ve en la consola, por lo que necesitamos meterlo en una variable para captarlo y hacer operaciones y console.log si queremos visualizarlo
}

const resultado = sumar4(2,3);

console.log(resultado);


// total a pagar en un carrito

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total){ //creamos otra funcion para el impuesto
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);