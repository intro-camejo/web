---
sidebar_position: 11
---

# Backend con Node.js y Express

Este apunte cubre cómo crear un servidor backend con Node.js y Express: desde el primer "Hola mundo" hasta una API completa con base de datos SQLite.

## Introducción

### ¿Qué es un backend?

El **backend** es la parte de una aplicación que corre en el servidor. Se encarga de:
- Recibir peticiones HTTP del frontend (como vimos en el apunte de APIs REST).
- Procesar la lógica de negocio (validaciones, cálculos).
- Comunicarse con la base de datos (como vimos en el apunte de SQL).
- Devolver respuestas al frontend.

```
  Navegador                  Servidor                   Base de Datos
  (Frontend)                 (Backend)
  ┌──────────┐    HTTP/JSON  ┌──────────┐     SQL      ┌──────────┐
  │ HTML     │ ────────────> │ Node.js  │ ───────────> │ SQLite   │
  │ CSS      │ <──────────── │ Express  │ <─────────── │          │
  │ JS       │               └──────────┘              └──────────┘
  └──────────┘
```

---

## Node.js

**Node.js** permite ejecutar JavaScript fuera del navegador. Mientras que en el apunte de JavaScript vimos JS corriendo en el navegador, Node.js lo ejecuta en el servidor.

### npm y package.json

**npm** (Node Package Manager) es el gestor de paquetes de Node.js. Permite instalar librerías de terceros.

```bash
# Crear un proyecto nuevo
mkdir mi-api
cd mi-api
npm init -y
```

Esto crea un archivo `package.json` que describe tu proyecto y sus dependencias:

```json
{
  "name": "mi-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}
```

### Instalar dependencias

```bash
npm install express
```

Esto descarga la librería en la carpeta `node_modules/` y la agrega a `package.json`.

**Importante:** `node_modules/` nunca se sube al repositorio. Siempre incluila en el `.gitignore`:

```
node_modules/
```

Cuando alguien clone tu proyecto, ejecuta `npm install` y npm descarga todas las dependencias automáticamente a partir del `package.json`.

---

## Express

**Express** es el framework más popular de Node.js para crear servidores HTTP. Simplifica enormemente el manejo de rutas, peticiones y respuestas.

```bash
npm install express
```

---

## Primer servidor

```javascript
// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ mensaje: 'Hola mundo desde Express!' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

Ejecutalo:

```bash
node index.js
```

Abrí `http://localhost:3000` en el navegador y vas a ver el JSON. También podés probarlo con curl (como vimos en el apunte de Bash):

```bash
curl http://localhost:3000
```

### ¿Qué hace cada parte?

- `require('express')`: importa la librería Express.
- `express()`: crea una aplicación Express.
- `app.get('/', ...)`: define qué pasa cuando alguien hace un GET a `/`.
- `req`: el objeto con la información de la petición.
- `res`: el objeto para enviar la respuesta.
- `res.json(...)`: envía una respuesta en formato JSON.
- `app.listen(PORT, ...)`: inicia el servidor en el puerto indicado.

---

## Rutas y métodos

Las rutas definen qué hace tu servidor ante cada petición. Usando los métodos HTTP que vimos en el apunte de APIs REST:

```javascript
// GET: obtener datos
app.get('/api/tareas', (req, res) => {
    res.json([{ id: 1, titulo: 'Estudiar' }]);
});

// POST: crear un recurso
app.post('/api/tareas', (req, res) => {
    const { titulo } = req.body;
    res.status(201).json({ id: 2, titulo: titulo });
});

// PUT: actualizar un recurso
app.put('/api/tareas/:id', (req, res) => {
    const { id } = req.params;
    const { titulo } = req.body;
    res.json({ id: id, titulo: titulo });
});

// DELETE: eliminar un recurso
app.delete('/api/tareas/:id', (req, res) => {
    const { id } = req.params;
    res.json({ mensaje: `Tarea ${id} eliminada` });
});
```

### Parámetros de ruta

Los `:id` en la URL son **parámetros de ruta**. Se acceden con `req.params`:

```javascript
app.get('/api/tareas/:id', (req, res) => {
    const { id } = req.params;  // si la URL es /api/tareas/5, id = "5"
    res.json({ id: id });
});
```

### Parámetros de query

Los parámetros de query (`?clave=valor`) se acceden con `req.query`:

```javascript
// GET /api/tareas?completada=true&orden=fecha
app.get('/api/tareas', (req, res) => {
    const { completada, orden } = req.query;
    console.log(completada);  // "true"
    console.log(orden);       // "fecha"
});
```

### Body de la petición

Para leer el body de peticiones POST/PUT, necesitás el middleware `express.json()`:

```javascript
app.use(express.json());  // ANTES de las rutas

app.post('/api/tareas', (req, res) => {
    const { titulo, descripcion } = req.body;
    // titulo y descripcion vienen del JSON que envió el cliente
});
```

---

## Middleware

Un **middleware** es una función que se ejecuta **entre** que llega la petición y se envía la respuesta. Se usa para tareas comunes como parsear JSON, loggear peticiones, manejar autenticación, etc.

```javascript
// Middleware que loggea cada petición
function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();  // IMPORTANTE: llamar a next() para pasar al siguiente middleware/ruta
}

app.use(express.json());   // parsea el body JSON
app.use(logger);            // loggea cada petición
```

### Middlewares comunes de Express

```javascript
app.use(express.json());                // parsear JSON en el body
app.use(express.static('public'));      // servir archivos estáticos (HTML, CSS, JS)
```

`express.static('public')` sirve todos los archivos de la carpeta `public/` automáticamente. Si ponés un `index.html` ahí, se sirve cuando alguien accede a `/`.

### El orden importa

Los middlewares se ejecutan en el orden en que los registrás. Por eso, ponelos **antes** de las rutas:

```javascript
// 1. Primero los middlewares
app.use(express.json());
app.use(logger);

// 2. Después las rutas
app.get('/api/tareas', (req, res) => { /* ... */ });
```

---

## Estructura de un proyecto

Cuando tu proyecto crece, organizá el código en carpetas:

```
mi-api/
├── src/
│   ├── routes/
│   │   └── tareas.routes.js
│   ├── controllers/
│   │   └── tareas.controller.js
│   ├── database/
│   │   └── connection.js
│   └── middleware/
│       └── logger.js
├── .env
├── .gitignore
├── index.js
└── package.json
```

### Separando las rutas

```javascript
// src/routes/tareas.routes.js
const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareas.controller');

router.get('/', tareasController.obtenerTodas);
router.get('/:id', tareasController.obtenerPorId);
router.post('/', tareasController.crear);
router.put('/:id', tareasController.actualizar);
router.delete('/:id', tareasController.eliminar);

module.exports = router;
```

### Separando los controladores

```javascript
// src/controllers/tareas.controller.js

function obtenerTodas(req, res) {
    res.json({ mensaje: 'Listado de tareas' });
}

function obtenerPorId(req, res) {
    const { id } = req.params;
    res.json({ mensaje: `Tarea ${id}` });
}

function crear(req, res) {
    const { titulo } = req.body;
    res.status(201).json({ mensaje: 'Tarea creada' });
}

function actualizar(req, res) {
    const { id } = req.params;
    res.json({ mensaje: `Tarea ${id} actualizada` });
}

function eliminar(req, res) {
    const { id } = req.params;
    res.json({ mensaje: `Tarea ${id} eliminada` });
}

module.exports = { obtenerTodas, obtenerPorId, crear, actualizar, eliminar };
```

### Conectando todo en index.js

```javascript
// index.js
const express = require('express');
const app = express();
const tareasRoutes = require('./src/routes/tareas.routes');

app.use(express.json());
app.use('/api/tareas', tareasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

Con `app.use('/api/tareas', tareasRoutes)` todas las rutas del router se montan bajo el prefijo `/api/tareas`.

---

## Conectando a una base de datos SQL

Como vimos en el apunte de SQL, las bases de datos permiten almacenar datos de forma estructurada. Vamos a usar **SQLite** — una base de datos liviana que guarda todo en un solo archivo, sin necesitar un servidor aparte.

### Instalación

```bash
npm install better-sqlite3
```

### Creando la conexión

```javascript
// src/database/connection.js
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'tareas.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

db.exec(`
    CREATE TABLE IF NOT EXISTS tareas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        descripcion TEXT,
        completada INTEGER DEFAULT 0,
        fecha_creacion TEXT DEFAULT (datetime('now'))
    )
`);

module.exports = db;
```

### Ejecutando consultas

Con `better-sqlite3` usás **prepared statements**:

```javascript
const db = require('./connection');

// SELECT todos
const tareas = db.prepare('SELECT * FROM tareas').all();

// SELECT uno por ID
const tarea = db.prepare('SELECT * FROM tareas WHERE id = ?').get(42);

// INSERT
const resultado = db.prepare(
    'INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)'
).run('Estudiar Node.js', 'Leer el apunte completo');
console.log(resultado.lastInsertRowid);  // el ID del nuevo registro

// UPDATE
db.prepare(
    'UPDATE tareas SET completada = ? WHERE id = ?'
).run(1, 42);

// DELETE
db.prepare('DELETE FROM tareas WHERE id = ?').run(42);
```

### SQL Injection: ¡cuidado!

**Nunca concatenes** valores en el string SQL:

```javascript
// PELIGROSO - vulnerable a SQL injection
const query = `SELECT * FROM tareas WHERE id = ${req.params.id}`;

// SEGURO - consulta parametrizada
db.prepare('SELECT * FROM tareas WHERE id = ?').get(req.params.id);
```

Los placeholders `?` se reemplazan de forma segura, escapando caracteres especiales.

---

## CRUD completo

Actualizamos el controlador para usar la base de datos:

```javascript
// src/controllers/tareas.controller.js
const db = require('../database/connection');

function obtenerTodas(req, res) {
    try {
        const tareas = db.prepare('SELECT * FROM tareas ORDER BY fecha_creacion DESC').all();
        res.json(tareas);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

function obtenerPorId(req, res) {
    try {
        const tarea = db.prepare('SELECT * FROM tareas WHERE id = ?').get(req.params.id);
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.json(tarea);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

function crear(req, res) {
    try {
        const { titulo, descripcion } = req.body;

        if (!titulo || titulo.trim() === '') {
            return res.status(400).json({ error: 'El título es obligatorio' });
        }

        const resultado = db.prepare(
            'INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)'
        ).run(titulo.trim(), descripcion || null);

        const nuevaTarea = db.prepare('SELECT * FROM tareas WHERE id = ?').get(
            resultado.lastInsertRowid
        );
        res.status(201).json(nuevaTarea);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

function actualizar(req, res) {
    try {
        const { id } = req.params;
        const { titulo, descripcion, completada } = req.body;

        const tareaExistente = db.prepare('SELECT * FROM tareas WHERE id = ?').get(id);
        if (!tareaExistente) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }

        if (!titulo || titulo.trim() === '') {
            return res.status(400).json({ error: 'El título es obligatorio' });
        }

        db.prepare(
            'UPDATE tareas SET titulo = ?, descripcion = ?, completada = ? WHERE id = ?'
        ).run(titulo.trim(), descripcion || null, completada ? 1 : 0, id);

        const tareaActualizada = db.prepare('SELECT * FROM tareas WHERE id = ?').get(id);
        res.json(tareaActualizada);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

function eliminar(req, res) {
    try {
        const { id } = req.params;
        const tarea = db.prepare('SELECT * FROM tareas WHERE id = ?').get(id);
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        db.prepare('DELETE FROM tareas WHERE id = ?').run(id);
        res.json({ mensaje: `Tarea ${id} eliminada correctamente` });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { obtenerTodas, obtenerPorId, crear, actualizar, eliminar };
```

### Probando con curl

```bash
# Crear tareas
curl -X POST http://localhost:3000/api/tareas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Estudiar para el parcial", "descripcion": "Repasar SQL y Backend"}'

# Listar todas
curl http://localhost:3000/api/tareas

# Obtener una
curl http://localhost:3000/api/tareas/1

# Actualizar
curl -X PUT http://localhost:3000/api/tareas/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Estudiar para el parcial", "completada": true}'

# Eliminar
curl -X DELETE http://localhost:3000/api/tareas/1
```

---

## Manejo de errores

### try/catch en las rutas

Siempre envolvé las operaciones que pueden fallar en `try/catch`:

```javascript
function obtenerTodas(req, res) {
    try {
        const tareas = db.prepare('SELECT * FROM tareas').all();
        res.json(tareas);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
```

### Middleware de manejo de errores

Express tiene un middleware especial con **4 parámetros** que se pone al final:

```javascript
// Ruta 404 (después de todas las rutas)
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Middleware de errores (siempre al final)
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Error interno del servidor' });
});
```

---

## Variables de entorno

No hardcodees contraseñas, claves o configuraciones en el código. Usá **variables de entorno**.

### Archivos .env

```bash
npm install dotenv
```

Creá un archivo `.env`:

```
PORT=3000
DB_PATH=./src/database/tareas.db
```

Leelo al inicio de tu app:

```javascript
// index.js
require('dotenv').config();

const PORT = process.env.PORT || 3000;
```

**Importante**: `.env` nunca se sube al repositorio. Agregalo al `.gitignore`:

```
node_modules/
.env
*.db
```

Creá un `.env.example` como referencia:

```
PORT=3000
DB_PATH=./src/database/tareas.db
```

---

## Ejemplo integrador

### Paso a paso para crear tu API

```bash
# 1. Crear el proyecto
mkdir mi-api && cd mi-api
npm init -y
npm install express better-sqlite3 dotenv

# 2. Crear la estructura
mkdir -p src/routes src/controllers src/database src/middleware
```

### index.js completo

```javascript
require('dotenv').config();
const express = require('express');
const app = express();
const tareasRoutes = require('./src/routes/tareas.routes');

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API de Tareas funcionando',
        endpoints: {
            'GET /api/tareas': 'Obtener todas las tareas',
            'GET /api/tareas/:id': 'Obtener una tarea por ID',
            'POST /api/tareas': 'Crear una nueva tarea',
            'PUT /api/tareas/:id': 'Actualizar una tarea',
            'DELETE /api/tareas/:id': 'Eliminar una tarea',
        },
    });
});

app.use('/api/tareas', tareasRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### Iniciá el servidor

```bash
npm start
```

---

## Resumen

1. **Node.js** permite ejecutar JavaScript fuera del navegador.
2. **npm** gestiona las dependencias del proyecto.
3. **Express** simplifica la creación de servidores HTTP.
4. Definimos **rutas** para cada método HTTP (GET, POST, PUT, DELETE).
5. Los **middleware** procesan peticiones antes de que lleguen a las rutas.
6. **Organizamos** el proyecto en carpetas (routes, controllers, database).
7. **SQLite** es una base de datos simple, sin servidor aparte.
8. Las **consultas parametrizadas** previenen SQL injection.
9. El **manejo de errores** con try/catch mantiene la API robusta.
10. Las **variables de entorno** protegen información sensible.

Con estos conocimientos, ya tenés las herramientas para construir APIs funcionales. En el apunte de Integración vamos a conectar este backend con un frontend y Docker Compose.
