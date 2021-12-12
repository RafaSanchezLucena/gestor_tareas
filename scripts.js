const input = document.querySelector("input");
const botonGuardar = document.querySelector(".boton");
const botonImprimir = document.querySelector(".botonImprimir");
const dragArea = document.querySelector(".contenedorPrincipal");


// Función que realiza la animación de los elementos.
new Sortable(dragArea, {
  Animation: 350
});

// Pregunta si estamos seguros de cerrar la aplicación.
window.addEventListener("beforeunload", function (event) {
  event.returnValue = "Salir";
});

// Configuración de los botones
botonImprimir.addEventListener("click", ()=>{
  print();
})

botonGuardar.addEventListener("click", ()=>{
  mostrarMensaje();
})


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

  const botonCerrar = document.createElement("button");
  botonCerrar.textContent = "x";
  panel.appendChild(botonCerrar);
  botonCerrar.setAttribute("class", "botonCerrar");

  botonCerrar.addEventListener("click", ()=>{
    panel.parentNode.removeChild(panel);
  })
}
