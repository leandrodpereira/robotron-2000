const lista = document.querySelector("ul");
document.querySelector(".open").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});