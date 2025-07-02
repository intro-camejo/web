# Guía 2 - Regex

*<u>__Nota__</u>: si aún no tienen bien asentada la utilización de los `tokens` o de los comandos de expresiones regulares con los que venimos trabajando, recomendamos que se ayuden con la presentación [Intro a Regex](https://drive.google.com/file/d/1r44hko1kdqOjxsM7MhDOyG5yQH3HMmtB/view)*. 
### Introducción - Básicos

Tenemos un archivo **oraciones.txt**, cuyo contenido es:

```txt
El perro corre rapido por el parque.
Maria compro manzanas, peras y bananas en el mercado.
La computadora tiene 16 GB de RAM y 512 GB de almacenamiento.
Que dia tan bonito para un paseo por la montana!
Cuantas palabras puede contener esta oracion?
El gato salto sobre la mesa para atrapar el raton.
Las clases de Intro comienzan a las 7:30 AM.
Juan y Martina juegan al futbol todos los viernes.
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
