# Ayudantía Docker - IIC2513

###### "En mi local funciona" - Todos, alguna vez.

## Qué es Docker?

Docker es una plataforma que permite crear, desplegar y ejecutar aplicaciones en contenedores. Un contenedor es una unidad estandarizada de software que empaqueta el código y todas sus dependencias para que la aplicación se ejecute rápida y confiablemente en diferentes entornos computacionales.

Piensen en docker como un paquete de nuestro código, dependencias y configuraciones, que podemos llevar a cualquier parte y ejecutar sin preocuparnos de si el entorno es el correcto.

## Cómo?

Respuesta rápida: Imagenes y contenedores.

Las imagenes son **instrucciones** para crear un contenedor. Son inmutables, es decir, no cambian una vez creadas.

En cambio, los contenedores son instancias en **ejecución** de estas imagenes. Puedes pensar en una imagen como una receta y en un contenedor como el plato cocinado. La gracia de esto, es que con una imagen puedes crear los contenedores que quieras, permitiendo mayor escalabilidad y eficiencia.

## Por qué usar Docker?

-   **Portabilidad**: Los contenedores Docker pueden ejecutarse en cualquier lugar, ya sea en tu máquina local, en un servidor o en la nube.

-   **Aislamiento**: Cada contenedor es independiente, lo que significa que puedes ejecutar múltiples aplicaciones en la misma máquina sin conflictos.

-   **Escalabilidad**: Docker facilita la creación y gestión de aplicaciones distribuidas y escalables.

-   **Eficiencia**: Los contenedores son ligeros y utilizan menos recursos que las máquinas virtuales tradicionales.

## Docker vs VMs

| Característica      | Docker                      | Máquina Virtual            |
| ------------------- | --------------------------- | -------------------------- |
| Tamaño              | Ligero                      | Pesado                     |
| Rendimiento         | Alto                        | Bajo                       |
| Aislamiento         | Bajo                        | Alto                       |
| Inicio              | Rápido                      | Lento                      |
| Portabilidad        | Alta                        | Media                      |
| Recursos            | Compartidos                 | Dedicados                  |
| Sistema Operativo   | Comparte el kernel del host | Cada VM tiene su propio SO |
| Uso de Recursos     | Bajo                        | Alto                       |
| Gestión de Recursos | Compartido                  | Dedicado                   |
| Ejecución           | En el mismo kernel del host | En un hypervisor           |

![Docker vs VMs](images/docker_vs_vms.png)

## Instalación de Docker

Les recomnendamos instalar Docker Desktop, que incluye tanto Docker como Docker Compose. Puedes descargarlo desde [aquí](https://www.docker.com/products/docker-desktop).

## Usar Docker

1. Instalar Docker Desktop. Les instala una GUI muy útil para ver los contenedores que están corriendo, imágenes, etc. Y también viene con un CLI, que es lo que vamos a usar en esta ayudantía.
2. Verificar la instalación con `docker --version`.
3. Dockerizando nuestra aplicación:
    - Crear un archivo llamado `Dockerfile` en la raíz de tu proyecto.
    - Escribir las instrucciones para crear la imagen de tu aplicación. (Ver Dockerfile de ejemplo)
    - Construir la imagen con el comando `docker build -t <nombre_imagen> .`. La flag `-t` le da un nombre a la imagen, y el `.` indica que el path desde donde ejecutamos el comando es el directorio actual.
    - Ejecutar el contenedor con el comando `docker run -p 8080:80 nombre_imagen`. La flag `-p` es para hacer _port forwarding_, lo importante de esto es que genera un puente entre el contenedor y la máquina en donde se ejecuta. En este caso, el contenedor escucha en el puerto 80, y lo mapea al puerto 8080 de la máquina local. Esto significa que si accedemos a `localhost:8080`, estamos accediendo al contenedor.
4. Verificar que el contenedor está corriendo con `docker ps`. Esto nos muestra todos los contenedores que están corriendo en la máquina. Si queremos ver todos los contenedores, incluyendo los que están detenidos, usamos `docker ps -a`.
5. Detener un contenedor con `docker stop <id_contenedor>`. El id del contenedor lo podemos ver con el comando anterior.
6. Pro tip: Usar Docker desktop para ver logs de los contenedores y debuggear posibles problemas que puedan encontrar.

## Extra: Orquestar contenedores con Docker Compose

Docker Compose es una herramienta que permite definir y ejecutar aplicaciones multi-contenedor. Con Docker Compose, puedes definir todos los servicios de tu aplicación en un solo archivo `docker-compose.yml` y luego iniciar todos los contenedores con un solo comando.

Esto es útil si tenemos una aplicación con una base de datos, una API para el backend, servicios varios, etc. y queremos correr todo junto, en vez de cada contenedor por separado.

Para correr el `docker-compose.yml` que les dejamos:

```bash
docker-compose up -d --build
# o docker compose up, según su OS.
```

Para ver los logs de todos los contenedores:

```bash
docker-compose logs
```

Para ver los logs en tiempo real:

```bash
docker-compose logs -f
```

Para detener los contenedores:

```bash
docker-compose down
```

_Et voilà!_
