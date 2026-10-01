const lista = document.createElement("ul");
const item = document.createElement("li");
const item2 = document.createElement("li");

item.textContent = "Comprar pan";
item2.textContent = "Comprar leche";

lista.appendChild(item);
lista.appendChild(item2);
document.body.appendChild(lista);
