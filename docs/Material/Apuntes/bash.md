---
sidebar_position: 2
---

# Bash

#### Gracias Sofi!!!!!!

**Bash (Bourne Again Shell)** es un intérprete de comandos y un lenguaje de scripting muy popular en sistemas operativos basados en Unix, como Linux y macOS. Su nombre, "Bourne Again Shell", es un guiño al Bourne Shell (`sh`), el shell original creado por Stephen Bourne en los años 70, al que Bash mejora con varias características nuevas y útiles.

# Características claves de Bash

## Intérprete de comandos

Un intérprete de comandos es un programa que lee y ejecuta comandos ingresados por el usuario. En el contexto de Bash, este intérprete actúa como un puente entre el usuario y el sistema operativo, permitiéndote ejecutar tareas y controlar el sistema mediante comandos escritos en texto.

#### Funcionamiento básico

- **Entrada de Comandos**: Cuando abrís una terminal en tu sistema, se inicia una sesión de Bash. Ahí podés escribir comandos que el intérprete lee línea por línea. Por ejemplo, podés escribir `ls` para listar los archivos en un directorio o `cd` para cambiar de directorio.

- **Procesamiento de Comandos**: Bash recibe el comando, lo interpreta y lo convierte en acciones que el sistema operativo puede ejecutar. Por ejemplo, cuando escribís `mkdir nueva_carpeta`, Bash interpreta esto como una solicitud para crear un nuevo directorio llamado "nueva_carpeta".

- **Ejecución**: Después de interpretar el comando, Bash lo pasa al sistema operativo para que lo ejecute. El sistema operativo realiza la acción solicitada y luego Bash muestra el resultado o el output en la terminal.

- **Retorno de Resultados**: Tras ejecutar el comando, Bash muestra el resultado de la operación en la terminal. Si el comando fue exitoso, verás los resultados esperados; si hubo un error, se mostrará un mensaje de error.

#### Entrada y salida en Bash

En Bash, la comunicación entre los procesos se maneja a través de tres flujos estándar: `stdin` (entrada estándar), `stdout` (salida estándar) y `stderr` (error estándar). Estos flujos permiten la interacción entre el usuario, los comandos y el sistema operativo.

- **stdin (Entrada Estándar)**: Es el flujo a través del cual los comandos reciben datos. Por defecto, `stdin` proviene del teclado, pero podés redirigir la entrada desde un archivo o desde otro comando (se da explicación de estas redirecciones más adelante en este documento).

- **stdout (Salida Estándar)**: Es el flujo a través del cual los comandos envían datos que deberían mostrarse al usuario. Por defecto, `stdout` se muestra en la terminal, pero podés redirigir la salida a un archivo.

- **stderr (Error Estándar)**: Es el flujo a través del cual los comandos envían mensajes de error. Por defecto, `stderr` también se muestra en la terminal, pero podés redirigir los mensajes de error a un archivo separado.

### Características avanzadas del intérprete de comandos

#### Expansiones de terminal

En Bash, las expansiones son una característica muy útil que permite cambiar algo que escribís por otra cosa antes de ejecutar el comando. Aunque la expansión cambia el comando, este reemplazo no se muestra explícitamente en la terminal.

#### Expansión de variables con `$`

Usar `$` seguido del nombre de una variable o alias la expande y reemplaza con su valor. Esto también te permite ejecutar comandos dentro de otros comandos. Por ejemplo:

```bash
echo "El contenido del archivo es $(cat archivo.txt)"
```

En este caso, `$(cat archivo.txt)` se expande para mostrar el contenido del archivo en lugar del comando en sí. También podés usar comillas invertidas `` ` `` en lugar de `$(...)` para ejecutar comandos dentro de otros comandos.

#### Expansión con `!`

El signo `!` reemplaza el texto por el último comando ejecutado que comience con lo que sigue al signo de exclamación. Esto es útil para reutilizar comandos anteriores sin tener que reescribirlos. Por ejemplo:

```bash
!ls
```

Esto ejecutará el último comando que comience con `ls`. Podés leer más sobre esto en este artículo: [https://blog.wemake.pe/posts/usando-el-signo-de-exclamacion-para-simplificar-los-comandos/](https://blog.wemake.pe/posts/usando-el-signo-de-exclamacion-para-simplificar-los-comandos/).

- `!!`: Expande y ejecuta el último comando completo que fue ejecutado. Es muy útil cuando olvidás anteponer `sudo` a un comando que requiere permisos de root:
  
  ```bash
  sudo !!
  ```

Esto repetirá el último comando ejecutado, pero con `sudo` al principio.

- `$?`: Esta expansión reemplaza con el código de salida del último programa ejecutado. Es útil para verificar si un comando se ejecutó correctamente (0 significa éxito).

- `$@`: Esta variable especial expande cada argumento pasado al script como una cadena separada. `$@` se utiliza comúnmente para iterar sobre todos los argumentos, como en un bucle `for`. Cada argumento se considera como una cadena separada, por lo que `$@` proporciona una lista de todos los argumentos pasados al script.

**Protección de expansión con comillas simples y backslashes**: 

- Si no querés que algo se expanda dentro de una cadena, podés usar comillas simples (`' '`). Todo lo que esté entre comillas simples no se expande.

  ```bash
  echo 'El valor de $nombre no se expandirá'
  ```

Además, podés usar un backslash (`\`) antes de una expansión para evitar que ocurra. Esto es útil si querés mostrar un carácter especial literalmente:

```bash
echo \$nombre
```

- **Operaciones aritméticas**: Bash permite realizar operaciones aritméticas dentro de dobles paréntesis `(( ))`.

### Redirección y pipelines

En Bash, las redirecciones y los pipelines son herramientas esenciales que te permiten controlar y manipular el flujo de datos entre comandos y archivos. Estos mecanismos son fundamentales para crear scripts eficientes, ya que te permiten encadenar comandos y redirigir su entrada y salida de manera flexible.

#### Redirección de salida (> y >>)

- `>`: Si utilizás `>` después de un comando seguido del nombre de un archivo, lo que hace es enviar todo lo que el comando imprimiría en la terminal (su salida estándar) al archivo especificado. Sin embargo, si el archivo ya existe, lo sobreescribe completamente.

    ```bash
    echo "Hola Mundo" > saludo.txt
    ```

    En este ejemplo, se crea un archivo llamado saludo.txt (si no existe) y se guarda el texto "Hola Mundo" en él. Si saludo.txt ya existía, su contenido anterior se perderá, ya que será sobrescrito por "Hola Mundo".

- `>>`: Si utilizás >>, realiza una función similar, pero en lugar de sobrescribir el archivo, agrega el contenido al final del archivo existente. Esto es útil cuando querés acumular información en un archivo.

    ```bash
    echo "Hola otra vez" >> saludo.txt
    ```
  Acá, el texto "Hola otra vez" se agrega al final del archivo `saludo.txt`, preservando cualquier contenido previo.

  **Nota:** Ambos operadores (`>` y `>>`) crearán el archivo si no existe.

### Uso de `cat` para copiar y concatenar archivos

#### Copiar archivos

Podés usar `cat` (que concatena y muestra archivos) junto con `>` para copiar el contenido de un archivo en otro. Por ejemplo:

```bash
cat archivo_original.txt > copia_archivo.txt
```

Este comando copiará el contenido de archivo_original.txt en copia_archivo.txt. Si copia_archivo.txt ya existe, será sobrescrito.

#### Concatenar archivos

Podés combinar varios archivos en uno solo utilizando `cat` y `>`:

```bash
cat archivo_1.txt archivo_2.txt > archivo_combinado.txt
```

Esto creará un nuevo archivo llamado archivo_combinado.txt que contendrá el contenido de ambos archivos, archivo_1.txt y archivo_2.txt.

#### Escritura interactiva con `cat`

Si ejecutás `cat` seguido de `>` y el nombre de un archivo sin especificar un archivo fuente, podés escribir libremente lo que querés guardar en ese archivo. Lo que escribas en la terminal se enviará al archivo hasta que presiones `Ctrl+D` para indicar el fin de la entrada:

```bash
cat > notas.txt
```

- Al ejecutar este comando, lo que escribas a continuación se guardará en `notas.txt`.

#### Redirección de entrada (`<`)

`<`: Este operador hace lo opuesto al `>`. En lugar de redirigir la salida de un comando a un archivo, toma el contenido de un archivo y lo usa como entrada para un comando.

```bash
wc -w < archivo.txt
```

En este ejemplo, wc -w cuenta las palabras en el archivo archivo.txt, utilizando el contenido del archivo como entrada para el comando wc.

### Pipelines (`|`)

`|`: Los pipelines permiten conectar la salida de un comando directamente a la entrada de otro comando. Esto es extremadamente útil cuando querés procesar datos en varias etapas, utilizando múltiples comandos.

```bash
comando1 | comando2 | comando3

echo "Hola Mundo" | less

```

Aquí, el texto `"Hola Mundo"` se envía como entrada al comando `less`, que permite visualizar el contenido de manera paginada.

Otro ejemplo común es usar `grep` para filtrar la salida de un comando:

```bash
ls -l | grep ".txt"
```
En ese caso, la salida del comando `ls -l` (que lista archivos en detalle) se pasa al comando `grep`, que filtra y muestra solo las líneas que contienen `.txt`, es decir, archivos con esa extensión.

```bash
cat archivo.txt | wc -l
```
En este caso, el comando `cat archivo.txt` se utiliza para visualizar el contenido del archivo denominado `archivo.txt`. La salida de este comando se redirige al comando `wc -l`, que cuenta el número total de líneas en el archivo.

```bash
cat archivo.txt | grep "hola"
```
Aquí, el comando `cat archivo.txt` se emplea para mostrar el contenido de `archivo.txt`. Este contenido se pasa al comando `grep "hola"`, que filtra y muestra únicamente las líneas que contienen la palabra "hola".

```bash
cat archivo.txt | sort
```
En este ejemplo, el comando cat `archivo.txt` presenta el contenido del archivo `archivo.txt`. La salida es redirigida al comando sort, el cual organiza alfabéticamente las líneas del archivo y muestra el resultado ordenado.

El comando `grep` es una herramienta de búsqueda en sistemas Unix/Linux que permite localizar líneas que coinciden con un patrón específico dentro de uno o varios archivos. Su nombre proviene de una abreviatura del comando de búsqueda en editores de texto en modo consola: "global regular expression print".

#### Ejemplos de uso:

- **Buscar una palabra específica en un archivo:**

```bash
grep "hola" ejemplo.txt
```
En este caso, el comando grep busca la palabra "hola" en el archivo ejemplo.txt y muestra todas las líneas que contienen dicha palabra.

- **Buscar una palabra específica y luego refinar la búsqueda con otra palabra:**

```bash
grep "hola" archivo1 | grep "busqueda2"
```

Primero, el comando `grep` busca la palabra "hola" en el archivo archivo1. La salida de esta búsqueda se pasa a otro comando `grep` que filtra las líneas que también contienen la palabra "busqueda2". El resultado final muestra solo las líneas que contienen ambas palabras.

- **Buscar una palabra en todos los archivos de un directorio:**

```bash
grep -l "palabra" ./*
```

En este ejemplo, la opción `-l` del comando `grep` indica que se deben listar únicamente los nombres de los archivos que contienen la palabra "palabra". La búsqueda se realiza en todos los archivos del directorio actual, indicado por ./*.

## Lenguaje de Scripting

Además de ser un intérprete de comandos, Bash es un lenguaje de scripting completo. Los scripts de Bash son archivos de texto que contienen una secuencia de comandos Bash. Estos scripts pueden automatizar tareas repetitivas, realizar operaciones complejas y gestionar el sistema de manera más eficiente. Son muy útiles para tareas como la configuración del sistema, la gestión de archivos y la ejecución de tareas programadas.

- **Creación de scripts:** Para crear un script en Bash, escribís varios comandos en un archivo de texto. Los scripts comienzan típicamente con una línea especial llamada "shebang", que indica al sistema qué intérprete usar para ejecutar el script. La línea shebang tiene el formato:

```bash
#!/bin/bash
```

 Esto le dice al sistema que ejecute el script usando Bash.

- **Ejecución de scripts:** Para ejecutar un script de Bash, usás el comando `./` seguido del nombre del script. Por ejemplo:

```bash
./mi_script.sh
```

Asegúrate de que el archivo del script tenga permisos de ejecución. Si no tiene permisos de ejecución, podés agregarlos con el comando `chmod`:

```bash
chmod +x mi_script.sh
```
#### Variables y Redirección

Dentro de un script, podés usar variables de entorno y redirección de entrada/salida para manejar datos de manera más eficiente. Las variables te permiten almacenar valores temporales, y la redirección te ayuda a controlar dónde se envían los datos de entrada y salida.

#### Estructuras de Control

Bash soporta estructuras de control como `if`, `for`, `while`, y `case`, lo que permite construir scripts más complejos y dinámicos. Estas estructuras se desarrollarán con mayor detalle en otra sección.

#### Input del Usuario

Un script puede solicitar input del usuario usando el comando `read`.

```bash
echo "Ingresa tu nombre:"
read nombre
echo "Hola, $nombre"
```
## Variables

En Bash, las variables se utilizan para almacenar y manipular datos. Las variables pueden contener valores como cadenas de texto, números o resultados de comandos. Los valores almacenados en las variables pueden ser utilizados en comandos y scripts para realizar operaciones dinámicas, lo que proporciona gran flexibilidad en la automatización de tareas.

### Definición de Variables

Para definir una variable en Bash, simplemente asignás un valor a un nombre de variable sin espacios entre el nombre, el signo igual, y el valor. Por ejemplo:

```bash
nombre="José"
edad=30
```
En este caso, `nombre` es una variable que almacena la cadena "José", y `edad` es una variable que almacena el número 30.

#### Acceso a Variables

Para acceder al valor almacenado en una variable, usás el signo `$` (expansión de terminal) seguido del nombre de la variable. Por ejemplo:

```bash
echo "Mi nombre es $nombre y tengo $edad años."
```
Esto imprimirá en la terminal: `Mi nombre es José y tengo 30 años.`

### Variables de Entorno

Además de las variables que definís en tus scripts, existen variables de entorno que son proporcionadas por el sistema operativo y están disponibles en todos los scripts y comandos. Algunas variables de entorno comunes son:

- `$HOME`: Contiene el directorio home del usuario actual.
- `$PATH`: Contiene los directorios donde el sistema busca los comandos ejecutables.
- `$USER`: Almacena el nombre del usuario actual.

Podés utilizar y modificar estas variables de entorno en tus scripts:

```bash
echo "El directorio home del usuario $USER es $HOME"
```
### Asignación de Resultados de Comandos a Variables

Una gran característica de Bash es la capacidad de asignar el resultado de un comando a una variable. Esto se hace utilizando comillas invertidas (\`) o \$(...). Por ejemplo:

```bash
fecha_actual=$(date)
```
Aquí, la variable `fecha_actual` contendrá la salida del comando `date`, que es la fecha y hora actuales.

### Variables Temporales

Podés definir variables temporales para usarlas solo dentro de un comando específico. Esto es útil para modificar temporalmente el entorno sin afectar al sistema globalmente:

```bash
NOMBRE="Carlos" echo "Hola, $NOMBRE"
```
En este caso, `NOMBRE` se define como `"Carlos"` solo para la ejecución del comando `echo`.

### Variables Especiales

Bash también tiene algunas variables especiales que son útiles en scripts:

- `$0`: El nombre del script.
- `$1`, `$2`, ... `$9`: Los argumentos pasados al script.
- `$#`: El número de argumentos pasados al script.
- `$?`: El código de salida del último comando ejecutado.
- `$$`: El ID del proceso del script en ejecución.

Por ejemplo, si ejecutás un script con:

```bash
./mi_script.sh arg1 arg2
```

Podes acceder a `arg1` y `arg2` dentro de un script utilizando `$1` y `$2` respectivamente.

### Declaración de Variables de sólo Lectura

Si querés que una variable no pueda ser modificada después de su asignación, podés declararla como de sólo lectura usando el comando `readonly`:

```bash
readonly PI=3.14159
```

Cualquier intento de modificar `PI` después de su declaración resultará en un error.

### Eliminar Variables

Podés eliminar una variable del entorno utilizando el comando `unset`:

```bash
unset nombre
```
Después de esto la variable `nombre` ya no estará definida.

## Estructuras Condicionales e Iterativas

Bash proporciona varias estructuras de control que permiten gestionar el flujo de ejecución de comandos y scripts, adaptándose a diferentes situaciones y necesidades. Estas estructuras incluyen tanto condicionales como bucles, facilitando la toma de decisiones y la repetición de tareas en los scripts. A continuación, se describen las principales, junto con su sintaxis:

### `if`

Esta estructura permite ejecutar un bloque de comandos si se cumple una determinada condición. Es fundamental para tomar decisiones en los scripts, permitiendo realizar distintas acciones según el resultado de una evaluación.

```bash
if [ condición ]; then
    comandos
elif [ otra_condición ]; then
    comandos
else
    comandos
fi
```

- `if [ condición ]; then`: Comienza la estructura. La condición se evalúa y, si es verdadera, se ejecutan los comandos dentro del bloque.
- `elif [ otra_condición ]; then`: Es opcional y permite añadir más condiciones.
- `else`: Opcional. Los comandos dentro de este bloque se ejecutan si ninguna de las condiciones anteriores se cumple.
- `fi`: Finaliza la estructura `if`.

#### Comparaciones en `if`

**Números:**
- `eq`: Igual (equal)
- `ne`: No son iguales (not equal)
- `gt`: Mayor que (greater than)
- `lt`: Menor que (less than)
- `ge`: Mayor o igual (greater or equal)
- `le`: Menor o igual (less or equal)

**Cadenas:**
- Comparar si dos cadenas son iguales: `string1 == string2`
- Comparar si dos cadenas son diferentes: `string1 != string2`
- Verificar si una cadena coincide con una expresión regular: `string1 =~ regex` → Devuelve `true`
- Verificar si la longitud de una cadena es cero: `-z`
- Verificar si la longitud de una cadena no es cero: `-n`

### `for`

Utilizado para repetir un conjunto de comandos para cada elemento de una secuencia, como una lista de elementos o números.

```bash
for variable in secuencia; do
    comandos
done
```

- `for variable in secuencia; do`: Inicia el bucle. La variable toma el valor de cada elemento en la secuencia uno por uno.
- `comandos`: Los comandos que se ejecutan en cada iteración del bucle.
- `done`: Finaliza el bucle `for`.

### `while`
Ejecuta comandos repetidamente mientras una condición sea verdadera. Es útil para bucles en los que no sabes cuántas iteraciones necesitarás de antemano.

```bash
while [ condición ]; do		
    comandos
done
```
- `while [ condición ]; do`: Comienza el bucle. Los comandos se ejecutan mientras la condición sea verdadera.
- `comandos`: Los comandos que se ejecutan en cada iteración del bucle.
- `done`: Finaliza el bucle `while`.
- Todo lo que se puede hacer con un for se puede hacer con un while pero no necesariamente viceversa.

### `Case`
Permite ejecutar comandos basados en el valor de una variable, similar a un `switch` en otros lenguajes de programación. Es útil para manejar múltiples opciones de forma más ordenada.

```bash
case variable in
    patrón1)
        comandos ;;
    patrón2)
        comandos ;;
    *)
        comandos ;;
esac
```
- `case variable in`: Comienza la estructura `case`; `variable` es el valor que se va a evaluar.
- `patrón1)`: Define el primer patrón que se compara con el valor de `variable`. Los `comandos` se ejecutan si hay coincidencia.
- `*)`: El patrón `*` actúa como un comodín para manejar cualquier caso no especificado anteriormente.
- `esac`: Finaliza la estructura `case`.

### `Until`
El bucle until ejecuta los comandos mientras la condición sea falsa. Termina cuando la condición se vuelve verdadera.

```bash
until [ condicion ]; do
    comandos
done
```
## Funciones

En Bash, las funciones permiten agrupar comandos relacionados y reutilizarlos en diferentes partes del script. Esto mejora la organización y modularidad del código, haciendo que sea más fácil de leer y mantener.

**Definición de una función**

Para definir una función en Bash, utilizamos la siguiente sintaxis:

```bash
nombre_funcion() {
    # Comandos a ejecutar
}
```
**Ejemplo de definición de función:**

```bash
#!/bin/bash

saludar(){
    echo "¡Hola, $1!"
}
```
En el ejemplo:

- **saludar** es el nombre de la función.
- **$1** representa el primer argumento pasado a la función.

#### Llamar a una función

Después de definir una función, podés llamarla en cualquier parte del script posterior a su definición:

```bash
saludar "Daniel"
```
Esto imprimirá: ¡Hola, Daniel!

#### Retorno de valores

Aunque Bash no soporta el retorno de valores directamente como en otros lenguajes de programación, podemos utilizar `echo` para devolver un valor y capturarlo con `$()`:

Ejemplo de retorno de valores:

```bash
obtener_suma() {
    local suma=$(( $1 + $2 ))
    echo $suma
}

resultado=$(obtener_suma 5 10)
echo "La suma es: $resultado"
```
En este ejemplo, `obtener_suma` devuelve la suma de dos números, y el valor es capturado en la variable `resultado`.

#### Uso de variables locales

Dentro de una función, utiliza la palabra clave `local` para definir variables que solo están disponibles dentro de esa función, evitando conflictos con variables globales:

Ejemplo de variables locales:

```bash
calcular_area() {
    local base=$1
    local altura=$2
    local area=$(( base * altura )) 
    echo $area
}

area_rectangulo=$(calcular_area 5 10)
echo "El área del rectángulo es: $area_rectangulo"
```
