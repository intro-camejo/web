# Git y GitHub

**Importante**: Antes de comenzar a trabajar con repositorios remotos, se debe configurar la SSH Key. En la sección "Apuntes" hay un tutorial detallado.

Git es un software muy importante a la hora de desarrollar, ya que nos permite controlar las versiones de los archivos de nuestro proyecto. Siendo una **versión** el estado del archivo después de realizar un conjunto de cambios. Por ejemplo, cuando se trabaja en un archivo, se hacen modificaciones y, una vez terminado ese ciclo de trabajo, se genera una nueva versión. Más tarde, si se realizan correcciones o nuevas modificaciones, se genera otra versión. Este proceso es esencial para manejar de forma organizada los cambios en nuestro proyecto.

Incluso nos permite trabajar con control de versiones de manera local en nuestra computadora, sin necesidad de estar conectado a un servidor remoto. Esto significa que podemos mantener un registro detallado y organizado de todo lo que ocurre en nuestros archivos, asegurando que cada cambio esté documentado y pueda ser recuperado en cualquier momento.

Por otro lado, GitHub es una **plataforma** de alojamiento de repositorios Git y colaboración en línea que **utiliza Git** como sistema de control de versiones. Permite a los desarrolladores almacenar y gestionar sus proyectos en línea, facilitando la colaboración y la integración continua. Los usuarios pueden crear repositorios remotos que pueden ser accesibles por otros miembros del equipo o por cualquier usuario en general, dependiendo de la configuración de privacidad del repositorio.

## Repositorios en Git

Un **repositorio** en Git es un espacio donde se almacena todo el historial de cambios de un proyecto. Actúa como una base de datos que contiene toda la información necesaria para reconstruir el proyecto en cualquier estado previo.

### ¿Qué es un Repositorio?

Un repositorio en Git es un contenedor que guarda el código fuente de un proyecto, junto con todos sus archivos y directorios, así como el historial de versiones de esos archivos. Existen dos tipos de repositorios en Git:

- **Repositorio Local**: Es la versión del repositorio que resides en tu propia computadora. Incluye todos los archivos del proyecto y el historial completo de commits. Puedes realizar cambios, hacer commits y gestionar ramas localmente sin necesidad de estar conectado a un servidor remoto.
- **Repositorio Remoto**: Es la versión del repositorio que se encuentra en un servidor accesible a través de Internet o una red local. Los repositorios remotos permiten colaborar con otros desarrolladores, compartir cambios y mantener una copia centralizada del proyecto. Los ejemplos más comunes incluyen plataformas como GitHub, GitLab y Bitbucket.

## Seguimiento de cambios con commits en Git

En Git, los **commits** son fundamentales para el seguimiento y la gestión de versiones de tus archivos.

### ¿Qué es un commit?

Un **commit** en Git es una instantánea del estado de los archivos en tu repositorio en un momento específico. Cuando realizas un commit, Git guarda la información sobre todos los archivos que has modificado, agregado o eliminado, junto con un mensaje descriptivo que explica los cambios realizados. Cada commit tiene un identificador único (hash) que lo distingue de otros commits en el historial.

Es muy importante que el mensaje que esté dentro del commit sea **descriptivo, claro y útil**, ya que esto ayudará a que todo aquel que participe del proyecto comprenda claramente cuál fue el cambio realizado en los archivos del mismo. Un buen mensaje tiene como objetivo que se entienda rápidamente la modificación realizada sin necesidad de analizar el código en detalle, por lo que tiene que contener los cambios realizados, y en algunos casos el por qué de los mismos y cómo afectan al proyecto.

## Colaborando en repositorios remotos

Una vez realizados los cambios en tu repositorio local y hechos los commits necesarios, estos pueden ser subidos a un repositorio remoto para continuar siendo trabajados por tu equipo.

## Issues

Son una herramienta utilizada para registrar, rastrear y gestionar tareas, errores o solicitudes de nuevas funcionalidades en un proyecto. Cada issue puede contener una descripción detallada, etiquetas, asignaciones y comentarios, son útiles para organizar el trabajo, coordinar el desarrollo, alertar de errores y planificar cambios o arreglos. Generalmente se resuelven en un pull request, donde también puede marcarse su cierre.

## Pull requests (PR)

Es una solicitud para fusionar cambios de una rama (branch) a otra (generalmente la rama “main” o “master”) en un repositorio remoto. Cuando creas un pull request, estás pidiendo que revisen y, si es aprobado, integren los cambios que realizaste en una rama (por ejemplo, una rama de características) a una rama principal. Los pull requests permiten revisar el código, discutir los cambios y asegurarse de que son apropiados para el proyecto antes de integrar las modificaciones.

[Cómo hacer tu primer pull request en GitHub](https://www.freecodecamp.org/espanol/news/como-hacer-tu-primer-pull-request-en-github/)

## Branches (ramas)

Nos permiten trabajar en diferentes versiones del proyecto simultáneamente. Al crear una rama, se pueden desarrollar nuevas funcionalidades o realizar cambios sin afectar a la rama principal del proyecto (main). Una vez que los cambios a realizar en la rama estén listos, pueden fusionarse usando un PR. Es importante utilizarlas ya que evitan interferir el trabajo de otros y desarrollar nuevos features o efectuar modificaciones de manera organizada y sin posibilidad de “romper” la rama principal.

## Merge conflicts

Ocurre cuando Git no puede fusionar automáticamente los cambios de dos ramas porque hay conflictos entre las modificaciones realizadas en cada rama. Para resolver un merge conflict, necesitas abrir el archivo en conflicto en un editor de texto y resolver manualmente las diferencias entre las versiones en conflicto. Esto implica decidir qué cambios mantener, qué cambios descartar y cómo combinar los cambios de manera coherente.

Una vez resueltos los conflictos, se deben agregar los archivos modificados al área de staging con `git add` y luego hacer un commit para completar la fusión.

El comando `git merge` se utiliza para fusionar ramas, pero cuando se encuentra con un conflicto, necesitas resolverlo manualmente como se describió anteriormente.

## Archivos `.gitignore`

Un archivo `.gitignore` es un archivo especial en un repositorio de Git que se utiliza para especificar patrones de archivos o directorios que Git debe ignorar. Esto significa que los archivos y directorios que coincidan con los patrones especificados en el archivo `.gitignore` no se incluirán en los cambios que Git rastrea o en los commits que se realizan en el repositorio.

Este archivo es útil para evitar que se agreguen al repositorio archivos generados automáticamente, archivos de compilación, archivos temporales y otros archivos que no son necesarios para el proyecto o que no deben ser versionados.

## Estados de un archivo

En Git, el concepto de "estados" se refiere a las diferentes etapas en las que puede encontrarse un archivo a medida que se trabaja en un repositorio. Estos estados reflejan el ciclo de vida de los archivos desde que son modificados hasta que son confirmados en el historial del proyecto.

1. **Untracked (No Rastreado)**  
   Descripción: El archivo está en el directorio de trabajo, pero Git no lo está siguiendo. Es decir, Git no tiene conocimiento de este archivo y no está incluido en el historial del repositorio.

2. **Tracked (Rastreado)**  
   Descripción: El archivo ha sido añadido al repositorio en un commit anterior. Git está siguiendo este archivo y su estado puede ser uno de los siguientes:
   - **Unmodified (Sin Modificar)**: El archivo ha sido rastreado previamente y no se han realizado cambios desde el último commit.
   - **Modified (Modificado)**: El archivo ha sido cambiado después del último commit. Los cambios aún no han sido añadidos al área de staging.
   - **Staged (En Área de Staging)**: El archivo ha sido modificado y sus cambios han sido añadidos al área de staging (preparado para el próximo commit).

3. **Staged (En Área de Staging)**  
   Descripción: El archivo está en el área de staging, lo que significa que los cambios han sido preparados para ser incluidos en el próximo commit. Es decir, Git ha marcado los cambios para que se incluyan en el historial del repositorio.

### Transición entre Estados

- De **Untracked** a **Staged**:  
  Usas `git add` para añadir archivos no rastreados al área de staging.
  
- De **Modified** a **Staged**:  
  Usas `git add` para añadir los cambios en archivos modificados al área de staging.

- De **Staged** a **Committed**:  
  Usas `git commit` para hacer un commit de los archivos en el área de staging. Esto confirma los cambios en el repositorio.

- De **Staged** a **Unstaged**:  
  Usas `git reset` para retirar archivos del área de staging, devolviéndolos al estado de modificados.

## Comandos básicos de Git por tema

### 1. Configuración Inicial
- `git config --global user.name "Tu Nombre"`: Configura tu nombre de usuario globalmente.
- `git config --global user.email "tu.email@dominio.com"`: Configura tu correo electrónico globalmente.
- `git config --list`: Muestra la configuración actual.

### 2. Inicialización de Repositorio
- `git init`: Crea un nuevo repositorio Git en el directorio actual.

### 3. Rastrear Archivos
- `git add <archivo>`: Añade un archivo al área de preparación (staging area).
- `git add .`: Añade todos los archivos modificados al área de preparación.
- `git status`: Muestra el estado de los archivos en el repositorio (rastreados, modificados, en staging, etc.).
- `git rm --cached <archivo>`: Elimina un archivo del área de staging sin eliminarlo del directorio de trabajo.

## 4. Stash (Guardar Cambios Temporales)

- `git stash`: Guarda los cambios no confirmados temporalmente.
- `git stash -u`: Guarda cambios no confirmados y archivos no rastreados.
- `git stash list`: Muestra la lista de stashes guardados.
- `git stash apply`: Aplica el último stash guardado sin eliminarlo de la lista.
- `git stash pop`: Aplica el último stash y lo elimina de la lista.
- `git stash drop`: Elimina el último stash guardado.
- `git stash clear`: Elimina todos los stashes guardados.

## 5. Confirmación de Cambios (Commits)

- `git commit -m "Mensaje de commit"`: Guarda los cambios en el repositorio con un mensaje descriptivo.
- `git commit --amend`: Modifica el último commit realizado (por ejemplo, para corregir el mensaje).

## 6. Historial

- `git log`: Muestra el historial de commits.
- `git log --oneline`: Muestra el historial de commits en una sola línea por commit.

## 7. Sincronización con Repositorios Remotos

- `git remote add origin <url>`: Asocia el repositorio local con uno remoto.
- `git push origin <nombre-rama>`: Sube los cambios locales en la rama actual al repositorio remoto.
- `git pull origin <nombre-rama>`: Trae los cambios de una rama remota al local y los fusiona.

## 8. Ramas (Branches)

- `git branch`: Muestra las ramas actuales.
- `git branch <nombre-rama>`: Crea una nueva rama.
- `git checkout <nombre-rama>`: Cambia a una rama diferente.
- `git checkout -b <nombre-rama>`: Crea y cambia a una nueva rama.
- `git merge <nombre-rama>`: Fusiona la rama especificada con la rama actual. (Por ejemplo, el main con la branch actual)
- `git branch --set-upstream-to=origin/<rama>`: Establece la rama remota de seguimiento para la rama actual.

## 9. Restaurar Cambios (Restore)

- `git restore <archivo>`: Deshace los cambios locales no confirmados en el archivo, restaurándolo a la versión del último commit.
- `git restore --staged <archivo>`: Quita un archivo del área de preparación sin perder los cambios locales.
- `git restore --source=<commit> <archivo>`: Restaura un archivo a su estado en un commit específico.
- `git restore .`: Deshace los cambios no confirmados en todos los archivos del directorio actual.

## 10. Deshacer Cambios

- `git reset <archivo>`: Elimina un archivo del área de preparación.
- `git reset --hard`: Revierte el repositorio al último commit, descartando todos los cambios.
- `git checkout -- <archivo>`: Deshace los cambios en un archivo que aún no ha sido añadido al área de preparación.

## 11. Clonación

- `git clone <url>`: Clona un repositorio remoto en el directorio local.

## 12. Etiquetas (Tags)

- `git tag <nombre-etiqueta>`: Crea una nueva etiqueta.
- `git tag`: Muestra todas las etiquetas.
- `git push origin <nombre-etiqueta>`: Sube una etiqueta al repositorio remoto.

## 13. Ver Cambios

- `git diff`: Muestra las diferencias entre los archivos modificados pero no preparados para commit.
- `git diff --staged`: Muestra las diferencias entre los archivos preparados para commit y el último commit.