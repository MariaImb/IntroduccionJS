

//ARROW FUNCTIONS (si es una funcion de una sola linea no necesito las llaves)

const sumar2 = (n1,n2) => console.log(n1+n2);
 
 sumar2(5,10);

//Si tenemos un solo parametro podemos eliminar los parentesis
 const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)
 

 aprendiendo('Javascript');





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

meses.forEach (mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
})




// Si eliminamos las llaves y la funcion ocupa una sola linea podmos sacar el return
let resultados = carrito.some(producto => producto.nombre === 'Celular');

console.log(resultados);


//reduce, itera sobre los elementos e indica el total a pagar

resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0); //se coloca 0 como valor inicial


console.log(resultado3);

//filter sirve para obtener un elemento o todos menos  uno o mayores a... etc

resultado4 = carrito.filter(producto => producto.precio > 400);

console.log(resultado4);

//si quiero traer los que son diferentes a uno en especial
resultado5 = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado5);

//prueba