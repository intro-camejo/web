# Guia 5 - Docker

> Para realizar estos ejercicios se necesita tener Docker instalado. Si no se cuenta con una instalacion local, se puede utilizar [Play with Docker](https://labs.play-with-docker.com/) desde el navegador.

### Ejercicios introductorios

1. Descargar la imagen oficial de `nginx` desde Docker Hub utilizando el comando `docker pull`. Verificar que la imagen se haya descargado correctamente listando las imagenes disponibles con `docker images`.

2. Ejecutar un contenedor a partir de la imagen de `nginx` en modo interactivo. Luego, detener el contenedor con `docker stop` y verificar que ya no aparece en la lista de contenedores activos (`docker ps`).

3. Listar todos los contenedores existentes (activos e inactivos) utilizando `docker ps -a`. Luego, eliminar todos los contenedores detenidos con `docker rm`.

4. Ejecutar un contenedor de `ubuntu` en modo interactivo (`-it`) y dentro del contenedor ejecutar el comando `cat /etc/os-release` para verificar la version del sistema operativo. Salir del contenedor con `exit`.

5. Descargar la imagen de `alpine` (una distribucion Linux muy liviana). Comparar el tamaño de la imagen de `alpine` con la de `ubuntu` utilizando `docker images`. Anotar la diferencia de tamaño.

6. Ejecutar un contenedor de `nginx` en segundo plano (modo detached con `-d`) y asignarle el nombre `mi-servidor` utilizando la opcion `--name`. Verificar que esta corriendo con `docker ps`. Luego, ver los logs del contenedor con `docker logs mi-servidor`.

### Imagenes y Contenedores

7. Ejecutar un contenedor de `nginx` mapeando el puerto 8080 del host al puerto 80 del contenedor (`-p 8080:80`). Acceder desde el navegador a `http://localhost:8080` y verificar que se muestra la pagina por defecto de nginx.

8. Ejecutar un contenedor de `postgres` (version 15) configurando las siguientes variables de entorno con la opcion `-e`:
   - `POSTGRES_USER=alumno`
   - `POSTGRES_PASSWORD=clave123`
   - `POSTGRES_DB=universidad`

   Verificar que el contenedor se esta ejecutando correctamente.

9. Crear una carpeta en el host llamada `mi-web` con un archivo `index.html` que contenga un mensaje de bienvenida. Ejecutar un contenedor de `nginx` montando esa carpeta como volumen (`-v`) en la ruta `/usr/share/nginx/html` del contenedor. Acceder desde el navegador y verificar que se muestra el contenido personalizado.

10. Ejecutar un contenedor de `mysql` (version 8) con las siguientes configuraciones:
    - Nombre del contenedor: `mi-mysql`
    - Variable de entorno: `MYSQL_ROOT_PASSWORD=root123`
    - Puerto mapeado: `3307:3306`
    - Ejecucion en segundo plano

    Luego, conectarse al contenedor con `docker exec -it mi-mysql mysql -uroot -p` y crear una base de datos llamada `prueba`.

11. Ejecutar un contenedor de `node` (version 20) en modo interactivo y dentro del contenedor ejecutar `node -e "console.log('Hola desde Docker')"`. Observar la salida por pantalla.

12. Ejecutar un contenedor de `postgres` con un volumen con nombre (named volume) llamado `datos-postgres` montado en `/var/lib/postgresql/data`. Crear una tabla dentro de la base de datos. Luego, detener y eliminar el contenedor. Crear un nuevo contenedor de `postgres` montando el mismo volumen y verificar que la tabla sigue existiendo.

### Dockerfile

13. Crear un archivo `Dockerfile` que parta de la imagen de `node:20-alpine`, copie un archivo `app.js` (que imprima "Hola mundo desde mi contenedor") al directorio de trabajo `/app`, y defina como comando de inicio `node app.js`. Construir la imagen con `docker build` y ejecutar un contenedor a partir de ella.

14. Crear un `Dockerfile` para una aplicacion web estatica que:
    - Use `nginx:alpine` como imagen base
    - Copie el contenido de una carpeta `sitio/` (con al menos un `index.html`) a `/usr/share/nginx/html`
    - Exponga el puerto 80

    Construir la imagen con el nombre `mi-sitio` y ejecutar un contenedor mapeando el puerto 8080 al 80.

15. Crear un `Dockerfile` que parta de `python:3.11-slim`, establezca `/app` como directorio de trabajo (`WORKDIR`), copie un archivo `requirements.txt` y ejecute `pip install -r requirements.txt` para instalar las dependencias. Luego, copie el resto del codigo y defina como comando de inicio `python main.py`. El archivo `main.py` debe imprimir "Servidor iniciado" por pantalla.

16. Construir una imagen a partir del Dockerfile del ejercicio anterior y etiquetarla con el nombre `mi-app-python` y la version `1.0` (`docker build -t mi-app-python:1.0 .`). Luego, listar las imagenes y verificar que aparece con el tag correcto.

### Docker Compose

17. Crear un archivo `docker-compose.yml` que defina un unico servicio llamado `web` que utilice la imagen de `nginx` y mapee el puerto `8080:80`. Levantar el servicio con `docker compose up -d` y verificar que funciona accediendo desde el navegador.

18. Crear un archivo `docker-compose.yml` que defina dos servicios:
    - `db`: un contenedor de `postgres:15` con las variables de entorno `POSTGRES_USER`, `POSTGRES_PASSWORD` y `POSTGRES_DB`.
    - `adminer`: un contenedor de `adminer` con el puerto `8080:8080`.

    Levantar ambos servicios y acceder a Adminer desde el navegador para conectarse a la base de datos PostgreSQL. El nombre del servidor debe ser `db` (el nombre del servicio).

19. Crear un archivo `docker-compose.yml` que defina los siguientes servicios:
    - `app`: un servicio que se construya a partir de un `Dockerfile` local (utilizar `build: .`), mapee el puerto `3000:3000` y dependa del servicio `db` (`depends_on`).
    - `db`: un servicio de `postgres:15` con un volumen persistente.

    Incluir una seccion `volumes:` a nivel raiz para definir el volumen con nombre.

20. Crear un archivo `docker-compose.yml` que utilice un archivo `.env` para configurar las variables de entorno. El archivo `.env` debe contener:
    - `DB_USER=admin`
    - `DB_PASS=secreto`
    - `DB_NAME=miapp`

    El archivo `docker-compose.yml` debe definir un servicio de `postgres` que use esas variables con la sintaxis `${VARIABLE}`. Levantar el servicio y verificar que la base de datos se creo con los valores definidos en el `.env`.

### Desafios

21. Crear un entorno completo de desarrollo para una aplicacion web con `docker-compose.yml` que incluya:
    - Un servicio `frontend` con `nginx` sirviendo archivos estaticos desde una carpeta local.
    - Un servicio `backend` construido desde un `Dockerfile` que ejecute una aplicacion en Node.js o Python.
    - Un servicio `db` con `postgres` y un volumen persistente para los datos.
    - Una red personalizada para que todos los servicios se comuniquen entre si.

22. Escribir un `Dockerfile` multi-stage para una aplicacion Node.js que:
    - En la primera etapa (`builder`), parta de `node:20`, copie el codigo, instale las dependencias y ejecute el build.
    - En la segunda etapa, parta de `nginx:alpine` y copie los archivos generados en la etapa anterior a la carpeta de nginx.

    Construir la imagen y comparar su tamaño con una imagen que no utilice multi-stage.

23. Simular un escenario de base de datos con datos iniciales. Crear un `docker-compose.yml` con un servicio de `postgres` que monte un archivo `init.sql` en la carpeta `/docker-entrypoint-initdb.d/` del contenedor. El archivo `init.sql` debe crear una tabla `alumnos` con columnas `id`, `nombre`, `apellido` y `legajo`, e insertar al menos 3 registros. Verificar que al levantar el contenedor la tabla ya contiene los datos.

24. Dado el siguiente escenario: se tiene una aplicacion web compuesta por un frontend (React o HTML estatico), un backend (Node.js o Python) y una base de datos (PostgreSQL). Escribir todos los archivos necesarios (`Dockerfile`, `docker-compose.yml`, `.env`, codigo fuente minimo) para que con un unico comando (`docker compose up`) se levante toda la infraestructura y la aplicacion sea accesible desde el navegador.
