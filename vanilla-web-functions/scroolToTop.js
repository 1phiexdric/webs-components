/*
Para usar simplemente crea un boton, agrega un listener y listo
*/

function goToTop() {
    // scrollto hace que se desplaze a una seccion en especifico,
    // en este caso se desplaza hasta el top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}