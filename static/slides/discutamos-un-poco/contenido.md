<!-- slide: tipo=portada -->
# Discutamos un poco
El TP, la IA y lo que sigue importando
Semana 15 — Jueves 26/11/2026

---

<!-- slide: tipo=titulo-bullets seccion="Tu TP" -->
## Cómo hacer que tu TP se destaque

- Que resuelva un **problema real**, aunque sea chiquito
- Que funcione **de punta a punta**, sin romperse en el medio
- Pocas cosas, **bien hechas** {tag:tip}
- Detalles que sorprenden: un error claro, un "cargando..."

---

<!-- slide: tipo=codigo seccion="IA" -->
## Sumar IA a tu proyecto con una API

```js
const respuesta = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: { "Content-Type": "application/json",
             "Authorization": "Bearer " + process.env.GROQ_API_KEY },
  body: JSON.stringify({ model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: "Resumí esta reseña: " + texto }] })
});
const datos = await respuesta.json();
```

- Es un **POST** como cualquier API: Groq, Gemini u OpenRouter tienen tier gratis
- La key va en `.env`: nunca en git ni en el frontend {tag:danger}

---

<!-- slide: tipo=titulo-bullets seccion="Tiempo real" -->
## Tiempo real sin recargar: WebSockets

- **HTTP** es mandar cartas: preguntás "¿ya está?" y esperás
- **WebSocket** es una llamada abierta: cualquiera habla cuando pasa algo
- Sirve para chat en vivo, notificaciones y puntajes en tiempo real
- No hace falta para aprobar: sumalo si tu TP lo pide {tag:tip}

---

<!-- slide: tipo=titulo-bullets seccion="Extras" -->
## Extras fáciles con IA para darle onda al TP

- Mapas interactivos con ubicaciones
- Gráficos y estadísticas simples
- Exportar listados a PDF o CSV
- Mails o notificaciones
- Login con Google
- Tailwind o shadcn: **vos maquetás, la IA pule el CSS** {tag:tip}

---

<!-- slide: tipo=codigo seccion="Extras" -->
## Subida de imágenes: URL vs. Multer

```js
// Cliente · js en el navegador
const input = document.querySelector("#foto");
const datos = new FormData();
datos.append("foto", input.files[0]);
fetch("/api/foto", { method: "POST", body: datos });
```

```js
// Backend · index.js (Express + Multer)
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
app.post("/api/foto", upload.single("foto"), (req, res) => {
  res.json({ archivo: req.file.filename });
});
```

- En el HTML va un `<input type="file" id="foto">`, y `"foto"` coincide con `upload.single` {tag:tip}
- Para el TP, guardar la **URL** de la imagen alcanza. Multer sube el archivo de verdad
- Se arma rapidísimo con un prompt, pero no metan magia que no puedan explicar en el coloquio {tag:warning}

---

<!-- slide: tipo=titulo-bullets seccion="Contexto" -->
## La economía hoy y qué sigue importando

- La IA ya hace en minutos lo que antes llevaba días, y el mercado se está acomodando
- Nadie tiene la bola de cristal: es normal tener dudas
- Es una revolución parecida a la **Revolución Industrial**: cambia cómo se trabaja, no hace desaparecer el trabajo
- Cambian las herramientas, no el oficio de resolver problemas

---

<!-- slide: tipo=titulo-bullets seccion="Fundamentos" -->
## Lo que sí queda: aprender a aprender

- Es lo que te llevás de la facu, y los fundamentos de la carrera siguen siendo la base
- **Documenten**: un buen README vale más que diez proyectos sin explicar
- **Expliquen en criollo**: en una entrevista o con un cliente, eso te separa del resto
- **Lean documentación** por su cuenta: se usa todo el tiempo y casi no se enseña

---

<!-- slide: tipo=cierre -->
## ¡Gracias!
Ahora: taller y consultas del TP
