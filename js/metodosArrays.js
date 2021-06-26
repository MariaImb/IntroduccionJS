const numeros = [10, 20, 30, 40, 50];
console.log(numeros);



//Agregar un elemento, pero esta  forma implica conocer la extension del areglo, y si utilizo una posicion existente, la reemplaza

numeros [5] = 60;


//otra forma donde no tenemos que saber la posicion lo agrega al final, se pueden agregar multiples elementos separados por coma, esta forma ya no se utiliza tanto para evitar modificar los arreglos

numeros.push(60, 70, 80);


// otra fomra es con unshift agrega el elemento al principio

numeros.unshift(-10,-20)
console.table(numeros);

//Eliminar elementos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//meses.pop(); //elimina el ultimo elemento

//meses.shift(); //elimina el primer elemento del arreglo

//console.log(meses);

//Si quiero eliminar elementos centrales utilizo splice



meses.splice(2,1); //el primer numero indica la posicion y el 2 cuantos elementos quiero eliminar a partir de ahi


console.log(meses);

//Rest Operator o Spread Operator, no se utiliza tanto esto de alterar los arreglos modificandolos, en lugar utilizamos esta opcion, creando un arreglo nuevo con los nuevos datos

const nuevoArreglo = [...meses, 'Junio']; //esto esta mejor visto hoy en dia

console.log(nuevoArreglo);