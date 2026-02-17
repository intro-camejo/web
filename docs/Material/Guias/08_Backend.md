# Guia 8 - Backend

> **Herramientas recomendadas para probar APIs:** Para realizar los ejercicios de esta guia vas a necesitar una herramienta para enviar peticiones HTTP. Podés usar cualquiera de las siguientes:
> - **curl** (desde la terminal, ya lo vimos en la guia de Bash)
> - **Thunder Client** (extension de VS Code, muy practica)
> - **Postman** (aplicacion de escritorio)
>
> **Documentacion de referencia:**
> - [Node.js](https://nodejs.org/en/docs)
> - [Express.js](https://expressjs.com/)
> - [better-sqlite3](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md)

### HTTP y REST

1. Usando `curl` (o la herramienta que prefieras), realizar una peticion GET a la API publica `https://jsonplaceholder.typicode.com/posts/1`. Observar la respuesta e identificar: el codigo de estado, los headers y el body en formato JSON.

2. Realizar una peticion GET a `https://jsonplaceholder.typicode.com/posts` y observar que devuelve una lista de recursos. Luego, realizar una peticion GET a `https://jsonplaceholder.typicode.com/posts/9999` (un ID que no existe) y observar que codigo de estado devuelve.

3. Usando `curl`, realizar una peticion POST a `https://jsonplaceholder.typicode.com/posts` enviando un body JSON con los campos `title`, `body` y `userId`. Usar los headers correspondientes (`Content-Type: application/json`). Verificar que la respuesta tenga codigo de estado `201 Created`.

4. Realizar una peticion PUT a `https://jsonplaceholder.typicode.com/posts/1` enviando un body JSON completo con los campos `id`, `title`, `body` y `userId`. Verificar que la respuesta tenga codigo `200 OK`. Luego, realizar una peticion DELETE a `https://jsonplaceholder.typicode.com/posts/1` y verificar la respuesta.

5. Para cada una de las siguientes situaciones, indicar que metodo HTTP y que codigo de estado corresponde:
   - Un cliente solicita la lista de todos los usuarios.
   - Un cliente envia datos para crear un nuevo producto y se crea exitosamente.
   - Un cliente intenta acceder a un recurso que no existe.
   - Un cliente envia un JSON con formato invalido.
   - Un cliente elimina un recurso exitosamente.
   - Ocurre un error inesperado en el servidor.

### Node.js Basico

6. Crear una carpeta llamada `mi-api`. Dentro de ella, inicializar un proyecto de Node.js ejecutando `npm init -y`. Observar el archivo `package.json` que se genera e identificar los campos `name`, `version`, `main` y `scripts`.

7. En el proyecto creado en el ejercicio anterior, crear un archivo `index.js` que imprima por consola el mensaje `"Servidor iniciado"`. Agregar un script en `package.json` llamado `start` con el valor `"node index.js"` y ejecutar el proyecto con `npm start`.

8. Instalar el paquete `express` ejecutando `npm install express`. Verificar que se creo la carpeta `node_modules` y que `express` aparece como dependencia en `package.json`. Crear un archivo `.gitignore` que incluya `node_modules/`.

### Express - Rutas y Endpoints

9. Crear un servidor Express en `index.js` que escuche en el puerto 3000 y responda a `GET /hola` con un JSON `{ "mensaje": "Hola mundo!" }`. Iniciar el servidor con `node index.js` y probarlo con `curl http://localhost:3000/hola`.

10. Agregar al servidor del ejercicio anterior un endpoint `GET /fecha` que devuelva un JSON con la fecha y hora actual del servidor, por ejemplo: `{ "fecha": "2024-11-15T10:30:00.000Z" }`. Probarlo con curl o Thunder Client.

11. Crear un endpoint `GET /saludo/:nombre` que reciba un nombre como parametro de ruta y responda con un JSON `{ "mensaje": "Hola, <nombre>!" }`. Por ejemplo, `GET /saludo/Maria` deberia responder `{ "mensaje": "Hola, Maria!" }`.

12. Crear un endpoint `GET /suma` que reciba dos numeros como parametros de query (`a` y `b`) y devuelva un JSON con el resultado de la suma. Por ejemplo, `GET /suma?a=5&b=3` deberia responder `{ "resultado": 8 }`. Si falta alguno de los parametros, responder con status `400` y un mensaje de error.

13. Agregar al servidor el middleware `express.json()` y crear un endpoint `POST /usuarios` que reciba en el body un JSON con los campos `nombre` y `email`. El endpoint debe responder con status `201` y devolver el usuario recibido junto con un `id` generado (puede ser un numero aleatorio o incremental). Probarlo enviando un POST con curl:
    ```bash
    curl -X POST http://localhost:3000/usuarios \
      -H "Content-Type: application/json" \
      -d '{"nombre": "Juan", "email": "juan@mail.com"}'
    ```

14. Crear una API REST simple para gestionar una lista de productos almacenados en un array en memoria (no hace falta base de datos). Cada producto tiene `id`, `nombre` y `precio`. Implementar los siguientes endpoints:
    - `GET /api/productos` - Devuelve todos los productos.
    - `GET /api/productos/:id` - Devuelve un producto por su ID. Si no existe, responder con status `404`.
    - `POST /api/productos` - Crea un nuevo producto. Responder con status `201`.
    - `PUT /api/productos/:id` - Actualiza un producto existente. Si no existe, responder con `404`.
    - `DELETE /api/productos/:id` - Elimina un producto. Si no existe, responder con `404`.

### Express - Middleware y Validacion

15. Crear un middleware llamado `logger` que, para cada peticion que llegue al servidor, imprima por consola la fecha, el metodo HTTP y la URL. Por ejemplo: `[2024-11-15T10:30:00] GET /api/productos`. Registrar el middleware con `app.use(logger)` antes de las rutas.

16. Agregar validacion al endpoint `POST /api/productos` del ejercicio 14. El endpoint debe verificar que:
    - El campo `nombre` este presente y no sea un string vacio.
    - El campo `precio` este presente y sea un numero mayor a 0.

    Si alguna validacion falla, responder con status `400` y un JSON con el mensaje de error correspondiente. Probar enviando peticiones con datos invalidos.

17. Agregar al servidor un middleware que maneje las rutas no encontradas (un `app.use` al final de todas las rutas que responda con status `404` y un JSON `{ "error": "Ruta no encontrada" }`). Tambien agregar un middleware de manejo de errores con 4 parametros `(err, req, res, next)` que responda con status `500`.

18. Reorganizar el codigo del ejercicio 14 separando las rutas en un archivo `routes/productos.routes.js` usando `express.Router()`, y la logica de cada endpoint en un archivo `controllers/productos.controller.js`. El archivo `index.js` solo debe configurar los middlewares y montar las rutas con `app.use('/api/productos', productosRoutes)`.

### Integracion con Base de Datos

19. Instalar el paquete `better-sqlite3` con `npm install better-sqlite3`. Crear un archivo `database/connection.js` que:
    - Cree (o abra) una base de datos SQLite llamada `productos.db`.
    - Cree una tabla `productos` con los campos `id` (INTEGER PRIMARY KEY AUTOINCREMENT), `nombre` (TEXT NOT NULL) y `precio` (REAL NOT NULL).
    - Exporte la conexion a la base de datos.

    Verificar que al ejecutar el archivo se crea el archivo `productos.db`.

20. Modificar el controlador de productos del ejercicio 18 para que, en lugar de usar un array en memoria, use la base de datos SQLite. Implementar las operaciones CRUD usando consultas parametrizadas (con `?`):
    - `obtenerTodos`: `SELECT * FROM productos`
    - `obtenerPorId`: `SELECT * FROM productos WHERE id = ?`
    - `crear`: `INSERT INTO productos (nombre, precio) VALUES (?, ?)`
    - `actualizar`: `UPDATE productos SET nombre = ?, precio = ? WHERE id = ?`
    - `eliminar`: `DELETE FROM productos WHERE id = ?`

    Probar todos los endpoints con curl y verificar que los datos persisten al reiniciar el servidor.

21. Agregar a la tabla de productos un campo `categoria` (TEXT). Modificar el endpoint `GET /api/productos` para que acepte un parametro de query opcional `categoria` que filtre los productos por categoria. Por ejemplo, `GET /api/productos?categoria=electronica` deberia devolver solo los productos de esa categoria. Si no se envia el parametro, devolver todos los productos.

### Desafios

22. Crear una API REST completa para gestionar una lista de tareas (to-do list). Usar Express y SQLite. La tabla `tareas` debe tener los campos: `id`, `titulo` (TEXT NOT NULL), `descripcion` (TEXT), `completada` (INTEGER DEFAULT 0) y `fecha_creacion` (TEXT DEFAULT datetime('now')). Implementar:
    - `GET /api/tareas` - Listar todas las tareas (ordenadas por fecha de creacion descendente).
    - `GET /api/tareas/:id` - Obtener una tarea por ID.
    - `POST /api/tareas` - Crear una tarea (validar que el titulo no este vacio).
    - `PUT /api/tareas/:id` - Actualizar una tarea.
    - `DELETE /api/tareas/:id` - Eliminar una tarea.
    - `PATCH /api/tareas/:id/completar` - Marcar una tarea como completada (o desmarcarla).

    Agregar manejo de errores con `try/catch` en todos los endpoints. Organizar el proyecto en carpetas (`routes/`, `controllers/`, `database/`).

23. Agregar al proyecto del ejercicio anterior un endpoint `GET /api/tareas/stats` que devuelva estadisticas de las tareas:
    ```json
    {
      "total": 10,
      "completadas": 4,
      "pendientes": 6
    }
    ```
    Tambien agregar un parametro de query `completada` al endpoint `GET /api/tareas` para poder filtrar tareas completadas (`?completada=true`) o pendientes (`?completada=false`).

24. Crear un archivo `public/index.html` con un formulario simple para agregar tareas y una lista que muestre las tareas existentes. Usar `fetch()` desde JavaScript en el navegador para comunicarse con la API. Servir los archivos estaticos con `express.static('public')`. El frontend debe permitir:
    - Ver la lista de tareas.
    - Agregar una nueva tarea.
    - Marcar una tarea como completada.
    - Eliminar una tarea.
