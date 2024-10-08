# HTML y CSS

## Introducción a HTML
HTML (Hyper Text Markup Language) **es el lenguaje estándar usado para la estructura de páginas web y la organización de su contenid**o. A través de HTML, los desarrolladores pueden definir la manera en que los distintos elementos de una página web aparecerán y se comportarán en un navegador. Este lenguaje permite estructurar el contenido de **forma jerárquica y lógica**, utilizando etiquetas que delimitan las partes del documento.
Por ejemplo, el contenido de una página puede estructurarse en un conjunto de párrafos, listas con viñetas, imágenes, tablas de datos, formularios y otros elementos que componen la interfaz visual y funcional de una página web.

### Entonces, ¿Qué es HTML?
HTML es el lenguaje que utilizamos para **armar el esqueleto de nuestra página web**. Es la herramienta con la que le indicamos al navegador **qué queremos que nuestra página contenga** y cómo debe estar organizada. Esto incluye elementos como títulos, párrafos, imágenes, enlaces, listas, tablas, entre otros. Es el punto de partida para cualquier desarrollo web, proporcionando la estructura básica sobre la que luego se aplicarán estilos visuales (mediante CSS) y comportamientos dinámicos (con JavaScript).

### Elementos claves de un documento HTML
Un documento HTML sigue una estructura jerárquica basada en etiquetas que indican qué rol tiene cada sección dentro de la página.
1. `<!DOCTYPE html>`: Declara el tipo de documento. 
2. `<html lang="es">`: La etiqueta raíz que contiene todos los elementos de la página. El atributo lang especifica el idioma principal de la página, en este caso, español.
3. `<head>`: Contiene metadatos sobre la página web (información no visible directamente para el usuario), como el juego de caracteres (`<meta charset="UTF-8">`), el título de la página (`<title>`) y las configuraciones de visualización en dispositivos móviles (`<meta name="viewport">`).
4. `<body>`: Es la parte visible del documento HTML, donde se colocan los elementos que serán mostrados en la página, como el encabezado (`<h1>`), párrafos (`<p>`), e imágenes (`<img>`).

### Otros elementos importantes de HTML
- **Enlaces** (`<a>`): Los **anchors** (enlaces) son utilizados para crear hipervínculos que permiten navegar entre páginas o redirigir a secciones específicas dentro de la misma página. El atributo href define el destino del enlace.
    ```html
    <a href="https://intro-camejo.github.io/web/">¡Visita nuestra página!</a>
    ```
- **Listas** (`<ul>`, `<ol>`, `<li>`): HTML permite organizar información en listas. Existen dos tipos de listas:
    - Listas no ordenadas (`<ul>`), que usan viñetas:
        ```html
        <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
        </ul>
        ```
    - Listas ordenadas (`<ol>`), que se numeran automáticamente:
        ```html
        <ol>
        <li>Primero</li>
        <li>Segundo</li>
        <li>Tercero</li>
        </ol>
        ```
- **Imágenes** (`<img>`): Las imágenes en HTML se insertan mediante la etiqueta `<img>`, donde el atributo `src` indica la ruta de la imagen y alt proporciona un texto alternativo en caso de que la imagen no se pueda cargar.
    ```html
    <img src="foto.jpg" alt="Descripción de la foto">
    ```
- **Tablas** (`<table>`): Para mostrar datos en formato de tabla, se utiliza la etiqueta `<table>`, que contiene filas (`<tr>`) y columnas definidas por celdas (`<td>`).
    ```html
    <table border="2" cellpadding="10" width="120">

    <tr>
        <th>Nombre</th>
        <th>Edad</th>
    </tr>
    <tr>
        <td>Conrado</td>
        <td>20</td>
    </tr>
    <tr>
        <td>Sofia</td>
        <td>18</td>
    </tr>
    </table>
    ```
- **Formularios** (`<form>`): Los formularios permiten a los usuarios interactuar con una página web, proporcionando información o enviando datos.

    **Atributos Útiles en Formularios**
    - **Placeholders**: El atributo placeholder permite mostrar un texto de ayuda dentro de un campo de entrada. Este texto desaparece cuando el usuario comienza a escribir en el campo. Es útil para indicar el tipo de información que se espera.
        ```html
        <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre">
        ```
    - **required**: Este atributo asegura que un campo de entrada debe ser completado antes de enviar el formulario. Si el usuario intenta enviar el formulario sin completar este campo, se mostrará un mensaje de advertencia.
        ```html
        <input type="email" id="email" name="email" required placeholder="Ingresa tu correo electrónico">
        ```
    - **maxlength**: Limita la cantidad de caracteres que un usuario puede ingresar en un campo de texto.
        ```html
        <input type="text" id="nombre" name="nombre" maxlength="30" placeholder="Máximo 30 caracteres">
        ```
    - **pattern**: Permite establecer una expresión regular que los datos ingresados deben cumplir, útil para validar formatos específicos.
        ```html
        <input type="text" id="telefono" name="telefono" pattern="\d{3}-\d{3}-\d{4}" placeholder="Formato: 123-456-7890">
        ```

### Elementos de navegación y estructura
- **Navegación** (`<nav>`): El elemento `<nav>` se utiliza para definir un bloque de navegación que contiene enlaces a otras páginas o secciones.
    ```html
    <nav>
    <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
    </ul>
    </nav>
    ```

- Pie de página (`<footer>`): El elemento `<footer>` representa la parte inferior de una página web, donde se incluye información como derechos de autor o enlaces a políticas de privacidad.
    ```html
    <footer>
    <p>Todos los derechos reservados.</p>
    </footer>
    ```
### Uso de `<div>` y organización de secciones
**Divisiones** (`<div>`): El elemento `<div>` es uno de los elementos más comunes en HTML y se utiliza para agrupar contenido. Sirve como un contenedor genérico que no aporta significado semántico por sí solo, pero permite organizar y aplicar estilos o comportamientos a secciones específicas de la página.
```html
<div>
  <h2>Sección de noticias</h2>
  <p>Últimas noticias sobre Introducción al Desarrollo de Software.</p>
</div>
```
Los `<div>` permiten dividir la página en bloques independientes y son muy útiles cuando se trabaja con CSS o JavaScript para aplicar estilos y acciones a secciones completas.

### `class` e `id`: Identificadores y clases en HTML
Para aplicar estilos personalizados con CSS o manipular elementos con JavaScript, HTML ofrece los atributos `class` e `id`:
- `class`: Permite aplicar un nombre de clase a varios elementos para agruparlos y poder estilizar o manipular de forma conjunta. Un mismo elemento puede tener múltiples clases.
    ```html
    <div class="contenedor">
    <p class="texto-destacado">Texto resaltado.</p>
    </div>
    ```
    Acá, ambos elementos `<div> y <p>` pueden compartir el estilo de la clase "contenedor" y "texto-destacado" definido en el archivo CSS.
- `id`: Es un identificador único que se asigna a un solo elemento de la página. Permite distinguir ese elemento específico para aplicar un estilo o una acción particular.
    ```html
    <div id="principal">
    <h2>Encabezado principal</h2>
    <p id="intro">Introducción al contenido.</p>
    </div>
    ```
    En este caso, tanto el `id="principal"` como el `id="intro"` identifican elementos únicos dentro de la página, útiles cuando se necesitan realizar manipulaciones precisas mediante JavaScript o cuando se aplican estilos exclusivos.

## Introducción a CSS (Cascading Style Sheet)
CSS se encarga de la parte de apariencia y funcionamiento de una página web. Con CSS, podemos controlar el color del texto, el estilo de las fuentes, el espaciado entre párrafos, el tamaño y la disposición de las columnas, las imágenes o colores de fondo que se utilizan, así como una variedad de otros efectos.

### Ventajas de CSS
- **CSS ahorra tiempo**: Podes escribir CSS una vez y reutilizar la misma pagina en varias páginas HTML. Podes definir un estilo para cada elemento HTML y aplicarlo a tantas páginas web como quieras.
- **Fácil mantenimiento**: Para realizar un cambio global, simplemente cambie el estilo y todos los elementos en todas las páginas web se actualizarán automáticamente.
- **Estilos superiores a HTML**: CSS tiene una gama mucho más amplia de atributos que HTML, por lo que puede darle una apariencia mucho mejor a su página HTML en comparación con los atributos HTML.

### ¿Cómo lo incluimos en nuestro HTML?
Existen tres formas principales de incluir CSS en un documento HTML:
1. **Estilo en línea**: Se aplica directamente a un elemento HTML mediante el atributo style. Este método es útil para aplicar estilos específicos a un solo elemento.
    ```html
    <h1 style="color: blue; text-align: center;">¡Hola!</h1>
    ```
2. **Estilo interno**: Se define dentro de la etiqueta `<head>` del documento HTML utilizando la etiqueta `<style>`. Este método es ideal para aplicar estilos a múltiples elementos en una única página.
    ```html
    <head>
        <style>
            body {
                background-color: #f0f0f0;
            }
            p {
                font-family: Arial, sans-serif;
                color: #333;
            }
        </style>
    </head>
    ```
3. **Estilo externo**: Se utiliza un archivo CSS separado que se enlaza al documento HTML mediante la etiqueta `<link>` en el `<head>`. Esta es la forma más recomendada, ya que permite una gestión centralizada de los estilos.
    ```html
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    ```
### Sintaxis
- **Selector**: Un selector es una etiqueta HTML a la que se aplicará un estilo. Puede ser cualquier etiqueta, como `<h1>` o `<table>`, etc.
- **Propiedad**: Una propiedad es un tipo de atributo de una etiqueta HTML. En pocas palabras, todos los atributos HTML se convierten en propiedades CSS. Pueden ser; color,border, etc. 
- **Valor**: Se asignan valores a las propiedades. Por ejemplo, la propiedad de color, puede tener "red" o #01010
    ```css
    selector { propiedad: valor }
    ```
    Por ejemplo, definir el borde de una tabla se puede realizar con:
    ```css
    table{
	border : 1px solid red;
    }
    ```
    Aca la tabla es un selector y el borde una propiedad, y el valor seria 1px solid red. Se pueden definir selectores en varias maneras, depende de cada uno. Vamos a explicar estos selectores uno por uno.

### Selectores
- **Selectores de tipo**: Es como el selector del ejemplo, una vez más le daremos color a todos los headings de nivel 1 (h1).
    ```css
    h1 {
    color: red;
    }
    ```
- **Selectores universales**: En lugar de seleccionar elementos de un tipo específico, el selector universal simplemente coincide con el nombre de cualquier tipo de elemento.
    ```css
    * {
    color: #000000;
    }
    ```
- **Selectores de descendiente**: Aplica estilos a elementos dentro de un contenedor específico. Esto aplicará el color azul a todos los párrafos (`<p>`) que estén dentro de un contenedor `<div>`.
    ```css
    div p{
        color: blue;
    }
    ```
- **Selectores de ID**: Puede definir reglas de estilo basadas en atributos de ID de los elementos. Todos los elementos que tienen esa ID se formatean según la regla definida.
    ```css
    #black {
        color: #000000;
    }
    ```
- **Múltiples estilos**: Es posible que se necesite definir varias reglas de estilo para un solo elemento. Se pueden definir estas reglas para combinar varias propiedades y valores correspondientes en un solo bloque, como en el siguiente ejemplo:
    ```css
    h1 { 
        color: #36C; 
        font-weight: normal;
        margin-bottom: 1em;
    }
    ```
- **Agrupar selectores**: Se puede aplicar un estilo a varios selectores, para eso hay que separarlos con una coma.
    ```css
    h1, h2, h3 {
        color: orange;
        font-weight: normal;
    } /*( El estilo se aplicará a los elementos h1,h2,h3 .)*/
    ```
- **Selectores de pseudo-clases**: Se utilizan para aplicar estilos a un estado específico de un elemento, como `:hover` o `:first-child`. Este estilo subrayará los enlaces `<a>` al pasar el cursor por encima.
    ```css
    a:hover {
        text-decoration: underline; 
    }
    ```

### Diseño y disposición en CSS
Además de los selectores y las propiedades básicas, CSS te permite crear diseños complejos y organizados para tus páginas web. Existen diferentes técnicas y métodos para organizar el contenido en columnas, filas y secciones. A continuación, explicaremos algunas de las más importantes:

#### 1. **Modelo de caja (Box model)**
<div>
    <img src="https://i.imgur.com/kPV82Sm.png" alt="Box_model"/>
</div>

En CSS, cada elemento se representa como una caja rectangular que está compuesta por las siguientes partes:
- **Contenido (Content)**: El área donde se muestra el texto o las imágenes.
- **Relleno (Padding)**: Espacio entre el contenido y el borde.
- **Borde (Border)**: El contorno alrededor del contenido y el relleno.
- **Margen (Margin)**: Espacio exterior que separa el borde de otros elementos

    ```css
    div { 
        width: 200px; 
        height: 150px; 
        padding: 10px; 
        border: 2px solid black; 
        margin: 20px; 
    }
    ```
#### 2. **Diseño de cuadrícula (Grid layout)**
El modelo de diseño de cuadrícula (grid layout) proporciona un sistema bidimensional para organizar elementos. Es ideal para dividir el espacio en filas y columnas, con un control preciso de cada área.
- `display: grid`: Convierte un contenedor en un grid.
- `grid-template-columns`: Define el número y tamaño de las columnas.
- `gap`: Define el espacio entre filas y columnas.
- `grid-template-rows`: Define el número y tamaño de las filas.

#### 3. **Flexbox**
Flexbox, o Flexible Box Layout, es un modelo de diseño en CSS que permite organizar elementos en una interfaz de manera flexible y eficiente. 
El primer paso para utilizar Flexbox es declarar un contenedor flex. Para hacerlo, debes establecer la propiedad display como flex o inline-flex en un elemento contenedor.
``` css
.contenedor {
    display: flex; 
}
```

#### Elementos Flex (Flex Items)
Los elementos directos dentro del contenedor flex son llamados elementos flex. Flexbox les permite alinearse y distribuirse de diversas maneras.
#### Propiedades del contenedor flex
- **flex-direction**: Define la dirección en la que los elementos flex se colocan en el contenedor. Puede tomar los siguientes valores:
    - `row (predeterminado)`: Los elementos se organizan en filas, de izquierda a derecha.
    - `row-reverse`: Los elementos se organizan en filas, de derecha a izquierda.
    - `column`: Los elementos se organizan en columnas, de arriba hacia abajo.
    - `column-reverse`: Los elementos se organizan en columnas, de abajo hacia arriba.
    ``` css
    .contenedor {
        flex-direction: row; 
    }
    ```
- **flex-wrap**: Determina si los elementos flex deben ajustarse a una nueva línea si no caben en el contenedor. Los valores son:
    - `nowrap (predeterminado)`: Todos los elementos se colocan en una única línea.
    - `wrap`: Los elementos se ajustan a nuevas líneas si es necesario.
    - `wrap-reverse`: Los elementos se ajustan a nuevas líneas en orden inverso.
    ```css
    .contenedor {
        flex-wrap: wrap; 
    }
    ```
- **justify-content**: Controla la alineación de los elementos a lo largo del eje principal (horizontal en `flex-direction: row`):
    - `flex-start`: Alinea los elementos al inicio del contenedor.
    - `flex-end`: Alinea los elementos al final del contenedor.
    - `center`: Centra los elementos en el contenedor.
    - `space-between`: Distribuye el espacio restante entre los elementos, colocando el primer elemento al inicio y el último al final.
    - `space-around`: Distribuye el espacio restante con espacio igual alrededor de cada elemento.
    ```css
    .contenedor {
        justify-content: center; 
    }
    ```
- **align-items**: Alinea los elementos a lo largo del eje transversal (vertical en `flex-direction: row`):
    - `flex-start`: Alinea al inicio del contenedor.
    - `flex-end`: Alinea al final del contenedor.
    - `center`: Centra los elementos.
    - `baseline`: Alinea los elementos a lo largo de su línea base.
    - `stretch (predeterminado)`: Estira los elementos para llenar el contenedor.
    ```css
    .contenedor {
        align-items: stretch; 
    }
    ```
- **align-content**: Similar a align-items, pero se utiliza cuando hay espacio extra en el eje transversal y hay varias líneas de elementos flex. Los valores son similares a los de `justify-content`.
    ```css
    .contenedor {
        align-content: space-between;
    }
    ```
#### Propiedades de los elementos flex
- **flex**: La propiedad flex es un atajo para flex-grow, flex-shrink y flex-basis, permitiendo controlar cómo un elemento flex se expande o se contrae dentro del contenedor.
    - `flex-grow`: Determina cuánto puede crecer un elemento en relación a los demás.
    - `flex-shrink`: Controla cuánto puede encogerse un elemento en relación a los demás.
    - `flex-basis`: Establece el tamaño inicial del elemento antes de que se aplique el crecimiento o contracción.
- **align-self**: Permite que un elemento flex anule la alineación establecida por `align-items` en el contenedor. Puede tomar los mismos valores que `align-items`.

#### CSS Grid vs Flexbox

<h2>CSS Grid vs. Flexbox</h2>

<table border="1" cellpadding="10">
    <thead>
        <tr>
            <th>Característica</th>
            <th>CSS Grid</th>
            <th>Flexbox</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Estructura</strong></td>
            <td>Se utiliza para crear diseños bidimensionales, es decir, filas y columnas.</td>
            <td>Se utiliza para crear diseños unidimensionales, es decir, en una sola dirección (filas o columnas).</td>
        </tr>
        <tr>
            <td><strong>Ejes</strong></td>
            <td>Tiene dos ejes (horizontal y vertical).</td>
            <td>Tiene un solo eje (horizontal o vertical).</td>
        </tr>
        <tr>
            <td><strong>Distribución del espacio</strong></td>
            <td>Permite el control total del tamaño de los elementos en ambas dimensiones.</td>
            <td>Distribuye el espacio dentro de un contenedor a lo largo de un único eje.</td>
        </tr>
        <tr>
            <td><strong>Tamaño de los elementos</strong></td>
            <td>Permite definir tamaños específicos de filas y columnas utilizando <code>grid-template-rows</code> y <code>grid-template-columns</code>.</td>
            <td>Los elementos flexibles pueden crecer o encogerse con base en el espacio disponible usando las propiedades <code>flex-grow</code>, <code>flex-shrink</code> y <code>flex-basis</code>.</td>
        </tr>
        <tr>
            <td><strong>Orden de los elementos</strong></td>
            <td>Podemos cambiar el orden visual de los elementos utilizando <code>grid-area</code>.</td>
            <td>Permite cambiar el orden de los elementos con la propiedad <code>order</code>.</td>
        </tr>
        <tr>
            <td><strong>Alineación</strong></td>
            <td>Soporta alineación de elementos en ambas dimensiones (vertical y horizontal) usando <code>align-items</code> y <code>justify-items</code>.</td>
            <td>Soporta alineación en la dirección del eje principal y en el eje transversal usando <code>justify-content</code> y <code>align-items</code>.</td>
        </tr>
        <tr>
            <td><strong>Responsive Design</strong></td>
            <td>Es fácil crear diseños complejos y responsivos que se adapten a diferentes tamaños de pantalla.</td>
            <td>Muy efectivo para alineaciones simples y adaptaciones rápidas en una sola dirección.</td>
        </tr>
        <tr>
            <td><strong>Uso ideal</strong></td>
            <td>Ideal para layouts complejos donde se necesita un control preciso sobre filas y columnas.</td>
            <td>Ideal para menús, barras de herramientas y otros elementos que requieren alineación simple en una dirección.</td>
        </tr>
    </tbody>
</table>

#### 4. Posicionamiento
CSS te permite posicionar elementos con precisión en la página usando diferentes valores de la propiedad position:
- `static`: Posicionamiento predeterminado, sin cambios.
- `relative`: Se posiciona de manera relativa a su posición normal.
- `absolute`: Se posiciona en relación a su contenedor más cercano con position diferente a static.
- `fixed`: Se posiciona en relación a la ventana del navegador y no se mueve al hacer scroll.
- `sticky`: Combina características de relative y fixed. El elemento se mantiene en su lugar cuando se alcanza un punto de desplazamiento.
```css
.relativo {
    position: relative; 
    top: 10px; 
    left: 20px; 
}
```

#### 5. Pseudo-clases y pseudo-elementos
Las pseudo-clases y pseudo-elementos permiten aplicar estilos a estados o partes específicas de los elementos.
Un ejemplo de **pseudo-clase** podría ser `:hover`, que aplica un estilo cuando el cursor pasa sobre el elemento.
```css
a:hover {
    color:red;
}
```
Ejemplos claros de **pseudo-elementos** serían `::before` y `::after`, que permiten insertar contenido antes o después de un elemento.
```css
p::before {
    color: red;
}
```
### Propiedades de estilo avanzadas de CSS
#### Transiciones y animaciones
Las transiciones y animaciones hacen que los cambios en las propiedades de CSS sean más suaves y dinámicos, mejorando la experiencia del usuario.
#### Transiciones
Las transiciones permiten que los valores de una propiedad cambien gradualmente a lo largo de un período de tiempo. Se pueden aplicar a propiedades como `color`, `background-color`, `width`, y más.
```css
.elemento{
    transition: propiedad duración;
}
```
Por ejemplo:
```css
.boton{
    background-color: blue;
    transition: background-color 0.5s ease;
}

.boton:hover {
    background-color: green;
}
```

#### Animaciones
Las animaciones permiten cambios más complejos y definidos a través de múltiples estados utilizando @keyframes. Se pueden animar múltiples propiedades y definir diferentes etapas de la animación.
```css
@keyframes nombre_animacion {
    from { 
        propiedad: valor_inicial;
    }
    to {
        propiedad: valor_final;
    }
}

.elemento {
    animation: nombre_animacion duración tipo_de_repetición;
}
```
#### Transformaciones
Las transformaciones permiten manipular la posición, tamaño y rotación de los elementos utilizando las propiedades `transform` y `transform-origin`.
- **Propiedades de transformación**:
    - **translate(x, y)**: Mueve un elemento a lo largo de los ejes X e Y.
    - **scale(x, y)**: Escala un elemento (puede ser de forma uniforme o desigual).
    - **rotate(deg)**: Rota un elemento en un número específico de grados.
    - **skew(x, y)**: Inclina un elemento a lo largo de los ejes X e Y.
