# 🚀 Deploy de aplicación Node.js en Render

Este repositorio contiene una aplicación Node.js preparada para ser desplegada en [Render](https://render.com/), utilizando Docker. Incluye configuración de entorno y conexión a base de datos PostgreSQL con Sequelize.

## 🧪 Levantar localmente

1. Crea un archivo `.env` basado en `.env.example`

2. Inicia la aplicación con Docker Compose:

    ```bash
    docker-compose up --build
    ```

3. Accede a la app en `http://localhost:3001`.

---

## 🌐 Deploy en Render

1. Sube este repositorio a GitHub.
2. Entra a [Render](https://render.com/).
3. Crea una nueva instancia **Postgres**
4. Crea un nuevo **Web Service**:
   - Conecta tu cuenta de GitHub.
   - Selecciona este repositorio.
   - Render detectará el `Dockerfile`.
5. Configura las variables de entorno en la sección **Environment**.
6. Render construirá y desplegará automáticamente tu aplicación.

---

## ⚙️ Notas Adicionales
- ⚠️ No incluyas tu archivo .env en el repositorio ni lo copies dentro del contenedor Docker. Las credenciales deben manejarse de forma segura desde la plataforma.
- Para la base de datos, usa el host y credenciales que Render te da.
- Render no trabaja con ``docker compose``, no lo detectará.