---
sidebar_position: 9
---

# JavaScript en el Navegador

Este apunte cubre JavaScript aplicado al navegador: cómo manipular páginas web, responder a acciones del usuario y comunicarse con servidores externos.

## Introducción a JavaScript

**JavaScript** es un lenguaje de programación que originalmente fue creado para darle interactividad a las páginas web. Mientras que HTML define la estructura y CSS el estilo (como vimos en el apunte de HTML y CSS), JavaScript agrega el **comportamiento**: qué pasa cuando hacés click en un botón, cómo se valida un formulario, cómo se cargan datos sin recargar la página.

### Dónde se ejecuta

JavaScript se ejecuta dentro del **navegador** (Chrome, Firefox, etc.). Cada navegador tiene un motor de JavaScript que interpreta y ejecuta el código. Cuando abrís una página web que tiene JavaScript, el navegador lo descarga y lo ejecuta automáticamente.

### Cómo incluir JavaScript en HTML

Hay dos formas principales:

**1. Script interno** (dentro del HTML):

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi página</title>
</head>
<body>
    <h1>Hola mundo</h1>

    <script>
        console.log("Este código se ejecuta en el navegador");
    </script>
</body>
</html>
```

**2. Script externo** (archivo separado, recomendado):

```html
<!-- En el HTML -->
<script src="app.js"></script>
```

```javascript
// En app.js
console.log("Hola desde un archivo externo");
```

Siempre es mejor usar archivos externos porque mantiene el código organizado. Poné el `<script>` justo antes de cerrar `</body>` para que el HTML se cargue primero.

### La consola del navegador

La consola es tu herramienta principal para debuggear. Abrila con `F12` (o click derecho → "Inspeccionar" → pestaña "Console"). Ahí podés:

```javascript
console.log("Mensaje informativo");
console.warn("Advertencia");
console.error("Error");
```

---

## Variables y tipos de datos

### let y const

```javascript
// const: para valores que no cambian
const nombre = "María";
const edad = 22;

// let: para valores que pueden cambiar
let contador = 0;
contador = contador + 1;
```

Usá `const` siempre que puedas. Solo usá `let` cuando necesites reasignar el valor.

### Tipos de datos

```javascript
// Strings (cadenas de texto)
const saludo = "Hola";
const mensaje = `Bienvenido, ${nombre}`;  // template literals con backticks

// Numbers (números)
const entero = 42;
const decimal = 3.14;

// Booleans
const activo = true;
const eliminado = false;

// Arrays (listas)
const materias = ["Algoritmos", "Intro al Desarrollo", "Física"];
console.log(materias[0]);  // "Algoritmos"
console.log(materias.length);  // 3

// Objetos
const estudiante = {
    nombre: "Juan",
    padron: 108432,
    materias: ["Algo 1", "Intro"]
};
console.log(estudiante.nombre);  // "Juan"
console.log(estudiante.padron);  // 108432
```

---

## Funciones

```javascript
// Declaración clásica
function sumar(a, b) {
    return a + b;
}

// Arrow function (función flecha)
const multiplicar = (a, b) => {
    return a * b;
};

// Arrow function corta (una sola expresión)
const doble = (n) => n * 2;

console.log(sumar(3, 4));       // 7
console.log(multiplicar(3, 4)); // 12
console.log(doble(5));          // 10
```

Las arrow functions son más concisas y las vas a ver mucho en JavaScript moderno. Usamos ambas formas indistintamente en este apunte.

---

## El DOM (Document Object Model)

### ¿Qué es el DOM?

Cuando el navegador carga una página HTML, crea una representación interna de esa página llamada **DOM**. Es un árbol de objetos donde cada elemento HTML se convierte en un **nodo** que podés manipular con JavaScript.

```
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        ├── p
        └── div
            ├── p
            └── button
```

El objeto `document` es el punto de entrada al DOM. Desde ahí podés acceder a cualquier elemento de la página.

---

## Seleccionando elementos

Para manipular un elemento, primero tenés que "encontrarlo" en el DOM:

```javascript
// Por ID (devuelve UN elemento)
const titulo = document.getElementById("titulo");

// Por selector CSS (devuelve el PRIMERO que matchea)
const boton = document.querySelector(".btn-principal");
const parrafo = document.querySelector("#intro p");

// Todos los que matchean (devuelve una lista)
const items = document.querySelectorAll(".item");
const todosLosParrafos = document.querySelectorAll("p");
```

`querySelector` y `querySelectorAll` usan la misma sintaxis de selectores que CSS, así que si ya sabés CSS, ya sabés usarlos.

```javascript
document.querySelector("h1");           // por tag
document.querySelector("#miId");        // por ID
document.querySelector(".miClase");     // por clase
document.querySelector("div > p");      // selector compuesto
```

---

## Manipulando el DOM

### Cambiar contenido

```javascript
const titulo = document.querySelector("#titulo");

// Cambiar solo el texto
titulo.textContent = "Nuevo título";

// Cambiar el HTML interno (cuidado con XSS si usás datos del usuario)
titulo.innerHTML = "Título con <em>énfasis</em>";
```

### Cambiar estilos

```javascript
const caja = document.querySelector(".caja");

// Cambiar estilos directamente
caja.style.backgroundColor = "lightblue";
caja.style.padding = "20px";
caja.style.borderRadius = "8px";

// Mejor: agregar/quitar clases CSS
caja.classList.add("activo");
caja.classList.remove("oculto");
caja.classList.toggle("destacado");  // agrega si no está, quita si está
```

Siempre es mejor manipular **clases CSS** en vez de estilos inline. Definí los estilos en tu archivo CSS y desde JavaScript solo agregás o quitás las clases.

### Crear y eliminar elementos

```javascript
// Crear un elemento nuevo
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este párrafo fue creado con JavaScript";
nuevoParrafo.classList.add("nuevo");

// Agregarlo al DOM
const contenedor = document.querySelector("#contenedor");
contenedor.appendChild(nuevoParrafo);

// Eliminar un elemento
const elementoViejo = document.querySelector("#viejo");
elementoViejo.remove();
```

---

## Eventos

Los eventos son **acciones que ocurren en la página**: un click, el envío de un formulario, una tecla presionada, el mouse pasando sobre un elemento, etc.

### addEventListener

```javascript
const boton = document.querySelector("#miBoton");

boton.addEventListener("click", () => {
    console.log("Hiciste click en el botón!");
});
```

### Eventos comunes

```javascript
// Click
elemento.addEventListener("click", () => { /* ... */ });

// Envío de formulario
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();  // evita que la página se recargue
    // procesar el formulario
});

// Escribir en un input
input.addEventListener("input", () => {
    console.log("Valor actual:", input.value);
});

// Presionar una tecla
document.addEventListener("keydown", (evento) => {
    console.log("Tecla:", evento.key);
    if (evento.key === "Escape") {
        console.log("Presionaste Escape!");
    }
});
```

### preventDefault()

Algunos elementos tienen comportamiento por defecto. Los formularios recargan la página al enviarse, los links te llevan a otra página. Con `preventDefault()` podés evitarlo:

```javascript
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    // Ahora podés manejar el envío con JavaScript
});
```

---

## Formularios y validación

Los formularios son una de las interacciones más comunes en la web. Veamos cómo obtener los valores y validarlos.

### Obtener valores de un formulario

```html
<form id="formularioRegistro">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" placeholder="Tu nombre">

    <label for="email">Email:</label>
    <input type="email" id="email" placeholder="tu@email.com">

    <label for="edad">Edad:</label>
    <input type="number" id="edad" placeholder="Tu edad">

    <button type="submit">Registrarse</button>
</form>
<div id="errores"></div>
<div id="resultado"></div>
```

```javascript
const formulario = document.querySelector("#formularioRegistro");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const edad = document.querySelector("#edad").value;

    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Edad:", edad);
});
```

La propiedad `.value` te da el contenido actual de un input. Para checkboxes, usás `.checked` (devuelve `true` o `false`).

### Validación básica

```javascript
const formulario = document.querySelector("#formularioRegistro");
const erroresDiv = document.querySelector("#errores");
const resultadoDiv = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    erroresDiv.innerHTML = "";
    resultadoDiv.innerHTML = "";

    const nombre = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#email").value.trim();
    const edad = parseInt(document.querySelector("#edad").value);

    const errores = [];

    if (nombre === "") {
        errores.push("El nombre es obligatorio.");
    }

    if (!email.includes("@")) {
        errores.push("El email debe contener un @.");
    }

    if (isNaN(edad) || edad < 18 || edad > 120) {
        errores.push("La edad debe ser un número entre 18 y 120.");
    }

    if (errores.length > 0) {
        errores.forEach(error => {
            const p = document.createElement("p");
            p.textContent = error;
            p.style.color = "red";
            erroresDiv.appendChild(p);
        });
    } else {
        resultadoDiv.textContent = `Registro exitoso! Bienvenido/a, ${nombre}.`;
        resultadoDiv.style.color = "green";
        formulario.reset();
    }
});
```

Notas:
- `.trim()` elimina espacios al inicio y al final del texto.
- `parseInt()` convierte el string del input a número entero.
- `isNaN()` verifica si algo NO es un número.
- `formulario.reset()` limpia todos los campos.

### Validación en tiempo real

```javascript
const inputEmail = document.querySelector("#email");

inputEmail.addEventListener("input", () => {
    if (inputEmail.value.length > 0 && !inputEmail.value.includes("@")) {
        inputEmail.style.borderColor = "red";
    } else {
        inputEmail.style.borderColor = "green";
    }
});
```

---

## Fetch API y asincronismo

Hasta ahora todo fue dentro de nuestra propia página. Pero las aplicaciones reales necesitan obtener datos de servidores externos. Para eso usamos la **Fetch API**.

### ¿Qué es el asincronismo?

La mayoría del código se ejecuta línea por línea. Pero pedir datos a un servidor tarda tiempo, y no queremos que la página se "congele". JavaScript tiene un modelo **asíncrono**: puede iniciar una operación, seguir haciendo otras cosas, y cuando la operación termina, manejar el resultado.

Pensalo como pedir comida en un restaurante: pedís tu plato, seguís charlando con tus amigos, y cuando el mozo trae la comida, la atendés.

### Promises (Promesas)

Una **promesa** es un objeto que representa el resultado futuro de una operación asíncrona. Puede estar:
- **Pending** (pendiente): todavía no se completó.
- **Fulfilled** (resuelta): se completó exitosamente.
- **Rejected** (rechazada): falló.

### Fetch con .then() y .catch()

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log("Nombre:", data.name);
        console.log("Email:", data.email);
    })
    .catch(error => {
        console.error("Hubo un error:", error);
    });
```

### Fetch con async/await

`async/await` es una forma más moderna y legible:

```javascript
async function obtenerUsuario() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();

        console.log("Nombre:", data.name);
        console.log("Email:", data.email);
    } catch (error) {
        console.error("Hubo un error:", error);
    }
}

obtenerUsuario();
```

- `async` antes de `function` indica que es asíncrona.
- `await` espera a que la promesa se resuelva antes de continuar.
- `try/catch` reemplaza a `.catch()` para manejar errores.

Ambas formas hacen lo mismo. `async/await` suele ser más fácil de leer.

### Mostrar datos del fetch en la página

```html
<button id="btnCargar">Cargar usuarios</button>
<div id="listaUsuarios"></div>
```

```javascript
const btnCargar = document.querySelector("#btnCargar");
const listaUsuarios = document.querySelector("#listaUsuarios");

btnCargar.addEventListener("click", async () => {
    listaUsuarios.textContent = "Cargando...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await response.json();

        listaUsuarios.innerHTML = "";

        usuarios.forEach(usuario => {
            const div = document.createElement("div");

            const nombre = document.createElement("h3");
            nombre.textContent = usuario.name;

            const email = document.createElement("p");
            email.textContent = `Email: ${usuario.email}`;

            const ciudad = document.createElement("p");
            ciudad.textContent = `Ciudad: ${usuario.address.city}`;

            div.appendChild(nombre);
            div.appendChild(email);
            div.appendChild(ciudad);
            listaUsuarios.appendChild(div);
        });
    } catch (error) {
        listaUsuarios.textContent = "Error al cargar los usuarios.";
        console.error(error);
    }
});
```

### Enviar datos con fetch (POST)

```javascript
async function crearUsuario(nombre, email) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nombre,
                email: email
            })
        });

        const data = await response.json();
        console.log("Usuario creado:", data);
    } catch (error) {
        console.error("Error al crear usuario:", error);
    }
}

crearUsuario("Pablo", "pablo@fi.uba.ar");
```

- `method: "POST"` indica que queremos enviar datos.
- `headers` especifica que estamos enviando JSON.
- `body: JSON.stringify(...)` convierte el objeto a una cadena JSON.

---

## LocalStorage

`localStorage` te permite guardar datos en el navegador que persisten incluso después de cerrar la pestaña.

### Operaciones básicas

```javascript
// Guardar
localStorage.setItem("nombre", "María");

// Obtener
const nombre = localStorage.getItem("nombre");  // "María"

// Eliminar uno
localStorage.removeItem("nombre");

// Limpiar todo
localStorage.clear();
```

### Guardar datos complejos

`localStorage` solo almacena strings. Para objetos o arrays, usá JSON:

```javascript
// Guardar un objeto
const usuario = {
    nombre: "Juan",
    edad: 25,
    materias: ["Algoritmos", "Intro al Desarrollo de Software"]
};
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar el objeto
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioGuardado.nombre);  // "Juan"
```

- `JSON.stringify(objeto)` convierte un objeto a string JSON.
- `JSON.parse(string)` convierte un string JSON a objeto.

### Ejemplo: lista de tareas persistente

```html
<form id="formTarea">
    <input type="text" id="inputTarea" placeholder="Nueva tarea...">
    <button type="submit">Agregar</button>
</form>
<ul id="listaTareas"></ul>
```

```javascript
const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas");

function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    listaTareas.innerHTML = "";

    tareas.forEach((tarea, indice) => {
        const li = document.createElement("li");
        li.textContent = tarea;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.addEventListener("click", () => {
            eliminarTarea(indice);
        });

        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
    });
}

formTarea.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const texto = inputTarea.value.trim();
    if (texto === "") return;

    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(texto);
    localStorage.setItem("tareas", JSON.stringify(tareas));

    inputTarea.value = "";
    cargarTareas();
});

function eliminarTarea(indice) {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.splice(indice, 1);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    cargarTareas();
}

cargarTareas();
```

---

## Ejemplo integrador

Vamos a juntar todo en un mini proyecto: una página que busca información de países usando una API pública, los muestra en tarjetas, y permite guardar favoritos en `localStorage`.

### El HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscador de Países</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; }
        .buscador { display: flex; gap: 10px; margin-bottom: 20px; }
        .buscador input { flex: 1; padding: 10px; font-size: 16px; border: 2px solid #ccc; border-radius: 5px; }
        .buscador button { padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; }
        .paises-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; }
        .pais-card { background: white; border-radius: 8px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .pais-card img { width: 100%; height: 150px; object-fit: cover; border-radius: 5px; }
        .btn-favorito { margin-top: 10px; padding: 8px 12px; border: none; border-radius: 5px; cursor: pointer; color: white; }
        .btn-favorito.agregar { background-color: #28a745; }
        .btn-favorito.quitar { background-color: #dc3545; }
    </style>
</head>
<body>
    <h1>Buscador de Países</h1>
    <div class="buscador">
        <input type="text" id="inputBusqueda" placeholder="Buscá un país (ej: Argentina)...">
        <button id="btnBuscar">Buscar</button>
    </div>
    <p id="mensaje"></p>
    <div id="resultados" class="paises-grid"></div>

    <h2>Mis países favoritos</h2>
    <div id="favoritos" class="paises-grid"></div>

    <script src="app.js"></script>
</body>
</html>
```

### El JavaScript (app.js)

```javascript
const inputBusqueda = document.querySelector("#inputBusqueda");
const btnBuscar = document.querySelector("#btnBuscar");
const resultadosDiv = document.querySelector("#resultados");
const mensajeP = document.querySelector("#mensaje");
const favoritosDiv = document.querySelector("#favoritos");

function obtenerFavoritos() {
    return JSON.parse(localStorage.getItem("paisFavoritos")) || [];
}

function guardarFavoritos(favoritos) {
    localStorage.setItem("paisFavoritos", JSON.stringify(favoritos));
}

function esFavorito(nombrePais) {
    return obtenerFavoritos().some(fav => fav.nombre === nombrePais);
}

function toggleFavorito(pais) {
    let favoritos = obtenerFavoritos();
    const nombrePais = pais.name.common;

    if (esFavorito(nombrePais)) {
        favoritos = favoritos.filter(fav => fav.nombre !== nombrePais);
    } else {
        favoritos.push({
            nombre: nombrePais,
            capital: pais.capital ? pais.capital[0] : "No disponible",
            poblacion: pais.population,
            bandera: pais.flags.png
        });
    }

    guardarFavoritos(favoritos);
    mostrarFavoritos();
    buscarPaises(inputBusqueda.value.trim());
}

async function buscarPaises(termino) {
    if (!termino) return;
    mensajeP.textContent = "Buscando...";
    resultadosDiv.innerHTML = "";

    try {
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${encodeURIComponent(termino)}`
        );

        if (!response.ok) {
            mensajeP.textContent = "No se encontraron países con ese nombre.";
            return;
        }

        const paises = await response.json();
        mensajeP.textContent = `Se encontraron ${paises.length} resultado(s).`;

        paises.forEach(pais => {
            const card = document.createElement("div");
            card.classList.add("pais-card");

            card.innerHTML = `
                <img src="${pais.flags.png}" alt="Bandera de ${pais.name.common}">
                <h3>${pais.name.common}</h3>
                <p>Capital: ${pais.capital ? pais.capital[0] : "No disponible"}</p>
                <p>Población: ${pais.population.toLocaleString("es-AR")}</p>
            `;

            const btnFav = document.createElement("button");
            btnFav.classList.add("btn-favorito");
            btnFav.classList.add(esFavorito(pais.name.common) ? "quitar" : "agregar");
            btnFav.textContent = esFavorito(pais.name.common) ? "Quitar de favoritos" : "Agregar a favoritos";
            btnFav.addEventListener("click", () => toggleFavorito(pais));

            card.appendChild(btnFav);
            resultadosDiv.appendChild(card);
        });
    } catch (error) {
        mensajeP.textContent = "Hubo un error al buscar.";
        console.error(error);
    }
}

function mostrarFavoritos() {
    const favoritos = obtenerFavoritos();
    favoritosDiv.innerHTML = "";

    if (favoritos.length === 0) {
        favoritosDiv.innerHTML = "<p>No tenés países favoritos todavía.</p>";
        return;
    }

    favoritos.forEach(fav => {
        const card = document.createElement("div");
        card.classList.add("pais-card");
        card.innerHTML = `
            <img src="${fav.bandera}" alt="Bandera de ${fav.nombre}">
            <h3>${fav.nombre}</h3>
            <p>Capital: ${fav.capital}</p>
            <p>Población: ${fav.poblacion.toLocaleString("es-AR")}</p>
        `;

        const btnQuitar = document.createElement("button");
        btnQuitar.textContent = "Quitar de favoritos";
        btnQuitar.classList.add("btn-favorito", "quitar");
        btnQuitar.addEventListener("click", () => {
            guardarFavoritos(obtenerFavoritos().filter(f => f.nombre !== fav.nombre));
            mostrarFavoritos();
        });

        card.appendChild(btnQuitar);
        favoritosDiv.appendChild(card);
    });
}

btnBuscar.addEventListener("click", () => buscarPaises(inputBusqueda.value.trim()));
inputBusqueda.addEventListener("keydown", (e) => {
    if (e.key === "Enter") buscarPaises(inputBusqueda.value.trim());
});

mostrarFavoritos();
```

### ¿Qué cubre este ejemplo?

- **Variables y tipos de datos**: `const`, `let`, strings, arrays, objetos.
- **Funciones**: declaradas, arrow functions, funciones asíncronas.
- **DOM**: `querySelector`, `createElement`, `appendChild`, `classList`, `textContent`, `innerHTML`.
- **Eventos**: `addEventListener` para `click`, `keydown`.
- **Formularios**: lectura de `.value`, validación básica.
- **Fetch API**: `async/await`, manejo de errores con `try/catch`, parseo de JSON.
- **LocalStorage**: `getItem`, `setItem`, `JSON.stringify`, `JSON.parse`.

Te recomendamos que copies este código, lo pruebes en tu navegador, y después lo modifiques. La mejor forma de aprender JavaScript es escribiendo código y experimentando.
