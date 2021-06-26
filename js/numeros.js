

//NUMEROS Y OPERADORES
 const numero1 = 100
 const numero2 = 200
 const numero3 = 200.20

console.log(numero1 + numero2); //se pueden hacer operaaciones
console.log(numero2);
console.log(numero3); // no hace falta especificar que es un float como en otros lenguajes, lo toma como un numero

 //OBJETO MATH

// let resultado;

resultado = Math.PI;
resultado = Math.round(2.5); //redondea
resultado = Math.ceil(2.9); //siempre redondea hacia arriba
resultado = Math.floor(2.9); //siempre redondea hacia abajo
resultado = Math.sqrt(144); //raiz cuadrada
resultado = Math.abs(-200); //convierte el nro en positivo
resultado = Math.min( 1, 3, 6, 9, 10) //arroja el valor minimo
resultado = Math.max( 1, 3, 6, 9, 10) //arroja el mayor minimo
resultado = Math.random(); //arroja un valor random generalmente menor a 1
resultado = Math.floor(Math.random() * 30); //combinando funciones 

console.log(resultado);

//ORDEN DE LAS OPERACIONES
let resultado;

resultado = (20 + 30) * 2;

resultado = (100 + 200 + 300) * .2; //para aplicar un descuento de un 20% en un carrito de compras

console.log(resultado);

//Incrementos
let puntaje = 10;
puntaje++; //incremento en 1 es util en un video juego cuando ganas o sacas puntos
puntaje--

puntaje+= 10; //suma 10
console.log(puntaje);