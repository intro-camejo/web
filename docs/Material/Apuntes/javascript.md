# JavaScript

## Introducción a JavaScript
JavaScript (JS) es el lenguaje de programación que le da **comportamiento e interactividad** a una página web. Mientras que HTML define la estructura y CSS la apariencia, JavaScript es el que permite que una página **reaccione** a lo que hace el usuario: validar un formulario, mostrar u ocultar contenido, pedir datos a un servidor sin recargar la página, actualizar el DOM dinámicamente, y mucho más.

A diferencia de HTML y CSS, JavaScript es un **lenguaje de programación completo**: tiene variables, funciones, condicionales, ciclos, estructuras de datos, y se ejecuta directamente en el navegador (aunque también existen entornos como Node.js para correrlo fuera del navegador).

### ¿Cómo lo incluimos en nuestro HTML?
Al igual que con CSS, hay varias formas de agregar JavaScript a una página:

1. **Script en línea**: código JS directamente dentro de una etiqueta `<script>` en el HTML.
    ```html
    <script>
        console.log("Hola desde el HTML");
    </script>
    ```
2. **Script externo**: en un archivo `.js` aparte, enlazado con el atributo `src`. Es la forma recomendada, porque separa el comportamiento de la estructura.
    ```html
    <script src="script.js"></script>
    ```
    Lo habitual es colocar el `<script>` **al final del `<body>`**, así el navegador ya cargó todo el HTML antes de que el JS intente manipularlo.

---

## Variables

En JavaScript hay tres formas de declarar variables: `var`, `let` y `const`.

| Palabra clave | Se puede reasignar | Alcance (scope) |
|---|---|---|
| `var` | Sí | De función |
| `let` | Sí | De bloque `{}` |
| `const` | No | De bloque `{}` |

```javascript
let edad = 20;
edad = 21; // válido, let se puede reasignar

const nombre = "Ana";
// nombre = "Lucía"; // Error: no se puede reasignar una const
```

**Regla práctica**: usá `const` por defecto, y `let` solo cuando sepas que el valor va a cambiar.

### Tipos de datos primitivos
- **String**: texto, entre comillas simples, dobles o backticks. `"hola"`, `'hola'`, `` `hola` ``
- **Number**: números enteros o decimales. `42`, `3.14`
- **Boolean**: `true` o `false`
- **undefined**: una variable declarada pero sin valor asignado.
- **null**: representa la ausencia intencional de valor.

### Template literals
Los backticks (`` ` ``) permiten construir strings insertando variables directamente con `${}`, sin necesidad de concatenar con `+`.
```javascript
const nombre = "Ana";
const edad = 20;
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
```

---

## Funciones

Una función agrupa un bloque de código reutilizable. En JS hay varias formas de definirlas:

### Declaración de función
```javascript
function sumar(a, b) {
    return a + b;
}
sumar(2, 3); // 5
```

### Función anónima / expresión de función
```javascript
const sumar = function (a, b) {
    return a + b;
};
```

### Arrow functions (funciones flecha)
Una sintaxis más corta, muy usada en JS moderno. No tienen su propio `this`, lo cual es relevante en contextos más avanzados (callbacks, clases).
```javascript
const sumar = (a, b) => a + b; // return implícito si es una sola expresión

const saludar = (nombre) => {
    console.log(`Hola, ${nombre}`);
};
```

### Parámetros por defecto
```javascript
function saludar(nombre = "invitado") {
    console.log(`Hola, ${nombre}`);
}
saludar(); // Hola, invitado
```

---

## Arreglos (Arrays) y Objetos

### Arrays
Un array almacena una lista ordenada de valores.
```javascript
const colores = ["rojo", "verde", "azul"];
colores[0]; // "rojo"
colores.length; // 3
```

### Objetos
Un objeto almacena datos como pares **clave: valor**.
```javascript
const banda = {
    nombre: "Queen",
    genero: "Rock",
    anioFundacion: 1970,
};

banda.nombre; // "Queen"
banda["genero"]; // "Rock" (también se puede acceder con corchetes)
```

### Arrays de objetos
Es muy común combinar ambos, por ejemplo para representar una lista de entidades:
```javascript
const bandas = [
    { nombre: "Queen", genero: "Rock", anioFundacion: 1970 },
    { nombre: "Daft Punk", genero: "Electrónica", anioFundacion: 1993 },
];
```

### Métodos útiles de arrays

- **`forEach`**: ejecuta una función por cada elemento (no devuelve nada nuevo).
    ```javascript
    bandas.forEach(banda => console.log(banda.nombre));
    ```
- **`map`**: crea un **nuevo array** transformando cada elemento.
    ```javascript
    const nombres = bandas.map(banda => banda.nombre);
    // ["Queen", "Daft Punk"]
    ```
- **`filter`**: crea un **nuevo array** solo con los elementos que cumplen una condición.
    ```javascript
    const rock = bandas.filter(banda => banda.genero === "Rock");
    ```
- **`find`**: devuelve el **primer** elemento que cumple una condición (o `undefined` si ninguno cumple).
    ```javascript
    const queen = bandas.find(banda => banda.nombre === "Queen");
    ```
- **`reduce`**: acumula los elementos del array en un solo valor.
    ```javascript
    const anioMasViejo = bandas.reduce((minimo, banda) =>
        banda.anioFundacion < minimo ? banda.anioFundacion : minimo,
        Infinity
    );
    ```

---

## El DOM (Document Object Model)

El **DOM** es la representación en memoria del HTML de la página, organizada como un árbol de elementos. JavaScript puede leer y modificar el DOM, lo que permite actualizar la página sin recargarla.

### Seleccionar elementos
- `document.querySelector(selector)`: devuelve el **primer** elemento que coincide con un selector CSS.
- `document.querySelectorAll(selector)`: devuelve **todos** los elementos que coinciden (como una lista, `NodeList`).
- `document.getElementById(id)`: devuelve el elemento con ese `id` (más viejo, `querySelector` lo reemplaza en la práctica).

```javascript
const titulo = document.querySelector("h1");
const items = document.querySelectorAll("li");
```

### Leer y modificar contenido
- `elemento.textContent`: obtiene o modifica el texto de un elemento.
- `elemento.innerHTML`: obtiene o modifica el HTML interno de un elemento (permite insertar etiquetas, pero hay que tener cuidado con inyectar contenido no confiable).

```javascript
titulo.textContent = "Nuevo título";
```

### Crear y agregar elementos
```javascript
const li = document.createElement("li");
li.textContent = "Nueva banda";
document.querySelector("ul").appendChild(li);
```

### Clases y atributos
- `elemento.classList.add("clase")` / `.remove("clase")` / `.toggle("clase")`: manipulan las clases CSS de un elemento.
- `elemento.dataset`: permite leer y escribir atributos `data-*` de forma sencilla.
    ```html
    <li data-genero="Rock">Queen</li>
    ```
    ```javascript
    li.dataset.genero; // "Rock"
    li.dataset.genero = "Pop"; // actualiza el atributo data-genero
    ```
- `elemento.style.propiedad`: modifica un estilo CSS puntual desde JS.
    ```javascript
    li.style.display = "none";
    ```

---

## Eventos

Los eventos permiten ejecutar código en respuesta a una acción del usuario (click, cambio de un input, envío de un formulario, etc.).

```javascript
const boton = document.querySelector("button");

boton.addEventListener("click", () => {
    console.log("¡Se hizo click!");
});
```

### Eventos más comunes
- `click`: al hacer click sobre un elemento.
- `change`: cuando cambia el valor de un `<input>`, `<select>` o `<textarea>` (y el usuario "confirma" el cambio, por ejemplo saliendo del campo).
- `input`: cada vez que cambia el valor de un campo, mientras se escribe.
- `submit`: al enviar un formulario (`<form>`).
- `keydown` / `keyup`: al presionar o soltar una tecla.

### El objeto `event`
El callback de un listener recibe un objeto `event` con información sobre lo que pasó.
```javascript
const select = document.querySelector("select");

select.addEventListener("change", (event) => {
    console.log(event.target.value); // valor seleccionado
});
```

### `preventDefault()`
Algunos eventos tienen un comportamiento por defecto del navegador (por ejemplo, un formulario que recarga la página al enviarse). `preventDefault()` cancela ese comportamiento, muy usado para manejar formularios con JS en vez de dejar que el navegador recargue la página.
```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Formulario interceptado, no se recarga la página");
});
```

### Validación de formularios en JS
Además de la validación automática de HTML (`required`, `pattern`, etc.), se puede validar "a mano" antes de procesar los datos:
```javascript
const input = document.querySelector("#nombre-banda");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value.trim() === "") {
        console.log("El nombre no puede estar vacío");
        return; // corta la ejecución, no sigue procesando el formulario
    }

    console.log("Formulario válido, se procesa normalmente");
});
```

---

## Asincronismo: Promesas, async/await y Fetch

Muchas operaciones en JS no terminan al instante: pedir datos a un servidor, leer un archivo, esperar un timer. Estas operaciones son **asincrónicas**: el código no se detiene a esperarlas, sino que sigue ejecutándose y el resultado llega más adelante.

### Promesas
Una **Promise** representa un valor que puede no estar disponible todavía, pero lo va a estar (o va a fallar) en el futuro. Tiene tres estados: *pending* (pendiente), *fulfilled* (resuelta) y *rejected* (rechazada).

```javascript
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.log("Hubo un error:", error));
```

- `.then()`: se ejecuta cuando la promesa se resuelve exitosamente.
- `.catch()`: se ejecuta si la promesa es rechazada (por ejemplo, error de red).

### `async`/`await`
Es una forma más legible de trabajar con promesas, escribiendo código asincrónico como si fuera secuencial.

```javascript
async function obtenerPokemon(nombre) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const data = await response.json();
    console.log(data.name);
}

obtenerPokemon("pikachu");
```

- Una función marcada con `async` siempre devuelve una promesa.
- `await` "pausa" la ejecución de esa función hasta que la promesa se resuelva, sin bloquear el resto de la página.
- `await` solo puede usarse dentro de una función `async`.

### Manejo de errores con `try`/`catch`
Cuando se usa `async`/`await`, el manejo de errores se hace con `try`/`catch` (en vez de `.catch()`):

```javascript
async function obtenerPokemon(nombre) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

        if (!response.ok) {
            throw new Error("Pokémon no encontrado");
        }

        const data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.log("No se pudo obtener el Pokémon:", error.message);
    }
}
```

**Importante**: `fetch` **no** rechaza la promesa por códigos de error HTTP como 404 o 500 — solo la rechaza si hay un error de red. Por eso hay que chequear `response.ok` manualmente y lanzar (`throw`) un error si la respuesta no es exitosa.

### Resumen: tres formas de manejar lo mismo

| Estilo | Cómo se ve |
|---|---|
| Callbacks (viejo, evitar) | función dentro de función, anidación difícil de leer |
| Promesas con `.then()`/`.catch()` | encadenado, más legible que callbacks |
| `async`/`await` con `try`/`catch` | el más legible, parece código sincrónico |

---

**Referencias:**

* [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
* [MDN - Working with the DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
* [MDN - Using Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
* [PokeAPI](https://pokeapi.co/) (usada en los ejercicios de fetch)