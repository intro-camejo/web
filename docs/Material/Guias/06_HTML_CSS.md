# Guía 7 - HTML y CSS

*<u>__Nota__</u>: vamos a retomar el dominio de bandas, álbumes y canciones de la Guía 3 (SQL) para armar una web que muestre esa información. No hace falta conectarse a una base de datos real: alcanza con escribir el contenido "a mano" en el HTML.*

### Estructura HTML

1. Crear un archivo `index.html` con la estructura mínima de un documento HTML5 (`<!DOCTYPE html>`, `<html lang="es">`, `<head>` con `charset` y `title`, `<body>`).
2. Dentro del `<body>`, armar un `<header>` con un `<h1>` que diga "Catálogo de Bandas" y un `<nav>` con tres links (`<a>`) que apunten a `#bandas`, `#albumes` y `#contacto` (todavía no van a funcionar como anclas reales, eso lo resolvemos en el ejercicio 4).
3. Debajo del header, crear una sección `<section id="bandas">` que contenga una lista (`<ul>`) con al menos 4 bandas, cada una en un `<li>`.
4. Agregarle a cada `<h2>`/`<h3>` de tus secciones (`bandas`, `albumes`, `contacto`) el `id` correspondiente para que los links del `<nav>` funcionen como anclas dentro de la misma página.
5. Crear una sección `<section id="albumes">` con una **tabla** (`<table>`) que liste al menos 3 álbumes, con columnas para nombre, banda, año de lanzamiento y duración. Usar `<thead>` y `<tbody>` correctamente.

### Formularios

6. Crear una sección `<section id="contacto">` con un formulario (`<form>`) que permita "sugerir una banda", con los siguientes campos:
   - Un input de texto para el nombre de la banda (`required`).
   - Un `<select>` con al menos 4 géneros musicales.
   - Un input de tipo `number` para el año de fundación, con un `min` y `max` razonables.
   - Un `<textarea>` opcional para comentarios.
   - Un botón de envío.
7. Asociar cada `<label>` a su input correspondiente usando el atributo `for` (y el `id` del input), de forma que al hacer click en el label se enfoque el campo.

### CSS - Selectores y especificidad

8. Crear un archivo `estilos.css` y vincularlo al `index.html`. Darle un color de fondo distinto al `<header>` y a cada `<section>`.
9. Usando un selector de **clase**, darle a todos los `<li>` de la lista de bandas un `padding` y un `border-bottom`.
10. Usando un selector de **atributo**, darle un estilo distinto a los inputs de tipo `number` respecto de los de tipo `text` (por ejemplo, distinto ancho).
11. Escribir dos reglas CSS que apunten al mismo `<h2>`: una usando su `id` y otra usando una clase. Verificar en las herramientas de desarrollador del navegador cuál de las dos "gana" y por qué (especificidad).
12. Darle estilo a la tabla de álbumes: bordes en las celdas, y un color de fondo alternado entre filas pares e impares usando el pseudo-selector `:nth-child`.

### Flexbox

13. Convertir el `<nav>` del header en un `flex container`, de forma que los tres links queden distribuidos horizontalmente con separación uniforme entre ellos (`justify-content`).
14. Tomar la lista de bandas (ejercicio 3) y, en lugar de una lista vertical, mostrarla como una fila de "tarjetas" (una por banda) usando `display: flex`, con `flex-wrap` para que se acomoden en varias líneas si no entran en el ancho de la pantalla.

### Grid

15. Reorganizar esas mismas tarjetas de bandas usando `display: grid` en lugar de flexbox, definiendo explícitamente 3 columnas con `grid-template-columns`, y comparar el resultado con el del ejercicio 14.
16. Usando Grid, armar un layout de página completo con áreas nombradas (`grid-template-areas`) que distribuya el `header` arriba, un `aside` a la izquierda (con un buscador simple) y el contenido principal (las secciones de bandas y álbumes) a la derecha.

### Responsive

17. Usando una `media query`, hacer que el layout de Grid del ejercicio 16 pase a una sola columna (header, aside y contenido apilados) cuando el ancho de la pantalla sea menor a 768px.