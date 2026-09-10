// =============================================================================
// CONTROLADOR DEL DOM (UI CONTROLLER) - AYUDANTÍA 4
// Este archivo conecta los botones y la pantalla con las funciones.
// =============================================================================

// Referencias del DOM
const tokenInput = document.getElementById('tokenInput');
const btnToken = document.getElementById('btnToken');
const tokenResult = document.getElementById('tokenResult');

const userIdInput = document.getElementById('userIdInput');
const btnUser = document.getElementById('btnUser');
const userResult = document.getElementById('userResult');

const btnSerie = document.getElementById('btnSerie');
const btnParalelo = document.getElementById('btnParalelo');
const timerSerie = document.getElementById('timerSerie');
const timerParalelo = document.getElementById('timerParalelo');
const benchmarkOutput = document.getElementById('benchmarkOutput');

// -----------------------------------------------------------------------------
// EVENTO 1: Convertir a Promesa (Callback -> Promise)
// -----------------------------------------------------------------------------
btnToken.addEventListener('click', async () => {
    const token = tokenInput.value.trim();
    btnToken.disabled = true;
    tokenResult.className = 'output-box output-loading';
    tokenResult.textContent = '⏳ Verificando token con el servidor...';

    try {
        // LLAMADA A LA FUNCIÓN DEL ALUMNO
        const res = await verificarToken(token);
        tokenResult.className = 'output-box output-success';
        tokenResult.textContent = `✅ ÉXITO:\n${JSON.stringify(res, null, 2)}`;
    } catch (error) {
        tokenResult.className = 'output-box output-error';
        tokenResult.textContent = `❌ ERROR CAPTURADO (REJECT):\n${error.message}`;
    } finally {
        btnToken.disabled = false;
    }
});

// -----------------------------------------------------------------------------
// EVENTO 2: Obtener Usuario (Async / Await + Fetch + 404)
// -----------------------------------------------------------------------------
btnUser.addEventListener('click', async () => {
    const userId = userIdInput.value.trim();
    btnUser.disabled = true;
    userResult.className = 'output-box output-loading';
    userResult.textContent = `⏳ Consultando usuario #${userId}...`;

    try {
        // LLAMADA A LA FUNCIÓN DEL ALUMNO
        const user = await obtenerUsuario(userId);

        if (!user) {
            userResult.className = 'output-box output-error';
            userResult.textContent = `⚠️ La función retornó null o undefined.\n(Verifica si atrapaste el error 404 en el catch).`;
        } else {
            userResult.className = 'output-box output-success';
            userResult.textContent = `👤 USUARIO ENCONTRADO:\nNombre: ${user.nombre}\nEmail: ${user.email}\nCiudad: ${user.ciudad}`;
        }
    } catch (error) {
        // Si la función lanza un error no atrapado
        userResult.className = 'output-box output-error';
        userResult.textContent = `❌ ERROR INESPERADO:\n${error.message}`;
    } finally {
        btnUser.disabled = false;
    }
});

// -----------------------------------------------------------------------------
// EVENTO 3: Benchmark (Serie vs Paralelo)
// -----------------------------------------------------------------------------
const IDS_POSTS = [1, 2, 3, 4, 5];

btnSerie.addEventListener('click', async () => {
    setBenchmarkButtons(true);
    timerSerie.textContent = 'Calculando...';
    benchmarkOutput.className = 'output-box output-loading';
    benchmarkOutput.textContent = '⏳ Ejecutando llamadas en serie (una detrás de otra)...';

    const t0 = performance.now();
    try {
        // LLAMADA A LA FUNCIÓN DEL ALUMNO
        const posts = await obtenerPostsEnSerie(IDS_POSTS);
        const tiempoTotal = (performance.now() - t0).toFixed(0);

        timerSerie.textContent = `${tiempoTotal} ms`;
        benchmarkOutput.className = 'output-box output-success';
        benchmarkOutput.textContent = `✅ En serie se descargaron ${posts.length} posts en ${tiempoTotal}ms.`;
    } catch (err) {
        benchmarkOutput.className = 'output-box output-error';
        benchmarkOutput.textContent = `❌ Error en ejecución en serie: ${err.message}`;
    } finally {
        setBenchmarkButtons(false);
    }
});

btnParalelo.addEventListener('click', async () => {
    setBenchmarkButtons(true);
    timerParalelo.textContent = 'Calculando...';
    benchmarkOutput.className = 'output-box output-loading';
    benchmarkOutput.textContent = '⚡ Ejecutando llamadas en paralelo (todas al mismo tiempo con Promise.all)...';

    const t0 = performance.now();
    try {
        const posts = await obtenerPostsEnParalelo(IDS_POSTS);
        const tiempoTotal = (performance.now() - t0).toFixed(0);

        timerParalelo.textContent = `${tiempoTotal} ms`;
        benchmarkOutput.className = 'output-box output-success';
        benchmarkOutput.textContent = `⚡ En paralelo se descargaron ${posts.length} posts en solo ${tiempoTotal}ms.\n(Compara la diferencia de tiempo con el botón en serie).`;
    } catch (err) {
        benchmarkOutput.className = 'output-box output-error';
        benchmarkOutput.textContent = `❌ Error en ejecución con Promise.all: ${err.message}`;
    } finally {
        setBenchmarkButtons(false);
    }
});

function setBenchmarkButtons(disabled) {
    btnSerie.disabled = disabled;
    btnParalelo.disabled = disabled;
}
