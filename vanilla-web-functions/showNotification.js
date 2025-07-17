/*
Como usar:
* crea un div con el id 'notificacion' y estilizalo a tu gusto, pon position fixed
* llama la funcion donde quieras
@ params:
- mensaje = string
- color = string
- segundo = number 
*/

function mostrarNotificacion(mensaje, color, segundos) {
    const notificacion = document.getElementById("notificacion");
    notificacion.textContent = mensaje;
    notificacion.style.display = "block";
    notificacion.style.backgroundColor = color;
    notificacion.style.zIndex = '1000000'
    let x= segundos
    setTimeout(() => {
        notificacion.style.display = "none";
    }, x); // Oculta después de 3 segundos
}