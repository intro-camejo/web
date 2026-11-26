<!-- slide: tipo=portada -->
# Discutamos un poco
Cómo darle onda al TP con IA, y por qué los fundamentos siguen siendo la base
Semana 15 — Jueves 26/11/2026

---

# Que tu TP se destaque

---

## Cómo hacer que tu TP se destaque

- Que resuelva un **problema real**, aunque sea chiquito: algo que vos o alguien que conocés usaría
- Que funcione **de punta a punta**: crear, ver, editar y borrar, sin romperse en el medio
- Pocas cosas, **bien hechas**: mejor 4 pantallas prolijas que 10 a medio terminar {tag:tip}
- **Detalles que sorprenden**: un mensaje de error claro, un "no hay resultados", un botón que avisa que está cargando
- Un **README** que explique qué es y cómo se levanta {tag:info}

---

# Sumar IA a tu proyecto

---

## Una API de IA, como la PokeAPI pero que contesta

- Le mandás un texto (el **prompt**) y te devuelve un JSON con la respuesta
- Sirve cualquier modelo barato o con capa gratuita: **Gemini**, **Groq**, **OpenRouter**
- Para un TP, la capa gratis alcanza y sobra {tag:tip}
- Ideas: resumir reseñas, sugerir una descripción de producto, clasificar un comentario

---

<!-- slide: tipo=codigo -->
## Desde tu backend, es un fetch más

```js
app.post("/api/resumen", async (req, res) => {
  const respuesta = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.GROQ_API_KEY
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant", // el nombre sale de la doc del proveedor
      messages: [{ role: "user", content: "Resumí esta reseña: " + req.body.texto }]
    })
  });
  const datos = await respuesta.json();
  res.json({ resumen: datos.choices[0].message.content });
});
```

---

## Qué está pasando ahí

- Es un **POST** como los que ya hicieron: URL, headers y un body en JSON
- En `messages` va el prompt; en `datos.choices[0]` viene lo que contestó el modelo
- Tu frontend no habla con la IA: le pega a **tu** endpoint `/api/resumen` {tag:info}
- Si cambiás de proveedor, cambian la URL y el modelo; la idea es la misma

---

## La clave no se sube. Nunca.

- La API key va en el archivo **`.env`** y la leés con `process.env`
- `.env` va en el **`.gitignore`** desde el primer commit {tag:danger}
- Nunca la pongas en el frontend: con F12 cualquiera la ve
- Si se te escapó a GitHub: **borrala y generá una nueva**, aunque después hagas un commit que la saque {tag:warning}

---

# Tiempo real sin recargar

---

<!-- slide: tipo=comparacion -->
## Qué son los WebSockets

### HTTP: mandar cartas
- Cada vez que querés saber algo, mandás una carta y esperás la respuesta
- "¿Ya está?" "No." "¿Y ahora?" "Tampoco."
- El servidor nunca te escribe primero

### WebSocket: una llamada abierta
- Llamás una vez y la línea queda abierta
- Cualquiera de los dos habla cuando pasa algo
- El servidor te avisa apenas hay novedades, sin que preguntes

---

## Qué te habilita

- **Chat en vivo**: el mensaje aparece sin apretar F5
- **Notificaciones**: "Te llegó un pedido nuevo"
- **Puntajes o tableros en tiempo real**: un partido, una votación, un juego
- En Node hay librerías que lo resuelven en pocas líneas (ej. **Socket.IO**) {tag:info}
- No hace falta para aprobar: sumalo solo si tu TP lo necesita de verdad {tag:tip}

---

# Extras fáciles con IA

---

## Extras para darle onda (1/3)

- **Mapas interactivos**: ubicaciones de locales o eventos con Leaflet y OpenStreetMap, gratis
- **Gráficos y estadísticas simples**: ventas por mes o productos más vistos con Chart.js
- **Exportar listados a PDF o CSV**: un botón de "Descargar" que queda muy pro {tag:tip}

---

<!-- slide: tipo=comparacion -->
## Subida de imágenes o fotos de perfil (2/3)

### Lo que vimos: guardar la URL
- Guardás el link de la imagen en la base, como un texto más
- Cero configuración, y para el TP alcanza
- Si no necesitás más, quedate con esto

### Subir archivos de verdad: Multer
- Con Node y Express, **Multer** recibe el archivo y lo guarda en el servidor
- Con un prompt se implementa rapidísimo
- Usala si más o menos entendés qué hace, o si de verdad necesitás subir archivos
- No metan magia que después no puedan explicar en el coloquio

---

## Extras para darle onda (3/3)

- **Mails o notificaciones**: "Gracias por tu compra" o "Tu turno es mañana"
- **Login con Google**: nadie tiene que acordarse otra contraseña
- **Estilos con IA**: Tailwind o shadcn. **Vos hacés el maquetado, la IA pule el CSS** {tag:tip}

---

## Antes de sumar un extra

- Primero que ande **lo básico**; el extra es la frutilla, no la torta
- **Un extra por vez**, con su commit: si algo se rompe, sabés qué fue
- Si la IA te lo armó, **leelo y probalo** antes de darlo por bueno
- Regla de oro: si no lo podés explicar en el coloquio, todavía no es tuyo {tag:warning}

---

# La economía hoy

---

## Lo que está pasando, sin vueltas

- La IA ya hace en minutos tareas que antes llevaban días
- El mercado laboral se está acomodando, y nadie tiene la bola de cristal
- Es normal preguntarse "¿y entonces qué estudio?" {tag:note}
- Lo que sí sabemos: cambian las herramientas, no el oficio de resolver problemas

---

## Una lectura para pensarlo: *The Last Economy*[^1]

- Idea central: la **inteligencia** deja de ser escasa, como antes pasó con la tierra o las fábricas
- El autor lo plantea como un **cambio de etapa**, no como el fin del mundo
- Ahí ganan peso la **confianza** y las **relaciones**: a quién le creés y con quién trabajás {tag:info}
- Es una tesis, no una profecía: léanla con ojo crítico {tag:tip}

[^1]: Mostaque, E. (2025). *The Last Economy: A Guide to the Age of Intelligent Economics*. Intelligent Internet. ISBN 978-1-0369-3411-8.

---

# Los fundamentos

---

<!-- slide: tipo=cita -->
> Lo que se llevan de la facu es aprender a aprender. Eso no va a cambiar nunca: es su herramienta más grande. — Intro Camejo, Semana 15

---

## Tres hábitos que te separan del resto

- **Documenten lo que hacen**: un repo con buen README vale más que diez proyectos sin explicar
- **Expliquen lo técnico en criollo**: en una entrevista o con un cliente, eso te separa del resto {tag:tip}
- **Lean documentación por su cuenta**: es la habilidad que más se usa y menos se enseña

---

## El resto de la carrera también suma

- La IA escribe código; **vos** tenés que saber si está bien
- Algoritmos, bases de datos, redes, matemática: todo eso es lo que te deja **juzgar** lo que te devuelve
- Como la calculadora: no te ahorra entender la cuenta, te deja ver si el resultado tiene sentido
- Las herramientas cambian cada año; **los fundamentos se quedan** {tag:info}

---

<!-- slide: tipo=bibliografia -->
## Bibliografía

1. Mostaque, E. (2025). The Last Economy: A Guide to the Age of Intelligent Economics. Intelligent Internet. ISBN 978-1-0369-3411-8 (https://ii.inc/blog/post/tle)
2. Groq — Quickstart (https://console.groq.com/docs/quickstart)
3. Google — Gemini API pricing (https://ai.google.dev/gemini-api/docs/pricing)
4. OpenRouter — Quickstart (https://openrouter.ai/docs/quickstart)
5. MDN — API de WebSockets (https://developer.mozilla.org/es/docs/Web/API/WebSockets_API)
6. Multer (https://github.com/expressjs/multer)
7. Leaflet (https://leafletjs.com/)
8. Chart.js (https://www.chartjs.org/)

---

<!-- slide: tipo=cierre -->
## ¡Gracias!
Ahora: taller y consultas del TP
