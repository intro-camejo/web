# Bash - 12/03/2026

## Índice
1. [¿Qué es Bash?](#1-qué-es-bash)
2. [La Terminal](#2-la-terminal)
3. [Navegación del Sistema](#3-navegación-del-sistema)
4. [Trabajando con Archivos](#4-trabajando-con-archivos)
5. [Permisos](#5-permisos)
6. [Entrada y Salida Estándar](#6-entrada-y-salida-estándar)
7. [Pipes y Redirección](#7-pipes-y-redirección)
8. [Variables](#8-variables)
9. [Scripting Básico](#9-scripting-básico)
10. [Comandos Útiles](#10-comandos-útiles)
11. [Ejercicios Prácticos](#11-ejercicios-prácticos)

---

## 1. ¿Qué es Bash?

### Conceptos clave

**Shell:** Un programa que interpreta comandos y los ejecuta. Es el intermediario entre vos y el sistema operativo.

**Terminal (o emulador de terminal):** La ventana donde escribís los comandos. Es la interfaz gráfica que muestra el shell.

**Bash (Bourne Again Shell):** El shell más común en Linux y macOS. Es un lenguaje de programación y un intérprete de comandos al mismo tiempo.

### Historia: ¿Por qué "Bourne Again"?

Todo empieza en **1971** con el primer Unix en los laboratorios Bell (AT&T). Unix necesitaba una forma de interactuar con el sistema, y así nació el concepto de "shell".

**1977 - Bourne Shell (sh)**
Stephen Bourne, en Bell Labs, crea el **Bourne Shell** (`sh`). Fue revolucionario: introdujo scripting, variables, estructuras de control. Se convirtió en el estándar de Unix.

**1978 - C Shell (csh)**
Bill Joy (creador de vi y co-fundador de Sun) crea el C Shell en Berkeley. Sintaxis parecida a C, pero incompatible con sh.

**1983 - Korn Shell (ksh)**
David Korn mejora el Bourne Shell con características de csh. Muy usado en entornos comerciales Unix.

**1989 - Bash**
Brian Fox, trabajando para el proyecto GNU de Richard Stallman, crea **Bash**. El nombre es un juego de palabras brillante:

> **"Bourne Again Shell"** suena igual que **"Born Again Shell"** (shell renacido)

Es un doble significado:
1. **Literal:** Es el shell Bourne "otra vez" — un sucesor compatible con sh
2. **Juego de palabras:** Es un shell "renacido" — como "born again" en inglés (volver a nacer)

Bash tomó lo mejor de sh, csh y ksh, lo hizo libre (GPL), y se convirtió en el shell por defecto de Linux y macOS.

**Línea de tiempo:**
```
1971    1977    1978    1983    1989    1996    2019
  │       │       │       │       │       │       │
Unix    sh      csh     ksh    Bash    Bash 2  Bash 5
       (Bourne) (C)   (Korn)  (GNU)
```

**Hoy:** Bash 5.x es el estándar en la mayoría de sistemas Linux. macOS cambió a Zsh en 2019, pero Bash sigue disponible. En Windows existe a través de WSL y Git Bash.

### Bash como lenguaje de programación

Bash es un lenguaje **procedural (o imperativo)**. ¿Qué significa esto?

**Paradigmas de programación:**
- **Procedural/Imperativo:** Le decís a la computadora *cómo* hacer las cosas, paso a paso. (C, Bash, Pascal)
- **Orientado a Objetos:** Organizás el código en objetos con datos y métodos. (Java, Python, C++)
- **Funcional:** Basado en funciones puras y evitar estado mutable. (Haskell, Lisp)

**Características de Bash:**
- Ejecuta comandos en secuencia, línea por línea
- Tiene funciones, pero simples (sin clases ni objetos)
- Control de flujo clásico: if/else, for, while, case
- Variables y arrays

**Limitaciones (comparado con otros lenguajes):**
- Sin tipos de datos reales (todo es string, los números se interpretan)
- Sin estructuras complejas (solo arrays indexados y asociativos)
- Variables globales por defecto (hay que declarar `local` explícitamente)
- Manejo de errores básico (solo códigos de salida 0-255)

**¿Cuándo usar Bash vs otro lenguaje?**

| Usar Bash | Usar Python/otro |
|-----------|------------------|
| Automatizar comandos del sistema | Lógica compleja |
| Scripts cortos | Manipulación de datos |
| Glue code entre programas | APIs, web, bases de datos |
| Tareas de sysadmin | Cuando necesitás librerías |
| Instaladores, deploy scripts | Código mantenible a largo plazo |

> 💡 **Regla práctica:** Si tu script empieza a tener muchos ifs anidados, arrays complejos, o supera las 100-200 líneas, probablemente sea hora de migrar a Python.

### ¿Por qué aprender Bash?

- **Automatización:** Tareas repetitivas se resuelven con un script
- **Servidores:** La mayoría no tienen interfaz gráfica
- **Eficiencia:** Muchas tareas son más rápidas por terminal
- **Control:** Acceso completo a todo el sistema
- **Universalidad:** Funciona en Linux, macOS, WSL (Windows)

### Anatomía del prompt

```
usuario@computadora:~/carpeta$
   │         │        │      │
   │         │        │      └── $ = usuario normal, # = root
   │         │        └── directorio actual (~ = home)
   │         └── nombre de la máquina
   └── tu nombre de usuario
```

---

## 2. La Terminal

### Atajos

| Atajo | Función |
|-------|---------|
| `Tab` | Autocompletado |
| `↑` / `↓` | Navegar historial de comandos |
| `Ctrl + C` | Cancelar comando actual |
| `Ctrl + D` | Cerrar terminal / EOF |
| `Ctrl + L` | Limpiar pantalla (igual que `clear`) |
| `Ctrl + A` | Ir al inicio de la línea |
| `Ctrl + E` | Ir al final de la línea |
| `Ctrl + U` | Borrar desde cursor hasta inicio |
| `Ctrl + K` | Borrar desde cursor hasta final |
| `Ctrl + R` | Buscar en historial |

### Ejemplo práctico

```bash
# Escribí "his" y presioná Tab
his[Tab]  →  history

# Escribí "cd /ho" y presioná Tab
cd /ho[Tab]  →  cd /home/

# Si hay múltiples opciones, Tab Tab muestra todas
cd /[Tab][Tab]  →  muestra: bin/ etc/ home/ usr/ var/ ...
```

> 💡 **Tip:** Si Tab no completa nada, es que no existe o hay múltiples opciones. Presioná Tab dos veces para ver las opciones.

---

## 3. Navegación del Sistema

### El sistema de archivos

Linux organiza todo en un árbol de directorios que empieza en `/` (raíz):

```
/
├── home/          ← Carpetas de usuarios
│   └── tu_usuario/
│       ├── Documentos/
│       ├── Descargas/
│       └── ...
├── etc/           ← Configuraciones del sistema
├── var/           ← Datos variables (logs, bases de datos)
├── tmp/           ← Archivos temporales
├── usr/           ← Programas y librerías
└── bin/           ← Comandos básicos del sistema
```

### Comandos de navegación

#### `pwd` - Print Working Directory
Muestra dónde estás parado.

```bash
$ pwd
/home/usuario/Documentos
```

#### `ls` - List
Lista el contenido del directorio.

```bash
# Básico
$ ls
archivo.txt  carpeta  imagen.png

# Con detalles (-l = long)
$ ls -l
-rw-r--r-- 1 usuario grupo 1234 mar 12 10:00 archivo.txt
drwxr-xr-x 2 usuario grupo 4096 mar 12 09:00 carpeta

# Incluir archivos ocultos (-a = all)
$ ls -a
.  ..  .archivo_oculto  archivo.txt  carpeta

# Combinado (el más útil)
$ ls -la

# Ordenar por fecha de modificación
$ ls -lt

# Con tamaños legibles
$ ls -lh
```

**Entendiendo la salida de `ls -l`:**
```
-rw-r--r-- 1 usuario grupo 1234 mar 12 10:00 archivo.txt
│├──┼──┼──│    │       │     │       │          │
││  │  │  │    │       │     │       │          └── nombre
││  │  │  │    │       │     │       └── fecha modificación
││  │  │  │    │       │     └── tamaño en bytes
││  │  │  │    │       └── grupo
││  │  │  │    └── propietario
││  │  │  └── permisos otros
││  │  └── permisos grupo
││  └── permisos propietario
│└── tipo (- archivo, d directorio, l link)
```

#### `cd` - Change Directory
Cambia de directorio.

```bash
# Ir a una carpeta
$ cd Documentos

# Subir un nivel
$ cd ..

# Subir dos niveles
$ cd ../..

# Ir al home
$ cd ~
$ cd          # sin argumentos también va al home

# Ir a la raíz
$ cd /

# Volver al directorio anterior
$ cd -

# Path absoluto (empieza con /)
$ cd /home/usuario/Documentos

# Path relativo (desde donde estás)
$ cd ./carpeta/subcarpeta
$ cd carpeta/subcarpeta    # el ./ es opcional
```

### Paths absolutos vs relativos

| Tipo | Empieza con | Ejemplo | Descripción |
|------|-------------|---------|-------------|
| Absoluto | `/` | `/home/usuario/archivo.txt` | Ruta completa desde la raíz |
| Relativo | `.` o nombre | `./carpeta/archivo.txt` | Desde el directorio actual |
| Home | `~` | `~/Documentos` | Desde tu carpeta home |

```bash
# Si estás en /home/usuario, estos son equivalentes:
cat /home/usuario/Documentos/nota.txt   # absoluto
cat ~/Documentos/nota.txt               # con ~
cat Documentos/nota.txt                 # relativo
```

### Ejercicio de navegación

```bash
# 1. ¿Dónde estás?
pwd

# 2. ¿Qué hay acá?
ls -la

# 3. Andá a tu home
cd ~

# 4. Crear una carpeta de práctica
mkdir practica_bash

# 5. Entrá a la carpeta
cd practica_bash

# 6. Verificar dónde estás
pwd
```

---

## 4. Trabajando con Archivos

### Crear archivos y carpetas

#### `mkdir` - Make Directory
```bash
# Crear una carpeta
$ mkdir nueva_carpeta

# Crear carpetas anidadas (-p = parents)
$ mkdir -p carpeta/subcarpeta/otra

# Crear múltiples carpetas
$ mkdir carpeta1 carpeta2 carpeta3
```

#### `touch` - Crear archivo vacío
```bash
# Crear archivo vacío
$ touch archivo.txt

# Crear múltiples archivos
$ touch archivo1.txt archivo2.txt

# Si el archivo existe, actualiza la fecha de modificación
```

### Leer archivos

#### `cat` - Concatenate
Muestra el contenido completo.

```bash
$ cat archivo.txt
Este es el contenido
del archivo.
```

#### `less` - Visor paginado
Para archivos largos. Navegación:
- `Space` / `f` = página siguiente
- `b` = página anterior
- `g` = ir al inicio
- `G` = ir al final
- `/texto` = buscar
- `q` = salir

```bash
$ less archivo_largo.txt
```

#### `head` y `tail` - Inicio y final
```bash
# Primeras 10 líneas (por defecto)
$ head archivo.txt

# Primeras 5 líneas
$ head -n 5 archivo.txt
$ head -5 archivo.txt        # forma corta

# Últimas 10 líneas
$ tail archivo.txt

# Últimas 20 líneas
$ tail -n 20 archivo.txt

# Seguir el archivo en tiempo real (para logs)
$ tail -f /var/log/syslog
```

### Copiar, mover y borrar

#### `cp` - Copy
```bash
# Copiar archivo
$ cp origen.txt destino.txt

# Copiar a otra carpeta
$ cp archivo.txt carpeta/

# Copiar carpeta completa (-r = recursive)
$ cp -r carpeta/ carpeta_backup/

# Copiar preservando atributos
$ cp -a origen destino
```

#### `mv` - Move (también renombra)
```bash
# Mover archivo
$ mv archivo.txt carpeta/

# Renombrar
$ mv nombre_viejo.txt nombre_nuevo.txt

# Mover múltiples archivos
$ mv archivo1.txt archivo2.txt carpeta/
```

#### `rm` - Remove
```bash
# Borrar archivo
$ rm archivo.txt

# Pedir confirmación (-i = interactive)
$ rm -i archivo.txt

# Borrar carpeta vacía
$ rmdir carpeta/

# Borrar carpeta con contenido (-r = recursive)
$ rm -r carpeta/

# Forzar sin preguntar (-f = force)
$ rm -rf carpeta/
```

> ⚠️ **CUIDADO:** `rm` no tiene papelera. Lo que borres, desaparece para siempre.
> 
> NUNCA ejecutes `rm -rf /` o `rm -rf *` sin estar 100% seguro de dónde estás.

### Wildcards (comodines)

| Wildcard | Significado | Ejemplo |
|----------|-------------|---------|
| `*` | Cualquier cantidad de caracteres | `*.txt` = todos los .txt |
| `?` | Un solo caracter | `archivo?.txt` = archivo1.txt, archivoA.txt |
| `[abc]` | Uno de los caracteres listados | `archivo[123].txt` |
| `[a-z]` | Rango de caracteres | `[a-z]*.txt` |
| `[!abc]` | Ninguno de los listados | `archivo[!0-9].txt` |

```bash
# Listar todos los .txt
$ ls *.txt

# Borrar todos los .log
$ rm *.log

# Copiar fotos jpg y png
$ cp *.jpg *.png fotos/

# Archivos que empiezan con "data" y terminan en número
$ ls data*[0-9].csv
```

### Ejercicio de archivos

```bash
# 1. Crear esta estructura:
mkdir -p proyecto/{src,docs,tests}

# 2. Crear algunos archivos
touch proyecto/src/main.py
touch proyecto/src/utils.py
touch proyecto/docs/readme.md
touch proyecto/tests/test_main.py

# 3. Verificar la estructura
ls -R proyecto/

# 4. Copiar los archivos .py a un backup
mkdir proyecto/backup
cp proyecto/src/*.py proyecto/backup/

# 5. Renombrar readme.md a README.md
mv proyecto/docs/readme.md proyecto/docs/README.md

# 6. Borrar la carpeta tests
rm -r proyecto/tests/
```

---

## 5. Permisos

### Entendiendo los permisos

Cada archivo tiene permisos para tres grupos:
- **Owner (u):** El propietario del archivo
- **Group (g):** El grupo asignado
- **Others (o):** Todos los demás

Y tres tipos de permisos:
- **r (read):** Leer el archivo / listar directorio
- **w (write):** Modificar el archivo / crear/borrar en directorio
- **x (execute):** Ejecutar el archivo / entrar al directorio

```
-rwxr-xr--
 │││ │││ │││
 │││ │││ └┴┴── others: r-- (solo lectura)
 │││ └┴┴────── group:  r-x (lectura y ejecución)
 └┴┴────────── owner:  rwx (todo)
```

### Notación numérica

Cada permiso tiene un valor:
- `r` = 4
- `w` = 2
- `x` = 1

Se suman para cada grupo:

| Permisos | Cálculo | Número |
|----------|---------|--------|
| `rwx` | 4+2+1 | 7 |
| `rw-` | 4+2+0 | 6 |
| `r-x` | 4+0+1 | 5 |
| `r--` | 4+0+0 | 4 |
| `---` | 0+0+0 | 0 |

Ejemplos comunes:
- `755` = `rwxr-xr-x` (ejecutable, lectura para todos)
- `644` = `rw-r--r--` (archivo normal)
- `600` = `rw-------` (privado)
- `777` = `rwxrwxrwx` (todo para todos, ¡evitar!)

### `chmod` - Cambiar permisos

```bash
# Forma numérica
$ chmod 755 script.sh
$ chmod 644 archivo.txt

# Forma simbólica
$ chmod u+x script.sh      # agregar ejecución al owner
$ chmod g-w archivo.txt    # quitar escritura al grupo
$ chmod o=r archivo.txt    # others solo lectura
$ chmod a+r archivo.txt    # todos pueden leer (a = all)

# Recursivo
$ chmod -R 755 carpeta/
```

### `chown` - Cambiar propietario

```bash
# Cambiar owner
$ sudo chown usuario archivo.txt

# Cambiar owner y grupo
$ sudo chown usuario:grupo archivo.txt

# Recursivo
$ sudo chown -R usuario:grupo carpeta/
```

### Ejercicio de permisos

```bash
# 1. Crear un script
echo '#!/bin/bash' > saludo.sh
echo 'echo "Hola!"' >> saludo.sh

# 2. Intentá ejecutarlo
./saludo.sh    # Error: permiso denegado

# 3. Mirá los permisos
ls -l saludo.sh

# 4. Agregá permiso de ejecución
chmod +x saludo.sh

# 5. Ahora sí funciona
./saludo.sh
```

---

## 6. Entrada y Salida Estándar

### Los 3 flujos estándar: stdin, stdout, stderr

Todo proceso en Unix tiene **3 canales de comunicación** abiertos por defecto:

```
                    ┌─────────────┐
   Teclado ───────▶ │             │ ───────▶ Pantalla
     (stdin)        │   PROCESO   │   (stdout)
                    │             │ ───────▶ Pantalla
                    └─────────────┘   (stderr)
```

| Flujo | Número | Nombre | Descripción |
|-------|--------|--------|-------------|
| **stdin** | 0 | Standard Input | Entrada del programa (por defecto: teclado) |
| **stdout** | 1 | Standard Output | Salida normal del programa (por defecto: pantalla) |
| **stderr** | 2 | Standard Error | Mensajes de error (por defecto: pantalla) |

#### ¿Por qué separar stdout y stderr?

Imaginá que querés guardar la salida de un comando en un archivo, pero también ver los errores:

```bash
# Sin separación, todo se mezcla
$ find / -name "*.conf" > resultados.txt
# Los errores de "permiso denegado" también van al archivo 😕

# Separando stderr, solo guardás lo que querés
$ find / -name "*.conf" > resultados.txt 2> /dev/null
# Errores descartados, solo resultados en el archivo ✓
```

#### Ejemplos de cada flujo

```bash
# STDIN - Entrada
$ cat                    # espera que escribas (stdin desde teclado)
$ cat < archivo.txt      # stdin desde archivo
$ echo "hola" | cat      # stdin desde pipe

# STDOUT - Salida normal
$ ls                     # lista archivos (va a stdout → pantalla)
$ ls > lista.txt         # redirige stdout a archivo

# STDERR - Errores
$ ls /carpeta_inexistente
ls: cannot access '/carpeta_inexistente': No such file or directory
# ↑ Este mensaje va a stderr, no a stdout

$ ls /carpeta_inexistente 2> errores.txt    # solo stderr al archivo
$ ls /carpeta_inexistente > salida.txt      # error sigue en pantalla
```

#### Verificar qué va a dónde

```bash
# Este comando produce stdout Y stderr
$ ls /home /noexiste

# Solo capturar stdout
$ ls /home /noexiste > solo_stdout.txt
# El error sigue apareciendo en pantalla

# Solo capturar stderr  
$ ls /home /noexiste 2> solo_stderr.txt
# La lista de /home sigue apareciendo en pantalla

# Capturar cada uno por separado
$ ls /home /noexiste > stdout.txt 2> stderr.txt
# Pantalla queda vacía, todo en archivos
```

### Redirección avanzada

```bash
# stdout (1) y stderr (2) a archivos distintos
$ comando > salida.txt 2> errores.txt

# Ambos al mismo archivo (stderr a donde va stdout)
$ comando > todo.txt 2>&1
$ comando &> todo.txt        # forma corta en Bash

# Solo stderr a archivo, stdout normal
$ comando 2> errores.txt

# Descartar errores (/dev/null = agujero negro)
$ comando 2> /dev/null

# Descartar toda salida
$ comando > /dev/null 2>&1
$ comando &> /dev/null       # forma corta

# stderr a stdout (útil para pipes)
$ comando 2>&1 | grep "algo"

# Append en vez de sobrescribir
$ comando >> salida.txt 2>> errores.txt
```

#### Orden importante en redirección

```bash
# CORRECTO: primero stdout, después stderr a stdout
$ comando > archivo.txt 2>&1

# INCORRECTO: stderr apunta a stdout ANTES de redirigirlo
$ comando 2>&1 > archivo.txt
# stderr va a la pantalla, solo stdout al archivo
```

#### /dev/null - El agujero negro

`/dev/null` es un archivo especial que descarta todo lo que le escribas:

```bash
# Ejecutar comando silenciosamente
$ comando > /dev/null 2>&1

# Verificar si comando existe (sin output)
$ which python > /dev/null 2>&1 && echo "Python está instalado"

# Limpiar un archivo (dejarlo vacío)
$ cat /dev/null > archivo.txt
# o más simple:
$ > archivo.txt
```

---

## 7. Pipes y Redirección

Podemos usarlos para conectar comandos y manipular sus salidas.

### Redirección básica

#### Salida a archivo

```bash
# > escribe a archivo (sobrescribe si existe)
$ echo "Hola mundo" > archivo.txt

# >> agrega al final (append)
$ echo "Segunda línea" >> archivo.txt

# Ver resultado
$ cat archivo.txt
Hola mundo
Segunda línea
```

#### Entrada desde archivo

```bash
# < lee desde archivo en vez de teclado
$ wc -l < archivo.txt    # cuenta líneas

# Es diferente a pasar como argumento:
$ wc -l archivo.txt      # muestra "5 archivo.txt"
$ wc -l < archivo.txt    # muestra solo "5"
```

### Pipes |

El pipe (`|`) conecta la **stdout** de un comando con la **stdin** del siguiente:

```
comando1 | comando2 | comando3
    │         │          │
    └─stdout──┴──stdin───┘
```

```bash
# Listar y filtrar
$ ls -la | grep ".txt"

# Contar archivos
$ ls | wc -l

# Ver procesos de un usuario
$ ps aux | grep usuario

# Ordenar y mostrar únicos
$ cat nombres.txt | sort | uniq

# Cadena de pipes
$ cat archivo.txt | grep "error" | sort | uniq -c | sort -rn
```

### Ejemplos prácticos combinando todo

```bash
# Los 10 archivos más grandes
$ ls -lS | head -10

# Buscar texto en archivos
$ grep "función" *.py | less

# Historial filtrado
$ history | grep "git"

# Contar palabras en todos los .txt
$ cat *.txt | wc -w

# Procesos ordenados por uso de memoria
$ ps aux | sort -k4 -rn | head -10

# Buscar y contar errores en logs
$ cat /var/log/syslog | grep -i error | wc -l

# Listar usuarios únicos que se loguearon
$ last | awk '{print $1}' | sort | uniq

# Encontrar los 5 directorios más pesados
$ du -h --max-depth=1 | sort -hr | head -5

# Buscar archivos grandes y mostrar tamaño legible
$ find . -size +100M -exec ls -lh {} \; 2>/dev/null

# Procesar CSV: extraer columna 2, ordenar, contar repetidos
$ cut -d',' -f2 datos.csv | sort | uniq -c | sort -rn
```

### Operadores de control: |, &&, ||, ;

Es importante no confundir el pipe con los operadores de control:

#### `|` (pipe) — Conectar salida con entrada

Conecta la **stdout** de un comando con la **stdin** del siguiente. Ambos comandos corren "en paralelo":

```bash
ls | grep ".txt"
# ls genera la lista → grep la recibe y filtra
# No importa si ls "falla", grep recibe lo que haya

cat archivo.txt | wc -l
# cat envía el contenido → wc cuenta las líneas
```

#### `&&` (AND) — Ejecutar si el anterior tuvo éxito

Ejecuta el segundo comando **solo si el primero retornó exit code 0** (éxito):

```bash
mkdir carpeta && cd carpeta
# Si mkdir falla, cd NO se ejecuta

apt update && apt upgrade
# Solo hace upgrade si update funcionó

./compilar.sh && ./ejecutar.sh
# Solo ejecuta si compiló bien
```

#### `||` (OR) — Ejecutar si el anterior falló

Ejecuta el segundo comando **solo si el primero falló** (exit code ≠ 0):

```bash
ping -c1 google.com || echo "Sin conexión a internet"

cd /carpeta || mkdir /carpeta
# Si no puede entrar, la crea

grep "error" log.txt || echo "No hay errores"
```

#### `;` (secuencia) — Ejecutar siempre

Ejecuta comandos en secuencia **sin importar el resultado** del anterior:

```bash
echo "Inicio"; comando_que_falla; echo "Fin"
# Los 3 se ejecutan, aunque el del medio falle

cd /tmp; pwd; ls
# Ejecuta los 3 comandos uno tras otro
```

#### Combinaciones útiles

```bash
# Crear carpeta y entrar, o salir si falla
mkdir proyecto && cd proyecto || exit 1

# Intentar con un comando, si falla usar otro
which python3 && python3 script.py || python script.py

# Ejecutar y notificar resultado
./backup.sh && echo "✓ Backup OK" || echo "✗ Backup FALLÓ"

# Valor por defecto si comando falla
nombre=$(whoami) || nombre="desconocido"
```

#### Tabla resumen

| Operador | Nombre | Función | Ejemplo |
|----------|--------|---------|---------|
| `\|` | Pipe | Conecta stdout → stdin | `ls \| grep txt` |
| `&&` | AND | Ejecuta si anterior OK | `make && make install` |
| `\|\|` | OR | Ejecuta si anterior FALLA | `test -f f \|\| touch f` |
| `;` | Secuencia | Ejecuta siempre | `cmd1; cmd2; cmd3` |

---

### Combinando pipes con redirección

```bash
# Guardar resultado de un pipe
$ cat archivo.txt | grep "error" | sort > errores_ordenados.txt

# Pipe pero guardando también stderr
$ find / -name "*.conf" 2>&1 | grep -v "Permission denied" > configs.txt

# Tee: ver en pantalla Y guardar en archivo
$ ls -la | tee listado.txt
$ ls -la | tee -a listado.txt    # append

# Procesar y guardar stdout y stderr por separado
$ ./script.sh > salida.txt 2> errores.txt

# Enviar stderr al pipe (para filtrar errores)
$ comando 2>&1 | grep "warning"
```

### Para pasar múltiples líneas como stdin

```bash
# Crear archivo con contenido
cat << EOF > config.txt
usuario=admin
password=secreto
puerto=8080
EOF

# Ejecutar múltiples comandos SQL
mysql -u root << EOF
USE mibase;
SELECT * FROM usuarios;
EOF

# En scripts, útil para menús
cat << MENU
===================
1. Opción uno
2. Opción dos
3. Salir
===================
MENU
```

### Para pasar un string como stdin (<<<)

```bash
# En vez de: echo "texto" | comando
$ grep "hola" <<< "hola mundo"

# Útil con read
$ read var <<< "valor"
$ echo $var    # valor

# Procesar una variable como archivo
$ texto="línea1
línea2
línea3"
$ wc -l <<< "$texto"    # 3
```

---

## 8. Variables

### Variables de entorno

```bash
# Ver todas las variables
$ env
$ printenv

# Ver una variable específica
$ echo $HOME
$ echo $USER
$ echo $PATH

# Variables comunes
$HOME      # tu directorio home
$USER      # tu nombre de usuario
$PWD       # directorio actual
$PATH      # dónde buscar ejecutables
$SHELL     # tu shell actual
```

### Crear variables

```bash
# Crear variable (sin espacios alrededor del =)
$ nombre="Juan"
$ edad=25

# Usar variable (con $)
$ echo $nombre
Juan

$ echo "Hola $nombre, tenés $edad años"
Hola Juan, tenés 25 años

# Comillas simples NO expanden variables
$ echo 'Hola $nombre'
Hola $nombre
```

### Sustitución de comandos

```bash
# Con $() - forma moderna y recomendada
$ fecha=$(date)
$ echo "Hoy es $fecha"

$ archivos=$(ls | wc -l)
$ echo "Hay $archivos archivos"

# Con backticks `` - forma vieja
$ fecha=`date`
```

### Variables en scripts

```bash
#!/bin/bash

# Variables normales
nombre="Script de ejemplo"
version="1.0"

# Variables de solo lectura
readonly PI=3.14159

# Exportar para subprocesos
export MI_VARIABLE="valor"

# Parámetros del script
echo "Nombre del script: $0"
echo "Primer argumento: $1"
echo "Segundo argumento: $2"
echo "Todos los argumentos: $@"
echo "Cantidad de argumentos: $#"
```

---

## 9. Scripting Básico

### Primer script

```bash
#!/bin/bash
# Mi primer script
# Este comentario explica qué hace

echo "¡Hola mundo!"
echo "Usuario: $USER"
echo "Fecha: $(date)"
echo "Estás en: $(pwd)"
```

Guardalo como `hola.sh` y ejecutalo:

```bash
$ chmod +x hola.sh
$ ./hola.sh
```

### El shebang

La primera línea `#!/bin/bash` se llama shebang y le dice al sistema qué intérprete usar.

```bash
#!/bin/bash      # Bash
#!/bin/sh        # Shell POSIX
#!/usr/bin/env python3   # Python (más portable)
```

---

### Los Espacios Importan

Bash es **MUY sensible a los espacios**. Esto rompe más scripts que casi cualquier otra cosa.

#### En asignación de variables: SIN espacios

```bash
# CORRECTO
nombre="Juan"
edad=25

# INCORRECTO - Bash interpreta "nombre" como comando
nombre = "Juan"     # Error: comando "nombre" no encontrado
nombre= "Juan"      # Error
nombre ="Juan"      # Error
```

#### En condiciones [ ]: CON espacios

```bash
# CORRECTO - espacios después de [ y antes de ]
if [ "$nombre" = "Juan" ]; then

# INCORRECTO - falta espacio
if ["$nombre" = "Juan"]; then    # Error: [Juan: comando no encontrado
if [ "$nombre" = "Juan"]; then   # Error: missing ]
```

#### Tabla resumen de espacios

| Contexto | Regla | Ejemplo correcto |
|----------|-------|------------------|
| Asignación `=` | SIN espacios | `var="valor"` |
| Test `[ ]` | CON espacios | `[ "$var" = "x" ]` |
| Test `[[ ]]` | CON espacios | `[[ $var == "x" ]]` |
| Aritmética `(( ))` | Espacios opcionales | `(( x = 5 + 3 ))` |

#### ¿Por qué?

Bash separa comandos por espacios. Cuando escribís:
```bash
nombre = "Juan"
```

Bash ve:
- `nombre` → comando a ejecutar
- `=` → primer argumento
- `"Juan"` → segundo argumento

Por eso falla: intenta ejecutar un programa llamado "nombre".

---

### Comparaciones: `-eq` vs `=`

Esta es una confusión **muy común**. La regla es simple:

| Tipo | Operador | Usa para |
|------|----------|----------|
| **Strings** | `=`, `!=` | Comparar texto |
| **Números** | `-eq`, `-ne`, `-lt`, `-gt`, `-le`, `-ge` | Comparar valores numéricos |

#### ¿Por qué dos sistemas?

Porque `<` y `>` significan redirección en bash. Si escribís:

```bash
if [ 5 > 3 ]; then    # ¡INCORRECTO! Crea un archivo llamado "3"
```

Por eso se usan `-gt` (greater than), `-lt` (less than), etc.

#### Ejemplos correctos

```bash
# STRINGS - usar = y !=
nombre="Juan"
if [ "$nombre" = "Juan" ]; then
    echo "Hola Juan!"
fi

if [ "$nombre" != "Pedro" ]; then
    echo "No sos Pedro"
fi

# NÚMEROS - usar -eq, -ne, -lt, -gt, -le, -ge
edad=25
if [ $edad -eq 25 ]; then
    echo "Tenés 25"
fi

if [ $edad -gt 18 ]; then
    echo "Sos mayor de edad"
fi

if [ $edad -le 30 ]; then
    echo "Tenés 30 o menos"
fi
```

#### `=` funciona con números... a veces

```bash
# Esto "funciona" pero es peligroso
if [ "10" = "10" ]; then    # true ✓
    echo "Iguales"
fi

# Pero esto falla
if [ "10" = "010" ]; then   # false ✗ (son strings distintos)
    echo "Iguales"
fi

# Con -eq funciona bien
if [ 10 -eq 010 ]; then     # true ✓ (compara valores numéricos)
    echo "Iguales"
fi
```

Si son números, usamos `-eq`. Si es texto, usamos `=`.

#### Tabla de operadores

| Números | Significado | Strings | Significado |
|---------|-------------|---------|-------------|
| `-eq` | equal (igual) | `=` | igual |
| `-ne` | not equal (distinto) | `!=` | distinto |
| `-lt` | less than (menor) | `<` | menor (en `[[ ]]`) |
| `-le` | less or equal (menor o igual) | | |
| `-gt` | greater than (mayor) | `>` | mayor (en `[[ ]]`) |
| `-ge` | greater or equal (mayor o igual) | | |
| | | `-z` | string vacío |
| | | `-n` | string no vacío |

---

### Condicionales

```bash
#!/bin/bash

# if básico
if [ -f "archivo.txt" ]; then
    echo "El archivo existe"
fi

# if-else
if [ "$USER" = "root" ]; then
    echo "Sos root"
else
    echo "No sos root"
fi

# if-elif-else
edad=25
if [ $edad -lt 18 ]; then
    echo "Menor de edad"
elif [ $edad -lt 65 ]; then
    echo "Adulto"
else
    echo "Jubilado"
fi
```

#### Operadores para archivos

```bash
if [ -f "archivo" ]; then   # existe y es archivo
if [ -d "carpeta" ]; then   # existe y es directorio
if [ -e "algo" ]; then      # existe (archivo o directorio)
if [ -r "archivo" ]; then   # tiene permiso de lectura
if [ -w "archivo" ]; then   # tiene permiso de escritura
if [ -x "archivo" ]; then   # tiene permiso de ejecución
if [ -s "archivo" ]; then   # existe y NO está vacío
```

---

### Aritmética en Bash

Bash tiene varias formas de hacer cálculos. Vamos de la más simple a la más completa.

#### Forma 1: `$(( ))` - Expansión aritmética

La más común y legible:

```bash
# Operaciones básicas
resultado=$((5 + 3))
echo $resultado    # 8

# Con variables
a=10
b=3
suma=$((a + b))         # 13
resta=$((a - b))        # 7
multiplicacion=$((a * b))  # 30
division=$((a / b))     # 3 (división entera!)
resto=$((a % b))        # 1 (módulo)

# Incrementar/decrementar
contador=0
((contador++))    # ahora es 1
((contador--))    # ahora es 0
((contador += 5)) # ahora es 5
```

#### Forma 2: `let` - Evaluación aritmética

```bash
let "resultado = 5 + 3"
let "a = a + 1"
let "a++"    # incrementar
```

#### Forma 3: `expr` - Comando externo (viejo)

```bash
resultado=$(expr 5 + 3)    # notar los espacios obligatorios
resultado=$(expr 5 \* 3)   # * necesita escape
```

#### Bash solo maneja enteros

```bash
resultado=$((10 / 3))
echo $resultado    # 3, no 3.33...

# Para decimales, usar bc o awk
resultado=$(echo "scale=2; 10/3" | bc)
echo $resultado    # 3.33
```

---

### Arrays (Arreglos)

Los arrays te permiten guardar múltiples valores en una variable.

#### Crear arrays

```bash
# Forma 1: Entre paréntesis
frutas=("manzana" "banana" "naranja")

# Forma 2: Asignar índices
colores[0]="rojo"
colores[1]="verde"
colores[2]="azul"

# Forma 3: Desde un comando
archivos=($(ls *.txt))
```

#### Acceder a elementos

```bash
frutas=("manzana" "banana" "naranja" "pera")

# Un elemento (índice empieza en 0)
echo ${frutas[0]}    # manzana
echo ${frutas[1]}    # banana
echo ${frutas[2]}    # naranja

# Todos los elementos
echo ${frutas[@]}    # manzana banana naranja pera
echo ${frutas[*]}    # manzana banana naranja pera

# Longitud del array
echo ${#frutas[@]}   # 4

# Longitud de un elemento
echo ${#frutas[0]}   # 7 (longitud de "manzana")

# Índices del array
echo ${!frutas[@]}   # 0 1 2 3
```

#### Modificar arrays

```bash
frutas=("manzana" "banana")

# Agregar al final
frutas+=("naranja")
echo ${frutas[@]}    # manzana banana naranja

# Modificar elemento
frutas[1]="kiwi"
echo ${frutas[@]}    # manzana kiwi naranja

# Eliminar elemento
unset frutas[1]
echo ${frutas[@]}    # manzana naranja
# Ojo: los índices no se reordenan

# Eliminar todo el array
unset frutas
```

#### Iterar sobre arrays

```bash
frutas=("manzana" "banana" "naranja")

# Por valor
for fruta in "${frutas[@]}"; do
    echo "Fruta: $fruta"
done

# Por índice
for i in "${!frutas[@]}"; do
    echo "Índice $i: ${frutas[$i]}"
done

# Salida:
# Índice 0: manzana
# Índice 1: banana
# Índice 2: naranja
```

#### Slicing (extraer porciones)

```bash
letras=("a" "b" "c" "d" "e" "f")

# Desde índice 2, tomar 3 elementos
echo ${letras[@]:2:3}    # c d e

# Desde índice 1 hasta el final
echo ${letras[@]:1}      # b c d e f

# Primeros 3 elementos
echo ${letras[@]:0:3}    # a b c
```

#### Diferencia entre `[@]` y `[*]`

Parecen iguales, pero se comportan distinto con comillas:

```bash
frutas=("manzana verde" "banana" "naranja")

# Con [@] - cada elemento es un argumento separado
for f in "${frutas[@]}"; do
    echo "-> $f"
done
# -> manzana verde
# -> banana  
# -> naranja

# Con [*] - todo se convierte en UN solo string
for f in "${frutas[*]}"; do
    echo "-> $f"
done
# -> manzana verde banana naranja
```

Usar siempre `"${array[@]}"` para iterar.

#### Arrays asociativos (diccionarios)

Desde Bash 4.0 se pueden usar arrays con claves string (como diccionarios en Python):

```bash
# Declarar con -A (asociativo)
declare -A persona

# Asignar valores
persona[nombre]="Juan"
persona[edad]=25
persona[ciudad]="Buenos Aires"

# Acceder
echo ${persona[nombre]}    # Juan
echo ${persona[edad]}      # 25

# Todas las claves
echo ${!persona[@]}        # nombre edad ciudad

# Todos los valores
echo ${persona[@]}         # Juan 25 Buenos Aires

# Cantidad de elementos
echo ${#persona[@]}        # 3

# Iterar
for clave in "${!persona[@]}"; do
    echo "$clave: ${persona[$clave]}"
done
```

También podés declararlo en una línea:

```bash
declare -A colores=(
    [rojo]="#FF0000"
    [verde]="#00FF00"
    [azul]="#0000FF"
)

echo ${colores[rojo]}    # #FF0000
```

#### Verificar si existe un elemento

```bash
frutas=("manzana" "banana" "naranja")

# En array indexado (verificar por valor)
if [[ " ${frutas[@]} " =~ " banana " ]]; then
    echo "Hay banana"
fi

# En array asociativo (verificar por clave)
declare -A datos=([a]=1 [b]=2)
if [[ -v datos[a] ]]; then
    echo "Existe la clave 'a'"
fi
```

#### Ejemplo: Lista de tareas

```bash
#!/bin/bash

tareas=()

while true; do
    echo ""
    echo "=== Lista de Tareas ==="
    echo "1. Ver tareas"
    echo "2. Agregar tarea"
    echo "3. Eliminar tarea"
    echo "4. Salir"
    read -p "Opción: " opcion

    case $opcion in
        1)
            if [ ${#tareas[@]} -eq 0 ]; then
                echo "No hay tareas"
            else
                echo ""
                for i in "${!tareas[@]}"; do
                    echo "$((i + 1)). ${tareas[$i]}"
                done
            fi
            ;;
        2)
            read -p "Nueva tarea: " nueva
            tareas+=("$nueva")
            echo "Tarea agregada"
            ;;
        3)
            read -p "Número de tarea a eliminar: " num
            indice=$((num - 1))
            if [ $indice -ge 0 ] && [ $indice -lt ${#tareas[@]} ]; then
                unset "tareas[$indice]"
                # Reindexar
                tareas=("${tareas[@]}")
                echo "Tarea eliminada"
            else
                echo "Número inválido"
            fi
            ;;
        4)
            echo "¡Chau!"
            exit 0
            ;;
        *)
            echo "Opción no válida"
            ;;
    esac
done
```

---

### Paréntesis, Llaves y Corchetes

#### `( )` Paréntesis simples

**1. Subshell** - Ejecuta comandos en un proceso hijo:

```bash
# Los cambios no afectan al shell actual
(cd /tmp && pwd)    # imprime /tmp
pwd                 # seguís donde estabas

# Variables tampoco se propagan
(x=5)
echo $x    # vacío
```

**2. Arrays** - Definir arreglos:

```bash
frutas=("manzana" "banana" "naranja")
```

**3. `$(...)` Sustitución de comando** - Capturar salida:

```bash
fecha=$(date)
archivos=$(ls *.txt)
```

#### `(( ))` Doble paréntesis

**Aritmética** - Para cálculos matemáticos:

```bash
# Evaluación aritmética
((resultado = 5 + 3))
((contador++))
((x += 10))

# En condiciones (retorna 0=true, 1=false)
if ((edad >= 18)); then
    echo "Mayor de edad"
fi

# Comparaciones sin [ ]
((5 > 3)) && echo "5 es mayor"

# Dentro de $(( )) para obtener el valor
echo "Resultado: $((5 * 3))"
```

#### `[ ]` Corchetes simples (test)

**Condiciones POSIX** - Compatible con sh:

```bash
# Strings
if [ "$nombre" = "Juan" ]; then
if [ -z "$var" ]; then    # vacío

# Números
if [ $edad -gt 18 ]; then

# Archivos
if [ -f "archivo.txt" ]; then

# Combinaciones con -a (and) y -o (or)
if [ $x -gt 0 -a $x -lt 10 ]; then
```

- Espacios obligatorios después de `[` y antes de `]`
- Variables entre comillas: `"$var"` 
- Usar `-eq`, `-gt`, etc. para números

#### `[[ ]]` Doble corchetes (test extendido)

**Condiciones Bash** - Más potente y seguro:

```bash
# No necesita comillas en variables
if [[ $nombre = "Juan" ]]; then

# Pattern matching
if [[ $archivo == *.txt ]]; then
    echo "Es un archivo de texto"
fi

# Regex
if [[ $email =~ ^[a-z]+@[a-z]+\.[a-z]+$ ]]; then
    echo "Email válido"
fi

# Operadores lógicos && y ||
if [[ $x -gt 0 && $x -lt 10 ]]; then
    echo "Entre 0 y 10"
fi

# Comparación de strings con < y >
if [[ "abc" < "def" ]]; then
    echo "abc viene antes que def"
fi
```

#### `{ }` Llaves

**1. Agrupación de comandos** (en el shell actual):

```bash
# A diferencia de (), se ejecuta en el mismo shell
{ echo "uno"; echo "dos"; } > archivo.txt

# Necesita espacio después de { y ; antes de }
```

**2. Expansión de variables**:

```bash
nombre="mundo"
echo "Hola ${nombre}!"     # Hola mundo!
echo "Hola $nombreX"       # Vacío (busca $nombreX)
echo "Hola ${nombre}X"     # Hola mundoX

# Valor por defecto
echo ${var:-"valor default"}

# Substring
texto="abcdefgh"
echo ${texto:0:3}    # abc (desde 0, 3 caracteres)

# Reemplazo
archivo="foto.jpg"
echo ${archivo/.jpg/.png}    # foto.png
```

**3. Expansión de secuencias**:

```bash
echo {1..5}           # 1 2 3 4 5
echo {a..e}           # a b c d e
echo {1..10..2}       # 1 3 5 7 9 (de 2 en 2)
mkdir carpeta{1,2,3}  # crea carpeta1, carpeta2, carpeta3
```

#### Tabla resumen

| Sintaxis | Nombre | Uso principal | Ejemplo |
|----------|--------|---------------|---------|
| `( )` | Paréntesis | Subshell, arrays | `(cd /tmp)`, `arr=()` |
| `$(...)` | Sustitución | Capturar salida | `$(date)` |
| `(( ))` | Aritmética | Cálculos | `((x++))` |
| `$((...))` | Expansión arit. | Valor de cálculo | `$((5+3))` |
| `[ ]` | Test | Condiciones POSIX | `[ -f f.txt ]` |
| `[[ ]]` | Test extendido | Condiciones Bash | `[[ $x == *.txt ]]` |
| `{ }` | Llaves | Agrupación, expansión | `${var}`, `{1..5}` |
| `${ }` | Expansión var | Variables avanzadas | `${var:-default}` |

---

### Loops

```bash
#!/bin/bash

# for con lista
for fruta in manzana banana naranja; do
    echo "Fruta: $fruta"
done

# for con rango
for i in {1..5}; do
    echo "Número: $i"
done

# for estilo C
for ((i=0; i<5; i++)); do
    echo "Índice: $i"
done

# for con archivos
for archivo in *.txt; do
    echo "Procesando $archivo"
done

# while
contador=1
while [ $contador -le 5 ]; do
    echo "Contador: $contador"
    ((contador++))
done

# until (opuesto a while)
contador=1
until [ $contador -gt 5 ]; do
    echo "Contador: $contador"
    ((contador++))
done

# Leer archivo línea por línea
while read linea; do
    echo "Línea: $linea"
done < archivo.txt
```

---

### Funciones

```bash
#!/bin/bash

# Definir función (dos formas)
saludar() {
    echo "Hola $1!"
}

function despedir {
    echo "Chau $1!"
}

# Función con múltiples parámetros
sumar() {
    local resultado=$(($1 + $2))    # variable local
    echo $resultado
}

# Función con return (solo 0-255)
es_par() {
    if (($1 % 2 == 0)); then
        return 0    # true en bash
    else
        return 1    # false
    fi
}

# Usar funciones
saludar "Juan"
despedir "María"

suma=$(sumar 5 3)
echo "5 + 3 = $suma"

if es_par 4; then
    echo "4 es par"
fi
```

---

### Input del usuario

```bash
#!/bin/bash

# Leer input
echo "¿Cómo te llamás?"
read nombre
echo "Hola $nombre!"

# Con prompt en la misma línea
read -p "Ingresá tu edad: " edad

# Password (sin mostrar)
read -sp "Contraseña: " password
echo    # salto de línea

# Leer en array
read -p "Ingresá números separados por espacio: " -a numeros
echo "Ingresaste ${#numeros[@]} números"

# Con timeout
read -t 5 -p "Tenés 5 segundos: " respuesta
```

---

## 10. Ejercicios Prácticos

### Ejercicio 1: Navegación básica
```bash
# 1. Averiguar cuál es tu directorio home
# 2. Listar todos los archivos (incluyendo ocultos) en tu home
# 3. Andar al directorio /var/log
# 4. Contar cuántos archivos hay
# 5. Volver a tu home con un solo comando
# 6. ¿En qué directorio estamos ahora?
```

### Ejercicio 2: Manipulación de archivos
```bash
# 1. Crear esta estructura de carpetas:
#    proyecto/
#    ├── src/
#    ├── docs/
#    └── data/

# 2. Crear 3 archivos .py vacíos en src/
# 3. Crear un archivo README.md en docs/ con algún contenido
# 4. Copiar el README.md a la raíz del proyecto
# 5. Renombrar uno de los archivos .py
# 6. Borrar la carpeta data/
```

### Ejercicio 3: Permisos
```bash
# Objetivo: Entender y modificar permisos

# 1. Crear un archivo llamado secreto.txt con algún contenido
# 2. Quitar todos los permisos a group y others
# 3. Verificar los permisos
# 4. Crear un script que imprima la fecha
# 5. Intentar ejecutarlo (debería fallar, por qué?)
# 6. Darle permisos de ejecución y volver a intentar
```

### Ejercicio 4: Variables y scripts básicos
```bash
# Crear un script que:
# 1. Pedir el nombre del usuario
# 2. Pedir su edad
# 3. Calcular en qué año nació (aproximado)
# 4. Mostrar un mensaje personalizado con toda la info
--
Solución
#!/bin/bash

echo "ingrese un nombre:"
read nombre 
echo "ingrese su edad:"
read edad

anio=$((2026 - $edad))

echo "vos te llamas $nombre y naciste en el $anio"

```

### Ejercicio 5: Script de organización
```bash
# Crear un script que:
# 1. Reciba un directorio como argumento
# 2. Crear subcarpetas: imagenes/, documentos/, otros/
# 3. Mover los archivos .jpg y .png a imagenes/
# 4. Mover los archivos .pdf y .txt a documentos/
# 5. Mover el resto a otros/
# 6. Mostrar un resumen de cuántos archivos movió a cada carpeta
```

---
