# Ingeniería de Software

## ¿Qué es la Ingeniería?

El término ingeniería proviene del latín *ingenium*, que significa engendrar o producir. En términos generales, se puede definir como el "estudio y aplicación de tecnología", entendida esta última como la suma de técnicas, habilidades, métodos y procesos utilizados para producir bienes, servicios o alcanzar objetivos.

Distintas definiciones coinciden en que la ingeniería aplica conocimientos científicos, técnicos y empíricos a acciones como la invención, diseño, desarrollo, construcción, optimización y mantenimiento de sistemas, estructuras, procesos y materiales con el fin de resolver problemas prácticos.

### Patrón en la definición de Ingeniería:

* Conjunto de **\[conocimientos]** aplicados en **\[acciones]** sobre **\[áreas]** con un **\[fin]**.

  * Conocimientos: científicos, técnicos y empíricos.
  * Acciones: invención, desarrollo, optimización, validación, mantenimiento.
  * Áreas: maquinaria, equipos, procesos, sistemas.
  * Fin: satisfacer una necesidad o resolver un problema.

---

## ¿Qué es el Software?

Tradicionalmente, se dice que el software es la parte intangible de una computadora. Sin embargo, esta definición es incompleta. El software está presente en prácticamente todos los aspectos de la vida cotidiana.

**Definición técnica:**
Según el estándar IEEE 729, el software es el conjunto de programas de cómputo, procedimientos, reglas, documentación y datos asociados que forman parte de la operación de un sistema de computación.

### Algunos tipos de Software:

* **De sistema:** Brinda servicios a otros programas.
* **De aplicación:** Resuelve necesidades específicas del usuario.
* **Científico o de ingeniería:** Para simulaciones, cálculos o investigación.
* **Embebido:** Integrado en dispositivos (autos, electrodomésticos, etc.).
* **De inteligencia artificial:** Para toma de decisiones y aprendizaje.

### ¿Qué hace a un buen software?

* Cumple su **objetivo funcional**.
* Es **usable** y accesible.
* Tiene **buena performance**.
* Es **mantenible** en el tiempo.
* Es **confiable** y **seguro**.

---

## ¿Qué es la Ingeniería de Software?

Es la aplicación de la ingeniería al proceso completo de creación de software. Va desde que se identifica una necesidad hasta el despliegue y mantenimiento del sistema.

**Incluye:**

* Comprensión de la necesidad.
* Organización del desarrollo.
* Diseño del software.
* Implementación.
* Pruebas y validación.
* Despliegue.
* Mantenimiento.

Actualmente, la ingeniería de software se concibe como un proceso **iterativo e incremental**.

**Importancia:**

* Gobiernos y empresas dependen de sistemas software.
* Sistemas críticos deben ser robustos y tolerantes a fallos.
* Se requieren sistemas que puedan ser mantenidos y escalados con facilidad.

---

## Etapas de la Ingeniería de Software

### 1. Análisis de Requerimientos

Su objetivo es **entender qué necesita el cliente o el usuario final**. Esto permite construir el producto adecuado en lugar de simplemente construir bien un producto que no sirve.

**Preguntas clave:**

* ¿Cuál es el objetivo del sistema?
* ¿Cómo se adaptará a las necesidades del usuario?
* ¿Cómo se utilizará?

**Actividades de Ingeniería de Requerimientos:**

* Indagación.
* Negociación.
* Especificación.
* Validación.

**Objetivos:**

* Describir qué quiere el cliente.
* Establecer la base del diseño.
* Definir requerimientos verificables.

#### Requerimientos funcionales y no funcionales

* **Requerimientos funcionales:** especifican **lo que el sistema debe hacer**. Incluyen funcionalidades, servicios y tareas que el software debe realizar. Ejemplos: registrar usuarios, enviar correos, calcular resultados.

* **Requerimientos no funcionales:** describen **cómo debe comportarse el sistema**, incluyendo restricciones y propiedades de calidad. Ejemplos: tiempo de respuesta, escalabilidad, seguridad, usabilidad.

Ambos tipos son esenciales para construir un sistema que no solo funcione, sino que sea útil, eficiente y sostenible.

---

### 2. Diseño

A partir de los requerimientos funcionales y no funcionales, se escoge la arquitectura de software más adecuada.

> "Si creés que una buena arquitectura es cara, intentá con una mala."
> — Brian Foote & Joseph Yoder

Un diseño correcto permite construir un sistema escalable, mantenible y confiable.

---

### 3. Implementación

Consiste en transformar los requerimientos en un producto funcional mediante la escritura de código.

> Pero **no basta con programar**. El proceso debe ser organizado para evitar problemas de calidad y escalabilidad.

---

### 4. Testing y Validación

> "El fracaso es, a veces, más fructífero que el éxito."
> — Henry Ford

**Objetivos:**

* **Validación**: demostrar que el software cumple los requerimientos del cliente.
* **Verificación**: encontrar errores de funcionamiento.

**Tipos de pruebas:**

* **Pruebas unitarias:** verifican el correcto funcionamiento de componentes o funciones individuales del software.
* **Pruebas de integración:** evalúan la interacción entre varios módulos o componentes.
* **Pruebas de aceptación del usuario (UAT):** realizadas por los usuarios finales para validar que el sistema cumple con sus expectativas.
* **Pruebas de usabilidad:** evalúan la experiencia del usuario, accesibilidad, navegabilidad y facilidad de uso del sistema.

> Tener un equipo de QA **no exime** a los desarrolladores de probar su propio código.

---

### 5. Despliegue

El software pasa por diferentes entornos antes de llegar a producción:

* **Development (desarrollo):** ambiente donde los programadores escriben y prueban su código de manera inicial.
* **QA (aseguramiento de calidad):** entorno donde se realizan pruebas exhaustivas para detectar errores antes de liberar el sistema.
* **Preproducción / Staging:** replica el entorno de producción y se utiliza para realizar validaciones finales antes del lanzamiento.
* **Producción:** entorno donde el software está disponible para los usuarios finales. Debe ser estable, seguro y supervisado.

Cada entorno cumple un rol en la validación progresiva del sistema.

---

### 6. Mantenimiento

Una vez desplegado, el software sigue evolucionando:

* Surgen nuevos requerimientos.
* Se descubren errores.
* Cambia el negocio o el contexto.

> El proceso no siempre es lineal: puede requerirse volver a etapas previas.

El mantenimiento busca que el software continúe siendo útil y relevante a lo largo del tiempo.

---

**Bibliografía sugerida:**

* Pressman, "Software Engineering: A Practitioner's Approach"
* Sommerville, "Software Engineering"
* SWEBOK - Software Engineering Body of Knowledge
