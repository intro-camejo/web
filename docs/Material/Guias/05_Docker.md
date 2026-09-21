# Guía 6 - Docker y Docker Compose

*<u>__Nota__</u>: para estos ejercicios necesitás tener Docker instalado y corriendo. Podés verificarlo con `docker --version`.*

### Básico - Correr contenedores

1. Correr un contenedor a partir de la imagen `hello-world` y observar la salida. Listar con `docker ps -a` el contenedor que quedó creado (aunque ya haya terminado de ejecutarse).
2. Correr un contenedor interactivo a partir de la imagen `ubuntu` (usando `-it`), y desde adentro verificar la versión del sistema operativo con `cat /etc/os-release`.
3. Listar todas las imágenes descargadas localmente con `docker images`.
4. Eliminar el contenedor de `hello-world` que quedó detenido y luego eliminar la imagen `hello-world` del sistema.
5. Correr un contenedor de `nginx` en segundo plano (`-d`), mapeando el puerto 8080 de tu máquina al puerto 80 del contenedor. Verificar desde el navegador (o con `curl localhost:8080`) que el servidor responde.
6. Ver los logs de ese contenedor con `docker logs`, y detenerlo con `docker stop`.

### Dockerfile

Vamos a armar una imagen custom para una pequeña app.

7. Crear un archivo `app.py` que imprima `"Hola desde el contenedor!"` por consola.
8. Escribir un `Dockerfile` que:
   - Use como base una imagen de Python (`python:3.12-slim`).
   - Copie `app.py` dentro del contenedor.
   - Defina como comando por defecto la ejecución de `app.py`.
9. Construir la imagen con `docker build`, asignándole un tag (por ejemplo `mi-app:1.0`).
10. Correr un contenedor a partir de esa imagen y confirmar que se imprime el mensaje esperado.
11. Modificar `app.py` para que reciba el mensaje a imprimir desde una **variable de entorno** (`MENSAJE`), con un valor por defecto si no se especifica. Reconstruir la imagen y correr el contenedor pasando `-e MENSAJE="otro texto"` para verificar que toma el valor correcto.

### Volúmenes

12. Modificar `app.py` para que, en lugar de solo imprimir el mensaje, lo escriba también en un archivo `salida.txt` dentro de una carpeta `/data`.
13. Correr el contenedor montando un volumen que mapee una carpeta local a `/data` dentro del contenedor (`-v`). Verificar que `salida.txt` aparece en tu máquina, fuera del contenedor.
14. Eliminar el contenedor y volver a correrlo con el mismo volumen montado. Confirmar que el archivo `salida.txt` persiste (a diferencia de un archivo que se hubiera escrito sin volumen).

### Docker Compose

Ahora vamos a armar un mini sistema con dos servicios: una app y una base de datos.

15. Crear un archivo `docker-compose.yml` que defina dos servicios:
    - `db`: usando la imagen `postgres:16`, con las variables de entorno necesarias para definir usuario, contraseña y nombre de base de datos.
    - `app`: construida a partir del `Dockerfile` del ejercicio 7-11, que dependa del servicio `db` (`depends_on`).
16. Levantar ambos servicios con `docker-compose up`, y verificar con `docker-compose ps` que los dos están corriendo.
17. Agregar al `docker-compose.yml` un volumen nombrado para la base de datos, de forma que los datos persistan aunque se recreen los contenedores. Probarlo: crear una tabla de prueba en la base, bajar los servicios (`docker-compose down`), levantarlos de nuevo, y verificar que la tabla sigue existiendo.