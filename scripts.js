const input = document.querySelector("input");
const boton = document.querySelector(".boton");
const botonImprimir = document.querySelector(".botonImprimir");
const dragArea = document.querySelector(".contenedorPrincipal");


// Función que realiza la animación de los elementos.
new Sortable(dragArea, {
  Animation: 350
})

// Pregunta si estamos seguros de cerrar la aplicación.
window.addEventListener("beforeunload", function (event) {
  event.returnValue = "Salir";
});

// Configuración de los botones
botonImprimir.onclick = function () {
  print();
};

boton.onclick = function () {
  mostrarMensaje();
};


// Función principal que crea de forma dinámica los elementos.
function mostrarMensaje() {
  const nav = document.querySelector("nav");

  const panel = document.createElement("div");
  nav.appendChild(panel);
  panel.setAttribute("class", "contenedorVirtual");

  const mensaje = document.createElement("p");
  mensaje.textContent = input.value;
  panel.appendChild(mensaje);
  mensaje.setAttribute("class", "parrafo");

  const cerrarBoton = document.createElement("button");
  cerrarBoton.textContent = "x";
  panel.appendChild(cerrarBoton);
  cerrarBoton.setAttribute("class", "botonCerrar");

  cerrarBoton.onclick = function () {
    panel.parentNode.removeChild(panel);
  };
}
