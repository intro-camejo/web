# Guia 7 - JavaScript

> **Nota:** Para todos los ejercicios, se recomienda usar la consola del navegador (`F12` o click derecho -> "Inspeccionar" -> pestaña "Console") para probar el codigo y debuggear. Tambien se pueden usar herramientas online como [CodePen](https://codepen.io/) o [JSFiddle](https://jsfiddle.net/) para practicar sin necesidad de crear archivos locales.
>
> **Referencia recomendada:** [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

### Variables y Tipos de Datos

1. Crear una variable con `const` que almacene tu nombre y mostrarla en la consola del navegador usando `console.log()`.

2. Crear las siguientes variables y mostrarlas por consola: una constante `nombre` (string), una constante `edad` (number), una constante `esEstudiante` (boolean) y una variable `contador` con `let` inicializada en 0. Luego incrementar `contador` en 1 y mostrar su nuevo valor.

3. Crear una constante `materia` con el valor "Intro al Desarrollo de Software". Usando template literals (backticks), mostrar por consola el mensaje: "Estoy cursando Intro al Desarrollo de Software y mi nombre es (tu nombre)".

4. Crear un array llamado `materias` que contenga al menos 4 materias. Mostrar por consola: el primer elemento, el ultimo elemento y la cantidad total de elementos del array.

5. Crear un objeto llamado `estudiante` con las propiedades: `nombre`, `padron`, `carrera` y `materias` (este ultimo un array). Mostrar por consola el nombre del estudiante y la cantidad de materias que cursa.

### Funciones y Estructuras de Control

6. Crear una funcion `esPar(numero)` que reciba un numero y retorne `true` si es par o `false` si es impar. Probarla con al menos 3 valores distintos mostrando los resultados por consola.

7. Crear una funcion `calcularPromedio(notas)` que reciba un array de notas (numeros) y retorne el promedio. Luego, crear otra funcion `estadoMateria(promedio)` que reciba el promedio y retorne "Aprobado" si es mayor o igual a 4, "Desaprobado" en caso contrario. Mostrar el resultado por consola.

8. Crear una funcion `diaDeLaSemana(numero)` que reciba un numero del 1 al 7 y retorne el nombre del dia correspondiente usando `switch`. Si el numero esta fuera de rango, retornar "Dia invalido".

9. Crear una arrow function `filtrarAprobados(alumnos)` que reciba un array de objetos con la forma `{ nombre: "...", nota: ... }` y retorne un nuevo array solo con los alumnos que tengan nota mayor o igual a 4. Mostrar el resultado por consola.

10. Crear una funcion `generarTabla(numero)` que reciba un numero y muestre por consola la tabla de multiplicar de ese numero (del 1 al 10). Usar un bucle `for`.

### Manipulacion del DOM

11. Crear un archivo HTML con un `<h1>` que diga "Hola Mundo". Desde JavaScript, seleccionar el elemento usando `document.querySelector()` y cambiar su texto a "Hola, JavaScript!". Luego cambiarle el color a azul usando `style.color`.

12. Crear un HTML con una lista vacia `<ul id="lista"></ul>` y un array en JavaScript con 5 nombres de materias. Usando un bucle, crear un `<li>` por cada materia y agregarlo a la lista con `appendChild()`.

13. Crear un HTML con un `<div id="contenedor"></div>`. Desde JavaScript, crear dinamicamente una tarjeta (un `<div>` con clase "tarjeta") que contenga un `<h3>` con un titulo, un `<p>` con una descripcion, y un `<button>` con el texto "Eliminar". Al hacer click en el boton, la tarjeta debe eliminarse del DOM usando `.remove()`.

14. Crear un HTML con un parrafo y tres botones: "Rojo", "Verde" y "Azul". Al hacer click en cada boton, el color de fondo de la pagina (`document.body.style.backgroundColor`) debe cambiar al color correspondiente. Agregar un cuarto boton "Reset" que vuelva el fondo a blanco.

### Eventos e Interactividad

15. Crear un HTML con un `<input type="text">` y un `<p id="preview"></p>`. Usando el evento `"input"`, hacer que cada vez que el usuario escriba en el input, el texto se muestre automaticamente en el parrafo (en tiempo real).

16. Crear un formulario de registro con los campos: nombre (text), email (email), edad (number) y un boton de enviar. Al enviar el formulario (evento `"submit"`):
    - Prevenir el comportamiento por defecto con `preventDefault()`.
    - Validar que el nombre no este vacio.
    - Validar que el email contenga un "@".
    - Validar que la edad sea un numero entre 18 y 99.
    - Si hay errores, mostrarlos en un `<div id="errores">` con texto en rojo.
    - Si todo es correcto, mostrar un mensaje de exito en verde y limpiar el formulario con `reset()`.

17. Crear un HTML con un `<input type="text" id="tarea">`, un `<button>` para agregar, y un `<ul id="listaTareas">`. Implementar una lista de tareas donde:
    - Al hacer click en el boton (o presionar Enter en el input), se agregue un nuevo `<li>` con el texto ingresado.
    - Cada `<li>` debe tener un boton "X" que al hacer click elimine esa tarea de la lista.
    - No permitir agregar tareas con texto vacio.

18. Crear un HTML con un contador que muestre un numero (inicialmente 0) y tres botones: "Incrementar" (+1), "Decrementar" (-1) y "Resetear" (vuelve a 0). El numero no debe poder ser menor a 0. Usar `classList.toggle()` para agregar una clase CSS "destacado" cuando el contador supere el valor 10.

### Fetch y APIs

19. Crear un HTML con un boton "Cargar usuario aleatorio" y un `<div id="resultado">`. Al hacer click en el boton, usar `fetch` con `async/await` para obtener datos de la API `https://jsonplaceholder.typicode.com/users/1` y mostrar en el div el nombre, email y ciudad del usuario. Manejar los errores con `try/catch` mostrando un mensaje adecuado.

20. Crear un HTML con un `<input type="text">` para buscar usuarios por nombre y un `<div id="resultados">`. Al escribir en el input (evento `"input"`), usar `fetch` para obtener la lista completa de usuarios de `https://jsonplaceholder.typicode.com/users` y filtrar los que coincidan con el texto ingresado. Mostrar los resultados como tarjetas con el nombre y el email de cada usuario.

21. Crear un HTML con un boton "Cargar posts" y un contenedor para mostrar los resultados. Usar `fetch` para consumir `https://jsonplaceholder.typicode.com/posts` (devuelve 100 posts). Mostrar solo los primeros 10 posts en tarjetas que contengan el titulo y el cuerpo del post. Agregar un boton "Cargar mas" que muestre los siguientes 10 posts cada vez que se presione.

22. Crear un HTML con un formulario que tenga un campo "Titulo" y un campo "Cuerpo". Al enviar el formulario, usar `fetch` con el metodo `POST` para enviar los datos a `https://jsonplaceholder.typicode.com/posts`. Mostrar por consola y en la pagina la respuesta del servidor (la API devuelve el objeto creado con un ID).

### Desafios

23. **Conversor de temperatura:** Crear una pagina con un input numerico, dos botones ("Celsius a Fahrenheit" y "Fahrenheit a Celsius") y un parrafo para mostrar el resultado. Implementar ambas conversiones. Validar que el input contenga un numero valido antes de convertir.

24. **Buscador de paises:** Crear una pagina con un campo de busqueda y una seccion de resultados. Usar la API `https://restcountries.com/v3.1/name/{nombre}` para buscar paises. Mostrar para cada resultado: la bandera (imagen), el nombre, la capital y la poblacion. Manejar el caso en que no se encuentren resultados mostrando un mensaje.

25. **Lista de tareas con LocalStorage:** Tomar como base el ejercicio 17 y mejorarlo para que las tareas se guarden en `localStorage`. Al recargar la pagina, las tareas deben seguir apareciendo. Implementar las funciones necesarias para guardar, cargar y eliminar tareas usando `localStorage.setItem()`, `localStorage.getItem()` y `JSON.parse()`/`JSON.stringify()`.
