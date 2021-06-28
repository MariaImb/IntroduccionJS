//Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); // el promise se cumple
    }else {
        reject('No se pudo iniciar sesion'); // el promise no se cumple
    }
});

// para poder mostrar el resultado en la consola tengo que usar .then
usuarioAutenticado
    .then( function(resultado) { //si esta autenticado
        console.log(resultado)
    })
    .catch( function(error) { //si no esta autenticado
        console.log(error)
    });
//Ahora si ya puedo tomar ese resultado y pasarlo al html 
    

// EN los promises existen 3 valores
// Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: ya se cumplio el promises
// rejected: se ha rechazado o que no se pudo cumplir