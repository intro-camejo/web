# Guia 6 - HTML & CSS

> **Nota:** Se recomienda validar el codigo HTML de cada ejercicio utilizando el validador oficial del W3C: [https://validator.w3.org/](https://validator.w3.org/). Esto permite detectar errores de sintaxis y asegurar que el documento cumple con los estandares web.
>
> Para profundizar en cualquier tema, consultar la documentacion de [MDN Web Docs](https://developer.mozilla.org/es/docs/Web).

### HTML Basico

1. Crear un archivo HTML con la estructura basica de un documento (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`). Dentro del `<body>`, agregar un titulo `<h1>` con tu nombre y un parrafo `<p>` que diga "Bienvenido a mi primera pagina web".

2. Crear un archivo HTML que contenga los seis niveles de encabezado (`<h1>` a `<h6>`), cada uno con un texto que indique su nivel. Por ejemplo: "Este es un encabezado de nivel 1", "Este es un encabezado de nivel 2", etc.

3. Crear un archivo HTML que contenga un parrafo con un enlace (`<a>`) que redirija a la pagina de Google y una imagen (`<img>`) debajo del parrafo. La imagen puede ser cualquier imagen de internet (usar una URL publica). No olvidar el atributo `alt` con una descripcion de la imagen.

4. Crear un archivo HTML que contenga una lista no ordenada (`<ul>`) con al menos 5 materias de la facultad, y debajo una lista ordenada (`<ol>`) con los pasos para inscribirse a una materia.

5. Crear un archivo HTML que contenga un parrafo con texto en **negrita** (`<strong>`), texto en *cursiva* (`<em>`) y texto con un enlace a una pagina externa. Ademas, agregar un salto de linea (`<br>`) y una linea horizontal (`<hr>`) entre dos secciones de texto.

### HTML Semantico

6. Crear un archivo HTML que utilice las etiquetas semanticas `<header>`, `<nav>`, `<main>` y `<footer>`. El `<header>` debe contener el nombre de un sitio web ficticio. El `<nav>` debe tener una lista de al menos 3 enlaces de navegacion (pueden apuntar a `#`). El `<main>` debe contener un parrafo de bienvenida. El `<footer>` debe contener un texto de derechos de autor.

7. Crear un archivo HTML que dentro del `<main>` contenga dos etiquetas `<section>`, cada una con un encabezado `<h2>` y un parrafo. Dentro de una de las secciones, agregar una etiqueta `<article>` con un titulo `<h3>` y un parrafo simulando una noticia o entrada de blog.

### Formularios

8. Crear un archivo HTML con un formulario que contenga los siguientes campos: nombre (tipo texto), email (tipo email) y un boton de enviar. Cada campo debe tener su correspondiente etiqueta `<label>`.

9. Crear un formulario de registro que incluya: nombre de usuario (texto, maximo 20 caracteres con `maxlength`), contrasenia (tipo password, obligatorio con `required`), email (tipo email, obligatorio), edad (tipo number) y un boton de registro. Todos los campos deben tener un `placeholder` descriptivo.

10. Crear un formulario de contacto que incluya: nombre completo (texto, obligatorio), telefono (texto, con un `pattern` que acepte solo numeros de 10 digitos), mensaje (usando `<textarea>` con 5 filas y 40 columnas) y un boton de enviar. Agregar tambien un campo `<select>` con opciones de asunto: "Consulta general", "Soporte tecnico" y "Sugerencia".

11. Crear un formulario de encuesta que incluya: una pregunta con opciones de respuesta usando botones de radio (`<input type="radio">`), una pregunta con opciones multiples usando checkboxes (`<input type="checkbox">`), un campo de rango (`<input type="range">`) para calificar del 1 al 10 y un boton de enviar.

### Tablas

12. Crear una tabla HTML que muestre un horario semanal de cursada. La tabla debe tener una fila de encabezado con los dias de la semana (lunes a viernes) y al menos 3 filas con franjas horarias. Utilizar `<thead>` y `<tbody>` para organizar la tabla.

13. Crear una tabla HTML que muestre un listado de al menos 5 alumnos con las columnas: Legajo, Nombre, Apellido y Nota Final. Utilizar `<th>` para los encabezados. Agregar una fila final que utilice `colspan` para mostrar el texto "Promedio general: X" abarcando todas las columnas.

14. Crear una tabla que represente una factura simplificada. Debe incluir columnas para: Producto, Cantidad, Precio Unitario y Subtotal. Utilizar `rowspan` en al menos una celda (por ejemplo, para agrupar productos de una misma categoria). Agregar una fila de total al final.

### CSS Basico

15. Tomar el archivo HTML del ejercicio 1 y agregar estilos CSS utilizando una etiqueta `<style>` en el `<head>`. Cambiar el color de fondo de la pagina, el color y la fuente del titulo `<h1>`, y el tamano de letra del parrafo.

16. Crear un archivo HTML y un archivo CSS externo (`estilos.css`). Vincular el archivo CSS al HTML mediante la etiqueta `<link>`. En el CSS, definir estilos para:
    - Todos los parrafos (`p`): color de texto gris oscuro y fuente "Arial".
    - Los encabezados `h1`: color azul y texto centrado.
    - Los enlaces (`a`): sin subrayado por defecto, que se subrayen al pasar el cursor encima (`:hover`).

17. Crear un archivo HTML con tres `<div>`, cada uno con una clase CSS distinta. Aplicar a cada `<div>` un color de fondo diferente, bordes redondeados (`border-radius`), padding de 20px y margen de 10px. Ademas, asignar un `id` a uno de los `<div>` y aplicarle un estilo adicional exclusivo por su ID (por ejemplo, una sombra con `box-shadow`).

### Layout

18. Crear un archivo HTML con un contenedor `<div>` que use Flexbox (`display: flex`) para mostrar 4 cajas (`<div>`) en una fila horizontal, distribuidas con espacio igual entre ellas (`justify-content: space-between`). Cada caja debe tener un ancho fijo, un color de fondo distinto y texto centrado.

19. Crear una barra de navegacion horizontal usando Flexbox. La barra debe contener un logo (puede ser texto) alineado a la izquierda y un grupo de al menos 4 enlaces alineados a la derecha. La barra debe tener un color de fondo oscuro y los enlaces deben ser de color claro. Al pasar el cursor sobre un enlace, debe cambiar su color de fondo.

20. Crear una pagina HTML con un layout de dos columnas usando Flexbox: una columna lateral (`aside`) que ocupe el 30% del ancho y una columna principal (`main`) que ocupe el 70%. La columna lateral debe tener un color de fondo gris claro y la principal un fondo blanco. Agregar contenido de ejemplo en ambas columnas.

21. Crear un archivo HTML con un contenedor que use Flexbox para centrar un `<div>` tanto horizontal como verticalmente en la pantalla (el contenedor debe ocupar todo el alto de la ventana usando `min-height: 100vh`). El `<div>` centrado debe contener un mensaje de "Pagina en construccion".

### Desafios

22. Crear una pagina web de perfil personal que incluya:
    - Un `<header>` con tu nombre y una barra de navegacion con enlaces a las secciones de la pagina.
    - Una seccion "Sobre mi" con un parrafo descriptivo y una foto.
    - Una seccion "Habilidades" con una lista no ordenada.
    - Una seccion "Contacto" con un formulario que tenga campos de nombre, email y mensaje (todos obligatorios).
    - Un `<footer>` con links a redes sociales.
    - Aplicar estilos CSS externos para darle una apariencia profesional (colores, fuentes, espaciados, Flexbox para el layout).

23. Crear una pagina web que simule la vista principal de una tienda online. Debe incluir:
    - Un `<header>` con el nombre de la tienda y una barra de navegacion.
    - Una seccion de productos que muestre al menos 6 tarjetas de producto en un layout responsivo usando Flexbox (que se acomoden en 3 columnas en pantallas grandes y 1 columna en pantallas chicas usando `flex-wrap`). Cada tarjeta debe tener una imagen, nombre del producto, precio y un boton de "Agregar al carrito".
    - Un `<footer>` con informacion de contacto.
    - Estilos CSS que incluyan: efectos `:hover` en las tarjetas y botones, bordes redondeados, sombras y una paleta de colores coherente.

24. Crear una pagina web que contenga una tabla comparativa de al menos 3 planes de suscripcion (por ejemplo: Basico, Profesional y Premium). La tabla debe mostrar caracteristicas en las filas y los planes en las columnas. Aplicar estilos CSS para:
    - Resaltar la columna del plan recomendado con un color de fondo diferente.
    - Aplicar estilos alternados a las filas (`:nth-child`).
    - Hacer que la tabla sea visualmente atractiva con bordes, padding y fuentes adecuadas.
    - Agregar un boton "Elegir plan" al final de cada columna con efecto `:hover`.
