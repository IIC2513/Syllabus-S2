console.log("Abrir tienda");

setTimeout(() => {
    console.log("Timeout A");
}, 0);

setTimeout(() => {
    console.log("Timeout B");
    Promise.resolve().then(() => {
        console.log("Micro dentro de B");
    });

    console.log("Timeout B2");
}, 0);

queueMicrotask(() => {
    console.log("Micro Z");
});

Promise.resolve().then(() => {
    console.log("Micro X");
});

queueMicrotask(() => {
    console.log("Micro Y");
});

console.log("Cerrar tienda");
