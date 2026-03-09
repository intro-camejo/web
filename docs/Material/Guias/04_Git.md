# Guia 4 - Git

> **Nota:** Se recomienda crear un repositorio de prueba para practicar estos ejercicios. De esta manera, pueden experimentar libremente sin riesgo de afectar proyectos reales. Para una experiencia visual e interactiva del manejo de ramas, se recomienda utilizar [Learn Git Branching](https://learngitbranching.js.org/?locale=es_AR).

> **Importante:** Antes de comenzar con los ejercicios de trabajo remoto, asegurarse de tener configurada la SSH Key. En la seccion "Apuntes" hay un tutorial detallado.

### Introductorios

1. Configurar Git en tu computadora estableciendo tu nombre de usuario y tu correo electronico de manera global. Verificar la configuracion con `git config --list`.

2. Crear una carpeta llamada `mi-proyecto`, ingresar a ella e inicializar un repositorio Git. Verificar que se haya creado la carpeta `.git`.

3. Dentro del repositorio creado en el ejercicio anterior, crear un archivo llamado `notas.txt` con algun contenido. Usar `git status` para observar el estado del archivo. Luego, agregarlo al area de staging con `git add` y volver a ejecutar `git status` para ver la diferencia.

4. Realizar un commit del archivo `notas.txt` con un mensaje descriptivo. Luego, ejecutar `git log` para ver el historial de commits y verificar que el commit fue registrado correctamente.

5. Modificar el archivo `notas.txt` agregando una nueva linea de texto. Usar `git diff` para ver las diferencias antes de hacer el commit. Luego, agregar el archivo al staging y realizar un nuevo commit.

6. Crear tres archivos nuevos: `archivo1.txt`, `archivo2.txt` y `archivo3.txt`. Agregar solo `archivo1.txt` y `archivo2.txt` al area de staging. Ejecutar `git status` para confirmar que `archivo3.txt` sigue sin ser rastreado. Realizar el commit unicamente de los dos archivos preparados.

7. Crear un archivo `.gitignore` en el repositorio que ignore todos los archivos con extension `.log` y una carpeta llamada `temp/`. Luego, crear un archivo `errores.log` y una carpeta `temp/` con algun archivo dentro. Verificar con `git status` que Git los esta ignorando correctamente.

8. Ejecutar `git log` con las siguientes variantes y describir que informacion muestra cada una:
   - `git log --oneline`
   - `git log --oneline --graph`
   - `git log --author="tu nombre"`
   - `git log -3`

### Ramas y Merge

9. Crear una nueva rama llamada `nueva-funcionalidad` y cambiar a ella. Verificar en que rama te encontras con `git branch`. Luego, crear un archivo llamado `funcionalidad.txt`, hacer un commit y volver a la rama `main`.

10. Desde la rama `main`, fusionar la rama `nueva-funcionalidad` usando `git merge`. Verificar con `git log --oneline --graph` que la fusion se realizo correctamente.

11. Crear una rama llamada `experimento`. Cambiar a ella, crear un archivo `experimento.txt` y hacer un commit. Luego, volver a `main` y eliminar la rama `experimento` sin fusionarla. Investigar que flag del comando `git branch` se necesita para forzar la eliminacion.

12. Simular un merge conflict realizando los siguientes pasos:
    - Desde `main`, crear un archivo `datos.txt` con el contenido "Linea original" y hacer un commit.
    - Crear una rama llamada `cambio-a` y en ella modificar `datos.txt` reemplazando el contenido por "Cambio desde rama A". Hacer commit.
    - Volver a `main` y modificar `datos.txt` reemplazando el contenido por "Cambio desde main". Hacer commit.
    - Intentar fusionar `cambio-a` en `main`. Resolver el conflicto manualmente eligiendo que contenido conservar, y luego completar el merge con `git add` y `git commit`.

13. Crear dos ramas a partir de `main`: `feature-login` y `feature-registro`. Realizar al menos un commit en cada rama (en archivos distintos). Luego, fusionar ambas ramas en `main` de forma secuencial. Verificar el historial con `git log --oneline --graph`.

### Trabajo remoto

14. Crear un repositorio nuevo y vacio en GitHub. Luego, en tu repositorio local de prueba, agregar el repositorio remoto con `git remote add origin <url-ssh>` y subir la rama `main` con `git push -u origin main`. Verificar en GitHub que los archivos se subieron correctamente.

15. Clonar un repositorio publico de GitHub (por ejemplo, uno de un companero o cualquier repositorio de practica). Explorar su historial de commits con `git log --oneline` y listar las ramas remotas con `git branch -r`.

16. En el repositorio remoto creado en el ejercicio 14, crear un archivo directamente desde la interfaz web de GitHub. Luego, en tu repositorio local, ejecutar `git fetch` para traer los cambios sin fusionarlos. Observar con `git status` y `git log origin/main` que los cambios estan disponibles. Finalmente, ejecutar `git pull` para integrarlos a tu rama local.

17. Crear una nueva rama local llamada `feature-remota`, realizar al menos un commit en ella, y subirla al repositorio remoto con `git push -u origin feature-remota`. Verificar en GitHub que la rama fue creada correctamente.

### Colaboracion

18. Hacer un **fork** de un repositorio publico en GitHub (puede ser el de un companero). Clonar tu fork a tu computadora, crear una rama, realizar un cambio y hacer un commit. Subir la rama a tu fork y abrir un **Pull Request** hacia el repositorio original desde la interfaz de GitHub. Describir los cambios realizados en el cuerpo del PR.

19. En el repositorio de GitHub del ejercicio 14, crear un **Issue** describiendo una mejora o error ficticio. Asignarle una etiqueta (label) y una descripcion clara. Luego, crear una rama que resuelva ese issue, hacer el cambio correspondiente, subir la rama y abrir un Pull Request que mencione el issue (por ejemplo, "Resuelve #1" en la descripcion).

20. Intercambiar repositorios con un companero. Clonar el repositorio del companero, crear una rama, realizar un cambio y abrir un Pull Request. El companero debe revisar el PR (dejando al menos un comentario con sugerencias o aprobacion) y luego fusionarlo desde GitHub.

### Desafios

21. Realizar el siguiente flujo completo de trabajo colaborativo:
    - Crear un repositorio en GitHub con un archivo `README.md` inicial.
    - Clonar el repositorio a tu computadora.
    - Crear una rama `develop` y dentro de ella crear un archivo `app.txt`.
    - Hacer commit y push de `develop`.
    - Desde `develop`, crear una rama `feature-header` y modificar `app.txt` agregando una seccion "Header". Hacer commit y push.
    - Abrir un Pull Request de `feature-header` hacia `develop` en GitHub y fusionarlo.
    - En tu computadora, cambiar a `develop` y ejecutar `git pull` para traer los cambios fusionados.

22. Investigar el comando `git stash`. En tu repositorio de prueba, modificar un archivo sin hacer commit. Luego, guardar los cambios temporalmente con `git stash`, cambiar de rama, volver a la rama original y recuperar los cambios con `git stash pop`. Describir en que situaciones resulta util este comando.

23. Usar el comando `git log` con el flag `--diff-filter` para encontrar en que commit se agrego un archivo determinado. Ademas, usar `git log -p` para ver los cambios exactos introducidos en un commit especifico. Investigar para que sirve `git log --stat`.

24. Crear un repositorio con la siguiente estructura de ramas y commits:
    - `main` con un commit inicial.
    - `feature-a` (creada desde `main`) con 2 commits.
    - `feature-b` (creada desde `main`) con 1 commit que modifique el mismo archivo que `feature-a`.
    - Fusionar `feature-a` en `main`.
    - Intentar fusionar `feature-b` en `main`, resolver el conflicto resultante y completar el merge.
    - Verificar el historial final con `git log --oneline --graph --all`.

25. Investigar y practicar el uso de `git restore` y `git reset`. En un repositorio de prueba, realizar los siguientes pasos:
    - Modificar un archivo y usar `git restore <archivo>` para deshacer los cambios antes de hacer staging.
    - Modificar un archivo, agregarlo al staging con `git add`, y usar `git restore --staged <archivo>` para sacarlo del staging sin perder los cambios.
    - Hacer un commit y luego usar `git reset --soft HEAD~1` para deshacer el commit manteniendo los cambios en staging.
    - Explicar la diferencia entre `git reset --soft`, `git reset --mixed` y `git reset --hard`.
