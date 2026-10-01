for (var i = 0; i < 6; i++) {
    const boton = document.createElement("button");
    boton.textContent = "Botón " + i;

    boton.onclick = function () {
        console.log("Click en Botón " + i);
    }

    document.body.appendChild(boton);
}

document.createElement("div")
document.body.appendChild(document.createElement("hr"));

for (let i = 0; i < 6; i++) {
    const boton = document.createElement("button");
    boton.textContent = "Botón " + i;

    boton.onclick = function () {
        console.log("Click en Botón " + i);
    }

    document.body.appendChild(boton);
}
