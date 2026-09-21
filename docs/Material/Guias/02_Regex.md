---
draft: false
---

# Guía 2 - Regex

### Ejercicios de calentamiento: Pipes

Antes de empezar con Regex puro, vamos a repasar cómo conectar comandos básicos usando pipes (`|`):

1. Resolver los siguientes incisos ejecutando comandos en la terminal:
    1. Listar el contenido del directorio actual y contar cuántos archivos/directorios hay en total.
    2. Mostrar las primeras 10 líneas de un archivo de texto cualquiera y ordenarlas alfabéticamente.
    3. Buscar una palabra específica dentro de un archivo de texto y contar cuántas veces aparece.
    4. Listar los archivos de un directorio, filtrar aquellos que contengan la letra "a" en su nombre y mostrar solo los últimos 5 resultados.
    5. Mostrar el historial de comandos ejecutados en la terminal y filtrar para ver solo las veces que se utilizó el comando `cd`.

### Introducción - Básicos

Tenemos un archivo **oraciones.txt**, cuyo contenido es:

```txt
El perro corre rápido por el parque.
María compró manzanas, peras y bananas en el mercado.
La computadora tiene 16 GB de RAM y 512 GB de almacenamiento.
¡Qué día tan bonito para un paseo por la montaña!
¿Cuántas palabras puede contener esta oración?
El gato saltó sobre la mesa para atrapar el ratón.
Las clases de Intro comienzan a las 7:30 AM.
Juan y Martina juegan al fútbol todos los viernes.
```

Encontrar la expresión regular de Regex que devuelve:

1. Las ocurrencias de la letra `s`.
2. Las ocurrencias de un caracter, seguido de la letra `o` (ej. `to`).
3. Todos los dígitos en el archivo.
4. Las ocurrencias del punto (`.`).
5. Las ocurrencias de la letra `c` **al comienzo de la palabra**.
6. Las palabras que comienzan con la letra `p` (no es necesario incluir las mayúsculas).

¿Qué devuelven las siguientes expresiones regulares?

7. `^L`
8. `!$`
9. `‎ ` ‎  *(espacio)*
10. `[A-Z1-3]`

### Avanzados

#### Usuarios y Contraseñas

```csv
cool_cat123,BananaSplit99
xXx_panda_xXx,unicornu
spacetraveler42,42isTheAnswer!
flower_power,RedRoses
shadow_ninja,!ninjaWarrior22
_bubblegumqueen,candyLand2024
the_real_hero,p@ssw0rd!
pirateKing777,G0ld&Silver$$?
coffee_addict,latteLover123
bookworm89,openSesame!
pepeMaquina,Ave7#0
```

Se tiene el archivo **contraseñas.csv**, el cual almacena las contraseñas de distintos usuarios en una plataforma. La estructura es `nombre_usuario,contraseña`. Se pide extraer, del archivo:

11. Los nombres de usuario que **contienen números**.
12. Los nombres de usuario con al menos un **guión bajo** (`_`).
13. Las contraseñas alfanúmericas.
14. Los nombres de usuario alfanuméricos.
15. Las contraseñas que comienzen y terminen con el **mismo caracter**.
16. Las contraseñas con **exactamente 14 caracteres** (de cualquier tipo).
17. Las **contraseñas seguras**; son las que contienen al menos:
	- 1 letra minúscula
	- 1 letra mayúscula
	- 1 número
	- 1 caracter especial (@$!%\*?&#)

*__Aclaraciones__: el caracter `,` debe ser omitido en las devoluciones de contraseñas o usuarios. Comprobá que el resultado de la expresión contenga a todos los campos esperados (para esto, pueden buscar de antemano cuáles serían los usuarios/contraseñas que cumplen con la condición pedida.)*
