let izq = document.getElementById("izq");
let der = document.getElementById("der");
let contenedor = document.getElementById("contenedor");

izq.addEventListener("mouseenter", () => {
  contenedor.classList.add("hover-izq");
});

izq.addEventListener("mouseleave", () => {
  contenedor.classList.remove("hover-izq");
});

der.addEventListener("mouseenter", () => {
  contenedor.classList.add("hover-der");
});

der.addEventListener("mouseleave", () => {
  contenedor.classList.remove("hover-der");
});
