/*
Esta funcion permite alternar la visibilidad de una contraseña en un campo de entrada.
Cuando se llama a esta funcion, verifica el tipo actual del campo de entrada con id "password".
Si el tipo es "password", lo cambia a "text" para mostrar la contraseña.
Si el tipo es "text", lo cambia de nuevo a "password" para ocultarla.

Ejemplo de codigo en html para usar esta funcion:
<input type="password" id="password" placeholder="*******">
<button onclick="togglePassword()">👁️</button>
*/
function togglePassword() {
      const input = document.getElementById("password");
      input.type = input.type === "password" ? "text" : "password";
      
}