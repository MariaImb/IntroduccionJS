//METODOS DE PROPIEDAD, PERO SIGUEN SIENDO FUNCIONES


//Metodos de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`);
    },
    pausar : function(){
        console.log('Pausando...')
    },
    crearPlayList : function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion: ${id}`)
}

reproductor.reproducir(3800);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList("Heavy");