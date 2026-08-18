# Formatos de slide — Diapos Intro Camejo

Este archivo es el que Claude Code lee junto con el `contenido.md` de un
profesor para generar el `index.html` final. No lo edita el profesor; lo usa
Claude como referencia de "qué layouts existen y qué HTML le corresponde a
cada uno". Los estilos ya están resueltos en [`design-tokens.css`](./design-tokens.css)
— acá solo se documenta qué clases usar y cómo interpretar el markdown de
entrada.

**Regla de mantenimiento:** cada vez que se agrega un tipo de slide nuevo a
este catálogo, hay que agregar una slide de ese tipo a
[`ejemplo-git/index.html`](../ejemplo-git/index.html) (y a su `contenido.md`
si aplica) en el mismo cambio. Ese mazo es la referencia viva de "todos los
tipos en uso" — no puede quedar desactualizado.

Además, cada slide de `ejemplo-git` lleva un `.dev-tag` (esquina superior
derecha) con el nombre del tipo y cómo se invoca desde `contenido.md` —
copiá ese mismo patrón al agregar un tipo nuevo. **`.dev-tag` es exclusivo
de `ejemplo-git`: nunca generar uno en el mazo real de un profesor.**

## Convención del `contenido.md`

Cada slide es una sección separada por una línea horizontal de markdown:
3 o más guiones solos en su propia línea (`---`, `----------`,
`-----------------`, todas valen — es el thematic break estándar de
markdown, no hace falta que el profesor cuente guiones). La primera línea
de cada sección puede ser un comentario de metadata:

```md
<!-- slide: tipo=titulo-bullets seccion=".02 Comandos esenciales" -->
## El ciclo básico

- **git init** — crea un repositorio nuevo en la carpeta actual
- **git add** — mueve cambios al staging area {tag:tip}
- **git commit** — guarda una foto del staging area en el historial
```

- `tipo=` es uno de los 15 valores de la tabla de abajo. Si se omite, Claude
  infiere el layout más probable a partir de la forma del contenido y del
  nivel de encabezado (ver abajo). Para los layouts que no tienen un
  equivalente markdown obvio (`portada`, `agenda`, `comparacion`,
  `hasta-6-imagenes`, `bibliografia`, `cierre`) conviene que el profesor lo
  marque explícito.
- `seccion=` es el texto que va en el eyebrow de esa slide (`.02 — Comandos
  esenciales`). Claude lo repite en todas las slides de esa sección hasta
  que aparece una nueva `divisoria-seccion` o `seccion-imagen`.
- `{tag:tip}`, `{tag:note}`, `{tag:info}`, `{tag:warning}`, `{tag:danger}`
  al final de un bullet agrega el chip de color correspondiente — son las
  mismas cinco categorías que usan los admonitions de Docusaurus
  (`:::note`, `:::tip`, etc.), así el vocabulario es consistente entre el
  material escrito y las slides.
- Las imágenes se referencian como archivos locales relativos a la carpeta
  de la clase: `![](img/git-status.png)`. Claude copia lo que encuentre en
  la carpeta `img/` del profesor tal cual, no las reprocesa.

### Niveles de encabezado — el identificador de secciones

El separador `---` (o el que sea) corta entre slides, pero por sí solo no
dice si una slide puntual arranca una sección nueva. Eso lo marca el nivel
del encabezado dentro de la slide:

| Encabezado | Significa |
|---|---|
| `# Título` (H1) | **Arranca una sección nueva.** Se convierte automáticamente en una slide `divisoria-seccion` (o `seccion-imagen` si trae una imagen — ver catálogo) y se agrega como ítem de la `agenda`. No hace falta un comentario `tipo=` para este caso, el H1 ya alcanza. |
| `## Título` (H2) | Título de una slide de contenido normal (`titulo-bullets`, `titulo-texto`, `imagen-texto`, etc., según lo que siga). |
| `### Título` (H3) | Sub-encabezado *dentro* de una slide — hoy se usa para las dos columnas de `comparacion` (`### git merge` / `### git rebase`); no genera una slide nueva por sí solo. |

Listas con `-` o `*` bajo un H2 se mapean a `.bullets`. Un párrafo de prosa
en cambio da `titulo-texto`. Esto reemplaza la necesidad de escribir
`tipo=divisoria-seccion` a mano para el caso más común — el comentario
`tipo=` sigue funcionando como override para los casos que el nivel de
encabezado no puede resolver por sí solo.

**Si un H1 trae más contenido del que entra en su propio layout** (más de
una imagen, o un H2 con contenido propio a continuación, todo antes del
siguiente separador), no hace falta que el profesor lo corte con un `---`
extra: Claude separa ese bloque en la slide de sección (`divisoria-seccion`
o `seccion-imagen` con lo que sí entre) más la(s) slide(s) de contenido
normal que hagan falta para el resto, heredando el eyebrow de esa sección.
Nunca se descarta contenido por priorizar el layout de la divisoria.

## El shell de cada slide

Todo `<section class="slide ...">` sigue esta forma (ver
[`base.html`](./base.html) para el documento completo):

```html
<section class="slide">
  <div class="s-pad">
    <!-- contenido específico del layout -->
  </div>
  <div class="s-foot">
    <span>Intro Camejo</span>
    <img class="logo-mark" src="../_template/assets/logo_fiuba.png" alt="FIUBA">
    <span class="num">04</span>
  </div>
</section>
```

El footer (`Intro Camejo` + logo + número) es automático — Claude lo agrega
en cada slide, numerando en orden. **El logo tiene dos variantes** en
`assets/`: `logo_fiuba.png` (relleno negro, para slides de fondo
blanco) y `logo_fiuba.png` (relleno blanco, para slides `on-accent`
de fondo naranja — portada, divisoria-seccion, cierre). Elegir la variante
según el fondo de esa slide puntual, no una fija para todo el mazo.

## Catálogo de los 15 tipos

### 1. `portada`
Apertura de la clase. Fondo de acento (`on-accent`).
```html
<section class="slide on-accent">
  <div class="s-pad">
    <div class="cover-wordmark">Intro Camejo — Introducción al Desarrollo de Software</div>
    <div class="cover-title-block">
      <div class="s-title">{{titulo de la clase}}</div>
      <div class="s-sub">{{subtítulo / bajada}}</div>
      <div class="cover-index"><span class="n">Clase {{n}}</span><span class="dot"></span><span class="n">{{año}}</span></div>
    </div>
  </div>
  <div class="s-foot">...</div>
</section>
```

### 2. `agenda`
**Obligatoria y automática — va siempre, sin importar cuántas slides tenga
la clase, incluso si el profesor no la pidió ni escribió una.** Claude la
genera e inserta justo después de la `portada`:
- Cada H1 del `contenido.md` (cada `divisoria-seccion` o `seccion-imagen`)
  es un ítem de la agenda, en su orden de aparición.
- Si no hay ningún H1 (el `.md` es una lista plana de slides sueltas con
  todo en H2, como pasa con contenido armado rápido o de prueba), Claude
  infiere las "secciones" a partir del título de cada slide de contenido y
  arma la agenda con esos títulos. En ese caso no hace falta repetir el
  eyebrow `seccion=` en cada slide — sería redundante contra su propio
  título.
```html
<div class="eyebrow"><span class="dot"></span>Agenda</div>
<ul class="agenda-list">
  <li><span class="idx">.01</span><span class="lbl">{{sección}}</span></li>
  ...
</ul>
```

### 3. `divisoria-seccion`
Quiebre a color naranja cada vez que arranca un tema nuevo (un H1 sin
imagen debajo). Actualiza el `seccion=` que van a heredar las slides
siguientes.
```html
<section class="slide on-accent">
  <div class="s-pad" style="justify-content:center;">
    <div class="eyebrow"><span class="dot"></span>Sección {{n}}</div>
    <div class="s-title">{{nombre de sección}}</div>
  </div>
  <div class="s-foot">...</div>
</section>
```

### 4. `seccion-imagen`
Alternativa a `divisoria-seccion` cuando el profesor tiene una foto para
esa sección: mitad imagen, mitad título (o título + texto corto). Se
infiere cuando un H1 trae una imagen antes del siguiente separador — si
no hay imagen, es `divisoria-seccion` común.

Por defecto la disposición es horizontal (lado a lado); agregar
`slide-split--vertical` para apilar imagen arriba/texto abajo (o al
revés). `slide-split--reverse` invierte cuál mitad va primero — seguir el
mismo criterio que `imagen-texto`: el orden en el markdown de origen
manda. La imagen acá sí se recorta a propósito con `object-fit:cover`
(es una foto de ambientación a pantalla completa, no un diagrama que haya
que ver entero como en `imagen-full`/`hasta-6-imagenes`).
```html
<section class="slide slide-split"> <!-- + --vertical y/o --reverse si aplica -->
  <div class="split-media"><img src="{{ruta}}" alt=""></div>
  <div class="split-copy on-accent">
    <div class="s-pad">
      <div class="eyebrow"><span class="dot"></span>Sección {{n}}</div>
      <div class="s-title">{{nombre de sección}}</div>
      <p class="s-body-text">{{texto opcional}}</p>
    </div>
    <div class="s-foot">...</div>
  </div>
</section>
```

### 5. `titulo-bullets`
```html
<div class="eyebrow"><span class="dot"></span>{{seccion}}</div>
<div class="s-title s-title--md">{{título}}</div>
<ul class="bullets">
  <li><span>{{item}}<span class="tag tag-tip">Tip</span></span></li>
</ul>
```

### 6. `titulo-texto`
Párrafo corrido en vez de bullets — usar cuando el profesor escribe
prosa seguida en vez de una lista.
```html
<div class="eyebrow">...</div>
<div class="s-title s-title--md">{{título}}</div>
<p class="s-body-text">{{párrafo}}</p>
```

### 7. `imagen-full`
```html
<div class="eyebrow">...</div>
<div class="cols2 cols2--single">
  <div class="col-media"><img src="{{ruta}}" alt="{{alt}}"></div>
</div>
```

### 8. `imagen-texto`
Orden imagen/texto según cuál venga primero en el markdown de origen.
```html
<div class="eyebrow">...</div>
<div class="s-title s-title--md">{{título}}</div>
<div class="cols2">
  <p class="s-body-text">{{texto}}</p>
  <div class="col-media"><img src="{{ruta}}" alt="{{alt}}"></div>
</div>
```

### 9. `hasta-6-imagenes`
Grilla adaptable: 2 columnas si son 2, 4 o 6 imágenes; 3 columnas
(`grid-imgs cols-3`) si son 3, 5 o menos de 6 pero impares. Cada imagen
lleva su propia descripción corta.
```html
<div class="eyebrow">...</div>
<div class="s-title s-title--md">{{título}}</div>
<div class="grid-imgs">
  <div class="cell"><div class="ph"><img src="{{ruta}}" alt=""></div><div class="cap">{{descripción}}</div></div>
  ...
</div>
```

### 10. `codigo`
Bloque plano, tema claro, con scroll si no entra — nunca reducir tanto la
fuente que se vuelva ilegible desde el fondo del anfiteatro; preferir
scroll o partir en dos slides antes que font-size chico.

**Siempre resaltado, nunca texto plano.** El resaltado se hornea en el
HTML al generar (como Mermaid) — no hay un highlighter cargado en vivo,
así el mazo sigue funcionando offline. Hay dos juegos de clases según qué
es el bloque:

- **Comando de terminal/shell** (lo que escribe el profesor en una
  consola, ej. `git ...`, `npm ...`): `<span class="c1">` comentarios,
  `<span class="c2">` flags/literales, `<span class="c3">` prompt/salida.
- **Código de un lenguaje de programación** (el fence trae `js`, `python`,
  `java`, etc.): `<span class="tok-kw">` palabras reservadas del lenguaje
  en negrita (`const`, `function`, `if`, `def`, `class`, `return`...),
  `<span class="tok-str">` strings, `<span class="tok-num">` literales
  numéricos, `<span class="tok-com">` comentarios, `<span class="tok-fn">`
  nombre de función en una llamada (`foo(`). Todo lo que no matchee
  ninguna categoría (identificadores, puntuación) queda sin span, hereda
  el color de texto normal.
```html
<div class="eyebrow">...</div>
<div class="s-title s-title--md">{{título}}</div>
<div class="code-block">
  <div class="fname">{{lenguaje o nombre de archivo}}</div>
  <pre><code>{{código tokenizado con los spans de arriba}}</code></pre>
</div>
```

### 11. `diagrama`
Los bloques ```mermaid del `contenido.md` se renderizan a **SVG estático**
en el momento de generar la clase (no se embebe mermaid.js en el HTML
final, así el profesor puede editar el archivo a mano después sin depender
de JS ni de internet). Comando de referencia:

```bash
npx -y @mermaid-js/mermaid-cli -i diagrama.mmd -o diagrama.svg -b transparent
```

**Todos los nodos llevan esquinas redondeadas.** Si el profesor no las
especificó, Claude agrega un `style` por nodo antes de renderizar:

```
graph LR
  A[Working Directory] -->|git add| B[Staging Area]
  B -->|git commit| C[Repositorio local]
  style A rx:10,ry:10
  style B rx:10,ry:10
  style C rx:10,ry:10
```

El SVG resultante se pega inline dentro de `.mermaid-wrap` (que ya tiene
`border-radius` propio, así el contenedor y los nodos quedan consistentes):
```html
<div class="eyebrow">...</div>
<div class="s-title s-title--md">{{título}}</div>
<div class="mermaid-wrap">{{SVG inline}}</div>
```

### 12. `comparacion`
```html
<div class="eyebrow">...</div>
<div class="s-title s-title--md">{{título}}</div>
<div class="compare">
  <div class="side a"><h3>{{opción A}}</h3><ul><li>...</li></ul></div>
  <div class="side b"><h3>{{opción B}}</h3><ul><li>...</li></ul></div>
</div>
```
Del markdown: dos sub-listas bajo dos sub-encabezados dentro de la misma
sección se interpretan como las dos columnas. También sirve para
pros/contras de una sola opción, no solo A-vs-B.

Si el comentario `tipo=` trae `tag=` + `tag-label=` (ej.
`tag=tip tag-label="Recomendado"`), se agrega un chip junto al título:
`<div class="s-title s-title--md">{{título}} <span class="tag tag-tip">{{tag-label}}</span></div>`
— útil para marcar nivel de recomendación entre varias opciones.

### 13. `cita`
Un blockquote (`> texto — Autor`) se mapea directo a este layout.
```html
<div class="quote-wrap">
  <div class="quote-mark">&ldquo;</div>
  <div class="quote-text">{{cita}}</div>
  <div class="quote-cite">— {{autor}}</div>
</div>
```

### 14. `bibliografia`
```html
<div class="eyebrow"><span class="dot"></span>Bibliografía</div>
<ol>
  <li>{{fuente}} <span class="src">({{referencia}})</span></li>
</ol>
```

### 15. `cierre`
```html
<section class="slide on-accent">
  <div class="s-pad">
    <div class="closing-center">
      <div class="eyebrow"><span class="dot"></span>Fin de la clase</div>
      <div class="s-title">Gracias</div>
      <div class="closing-links">{{próxima clase / contacto}}</div>
    </div>
  </div>
  <div class="s-foot">...</div>
</section>
```

## Reglas generales (no negociables al generar)

- Nunca tocar `design-tokens.css` al generar una clase puntual — es
  compartido por todo el mazo del sitio. Si una clase necesita algo que el
  sistema no cubre, se agrega ahí (afecta a todos) o se avisa antes de
  improvisar un estilo inline.
- Texto siempre grande y legible a distancia — el aula mantiene las luces
  prendidas salvo frente al pizarrón. No reducir tamaños de fuente para
  que "entre" contenido; preferir partir en más slides.
- Todas las imágenes son archivos locales dentro de la carpeta de la
  clase (`img/`), nunca URLs externas.
- Las imágenes nunca se recortan: `.col-media img` y `.grid-imgs .ph img`
  usan `object-fit:contain` en `design-tokens.css`, así que una foto con
  cualquier proporción entra completa en su recuadro (con una franja del
  fondo neutro alrededor si no calza exacto). No forzar otro `object-fit`
  por slide.
- El footer (`Intro Camejo` + logo + número) va en absolutamente todas las
  slides, incluida portada y cierre.
- El HTML generado es el artefacto final editable a mano — no depende de
  ningún build step para mostrarse. Mermaid ya viene horneado a SVG; las
  fuentes se cargan por `@font-face` local (ver `fonts/README.md`).
- **Nunca poner texto con marcado inline (`<code>`, `<strong>`, `<em>`)
  suelto directo dentro de un contenedor `display:flex`** (`.col-media`,
  `.eyebrow`, `.quote-wrap`, `.closing-center`, etc.). CSS "blockifica"
  los elementos inline que son hijos directos de un flex container, y el
  navegador termina cortando el texto alrededor de esos tags — se ve como
  si faltaran espacios. Siempre envolver ese texto en un único `<span>` o
  `<p>` antes de meterlo en el flex container (así es como ya están
  armados `.bullets li` y `.s-body-text`).
