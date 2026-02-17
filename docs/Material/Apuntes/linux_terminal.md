---
sidebar_label: "Linux y Terminal"
---

# Linux y Terminal

## ¿Que es Linux?

Linux es un **sistema operativo de codigo abierto** basado en Unix, creado por Linus Torvalds en 1991. A diferencia de Windows o macOS, Linux es **libre y gratuito**, lo que significa que cualquier persona puede usarlo, modificarlo y distribuirlo.

### ¿Por que es importante para los desarrolladores?

- **Servidores**: La gran mayoria de los servidores en el mundo corren Linux. Si vas a hacer deploy de una aplicacion, muy probablemente sea en un servidor Linux.
- **Herramientas de desarrollo**: Muchas herramientas de desarrollo (Git, Docker, Node.js, etc.) fueron diseñadas originalmente para Linux.
- **Estabilidad y seguridad**: Linux es conocido por ser un sistema operativo muy estable y seguro.
- **Codigo abierto**: Podes ver, modificar y aprender del codigo fuente del sistema operativo.

### Distribuciones

Linux no viene en una sola version. Existen muchas **distribuciones** (o "distros"), que son versiones de Linux empaquetadas con diferentes programas y configuraciones:

| Distribucion | Descripcion |
|---|---|
| **Ubuntu** | La mas popular para principiantes. Basada en Debian. |
| **Debian** | Muy estable, usada en servidores. Base de muchas otras distros. |
| **Fedora** | Enfocada en las ultimas tecnologias. Patrocinada por Red Hat. |
| **Arch Linux** | Para usuarios avanzados. Altamente personalizable. |
| **Linux Mint** | Similar a Ubuntu pero con una interfaz mas parecida a Windows. |

Todas las distribuciones comparten el **kernel** (nucleo) de Linux, que es la parte fundamental que se comunica con el hardware.

---

## La Terminal

### ¿Que es una terminal?

La **terminal** (tambien llamada consola o linea de comandos) es una interfaz de texto que te permite comunicarte con el sistema operativo escribiendo comandos. Cuando abris una terminal, lo que se ejecuta adentro es un **shell** (como Bash, Zsh o Fish), que es el programa que interpreta los comandos que escribis.

### ¿Por que usar la terminal?

- **Velocidad**: Muchas tareas se realizan mas rapido escribiendo un comando que navegando por menus graficos.
- **Automatizacion**: Podes combinar comandos y crear scripts para automatizar tareas repetitivas.
- **Acceso remoto**: Cuando trabajas con servidores, la terminal es generalmente la unica forma de interactuar con ellos (via SSH).
- **Control total**: La terminal te da acceso a funcionalidades que no estan disponibles desde la interfaz grafica.

### Terminal vs Interfaz Grafica (GUI)

| Terminal (CLI) | Interfaz Grafica (GUI) |
|---|---|
| Se interactua escribiendo comandos | Se interactua con el mouse y botones |
| Requiere conocer los comandos | Mas intuitiva visualmente |
| Muy eficiente para tareas repetitivas | Mas comoda para tareas visuales |
| Esencial para servidores y desarrollo | Comun en uso cotidiano |

---

## Sistema de Archivos

En Linux, todo el sistema de archivos se organiza como un arbol que comienza en la **raiz** (`/`). No existen letras de unidad como `C:\` o `D:\` en Windows; todo cuelga de `/`.

### Directorios principales

```
/
├── home/       # Directorios personales de los usuarios
├── etc/        # Archivos de configuracion del sistema
├── usr/        # Programas y librerias instalados
├── tmp/        # Archivos temporales (se borran al reiniciar)
├── var/        # Datos variables (logs, bases de datos, etc.)
├── bin/        # Comandos esenciales del sistema
├── sbin/       # Comandos de administracion del sistema
├── dev/        # Archivos de dispositivos (hardware)
├── opt/        # Software adicional/opcional
├── root/       # Directorio personal del usuario root
└── proc/       # Informacion sobre los procesos en ejecucion
```

El directorio personal de cada usuario esta en `/home/nombre_usuario`. Cuando abris una terminal, generalmente empezas en este directorio, representado por el simbolo `~`.

### Rutas absolutas vs relativas

- **Ruta absoluta**: Comienza desde la raiz (`/`). Siempre empieza con `/`.
  ```bash
  /home/usuario/Documentos/archivo.txt
  ```

- **Ruta relativa**: Es relativa al directorio en el que te encontras actualmente.
  ```bash
  Documentos/archivo.txt
  ```

Existen dos directorios especiales que se usan en rutas relativas:
- `.` (punto): Representa el directorio actual.
- `..` (dos puntos): Representa el directorio padre (un nivel arriba).

```bash
# Si estas en /home/usuario
./Documentos        # Equivale a /home/usuario/Documentos
../otro_usuario     # Equivale a /home/otro_usuario
```

---

## Comandos Basicos de Navegacion

### `pwd` - Mostrar directorio actual

El comando `pwd` (*print working directory*) muestra la ruta completa del directorio en el que te encontras.

```bash
$ pwd
/home/usuario
```

### `ls` - Listar contenido de un directorio

El comando `ls` (*list*) muestra los archivos y carpetas dentro de un directorio.

```bash
$ ls
Documentos  Descargas  Escritorio  Imagenes  Musica
```

#### Flags utiles de `ls`

- **`ls -l`** (formato largo): Muestra informacion detallada de cada archivo.
  ```bash
  $ ls -l
  total 20
  drwxr-xr-x  2 usuario usuario 4096 mar 15 10:00 Documentos
  -rw-r--r--  1 usuario usuario  256 mar 14 09:30 notas.txt
  ```

- **`ls -a`** (all): Muestra archivos ocultos (los que empiezan con `.`).
  ```bash
  $ ls -a
  .  ..  .bashrc  .config  Documentos  notas.txt
  ```

- **`ls -h`** (human-readable): Muestra tamaños en formato legible (KB, MB, GB). Se usa junto con `-l`.
  ```bash
  $ ls -lh
  total 20K
  drwxr-xr-x  2 usuario usuario 4.0K mar 15 10:00 Documentos
  -rw-r--r--  1 usuario usuario  256  mar 14 09:30 notas.txt
  ```

**Tip**: Podes combinar flags. Por ejemplo, `ls -la` muestra todos los archivos (incluidos ocultos) en formato largo. `ls -lah` agrega el formato legible de tamaños.

### `cd` - Cambiar de directorio

El comando `cd` (*change directory*) te permite moverte entre directorios.

```bash
$ cd Documentos          # Entra al directorio Documentos
$ cd /home/usuario       # Va a una ruta absoluta
$ cd ..                  # Sube un nivel (directorio padre)
$ cd ~                   # Va al directorio home del usuario
$ cd -                   # Vuelve al directorio anterior
$ cd                     # Sin argumentos, va al home (igual que cd ~)
```

### `clear` - Limpiar la terminal

El comando `clear` limpia toda la pantalla de la terminal. Tambien podes usar el atajo `Ctrl + L`.

```bash
$ clear
```

---

## Manipulacion de Archivos y Directorios

### `mkdir` - Crear directorios

El comando `mkdir` (*make directory*) crea uno o mas directorios.

```bash
$ mkdir mi_carpeta                    # Crea un directorio
$ mkdir carpeta1 carpeta2 carpeta3    # Crea varios directorios
$ mkdir -p padre/hijo/nieto           # Crea directorios anidados (crea los intermedios si no existen)
```

### `touch` - Crear archivos vacios

El comando `touch` crea un archivo vacio o actualiza la fecha de modificacion de un archivo existente.

```bash
$ touch archivo.txt                   # Crea un archivo vacio
$ touch archivo1.txt archivo2.txt     # Crea varios archivos
```

### `cp` - Copiar archivos y directorios

El comando `cp` (*copy*) copia archivos o directorios.

```bash
$ cp archivo.txt copia.txt            # Copia un archivo
$ cp archivo.txt Documentos/          # Copia un archivo a otro directorio
$ cp -r carpeta/ copia_carpeta/       # Copia un directorio y todo su contenido (-r = recursivo)
```

### `mv` - Mover o renombrar archivos

El comando `mv` (*move*) mueve archivos/directorios o los renombra.

```bash
$ mv archivo.txt Documentos/          # Mueve el archivo a Documentos
$ mv viejo_nombre.txt nuevo_nombre.txt # Renombra un archivo
$ mv carpeta/ /home/usuario/otra_ruta/ # Mueve un directorio
```

### `rm` - Eliminar archivos

El comando `rm` (*remove*) elimina archivos.

```bash
$ rm archivo.txt                      # Elimina un archivo
$ rm archivo1.txt archivo2.txt        # Elimina varios archivos
```

> **ADVERTENCIA**: `rm` elimina archivos **permanentemente**. No van a una papelera de reciclaje. Una vez eliminados, no se pueden recuperar facilmente.

### `rmdir` - Eliminar directorios vacios

El comando `rmdir` (*remove directory*) elimina directorios, pero solo si estan vacios.

```bash
$ rmdir carpeta_vacia/
```

### `rm -r` - Eliminar directorios con contenido

Para eliminar un directorio que tiene archivos adentro, se usa `rm` con el flag `-r` (recursivo).

```bash
$ rm -r carpeta/                      # Elimina la carpeta y todo su contenido
```

> **CUIDADO con `rm -rf`**: El flag `-f` (*force*) fuerza la eliminacion sin pedir confirmacion. El comando `rm -rf` es extremadamente peligroso porque elimina todo sin preguntar. **NUNCA** ejecutes `rm -rf /` ya que esto borraria todo el sistema. Siempre verifica dos veces lo que estas eliminando antes de ejecutar este comando.

**Tip**: Si queres que `rm` te pida confirmacion antes de eliminar cada archivo, usa el flag `-i`:
```bash
$ rm -ri carpeta/
rm: ¿eliminar directorio 'carpeta/archivo.txt'? s
```

---

## Visualizacion de Archivos

> **Nota**: En el apunte de Bash se cubren `cat` con redirecciones y pipelines. Aca se describen los comandos enfocados en la visualizacion de contenido.

### `cat` - Mostrar contenido completo

El comando `cat` (*concatenate*) muestra el contenido completo de un archivo en la terminal.

```bash
$ cat archivo.txt
Linea 1 del archivo
Linea 2 del archivo
Linea 3 del archivo
```

Es util para archivos cortos. Para archivos largos, es mejor usar `less`.

### `head` - Mostrar las primeras lineas

El comando `head` muestra las primeras 10 lineas de un archivo por defecto.

```bash
$ head archivo.txt                    # Muestra las primeras 10 lineas
$ head -n 5 archivo.txt               # Muestra las primeras 5 lineas
```

### `tail` - Mostrar las ultimas lineas

El comando `tail` muestra las ultimas 10 lineas de un archivo por defecto.

```bash
$ tail archivo.txt                    # Muestra las ultimas 10 lineas
$ tail -n 5 archivo.txt               # Muestra las ultimas 5 lineas
$ tail -f log.txt                     # Muestra las ultimas lineas y queda "escuchando" nuevas lineas en tiempo real (util para logs)
```

### `less` - Navegar por archivos grandes

El comando `less` permite navegar por un archivo de forma paginada (ideal para archivos largos).

```bash
$ less archivo_largo.txt
```

Dentro de `less`:
- **Espacio** o **Page Down**: Avanza una pagina.
- **b** o **Page Up**: Retrocede una pagina.
- **Flechas arriba/abajo**: Navega linea por linea.
- **/texto**: Busca "texto" dentro del archivo.
- **n**: Va a la siguiente coincidencia de busqueda.
- **q**: Sale de `less`.

### `wc` - Contar lineas, palabras y caracteres

El comando `wc` (*word count*) cuenta lineas, palabras y caracteres de un archivo.

```bash
$ wc archivo.txt
  50  200  1500 archivo.txt
#  |    |     |
# lineas palabras bytes

$ wc -l archivo.txt    # Solo cuenta lineas
50 archivo.txt

$ wc -w archivo.txt    # Solo cuenta palabras
200 archivo.txt
```

---

## Busqueda

### `find` - Buscar archivos y directorios

El comando `find` permite buscar archivos y directorios en el sistema de archivos.

```bash
$ find . -name "archivo.txt"          # Busca "archivo.txt" en el directorio actual y subdirectorios
./Documentos/archivo.txt

$ find /home -name "*.txt"            # Busca todos los archivos .txt en /home
/home/usuario/notas.txt
/home/usuario/Documentos/archivo.txt

$ find . -type d -name "config"       # Busca solo directorios (-type d) llamados "config"
./proyecto/config

$ find . -type f -name "*.log"        # Busca solo archivos (-type f) con extension .log
./var/app.log
```

Opciones utiles:
- `-name "patron"`: Busca por nombre (sensible a mayusculas/minusculas).
- `-iname "patron"`: Busca por nombre sin distinguir mayusculas de minusculas.
- `-type f`: Solo archivos.
- `-type d`: Solo directorios.

### `grep` - Buscar texto dentro de archivos

> **Nota**: En el apunte de Bash ya se cubre `grep` con pipelines y ejemplos avanzados. Aca se presenta un resumen basico.

El comando `grep` busca lineas que coincidan con un patron de texto dentro de uno o mas archivos.

```bash
$ grep "error" log.txt                # Busca la palabra "error" en log.txt
Linea 15: Se produjo un error en el sistema

$ grep -i "error" log.txt             # Busca sin distinguir mayusculas/minusculas
Linea 15: Se produjo un error en el sistema
Linea 42: ERROR: conexion rechazada

$ grep -r "TODO" ./proyecto/          # Busca recursivamente en todos los archivos del directorio
./proyecto/main.py: # TODO: implementar autenticacion
./proyecto/utils.py: # TODO: agregar validacion

$ grep -n "funcion" script.py         # Muestra el numero de linea de cada coincidencia
3: def funcion_principal():
15: def funcion_auxiliar():
```

### `which` - Encontrar la ubicacion de un comando

El comando `which` muestra la ruta del ejecutable de un comando.

```bash
$ which python
/usr/bin/python

$ which git
/usr/bin/git

$ which node
/home/usuario/.nvm/versions/node/v18.0.0/bin/node
```

Es util para saber que version de un programa se esta ejecutando o si un programa esta instalado.

---

## Permisos

En Linux, cada archivo y directorio tiene **permisos** que determinan quien puede leer, escribir o ejecutar ese recurso. Esto es fundamental para la seguridad del sistema.

### Entendiendo la salida de `ls -l`

```bash
$ ls -l
-rw-r--r--  1 usuario grupo  4096 mar 15 10:00 archivo.txt
drwxr-xr-x  2 usuario grupo  4096 mar 15 10:00 carpeta/
```

Desglosemos la primera columna (`-rw-r--r--`):

```
- rw- r-- r--
|  |   |   |
|  |   |   └── Permisos para "otros" (other)
|  |   └────── Permisos para el "grupo" (group)
|  └────────── Permisos para el "dueño" (user/owner)
└───────────── Tipo: - = archivo, d = directorio, l = enlace simbolico
```

Cada grupo de tres caracteres puede contener:
- **r** (*read*): Permiso de lectura.
- **w** (*write*): Permiso de escritura.
- **x** (*execute*): Permiso de ejecucion.
- **-**: Sin permiso.

**Ejemplo**: `-rwxr-xr--`
- El dueño puede leer, escribir y ejecutar (`rwx`).
- El grupo puede leer y ejecutar (`r-x`).
- Otros solo pueden leer (`r--`).

### `chmod` - Cambiar permisos

El comando `chmod` (*change mode*) cambia los permisos de un archivo o directorio.

#### Modo simbolico

```bash
$ chmod u+x script.sh     # Agrega permiso de ejecucion al dueño (u = user)
$ chmod g+w archivo.txt    # Agrega permiso de escritura al grupo (g = group)
$ chmod o-r archivo.txt    # Quita permiso de lectura a otros (o = other)
$ chmod a+r archivo.txt    # Agrega permiso de lectura a todos (a = all)
```

- `u` = user (dueño), `g` = group (grupo), `o` = other (otros), `a` = all (todos)
- `+` = agregar permiso, `-` = quitar permiso, `=` = establecer permiso exacto

#### Modo numerico (octal)

Cada permiso tiene un valor numerico:
- **r** = 4
- **w** = 2
- **x** = 1

Se suman los valores para cada grupo (dueño, grupo, otros):

```bash
$ chmod 755 script.sh      # rwxr-xr-x (dueño: 7=4+2+1, grupo: 5=4+1, otros: 5=4+1)
$ chmod 644 archivo.txt    # rw-r--r-- (dueño: 6=4+2, grupo: 4, otros: 4)
$ chmod 700 privado.sh     # rwx------ (solo el dueño tiene acceso total)
```

**Valores comunes**:
| Octal | Permisos | Uso tipico |
|---|---|---|
| `755` | `rwxr-xr-x` | Scripts ejecutables, directorios |
| `644` | `rw-r--r--` | Archivos de texto, configuracion |
| `700` | `rwx------` | Archivos privados, scripts personales |
| `600` | `rw-------` | Archivos sensibles (claves SSH, etc.) |

### `chown` - Cambiar propietario

El comando `chown` (*change owner*) cambia el dueño y/o grupo de un archivo.

```bash
$ sudo chown usuario archivo.txt              # Cambia el dueño
$ sudo chown usuario:grupo archivo.txt        # Cambia dueño y grupo
$ sudo chown -R usuario:grupo carpeta/        # Cambia dueño y grupo recursivamente
```

> **Nota**: Cambiar el propietario de archivos generalmente requiere permisos de administrador (`sudo`).

---

## Otros Comandos Utiles

### `man` - Manual de comandos

El comando `man` (*manual*) muestra la documentacion detallada de cualquier comando. Es tu mejor amigo cuando no recordas como funciona algo.

```bash
$ man ls          # Muestra el manual del comando ls
$ man chmod       # Muestra el manual de chmod
```

Dentro de `man`, la navegacion es igual que en `less` (espacio para avanzar, `q` para salir).

**Tip**: Si necesitas una explicacion rapida, muchos comandos soportan el flag `--help`:
```bash
$ ls --help
```

### `whoami` - Mostrar usuario actual

```bash
$ whoami
usuario
```

### `echo` - Imprimir texto

El comando `echo` imprime texto en la terminal.

```bash
$ echo "Hola mundo"
Hola mundo

$ echo $HOME              # Imprime el valor de una variable de entorno
/home/usuario
```

### `date` - Mostrar fecha y hora

```bash
$ date
lun mar 15 10:30:00 ART 2026
```

### `history` - Historial de comandos

El comando `history` muestra los ultimos comandos que ejecutaste.

```bash
$ history
  1  cd Documentos
  2  ls -la
  3  mkdir proyecto
  4  cd proyecto
  5  git init
```

**Tip**: Podes ejecutar un comando anterior del historial usando `!` seguido del numero:
```bash
$ !3          # Ejecuta el comando numero 3 (mkdir proyecto)
```

### `alias` - Crear atajos de comandos

El comando `alias` permite crear atajos para comandos que usas frecuentemente.

```bash
$ alias ll="ls -la"       # Crea un alias
$ ll                      # Ahora "ll" ejecuta "ls -la"

$ alias cls="clear"       # Otro ejemplo
```

> **Nota**: Los alias creados en la terminal se pierden al cerrar la sesion. Para hacerlos permanentes, agregalos al archivo de configuracion de tu shell (`~/.bashrc`, `~/.zshrc`, etc.).

### `sudo` - Ejecutar como administrador

El comando `sudo` (*superuser do*) permite ejecutar comandos con permisos de administrador (root). Se te pedira la contrasena del usuario.

```bash
$ sudo apt update                     # Actualizar lista de paquetes (en Ubuntu/Debian)
$ sudo rm /etc/archivo_protegido      # Eliminar un archivo del sistema
```

> **CUIDADO**: Usar `sudo` te da acceso total al sistema. Un comando incorrecto con `sudo` puede causar daños serios. Siempre verifica el comando antes de ejecutarlo con permisos de administrador.

---

## Atajos de Terminal

Estos atajos de teclado te van a hacer mucho mas eficiente al trabajar con la terminal:

### Navegacion y edicion

| Atajo | Descripcion |
|---|---|
| **Tab** | Autocompleta nombres de archivos, directorios y comandos. Si hay varias opciones, presiona Tab dos veces para ver todas. |
| **Flecha arriba / abajo** | Navega por el historial de comandos anteriores. |
| **Ctrl + A** | Mueve el cursor al inicio de la linea. |
| **Ctrl + E** | Mueve el cursor al final de la linea. |
| **Ctrl + U** | Borra todo desde el cursor hasta el inicio de la linea. |
| **Ctrl + K** | Borra todo desde el cursor hasta el final de la linea. |
| **Ctrl + W** | Borra la palabra anterior al cursor. |

### Control de procesos

| Atajo | Descripcion |
|---|---|
| **Ctrl + C** | Cancela/interrumpe el comando que se esta ejecutando. |
| **Ctrl + D** | Cierra la terminal (envia señal de fin de archivo / EOF). |
| **Ctrl + Z** | Suspende el proceso actual (lo manda a segundo plano). |

### Otros

| Atajo | Descripcion |
|---|---|
| **Ctrl + L** | Limpia la pantalla (equivalente a `clear`). |
| **Ctrl + R** | Busqueda inversa en el historial. Empezas a escribir y te muestra comandos anteriores que coincidan. Muy util para encontrar comandos que ejecutaste hace tiempo. |

### Ejemplo de uso de Ctrl + R

```
$ (Ctrl + R)
(reverse-i-search)`git': git push origin main
```

Al presionar `Ctrl + R` y empezar a escribir "git", la terminal te muestra el ultimo comando que contiene "git". Podes seguir presionando `Ctrl + R` para ver coincidencias anteriores, y cuando encuentres el comando que buscabas, presiona `Enter` para ejecutarlo.
