const input = document.querySelector("input");
const botonGuardar = document.querySelector(".boton");
const botonImprimir = document.querySelector("#imprimir");
const botonLimpiar = document.querySelector("#limpiar");
const dragArea = document.querySelector("#container");
const contenedor = document.querySelector(".container");


// Función que realiza la animación de los elementos.
new Sortable(dragArea, {
  Animation: 100,
});

// Pregunta si estamos seguros de cerrar la aplicación.
window.addEventListener("beforeunload", (evento) => {
  evento.returnValue = "Salir";
});

// Configuración de los botones
botonImprimir.addEventListener("click", () => {
  print();
});

botonGuardar.addEventListener("click", () => {
  mostrarMensaje();
});

botonLimpiar.addEventListener("click", () => {
  input.value = "";
})

// Función principal que crea de forma dinámica los elementos.
let cerrar = () => {
  const div = document.querySelector(".contenedor__virtual");
  contenedor.removeChild(div);
}

const mostrarMensaje = () => {
  const panel = /*html*/ `<div class="contenedor__virtual">
                          <p>${input.value}</p>
                          <button onclick="cerrar()" class="botonCerrar">x</button>
                         </div>`;

  contenedor.innerHTML += panel;
};