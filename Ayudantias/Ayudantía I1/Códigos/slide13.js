// Con callbacks anidados
obtenerUsuario(id, function (usuario) {
    obtenerPedidos(usuario.id, function (pedidos) {
        mostrar(pedidos, function () { /* ... */ });
    });
});

// Con promesas
obtenerUsuario(id)
    .then(usuario => obtenerPedidos(usuario.id))
    .then(pedidos => mostrar(pedidos))
    .catch(err => console.error(err));
