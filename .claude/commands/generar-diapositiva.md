---
description: Genera el index.html de un mazo de diapositivas a partir del contenido.md de una clase
argument-hint: <nombre-de-carpeta-en-static/slides>
---

Vas a generar `static/slides/$ARGUMENTS/index.html` a partir de
`static/slides/$ARGUMENTS/contenido.md`.

Pasos:

1. Leé `static/slides/_template/formatos.md` completo — ahí están los 15
   tipos de slide permitidos, la convención del `contenido.md` y las
   reglas no negociables (footer, tamaño de fuente, imágenes locales,
   etc.). No inventes layouts fuera de esa lista.
2. Leé `static/slides/_template/base.html` para el esqueleto del
   documento.
3. Leé `static/slides/$ARGUMENTS/contenido.md`. Separá por líneas de 3 o
   más guiones (`---`, `----------`, etc. — cualquier thematic break de
   markdown cuenta) en slides individuales. Dentro de cada slide, el
   nivel de encabezado decide el rol (ver tabla en `formatos.md`): un H1
   (`#`) arranca una sección nueva (`divisoria-seccion`, o
   `seccion-imagen` si esa slide trae una imagen) y no necesita
   `tipo=` explícito; un H2 (`##`) es el título de una slide de
   contenido normal; un H3 (`###`) es un sub-encabezado dentro de la
   slide (ej. las columnas de `comparacion`), no arranca slide nueva.
   Listas `-`/`*` bajo un H2 dan `.bullets`; un párrafo da `titulo-texto`.
   Para el resto de los casos, resolvé el `tipo=` del comentario inicial
   si está, o inferilo por la forma del contenido. Generá el HTML con
   las clases exactas de `design-tokens.css` — no agregues estilos
   inline nuevos.
4. La `agenda` es obligatoria y va siempre justo después de la portada,
   aunque el profesor no la haya pedido ni escrito una. Cada H1 (cada
   `divisoria-seccion`/`seccion-imagen`) es un ítem, en orden de
   aparición. Si no hay ningún H1, inferí las "secciones" a partir del
   título de cada slide de contenido y armá la agenda con esos títulos
   — en ese caso no repitas el eyebrow `seccion=` en cada slide (sería
   redundante contra su propio título). El `eyebrow` de una slide de
   contenido hereda el texto `seccion=` de la última
   `divisoria-seccion`/`seccion-imagen` que la precede cuando esa
   estructura sí existe.
5. Los bloques `codigo` siempre van resaltados, nunca texto plano — se
   hornea en el HTML, no hay highlighter cargado en vivo. Comandos de
   terminal/shell usan `<span class="c1">` comentarios / `<span
   class="c2">` flags / `<span class="c3">` prompt-salida. Código de un
   lenguaje de programación (el fence trae `js`, `python`, etc.) usa
   `<span class="tok-kw">` palabras reservadas, `<span class="tok-str">`
   strings, `<span class="tok-num">` números, `<span class="tok-com">`
   comentarios, `<span class="tok-fn">` nombre de función en una llamada.
6. Si hay bloques ```mermaid, renderizalos a SVG estático con
   `npx -y @mermaid-js/mermaid-cli -i <tmp>.mmd -o <tmp>.svg -b transparent`
   después de agregarle a cada nodo `style <id> rx:10,ry:10` si el
   profesor no lo especificó ya (bordes redondeados, ver `formatos.md`).
   Pegá el `<svg>` resultante inline dentro de `.mermaid-wrap` — no dejes
   el bloque ```mermaid crudo en el HTML final.
7. Numerá el footer (`.s-foot .num`) en orden correlativo empezando en 01
   a lo largo de todo el mazo. En `.s-foot .logo-mark`, usá
   `assets/logo_fiuba_dark.svg` en slides de fondo blanco y
   `assets/logo_fiuba_light.svg` en las `on-accent` (fondo naranja).
8. Para las imágenes: si el archivo referenciado existe en
   `static/slides/$ARGUMENTS/img/`, usá `<img src="img/archivo.png">`. Si
   no existe todavía, dejá el placeholder de `.col-media`/`.ph` con la
   leyenda del alt-text, como en `ejemplo-git/index.html`, y avisale al
   profesor qué archivos faltan.
9. Escribí el resultado en `static/slides/$ARGUMENTS/index.html`.
10. Mostrale al profesor un resumen: cuántas slides generó, qué tipo usó
   cada una, y qué imágenes faltan (si faltan). No hace falta que corra
   ningún build de Docusaurus — el HTML ya es servible tal cual.
