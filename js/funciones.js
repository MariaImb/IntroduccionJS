//son procedimientos o isntrucciones que realizan una accion, permiten tener un codigo ordenado mas facil de mantener y tambien pueden reutilizarse

//Existen 3 maneras de declarar una funcion

//sumar es el nombre, entre () es el argumento, {} es el cuerpo de la funcion


//1
function sumar () {
    console.log(10+10);
}

//A la funcion hay que llamarla:

sumar();


//Expresion de la funcion
//2
 const sumar2 = function () {
    console.log(3+3);
 }

 sumar2();

 //IIFE son funciones que se llaman a ellas mismas, no es necesario llamarlas, no son recomendables para reutilizarlas, esto previene tambien de que no sean reutilizadas y no puede salir del archivo.
 //3


 (function(){
     console.log('Esto es una funcion');
 }) ();

 //La diferencia entre 1 y 2, es que si llamo primero a la funcion y luego declaro la funcion, la 1 me va a dar un resultado pero la 2 me va a marcar un error.En el primer caso Esto se conoce como el hoysting, porque js se ejecuta en 2 vueltas, en la primera se registran las funciones (etapa de creacion) y luego los llamados a los funciones (etapa de ejecucion), no importa el orden. El 2do si bien es una funcion no esta declarada como sintaxis de funcion por lo que considerada como una variable


//DIFERENCIA ENTRE UN METODO Y UNA FUNCION
// LA FORMA EN QUE se utilizan es practicamente la misma, la diferencia es el contexto en el se utilizan

const numero1 = 20;
const numero2 = "20";


console.log(parseInt(numero2)); //parse int es una funcion, tiene un nombre seguido del paerntesis y le estamos pasando un valor

console.log(numero1.toString()); //nombre de la variable/objeto. seguido de un metodo es un metodo