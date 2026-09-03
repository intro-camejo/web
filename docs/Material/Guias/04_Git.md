# Guía 4 - Git y GitHub

*<u>__Nota__</u>: antes de empezar, asegurate de tener configurada tu SSH Key con GitHub. Hay un tutorial paso a paso en la sección "Apuntes".*

### Básico - Repositorio local

Vamos a simular el desarrollo de una pequeña app de notas.

1. Crear una carpeta `notas-app`, inicializarla como repositorio de Git y verificar con `git status` que quedó vacío y sin cambios trackeados.
2. Crear un archivo `README.md` con una breve descripción del proyecto y agregarlo al staging area.
3. Hacer el primer commit con un mensaje descriptivo. Verificar con `git log` que quedó registrado.
4. Crear un archivo `notas.txt`, escribir dos líneas de texto, y hacer un nuevo commit.
5. Modificar `notas.txt` agregando una tercera línea, pero **sin** agregarlo al staging. Usar `git diff` para ver qué cambió respecto del último commit.
6. Usar `git restore` para descartar ese cambio sin commitear y confirmar que `notas.txt` volvió a su estado anterior.

### Staging y áreas de trabajo

7. Crear dos archivos nuevos, `tareas.txt` y `config.json`. Agregar solo `tareas.txt` al staging area y verificar con `git status` que `config.json` sigue sin trackear.
8. Modificar `README.md` y `tareas.txt` al mismo tiempo. Agregar **ambos** al staging area con `git add .`, pero antes de commitear, usar `git restore --staged README.md` para sacarlo del staging sin perder el cambio. Commitear solo lo que quedó en staging (`tareas.txt`) y verificar con `git status` que `README.md` sigue modificado pero no preparado.
9. Crear un archivo `.gitignore` que excluya cualquier archivo con extensión `.log` y una carpeta `node_modules/`. Crear un archivo `debug.log` y confirmar que Git lo ignora.

### Ramas

10. Crear una rama llamada `feature/prioridades` y moverse a ella con `git checkout` (podés hacerlo en dos pasos con `git branch` + `git checkout`, o en uno solo con `git checkout -b`).
11. Sobre esa rama, modificar `notas.txt` agregando una sección de prioridades, y commitear el cambio.
12. Volver a la rama principal (`main`) y verificar que el cambio de prioridades **no** está presente ahí.
13. Fusionar `feature/prioridades` sobre `main`. Verificar con `git log --oneline --graph` que el historial refleja ambas ramas.
14. Eliminar la rama `feature/prioridades` una vez fusionada.

### Conflictos

15. Crear una rama `feature/formato-a` que modifique la primera línea de `notas.txt`. Sin fusionarla todavía, volver a `main` y crear otra rama `feature/formato-b` que modifique **esa misma línea** con un texto distinto.
16. Fusionar `feature/formato-a` sobre `main` sin problemas.
17. Intentar fusionar `feature/formato-b` sobre `main` y resolver el conflicto que aparece, conservando el contenido de ambas ramas en la línea (por ejemplo, uniendo ambos textos en una sola línea coherente).
18. Confirmar el merge con un commit y verificar con `git log` que el conflicto quedó resuelto y registrado.

### GitHub y repositorios remotos

19. Crear un repositorio vacío en GitHub llamado `notas-app` (sin README, sin licencia).
20. Vincular el repositorio local con el remoto usando `git remote add origin <url-ssh>` y subir la rama `main` con `git push`.
21. Desde GitHub, editar el `README.md` directamente en el navegador y confirmar el cambio (esto genera un commit remoto que no existe en tu copia local).
22. Traer ese cambio a tu repositorio local con `git pull` y verificar que se aplicó correctamente.
23. Hacer un **fork** de algún repositorio público de GitHub (por ejemplo, el de un compañero), clonarlo en tu máquina, crear una rama, hacer un cambio menor (como corregir una palabra en el `README`) y abrir un **Pull Request** hacia el repositorio original.

*__Aclaración__: los ejercicios 19 a 23 requieren tener una cuenta de GitHub. Si trabajás en equipo, pueden hacer estos ejercicios entre dos personas para practicar también el flujo de colaboración (uno crea el PR, el otro lo revisa).*