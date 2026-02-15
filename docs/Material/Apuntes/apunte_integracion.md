---
sidebar_position: 12
---

# Integración: Frontend + Backend + Base de Datos

Este es el apunte que une todo lo que vimos durante la cursada. Vas a aprender cómo conectar un frontend (HTML/CSS/JS), un backend (Express), una base de datos (SQLite), y orquestar todo con Docker Compose.

## Introducción

### La foto completa

Una aplicación web full-stack tiene tres capas:

```
  ┌─────────────────────────────────────────────────────────────┐
  │                        USUARIO                              │
  │                    (Navegador web)                           │
  └──────────────────────────┬──────────────────────────────────┘
                             │ Interactúa
  ┌──────────────────────────▼──────────────────────────────────┐
  │                     FRONTEND                                │
  │              HTML + CSS + JavaScript                         │
  │         (lo que el usuario ve y toca)                        │
  └──────────────────────────┬──────────────────────────────────┘
                             │ fetch() con HTTP/JSON
  ┌──────────────────────────▼──────────────────────────────────┐
  │                      BACKEND                                │
  │               Node.js + Express                             │
  │        (API REST, validación, lógica)                        │
  └──────────────────────────┬──────────────────────────────────┘
                             │ SQL (consultas parametrizadas)
  ┌──────────────────────────▼──────────────────────────────────┐
  │                   BASE DE DATOS                             │
  │                      SQLite                                 │
  │           (almacenamiento persistente)                       │
  └─────────────────────────────────────────────────────────────┘
```

Cada capa tiene su responsabilidad:
- **Frontend**: la interfaz de usuario. Se comunica con el backend usando `fetch()` (como vimos en el apunte de JavaScript).
- **Backend**: la API REST. Recibe peticiones, las valida, opera sobre la base de datos y devuelve respuestas (como vimos en los apuntes de APIs REST y Backend).
- **Base de datos**: almacena los datos de forma persistente (como vimos en el apunte de SQL).

---

## Estructura del proyecto

```
mi-proyecto/
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── database.js
│   └── routes/
│       └── tareas.js
├── docker-compose.yml
├── Dockerfile.frontend
├── Dockerfile.backend
├── nginx.conf
└── README.md
```

Separar frontend y backend en carpetas distintas mantiene todo organizado y facilita el deploy con Docker.

---

## Conectando el Frontend al Backend

La conexión se hace con `fetch()` desde JavaScript en el navegador. El frontend envía peticiones HTTP al backend y recibe respuestas JSON.

### Ejemplo: cargar y mostrar tareas

```javascript
// frontend/app.js
const API_URL = 'http://localhost:3000/api/tareas';

async function cargarTareas() {
    try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}`);
        }

        const tareas = await respuesta.json();
        mostrarTareas(tareas);
    } catch (error) {
        if (error.message.includes('fetch')) {
            mostrarError('No se puede conectar al servidor. ¿Está corriendo el backend?');
        } else {
            mostrarError(error.message);
        }
    }
}
```

### Enviar datos al backend

```javascript
async function agregarTarea(titulo) {
    try {
        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo }),
        });

        if (!respuesta.ok) {
            const errorData = await respuesta.json();
            throw new Error(errorData.error || 'Error al crear la tarea');
        }

        return await respuesta.json();
    } catch (error) {
        mostrarError(error.message);
        return null;
    }
}
```

---

## CORS: qué es y por qué aparece

Cuando el frontend corre en `http://localhost:8080` y el backend en `http://localhost:3000`, el navegador bloquea las peticiones porque son **orígenes distintos**. Esto se llama **CORS** (Cross-Origin Resource Sharing).

### La solución

Instalar el paquete `cors` en el backend:

```bash
cd backend
npm install cors
```

```javascript
// backend/server.js
const cors = require('cors');
app.use(cors());  // permite peticiones de cualquier origen
```

Sin esto, vas a ver en la consola del navegador un error como:

```
Access to fetch at 'http://localhost:3000/api/tareas' from origin
'http://localhost:8080' has been blocked by CORS policy
```

---

## Flujo completo de una operación

Veamos paso a paso qué pasa cuando el usuario hace click en "Agregar Tarea":

```
1. USUARIO hace click en "Agregar"
   │
2. FRONTEND (app.js)
   │  evento "submit" del formulario
   │  lee el valor del input
   │  llama a fetch() con POST
   │
   ▼
3. HTTP: POST /api/tareas
   Body: { "titulo": "Estudiar para el parcial" }
   │
   ▼
4. BACKEND (Express)
   │  recibe la petición
   │  express.json() parsea el body
   │  valida que el título no esté vacío
   │  ejecuta INSERT en la base de datos
   │
   ▼
5. BASE DE DATOS (SQLite)
   │  INSERT INTO tareas (titulo) VALUES ('Estudiar para el parcial')
   │  devuelve el ID del nuevo registro
   │
   ▼
6. BACKEND
   │  hace SELECT del registro recién creado
   │  responde con 201 Created + el JSON de la tarea
   │
   ▼
7. HTTP: 201 Created
   Body: { "id": 5, "titulo": "Estudiar para el parcial", "completada": 0 }
   │
   ▼
8. FRONTEND
   │  recibe la respuesta
   │  actualiza la lista de tareas en el DOM
   │
   ▼
9. USUARIO ve la nueva tarea en la página
```

---

## Docker Compose para todo el stack

Como vimos en el apunte de Docker, Docker Compose permite levantar múltiples servicios con un solo comando.

### Dockerfile.backend

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend/ .
RUN mkdir -p /app/datos
EXPOSE 3000
CMD ["node", "server.js"]
```

### Dockerfile.frontend

```dockerfile
FROM nginx:alpine
COPY frontend/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
```

### nginx.conf

```nginx
server {
    listen 8080;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### docker-compose.yml

```yaml
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    ports:
      - "8080:8080"
    depends_on:
      - backend

  backend:
    build:
      context: .
      dockerfile: Dockerfile.backend
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
      - DB_PATH=/app/datos/datos.db
    volumes:
      - datos-db:/app/datos

volumes:
  datos-db:
```

Puntos clave:
- `depends_on`: el frontend espera a que el backend esté listo.
- `volumes`: los datos de la base de datos persisten entre reinicios.
- `environment`: variables de entorno para el backend.
- `ports`: mapeo de puertos del contenedor al host.

### Comandos

```bash
# Construir las imágenes
docker-compose build

# Levantar todo
docker-compose up

# Levantar en segundo plano
docker-compose up -d

# Ver logs
docker-compose logs -f

# Bajar todo
docker-compose down

# Bajar todo + borrar volúmenes (borra la DB)
docker-compose down -v
```

---

## Manejo de errores end-to-end

### En el Frontend

```javascript
async function cargarTareas() {
    try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            const errorData = await respuesta.json();
            throw new Error(errorData.error || `Error ${respuesta.status}`);
        }

        const tareas = await respuesta.json();
        mostrarTareas(tareas);
    } catch (error) {
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
            mostrarError('No se puede conectar al servidor.');
        } else {
            mostrarError(error.message);
        }
    }
}
```

### En el Backend

```javascript
router.post('/', (req, res) => {
    try {
        const { titulo } = req.body;

        if (!titulo || titulo.trim() === '') {
            return res.status(400).json({ error: 'El título es obligatorio' });
        }

        const stmt = db.prepare('INSERT INTO tareas (titulo) VALUES (?)');
        const result = stmt.run(titulo.trim());

        const nuevaTarea = db.prepare('SELECT * FROM tareas WHERE id = ?').get(result.lastInsertRowid);
        res.status(201).json(nuevaTarea);
    } catch (error) {
        console.error('Error en POST /api/tareas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
```

### Buenas prácticas

1. **Siempre usá `try/catch`** en funciones async del frontend y handlers del backend.
2. **Nunca muestres detalles internos al usuario**. Los detalles van al `console.error`.
3. **Validá tanto en el frontend como en el backend**. La validación del frontend mejora la UX; la del backend protege los datos.

---

## Ejemplo integrador completo: Lista de Tareas

Este es un proyecto completo que podés copiar y correr.

### frontend/index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Lista de Tareas</h1>
        <div id="error-mensaje" class="error" style="display: none;"></div>
        <form id="form-tarea" class="form-tarea">
            <input type="text" id="input-titulo" placeholder="¿Qué tenés que hacer?" required maxlength="200">
            <button type="submit">Agregar</button>
        </form>
        <div id="contador" class="contador"></div>
        <div id="lista-tareas" class="lista-tareas">
            <p class="cargando">Cargando tareas...</p>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
```

### frontend/styles.css

```css
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; background: #f5f5f5; display: flex; justify-content: center; padding: 2rem; }
.container { width: 100%; max-width: 600px; }
h1 { text-align: center; margin-bottom: 1.5rem; color: #2c3e50; }
.form-tarea { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
.form-tarea input { flex: 1; padding: 0.75rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; }
.form-tarea input:focus { outline: none; border-color: #3498db; }
.form-tarea button { padding: 0.75rem 1.5rem; background: #3498db; color: white; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer; }
.form-tarea button:hover { background: #2980b9; }
.error { background: #fee; border: 1px solid #fcc; color: #c0392b; padding: 0.75rem; border-radius: 8px; margin-bottom: 1rem; }
.contador { text-align: right; font-size: 0.85rem; color: #888; margin-bottom: 0.5rem; }
.lista-tareas { display: flex; flex-direction: column; gap: 0.5rem; }
.tarea { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.tarea.completada span { text-decoration: line-through; color: #aaa; }
.tarea input[type="checkbox"] { width: 1.2rem; height: 1.2rem; cursor: pointer; }
.tarea span { flex: 1; }
.tarea button { padding: 0.4rem 0.8rem; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; }
.tarea button:hover { background: #c0392b; }
.sin-tareas { text-align: center; color: #aaa; padding: 2rem; font-style: italic; }
```

### frontend/app.js

```javascript
const API_URL = 'http://localhost:3000/api/tareas';

async function cargarTareas() {
    try {
        const resp = await fetch(API_URL);
        if (!resp.ok) throw new Error(`Error ${resp.status}`);
        const tareas = await resp.json();
        mostrarTareas(tareas);
        actualizarContador(tareas);
    } catch (error) {
        mostrarError('No se puede conectar al servidor.');
    }
}

async function agregarTarea(titulo) {
    const resp = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo }),
    });
    if (!resp.ok) {
        const data = await resp.json();
        throw new Error(data.error);
    }
    return resp.json();
}

async function toggleTarea(id, completada) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completada }),
    });
    cargarTareas();
}

async function eliminarTarea(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    cargarTareas();
}

function mostrarTareas(tareas) {
    const lista = document.getElementById('lista-tareas');
    lista.innerHTML = '';
    if (tareas.length === 0) {
        lista.innerHTML = '<p class="sin-tareas">No hay tareas. ¡Agregá una!</p>';
        return;
    }
    tareas.forEach(tarea => {
        const div = document.createElement('div');
        div.className = `tarea ${tarea.completada ? 'completada' : ''}`;

        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = tarea.completada === 1;
        cb.addEventListener('change', () => toggleTarea(tarea.id, cb.checked));

        const span = document.createElement('span');
        span.textContent = tarea.titulo;

        const btn = document.createElement('button');
        btn.textContent = 'Eliminar';
        btn.addEventListener('click', () => eliminarTarea(tarea.id));

        div.appendChild(cb);
        div.appendChild(span);
        div.appendChild(btn);
        lista.appendChild(div);
    });
}

function actualizarContador(tareas) {
    const completadas = tareas.filter(t => t.completada === 1).length;
    document.getElementById('contador').textContent = `${completadas} de ${tareas.length} completadas`;
}

function mostrarError(msg) {
    const div = document.getElementById('error-mensaje');
    div.textContent = msg;
    div.style.display = 'block';
    setTimeout(() => div.style.display = 'none', 5000);
}

document.getElementById('form-tarea').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('input-titulo');
    const titulo = input.value.trim();
    if (!titulo) return;
    try {
        await agregarTarea(titulo);
        input.value = '';
        cargarTareas();
    } catch (error) {
        mostrarError(error.message);
    }
});

cargarTareas();
```

### backend/package.json

```json
{
  "name": "lista-de-tareas-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": { "start": "node server.js" },
  "dependencies": {
    "better-sqlite3": "^11.0.0",
    "cors": "^2.8.5",
    "express": "^4.18.2"
  }
}
```

### backend/server.js

```javascript
const express = require('express');
const cors = require('cors');
const tareasRoutes = require('./routes/tareas');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/tareas', tareasRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### backend/database.js

```javascript
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = process.env.DB_PATH || path.join(__dirname, 'datos.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

db.exec(`
    CREATE TABLE IF NOT EXISTS tareas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        completada INTEGER DEFAULT 0,
        creada_en TEXT DEFAULT (datetime('now'))
    )
`);

module.exports = db;
```

### backend/routes/tareas.js

```javascript
const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
    try {
        const tareas = db.prepare('SELECT * FROM tareas ORDER BY creada_en DESC').all();
        res.json(tareas);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.get('/:id', (req, res) => {
    try {
        const tarea = db.prepare('SELECT * FROM tareas WHERE id = ?').get(req.params.id);
        if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post('/', (req, res) => {
    try {
        const { titulo } = req.body;
        if (!titulo || titulo.trim() === '') {
            return res.status(400).json({ error: 'El título es obligatorio' });
        }
        const result = db.prepare('INSERT INTO tareas (titulo) VALUES (?)').run(titulo.trim());
        const nueva = db.prepare('SELECT * FROM tareas WHERE id = ?').get(result.lastInsertRowid);
        res.status(201).json(nueva);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.put('/:id', (req, res) => {
    try {
        const tarea = db.prepare('SELECT * FROM tareas WHERE id = ?').get(req.params.id);
        if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });

        const { titulo, completada } = req.body;
        const nuevoTitulo = titulo !== undefined ? titulo.trim() : tarea.titulo;
        const nuevaCompletada = completada !== undefined ? (completada ? 1 : 0) : tarea.completada;

        db.prepare('UPDATE tareas SET titulo = ?, completada = ? WHERE id = ?')
            .run(nuevoTitulo, nuevaCompletada, req.params.id);

        const actualizada = db.prepare('SELECT * FROM tareas WHERE id = ?').get(req.params.id);
        res.json(actualizada);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const tarea = db.prepare('SELECT * FROM tareas WHERE id = ?').get(req.params.id);
        if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
        db.prepare('DELETE FROM tareas WHERE id = ?').run(req.params.id);
        res.json({ mensaje: 'Tarea eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;
```

### Cómo correr el proyecto

**Con Docker Compose** (recomendado):

```bash
docker-compose build
docker-compose up
```

Abrí `http://localhost:8080` en el navegador.

**Sin Docker** (para desarrollo):

```bash
# Terminal 1: Backend
cd backend && npm install && node server.js

# Terminal 2: Frontend
cd frontend && npx serve -l 8080
```

---

## Tips para el TP

### Git workflow

1. **Usá branches**: nunca trabajes directamente en `main`.
   ```bash
   git checkout -b feature/agregar-tareas
   ```
2. **Commits chicos y descriptivos**: "Agrego formulario de tareas" > "Hago todo el TP".
3. **Usá Pull Requests** (como vimos en el apunte de Git).
4. **`.gitignore`**:
   ```
   node_modules/
   *.db
   .env
   .DS_Store
   ```

### Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| CORS bloqueado | Frontend y backend en distintos puertos | Instalar y usar el paquete `cors` |
| "Failed to fetch" | Backend no está corriendo | Verificar que `node server.js` esté ejecutándose |
| Formulario recarga la página | Falta `event.preventDefault()` | Agregarlo en el handler del submit |
| Datos se pierden al reiniciar Docker | No hay volumen configurado | Agregar volumen en `docker-compose.yml` |
| `node_modules` en el repo | Falta en `.gitignore` | Agregar `node_modules/` al `.gitignore` |
| No funciona con Docker | Solo probaste sin Docker | Siempre probar con `docker-compose build && docker-compose up` |

### Cómo debuggear

- **Consola del navegador (F12)**: errores de JavaScript y peticiones HTTP.
- **Tab "Network" en DevTools**: ver cada petición, su status, headers y body.
- **Logs del backend**: `console.log()` en Express → se ven en la terminal o en `docker-compose logs`.
- **curl**: probar endpoints sin depender del frontend.

---

## Resumen

| Capa | Tecnología | Responsabilidad |
|------|-----------|----------------|
| Frontend | HTML + CSS + JavaScript | Interfaz de usuario, `fetch()` al backend |
| Backend | Node.js + Express | API REST, validación, lógica |
| Base de datos | SQLite | Almacenamiento persistente |
| Orquestación | Docker Compose | Levantar todo con un solo comando |

El flujo siempre es: **Usuario → Frontend → Backend → Base de Datos** y viceversa.

Si te trabás, revisá los apuntes individuales:
- [HTML y CSS](./apunte_html_cs)
- [JavaScript](./apunte_javascript)
- [APIs REST](./apunte_rest_api)
- [Backend](./apunte_backend)
- [SQL](./apunte_sql)
- [Docker](./docker)
- [Git](./git)
