---
marp: true
theme: default
class: default
paginate: true
---

# Introducción a Git
## Control de Versiones para todos

---

# ¿Qué es Git?

Git es un **Sistema de Control de Versiones Distribuido** que nos permite gestionar y rastrear los cambios que realizamos en nuestros archivos a lo largo del tiempo.

- **Sistema de Control de Versiones:** Lleva un registro histórico de todas las modificaciones.
- **Distribuido:** Cada desarrollador tiene una copia completa del historial en su computadora, sin depender de un servidor central.

---

# ¿Para qué sirve?

- **Copias de seguridad:** Permite tener copias locales de un proyecto entero.
- **Seguimiento detallado:** Registra qué cambió, cuándo y quién lo hizo.
- **Trabajo en equipo:** Facilita que múltiples personas colaboren sin pisarse el código.
- **Máquina del tiempo:** Permite volver a versiones anteriores si algo se rompe.
- **Experimentación:** Podés crear líneas alternativas (ramas) sin afectar el proyecto principal.

---

# Un poco de historia...

En 2005, la comunidad que desarrollaba el kernel de Linux usaba un sistema de control de versiones privativo llamado *BitKeeper*. Debido a problemas con la licencia, tuvieron que dejar de usarlo.

Ante la falta de buenas alternativas abiertas, **Linus Torvalds** (el creador de Linux) decidió escribir su propio sistema en apenas un par de semanas. Así nació **Git**.

---

# ¿Qué existía antes de Git?

Antes de que Git dominara el mundo, se usaban principalmente sistemas **centralizados**, donde el historial vivía solo en un servidor central. Si no tenías internet, no podías guardar versiones ni ver el historial.

Algunas alternativas históricas y actuales:
- **CVS** (Concurrent Versions System) - Uno de los más antiguos.
- **SVN** (Subversion) - Fue muy popular, todavía usado en algunos proyectos *legacy*.
- **Mercurial** - El gran competidor inicial de Git (también distribuido).

---

# Conceptos Clave: El Repositorio

Un **repositorio** (o *repo*) es como una "cajita mágica" o almacén virtual donde Git guarda todo el proyecto y su historial de cambios completo.

Puede existir de dos formas:
- **Local:** Vive en tu computadora. Vos tenés el control total.
- **Remoto:** Vive en un servidor en internet (ej. GitHub), y sirve para colaborar y sincronizar con otras personas.

---

# Ciclo de Vida de los Archivos

Git categoriza los archivos en diferentes estados conceptuales:

- **Untracked (Sin rastrear):** Archivos nuevos que Git todavía no vigila.
- **Unstaged (Modificados):** Archivos conocidos que editaste, pero aún no marcaste para guardar.
- **Staged (En el escenario):** Archivos que preparaste y están listos para ser guardados en la próxima "foto".
- **Committed (Confirmados):** Archivos guardados de forma segura e inmutable en el historial.

---

# Git vs GitHub

¡No son lo mismo!

- **Git** es la herramienta (el software) que corre en tu computadora y controla las versiones por detrás.
- **GitHub** (nacido en 2007) es una red social y plataforma en internet que aloja repositorios Git y agrega herramientas para que los equipos colaboren.

*Otras plataformas similares:* GitLab, Bitbucket, Gitea.

---

# Buenas Prácticas Generales

Para que un proyecto en equipo funcione fluido:

- Siempre crear una línea de trabajo separada (**rama**) en lugar de modificar la historia principal directamente.
- Agrupar los cambios por funcionalidad (commits lógicos).
- Escribir mensajes descriptivos que expliquen *qué* y *por qué* se cambió algo.
- **Regla de oro:** ¡La rama principal (`main` o `master`) siempre tiene que funcionar!

---

# ¿Preguntas?
## ¡Listos para empezar a versionar!
