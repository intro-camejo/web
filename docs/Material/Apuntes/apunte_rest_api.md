---
sidebar_position: 10
---

# APIs REST

Este apunte cubre los conceptos fundamentales para entender y diseñar APIs REST: el protocolo HTTP, los métodos, los códigos de estado, JSON y los principios de diseño RESTful.

## Introducción

### ¿Qué es una API?

Una **API** (Application Programming Interface) es un contrato de comunicación entre dos programas. Define cómo un programa puede pedirle cosas a otro y qué formato van a tener las respuestas.

Una analogía: pensá en un restaurante. Vos (el cliente) no vas directo a la cocina a prepararte la comida. Le pedís al mozo (la API) lo que querés, el mozo le lleva tu pedido a la cocina (el servidor), y después te trae la respuesta (los datos).

En el desarrollo web, las APIs permiten que el **frontend** (lo que ve el usuario en el navegador) se comunique con el **backend** (el servidor que procesa datos y los guarda en la base de datos).

```
  Navegador (Frontend)          Servidor (Backend)          Base de Datos
  ┌──────────────────┐         ┌──────────────────┐       ┌──────────────┐
  │  HTML + CSS + JS │ ──API──>│  Procesa pedidos  │──SQL─>│  Guarda datos│
  │                  │ <──API──│  Devuelve datos   │<─SQL──│              │
  └──────────────────┘         └──────────────────┘       └──────────────┘
```

---

## El protocolo HTTP

### ¿Cómo funciona la web?

La web funciona con un modelo **cliente-servidor**:

1. El **cliente** (tu navegador) envía una **petición** (request) al servidor.
2. El **servidor** procesa la petición y devuelve una **respuesta** (response).

Esa comunicación se hace a través del protocolo **HTTP** (HyperText Transfer Protocol). Cada vez que visitás una página web, tu navegador está haciendo peticiones HTTP.

---

## Anatomía de una petición HTTP

Una petición HTTP tiene estas partes:

```http
POST /api/canciones HTTP/1.1
Host: mi-api.com
Content-Type: application/json
Authorization: Bearer token123

{
  "titulo": "De música ligera",
  "artista": "Soda Stereo"
}
```

| Parte | Descripción |
|-------|-------------|
| **Método** | `POST` — la acción que querés hacer |
| **URL** | `/api/canciones` — el recurso sobre el que operás |
| **Headers** | Metadatos (tipo de contenido, autenticación, etc.) |
| **Body** | Los datos que enviás (no todas las peticiones lo tienen) |

Y una respuesta:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 5,
  "titulo": "De música ligera",
  "artista": "Soda Stereo"
}
```

---

## Métodos HTTP

Los métodos indican **qué querés hacer** con un recurso.

| Método | Acción | Analogía | ¿Tiene body? |
|--------|--------|----------|--------------|
| `GET` | Obtener datos | "Dame la carta del menú" | No |
| `POST` | Crear un recurso nuevo | "Quiero pedir este plato" | Sí |
| `PUT` | Reemplazar un recurso completo | "Cambiame todo el pedido" | Sí |
| `PATCH` | Modificar parcialmente | "Agregale papas al pedido" | Sí |
| `DELETE` | Eliminar un recurso | "Cancelá mi pedido" | No |

### GET: Obtener datos

```http
GET /api/canciones HTTP/1.1
Host: mi-api.com
```

Respuesta:
```json
[
  { "id": 1, "titulo": "De música ligera", "artista": "Soda Stereo" },
  { "id": 2, "titulo": "Muchacha ojos de papel", "artista": "Almendra" }
]
```

### POST: Crear un recurso

```http
POST /api/canciones HTTP/1.1
Content-Type: application/json

{
  "titulo": "Rezo por vos",
  "artista": "Charly García"
}
```

Respuesta (`201 Created`):
```json
{
  "id": 3,
  "titulo": "Rezo por vos",
  "artista": "Charly García"
}
```

### PUT: Reemplazar un recurso

```http
PUT /api/canciones/3 HTTP/1.1
Content-Type: application/json

{
  "titulo": "Rezo por vos",
  "artista": "Charly García",
  "album": "Clics Modernos"
}
```

### DELETE: Eliminar un recurso

```http
DELETE /api/canciones/3 HTTP/1.1
```

Respuesta: `204 No Content`

---

## Códigos de estado HTTP

Los códigos de estado indican **qué pasó** con tu petición:

```
  2xx → Éxito
  3xx → Redirección
  4xx → Error del cliente (tu culpa)
  5xx → Error del servidor (culpa del servidor)
```

### 2xx: Todo salió bien

| Código | Nombre | ¿Cuándo se usa? |
|--------|--------|-----------------|
| `200` | OK | Petición exitosa (GET, PUT, PATCH) |
| `201` | Created | Se creó un recurso nuevo (POST) |
| `204` | No Content | Éxito, sin body en la respuesta (DELETE) |

### 4xx: Error del cliente

| Código | Nombre | ¿Cuándo se usa? |
|--------|--------|-----------------|
| `400` | Bad Request | JSON inválido, faltan campos, etc. |
| `401` | Unauthorized | No te autenticaste |
| `403` | Forbidden | Te autenticaste pero no tenés permiso |
| `404` | Not Found | El recurso no existe |

La diferencia entre `401` y `403`:
- **401**: "No sé quién sos" (falta autenticación).
- **403**: "Sé quién sos, pero no podés hacer esto" (falta autorización).

### 5xx: Error del servidor

| Código | Nombre | ¿Cuándo se usa? |
|--------|--------|-----------------|
| `500` | Internal Server Error | Algo explotó en el servidor |
| `502` | Bad Gateway | El servidor intermedio recibió una respuesta inválida |
| `503` | Service Unavailable | Servidor temporalmente fuera de servicio |

Tip: si empieza con **4**, el problema es **tuyo**. Si empieza con **5**, el problema es del **servidor**.

---

## JSON

### ¿Qué es JSON?

**JSON** (JavaScript Object Notation) es el formato más usado para intercambiar datos entre cliente y servidor. Aunque tiene "JavaScript" en el nombre, es independiente del lenguaje.

### Reglas de sintaxis

1. Las **claves** siempre van entre comillas dobles.
2. Los **strings** siempre van entre comillas dobles (no simples).
3. No se permiten **comas finales** (trailing commas).
4. No se permiten **comentarios**.

### Tipos de datos en JSON

| Tipo | Ejemplo |
|------|---------|
| String | `"Hola mundo"` |
| Number | `42`, `3.14` |
| Boolean | `true`, `false` |
| Null | `null` |
| Object | `{ "clave": "valor" }` |
| Array | `[1, 2, 3]` |

### Ejemplo

```json
{
  "id": 1,
  "nombre": "Martín López",
  "padron": 108432,
  "regular": true,
  "promedio": 7.85,
  "materias": [
    { "nombre": "Algoritmos", "nota": 8 },
    { "nombre": "Intro al Desarrollo", "nota": 9 }
  ]
}
```

### JSON vs. objetos de JavaScript

| Característica | JSON | Objeto JavaScript |
|----------------|------|-------------------|
| Claves | Siempre con comillas dobles | Pueden ir sin comillas |
| Strings | Solo comillas dobles | Comillas simples o dobles |
| Trailing commas | No permitidas | Permitidas |
| Funciones como valor | No | Sí |

---

## ¿Qué es REST?

**REST** (Representational State Transfer) es un **estilo de arquitectura** para diseñar APIs. No es un protocolo ni una librería: es un conjunto de principios. Una API que sigue estos principios se llama **API RESTful**.

### Principios de REST

**1. Todo es un recurso.** Los datos se modelan como recursos, cada uno con una URI única:

```
/usuarios          → la colección de todos los usuarios
/usuarios/42       → el usuario con id 42
/canciones/5       → la canción con id 5
```

**2. Se usan los métodos HTTP como verbos.** En lugar de `/obtenerUsuario` o `/borrarCancion`, REST usa:

```
GET    /usuarios/42     → obtener el usuario 42
POST   /usuarios        → crear un usuario nuevo
PUT    /usuarios/42     → actualizar el usuario 42
DELETE /usuarios/42     → eliminar el usuario 42
```

**3. Sin estado (Stateless).** Cada petición contiene toda la información necesaria. El servidor no "recuerda" peticiones anteriores.

**4. Interfaz uniforme.** Todos los recursos se manipulan de la misma manera. Si sabés cómo funciona `/usuarios`, ya sabés cómo funciona `/canciones`.

---

## Diseño de endpoints

### Reglas de diseño

1. **Usá sustantivos, no verbos:**
   - `GET /canciones` (bien)
   - `GET /obtenerCanciones` (mal)

2. **Usá plural:** `/canciones`, no `/cancion`.

3. **Usá minúsculas y guiones:** `/listas-de-reproduccion`, no `/listasDeReproduccion`.

4. **Jerarquía con barras:**
   ```
   /artistas/5/albums          → los álbumes del artista 5
   /artistas/5/albums/3        → el álbum 3 del artista 5
   ```

5. **Parámetros de query para filtrar:**
   ```
   /canciones?genero=rock
   /canciones?orden=anio&dir=desc
   /canciones?pagina=2&limite=20
   ```

### CRUD mapeado a HTTP

Si ya viste SQL (como vimos en el apunte de SQL), te va a resultar familiar:

| Operación CRUD | Método HTTP | Endpoint | SQL equivalente |
|----------------|-------------|----------|-----------------|
| **C**reate | `POST` | `POST /canciones` | `INSERT INTO canciones` |
| **R**ead | `GET` | `GET /canciones/5` | `SELECT * FROM canciones WHERE id = 5` |
| **U**pdate | `PUT/PATCH` | `PUT /canciones/5` | `UPDATE canciones SET ... WHERE id = 5` |
| **D**elete | `DELETE` | `DELETE /canciones/5` | `DELETE FROM canciones WHERE id = 5` |

---

## Headers importantes

### Content-Type

Indica el formato del body:

```http
Content-Type: application/json
```

### Accept

Indica en qué formato querés la respuesta:

```http
Accept: application/json
```

### Authorization

Para autenticarte ante la API:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

---

## Probando APIs

### Usando curl desde la terminal

Como vimos en el apunte de Bash, `curl` permite hacer peticiones HTTP desde la terminal.

**GET:**
```bash
curl https://jsonplaceholder.typicode.com/todos/1
```

**POST:**
```bash
curl -X POST https://jsonplaceholder.typicode.com/todos \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "title": "Estudiar APIs REST",
    "completed": false
  }'
```

**PUT:**
```bash
curl -X PUT https://jsonplaceholder.typicode.com/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"userId": 1, "title": "Estudiar APIs REST", "completed": true}'
```

**DELETE:**
```bash
curl -X DELETE https://jsonplaceholder.typicode.com/todos/1
```

| Flag | Descripción |
|------|-------------|
| `-X POST` | Método HTTP |
| `-H` | Agregar un header |
| `-d` | Datos del body |
| `-v` | Modo verbose (ver todos los detalles) |

### Postman y Thunder Client

Para probar APIs con interfaz gráfica:
- **Postman**: aplicación de escritorio, muy popular.
- **Thunder Client**: extensión de VS Code (como vimos en el apunte de Editores de Texto, si usás VS Code es muy conveniente).

---

## Ejemplo completo: API de lista de tareas

### El recurso: Tarea

```json
{
  "id": 1,
  "titulo": "Estudiar para el parcial de Intro",
  "descripcion": "Repasar APIs REST y SQL",
  "completada": false,
  "prioridad": "alta"
}
```

### Endpoints

| Método | Endpoint | Descripción | Código de éxito |
|--------|----------|-------------|-----------------|
| `GET` | `/api/tareas` | Listar todas | `200 OK` |
| `GET` | `/api/tareas/:id` | Obtener una por ID | `200 OK` |
| `POST` | `/api/tareas` | Crear una nueva | `201 Created` |
| `PATCH` | `/api/tareas/:id` | Actualizar una | `200 OK` |
| `DELETE` | `/api/tareas/:id` | Eliminar una | `204 No Content` |

### Ejemplo de cada operación con curl

**Listar:**
```bash
curl http://localhost:3000/api/tareas
```

**Crear:**
```bash
curl -X POST http://localhost:3000/api/tareas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Leer apunte de Docker", "prioridad": "baja"}'
```

**Actualizar:**
```bash
curl -X PATCH http://localhost:3000/api/tareas/1 \
  -H "Content-Type: application/json" \
  -d '{"completada": true}'
```

**Eliminar:**
```bash
curl -X DELETE http://localhost:3000/api/tareas/1
```

### Flujo visual

```
  CLIENTE                          SERVIDOR
     │                                │
     │  POST /api/tareas              │
     │  { "titulo": "Estudiar" }      │
     │ ─────────────────────────────> │
     │                                │  Guarda en la base de datos
     │       201 Created              │
     │  { "id": 3, "titulo": ... }   │
     │ <───────────────────────────── │
     │                                │
     │  GET /api/tareas               │
     │ ─────────────────────────────> │
     │                                │  Consulta la base de datos
     │       200 OK                   │
     │  [{ "id": 1, ... }, ...]      │
     │ <───────────────────────────── │
```

---

## Resumen

| Concepto | Idea clave |
|----------|-----------|
| **API** | Contrato de comunicación entre dos programas |
| **HTTP** | Protocolo que usan clientes y servidores |
| **Métodos HTTP** | GET (leer), POST (crear), PUT/PATCH (actualizar), DELETE (borrar) |
| **Códigos de estado** | 2xx = éxito, 4xx = error del cliente, 5xx = error del servidor |
| **JSON** | Formato estándar para enviar y recibir datos |
| **REST** | Principios de diseño: recursos, URIs, métodos HTTP, sin estado |
| **Endpoints** | URLs que representan recursos, usando sustantivos en plural |

En el apunte de Backend vamos a poner todo esto en práctica, creando un servidor que exponga una API REST real y funcional.
