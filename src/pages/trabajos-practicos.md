# Trabajo Práctico – Introducción al Desarrollo de Software

Última modificación: 15/10/26

## Objetivo

Demostrar la comprensión de los conceptos vistos en clase y la capacidad de aplicarlos para resolver problemas, a través del desarrollo de una idea propia y creativa.

## Descripción general

Cada grupo desarrollará un sitio web completo con las tecnologías vistas durante la materia. El sistema tendrá un **frontend**, un **backend** y una **base de datos** donde persistir la información. La temática es libre: debe ser original y creativa, y la elige cada grupo (sujeta a aprobación del docente, ver [Elección del proyecto](#elección-del-proyecto)).

## Requisitos obligatorios

### Requisitos técnicos

#### Backend

- Debe ser una **API REST**.

#### Frontend

- Debe ser un **sitio estático** con al menos **tres (3) páginas diferentes**.
- Debe obtener los datos desde el backend y mostrarlos en el navegador (*client-side rendering*, CSR).

#### Base de datos

- Al menos **tres (3) entidades**, cada una representada por una tabla.
- Cada entidad debe tener al menos **cinco (5) campos**, sin contar el ID.
- Cada entidad debe participar de al menos **una relación** con otra entidad (ya sea como origen o como destino), implementada mediante **foreign keys**.
- Si el grupo decide incorporar un sistema de inicio de sesión (login), la tabla de usuarios asociada a este **NO será considerada como entidad** en la evaluación.

#### Funcionalidad

- Debe existir un **CRUD completo** (crear, leer, actualizar y eliminar) para cada entidad.
- Todas las operaciones del CRUD deben poder realizarse **desde el frontend**.

#### Despliegue local

- El proyecto debe poder levantarse con **Docker Compose**.
- El frontend y el backend deben poder levantarse **por separado**.

#### Documentación

El repositorio debe incluir un archivo `README.md` con:

- Una descripción del sistema.
- Las instrucciones para configurarlo y levantarlo.
- Capturas de pantalla de su funcionamiento.

### Control de versiones y trabajo en equipo

El proyecto debe desarrollarse con **git** siguiendo las prácticas vistas en clase, y alojarse en un **repositorio privado de GitHub**. En particular:

- El desarrollo debe ser **incremental**, con **commits atómicos** y **mensajes descriptivos** que reflejen lo que cambia en cada commit.
- Cada nueva funcionalidad debe desarrollarse en su propia **branch**.
- Los cambios deben integrarse mediante **pull requests**.
- Cada pull request debe ser **revisado y aprobado por al menos un (1) compañero de grupo** antes de integrarse.

### Uso de Inteligencia Artificial

Se permite usar asistentes de código (GitHub Copilot, ChatGPT, Gemini, etc.) como herramienta de apoyo. Su uso debe ser **consciente, crítico y declarado**.

- El código generado con IA es **responsabilidad absoluta del grupo**: cada integrante debe comprender el 100% del código que entrega.
- Durante la evaluación no se aceptarán respuestas del tipo *"la IA lo generó así y no sé cómo funciona"*. Todo el código del repositorio debe poder ser **explicado, modificado y depurado** por cualquier integrante.

## Grupos

- Los grupos son de **tres (3) a cuatro (4) integrantes**, sin excepciones.
- Los alumnos forman sus propios grupos y los registran en la plataforma de grupos e ideas (ver [Plataforma de grupos e ideas](#plataforma-de-grupos-e-ideas)).

## Elección del proyecto

Cada grupo debe planificar un proyecto **original y creativo**, que deberá ser **aprobado por el docente antes de comenzar el desarrollo**.

Para esto se dedicará una clase a la presentación de ideas: cada grupo explicará brevemente la temática y los objetivos de su proyecto, y el docente podrá sugerir modificaciones o mejoras.

## Plataforma de grupos e ideas

Para armar los grupos, cargar las ideas y recibir feedback usaremos una plataforma web: **[tps-intro.nriedel.com.ar](https://tps-intro.nriedel.com.ar)**

### 1. Ingresar y vincular tu cuenta

1. Entrá a la plataforma y hacé clic en **Ingresar con Google (@fi.uba.ar)**.
2. Elegí tu cuenta **`@fi.uba.ar`**. No se puede ingresar con otras cuentas (por ejemplo, `@gmail.com`). No hay que registrarse ni crear una contraseña: la cuenta se crea sola la primera vez que ingresás.
3. La primera vez la plataforma te pregunta **"¿Quién sos?"**. Buscate en la lista del curso escribiendo tu nombre, apellido o padrón, seleccionate y confirmá con **Sí, soy yo**.

> **Ojo:** esta vinculación se hace una sola vez y **no la podés cambiar vos**. Si te equivocaste, si no aparecés en la lista o si alguien ya eligió tu nombre, avisale a un docente para que lo corrija.

### 2. Crear el grupo y sumar integrantes

Los grupos son de **3 a 4 integrantes** y cada alumno puede estar en **un solo grupo**.

1. En la pantalla **Mi grupo**, escribí el nombre del grupo y hacé clic en **Crear grupo**. Quedás automáticamente adentro. Solo una persona del grupo tiene que hacer este paso.
2. Usá el buscador **"Sumar a alguien"** (por nombre o padrón) y hacé clic en **Sumar** al lado de cada compañero. Solo aparecen los alumnos que todavía **no tienen grupo**.
3. Cualquier integrante puede sumar o quitar compañeros, **renombrar el grupo** (ícono del lápiz) o **salir** del grupo con el botón **Salir**.
4. Al lado del nombre del grupo vas a ver una etiqueta con la cantidad de integrantes. Hasta llegar a 3 no vas a poder enviar ideas, y con más de 4 tampoco.

> Si la formación de grupos está cerrada, no vas a poder crear grupos ni cambiar integrantes. En ese caso, hablá con un docente.

### 3. Cargar las ideas

Cada grupo puede cargar hasta **2 ideas**. Los docentes aprobamos **una** por grupo.

1. En la sección **Ideas** de **Mi grupo**, completá el formulario **Nueva idea**:
   - **Título**: un nombre corto (por ejemplo, *Red de intercambio de libros*).
   - **Descripción**: de qué se trata el proyecto y qué entidades tendría (recordá los requisitos de la base de datos: al menos 3 entidades con 5 campos cada una y relaciones entre ellas).
2. Hacé clic en **Guardar borrador**. La idea queda en estado **Borrador**: los docentes todavía no la ven como pendiente y podés **editarla** o **borrarla** las veces que quieras.
3. Cuando estén conformes, entrá a la idea y hacé clic en **Enviar para revisión**. Pasa a estado **Enviada** y queda a la espera de feedback de los docentes. Cualquier integrante del grupo puede enviarla.

Los estados de una idea son:

| Estado | Qué significa |
|---|---|
| **Borrador** | La están preparando; todavía no se envió a los docentes. |
| **Enviada** | Está esperando la revisión de los docentes. |
| **Cambios solicitados** | Los docentes pidieron ajustes. Editen la idea y vuelvan a enviarla. |
| **Aprobada** | Es la idea elegida del grupo. Queda de solo lectura y las demás ideas del grupo se bloquean. |

### 4. Recibir feedback

Cada idea tiene un **chat** (sección *Feedback*) donde los docentes dejan sus devoluciones y el grupo puede responder o hacer consultas. Los mensajes llegan en tiempo real, y las acciones de los docentes (**pedir cambios**, **aprobar** o **reabrir**) quedan registradas en el mismo chat.

- Todos los integrantes del grupo ven el chat de sus ideas.
- Si piden cambios, editen la idea, apliquen el feedback y vuelvan a hacer clic en **Enviar para revisión**.
- Cuando una idea se aprueba, el grupo ya puede empezar el desarrollo del proyecto.

> Si la carga de ideas está cerrada, no vas a poder crear ni editar ideas hasta que los docentes la vuelvan a habilitar.

## Evaluación

El TP se evalúa en una **instancia de presentación final**, donde el grupo presenta el proyecto y responde preguntas sobre él.

- Todos los integrantes deben estar presentes en la presentación.
- Todos los integrantes deben haber participado del desarrollo, lo cual se verifica mediante **commits propios en el repositorio**.
- **IMPORTANTE:** el incumplimiento de al menos uno de los puntos de las secciones [Requisitos técnicos](#requisitos-técnicos), [Uso de Inteligencia Artificial](#uso-de-inteligencia-artificial) y [Control de versiones y trabajo en equipo](#control-de-versiones-y-trabajo-en-equipo) es motivo de **desaprobación** del trabajo práctico.

### Fechas y recuperatorio

- Cada grupo elige una fecha para presentar entre las **primeras cuatro (4) disponibles**.
- La **quinta y última fecha** está reservada exclusivamente para los grupos que no hayan aprobado en su primera presentación (recuperatorio).
- Si el grupo no aprueba en el recuperatorio, **no regulariza la materia**.

> **IMPORTANTE:** todo grupo que no apruebe en alguno de los llamados disponibles deberá **recursar la materia**, sin excepciones.

## Fechas de presentación

Las presentaciones coinciden con los primeros cuatro llamados a examen final del período **[completar período del cuatrimestre]**. El quinto llamado de ese período queda reservado para el recuperatorio.

| Instancia | Fecha |
|---|---|
| Llamado 1 | *A definir* |
| Llamado 2 | *A definir* |
| Llamado 3 | *A definir* |
| Llamado 4 | *A definir* |
| Llamado 5 (recuperatorio) | *A definir* |

- **Lugar:** Laboratorios de computación (4.º piso, Paseo Colón 850)
- **Horario:** 19:00 hs
