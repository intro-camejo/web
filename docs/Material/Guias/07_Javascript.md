# Guía 8 - JavaScript

*<u>__Nota__</u>: Esta guía continúa sobre el `index.html` armado en la Guía 7.*

### Variables y funciones

1. Crear un archivo `script.js` y vincularlo al final del `<body>` de `index.html` con `<script src="script.js"></script>`.
2. Declarar un arreglo `bandas` de objetos, donde cada objeto tenga `nombre`, `genero` y `anioFundacion` (usá los mismos datos que pusiste "a mano" en el HTML de la Guía 7).
3. Escribir una función `bandasPorGenero(bandas, genero)` que reciba el arreglo y un género, y devuelva solo las bandas de ese género.
4. Escribir una función `bandaMasAntigua(bandas)` que devuelva el objeto de la banda con menor `anioFundacion`.
5. Usar `console.log` para probar ambas funciones y verificar que devuelven lo esperado antes de seguir.

### DOM - Lectura y escritura

6. Usando `document.querySelector` (o `getElementById`), seleccionar la sección `#bandas` y, en lugar de la lista escrita a mano en el HTML, **generarla dinámicamente** recorriendo el arreglo `bandas` con un `forEach` y creando un `<li>` por cada una (`document.createElement`).
7. Modificar el `<h1>` del header para que, en lugar de un texto fijo, muestre la cantidad de bandas cargadas (por ejemplo: "Catálogo de Bandas (4)"), usando `bandas.length`.
8. Seleccionar todos los `<li>` generados y, a cada uno, agregarle un `data-genero` con el género correspondiente (usando `dataset`).

### Eventos

9. Agregar un `<select>` (fuera del formulario de contacto) con las opciones "Todos" + los géneros presentes en `bandas`, generado dinámicamente a partir del arreglo (sin repetir géneros).
10. Escuchar el evento `change` de ese `<select>` y, al cambiar la selección, **filtrar** los `<li>` visibles según el género elegido (mostrando/ocultando con `style.display`, sin volver a generar la lista desde cero).
11. Sobre el formulario de "sugerir banda" (Guía 7, ejercicio 6): escuchar el evento `submit`, prevenir el comportamiento por defecto (`preventDefault`) para que no recargue la página, leer los valores ingresados, agregar un nuevo objeto al arreglo `bandas`, y volver a renderizar la lista para que aparezca la nueva banda sin recargar.
12. Agregar validación manual en JS al mismo formulario: si el campo de nombre está vacío, mostrar un mensaje de error visible en la página (sin usar `alert`) y no agregar la banda.

### Fetch y asincronismo

13. Usar `fetch` para pedir datos a la [PokeAPI](https://pokeapi.co/) (`https://pokeapi.co/api/v2/pokemon/pikachu`) y, con `.then()`, imprimir por consola el nombre y el peso del Pokémon obtenido.
14. Reescribir el ejercicio 13 usando `async/await` en lugar de `.then()`.
15. Crear un input de búsqueda simple: al escribir el nombre de un Pokémon y presionar un botón, hacer un `fetch` a `https://pokeapi.co/api/v2/pokemon/<nombre>` y mostrar en la página su nombre, imagen (`sprites.front_default`) y tipo(s).
16. Manejar el caso de error (por ejemplo, si se busca un Pokémon que no existe, la API devuelve un status 404): usando `try/catch` (o `.catch()`), mostrar un mensaje amigable en la página en lugar de dejar que falle silenciosamente.

*__Aclaración__: los ejercicios 13 a 16 usan una API pública real solo a modo de práctica de `fetch`; no hace falta ninguna configuración adicional ni API key.*