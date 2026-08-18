# Diapos — generador de slides para clases

Convierte el `.md` de una clase en un mazo de diapositivas HTML con la
misma identidad visual para toda la cátedra, listo para proyectar en el
anfiteatro. Ver la discusión de diseño completa en el historial del chat
que armó esto; acá va solo el uso.

## Cómo generar una clase nueva

1. Creá una carpeta acá adentro con el nombre de la clase, por ejemplo
   `static/slides/intro-a-regex/`.
2. Adentro, escribí `contenido.md` con el temario siguiendo la convención
   de [`_template/formatos.md`](./_template/formatos.md): una línea de
   3+ guiones (`---`) separa cada slide, un `# Título` (H1) arranca una
   sección nueva y va a la agenda automática, `## Título` (H2) es el
   título de una slide de contenido normal. Un comentario
   `<!-- slide: tipo=... -->` opcional al principio de una slide fuerza
   un layout puntual.
3. Poné las imágenes que uses en `img/` dentro de esa misma carpeta y
   referencialas como `img/nombre.png`.
4. Con Claude Code abierto en la raíz del repo, corré:
   ```
   /generar-diapositiva intro-a-regex
   ```
   Esto lee tu `contenido.md`, lo cruza con `_template/formatos.md` y
   `_template/design-tokens.css`, y escribe `index.html` en la misma
   carpeta.
5. Abrí `static/slides/intro-a-regex/index.html` en el navegador para
   revisarlo. Se puede editar a mano después — es HTML y CSS plano, sin
   build step.
6. Agregá el link a la clase en `docs/Material/Diapos.md`:
   ```md
   * [Intro a Regex](/slides/intro-a-regex/)
   ```
   (con `target="_blank"` si lo agregás como HTML en vez de markdown, para
   que abra en pestaña nueva).

## Qué es cada cosa

| Carpeta / archivo | Qué es | ¿Se edita por clase? |
|---|---|---|
| `_template/design-tokens.css` | El design system entero (colores, tipografía, layouts) | No — es compartido, cambiarlo afecta a todas las clases |
| `_template/formatos.md` | El catálogo de los 15 tipos de slide que Claude usa para generar | No |
| `_template/base.html` | Esqueleto HTML de un mazo vacío | No |
| `_template/fonts/` | Los `.woff2` de Montserrat / Instrument Sans / Open Sans | No |
| `_template/assets/logo_fiuba_dark.svg` / `logo_fiuba_light.svg` | Logo del footer — versión negra (fondo blanco) y blanca (fondo naranja) | No |
| `<clase>/contenido.md` | El temario que escribe el profesor | Sí, es el input de cada clase |
| `<clase>/img/` | Imágenes locales de esa clase | Sí |
| `<clase>/index.html` | El mazo generado — el artefacto final que se proyecta y se linkea desde Diapos.md | Se regenera con el comando, pero después se puede tocar a mano |

## Pendientes conocidos

- El comando `/generar-diapositiva` asume que `@mermaid-js/mermaid-cli`
  está disponible vía `npx` para hornear los diagramas a SVG.

Ver [`ejemplo-git/`](./ejemplo-git/) como referencia de un mazo completo ya
generado, con la mayoría de los tipos de slide en uso.
