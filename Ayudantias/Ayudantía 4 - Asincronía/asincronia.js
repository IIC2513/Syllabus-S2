// =============================================================================
// AYUDANTÍA 4: TALLER PRÁCTICO DE ASINCRONÍA
// Completa ÚNICAMENTE las funciones indicadas abajo.
// La interfaz gráfica ya está conectada y llamará a estas funciones automáticamente.
// =============================================================================

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// -----------------------------------------------------------------------------
// FUNCIÓN EXTERNA (NO MODIFICAR)
// Simula un servicio antiguo que funciona mediante callbacks (tarda 600ms).
// -----------------------------------------------------------------------------
function verificarTokenServidor(token, callback) {
    setTimeout(() => {
        if (token === 'TOKEN_2026') {
            callback(null, { valido: true, usuario: 'Estudiante_IIC2513' });
        } else {
            callback(new Error('El token ingresado no es válido o ya caducó'), null);
        }
    }, 600);
}

// -----------------------------------------------------------------------------
// Punto 1: De Callback a Promise
// -----------------------------------------------------------------------------
// TODO: Envuelve la llamada a 'verificarTokenServidor' dentro de una Promise nativa.
// - Debe retornar una instancia de `new Promise((resolve, reject) => { ... })`.
// - Si el callback recibe un error, ejecuta reject(error).
// - Si no hay error, ejecuta resolve(resultado).
function verificarToken(token) {
    return new Promise((resolve, reject) => {
        // Tu código aquí:

    });
}

// -----------------------------------------------------------------------------
// Punto 2: async / await + fetch + Control de Errores (404)
// -----------------------------------------------------------------------------
// TODO: Implementa una función asíncrona que consulte la API de usuarios.
// 1. Usa `fetch` para llamar a: `${BASE_URL}/users/${id}`
// 2. Si la respuesta HTTP no es exitosa (!res.ok), lanza un Error con el status.
// 3. Parsea la respuesta con `.json()`.
// 4. Retorna un objeto con la estructura:
//    { id: data.id, nombre: data.name, email: data.email, ciudad: data.address.city }
// 5. Envuelve todo en un bloque `try / catch`. Si ocurre un error, muestra un console.error
//    y retorna null para que la interfaz muestre el aviso correspondiente sin caerse.
async function obtenerUsuario(id) {
    // Tu código aquí:

}

// -----------------------------------------------------------------------------
// Punto 3: Benchmark en Serie vs Concurrente
// -----------------------------------------------------------------------------

// 3.1 Peticiones en Serie (Secuencial con for...of y await)
// TODO: Itera sobre el arreglo de 'ids' consultando cada post con fetch.
// Debes esperar a que cada post termine antes de pedir el siguiente.
// URL: `${BASE_URL}/posts/${id}`
// Retorna un arreglo con todos los posts obtenidos.
async function obtenerPostsEnSerie(ids) {
    const resultados = [];

    // Tu código aquí (Usa un bucle for ... of con await dentro):

    return resultados;
}

// 3.2 Peticiones en Paralelo (Concurrente con Promise.all)
// TODO: Dispara todas las peticiones simultáneamente y espera a todas juntas.
// Tip: Puedes transformar el arreglo 'ids' en un arreglo de Promesas con .map()
// y luego usar await Promise.all([...]).
// Retorna el arreglo con todos los posts obtenidos.
async function obtenerPostsEnParalelo(ids) {
    // Tu código aquí:

}
