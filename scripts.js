const input = document.querySelector("input");
const boton = document.querySelector(".boton");
const botonImprimir = document.querySelector(".botonImprimir");
const dragArea = document.querySelector(".contenedorPrincipal");

new Sortable(dragArea, {
  Animation: 350
})

botonImprimir.onclick = function () {
  print();
};

boton.onclick = function () {
  mostrarMensaje();
};


function mostrarMensaje() {
  const nav = document.querySelector("nav");

  const panel = document.createElement("div");
  nav.appendChild(panel);
  panel.setAttribute("class", "contenedorVirtual");
  panel.setAttribute("draggable", "true");

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
