# Guías de ejercicios 
# Guía 1 - Bash 
### Ejercicios introductorios 

1. Crear un script de Bash en el que se defina una variable llamada nombre y que luego la imprima por pantalla. 

2. Crear un script de Bash que reciba dos números e imprima por pantalla su suma.

3. Crear un script de Bash que reciba el nombre y el apellido de un alumno, y que luego imprima por pantalla su nombre completo. 

4. Crear un script de Bash que le solicite al usuario el ingreso de su nombre y su apellido (por separado) y que luego imprima por pantalla su nombre completo. 

5. Crear un script de Bash que reciba dos números (base y altura) para luego calcular el perímetro de un rectángulo. 

### Condicionales 

6. Crear un script de Bash que le solicite al usuario el ingreso de un número e indicar si el número es mayor, menor o igual a 0. Imprimir por pantalla. 

7. Crear un script de Bash que solicite la edad del usuario y determine si es mayor o menor de edad. 

8. Crear un script de Bash que reciba un número entero e indique si el número es par o impar. 

9. Crear un script de Bash que reciba un nombre. Si el nombre ingresado es “Manu” imprimir por pantalla “Hola, profe”, de no ser así imprimir por pantalla “Hola, (nombre)”

10. Crear un script de Bash que reciba las longitudes de los lados de un triángulo y que luego indique si se trata de un triángulo equilátero, isósceles o escaleno.

11. Crear un script de Bash que realice las 4 operaciones básicas (suma, resta, multiplicación y división) a dos números enteros ingresados por el usuario. Crear una función para cada una de las operaciones. 

### Iteraciones 

12. Crear un script de Bash que imprima los primeros n números naturales. Solicitar al usuario el ingreso de n. 

13. Crear un script de Bash que solicite el ingreso de un número n y que luego calcule su factorial. 

14. Crear un script de Bash que solicite al usuario el ingreso de un número par. En caso de que sea impar, solicitarlo nuevamente.

15. Crear un script de Bash que solicite un número que representa un día de la semana, imprimir por pantalla de que día se trata. En caso de que el número esté fuera de rango, solicitarlo nuevamente.

16. Crear un script de Bash que reciba números naturales y que luego los imprima por pantalla (la cantidad de números ingresados puede variar).

17. Crear un script de Bash que reciba números de DNI y ordene a las personas de menor a mayor edad. Imprimir por pantalla los documentos ordenados. (la cantidad de números de DNI puede variar).

18. Crear un script de Bash que reciba como parámetros dos strings “contraseña” y “contraseña ingresada” e indique si la clave ingresada es correcta o incorrecta. 

### Lectura y escritura de archivos / Redirección 

19. Crear un script de Bash que imprima la fecha actual en un archivo llamado “fecha.txt”.

20. Crear un script de Bash que imprima el nombre del directorio actual en un archivo llamado “actual.txt”.

21. Crear un script de Bash que solicite al usuario un número natural n y cree n cantidad de archivos con los nombres archivo1, archivo2, etc. Escribir en todos los archivos el nombre del usuario actual. 

22. Crear un script de Bash que reciba como parámetro los nombres de dos archivos y una sus contenidos en uno nuevo llamado “concatenados.txt”.

23. Crear un script de Bash que solicite al usuario un número natural n y cree n cantidad de carpetas con los nombres carpeta1, carpeta2, etc.

24. Crear un script de Bash que solicite al usuario un número natural n e imprima en un archivo llamado “primos.txt” todos los números primos existentes hasta n.

25. Crear un script de Bash que imprima en un archivo llamado “ordenados.txt” los nombres de todos los archivos del directorio actual ordenados según sus tamaños. 

26. Crear un script de Bash que solicite al usuario los siguientes datos: 
-Nombre
-Apellido
-Legajo 
-Materia preferida 
Luego imprimir en un archivo “datos_alumno.txt” toda la información. 

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

*__Aclaraciones__: el caracter `,` debe ser omitido en las devoluciones de contraseñas o usuarios (buscar [<u>lookahead</u>/<u>lookbehind</u>](https://medium.com/@NALSengineering/regex-for-dummies-lookaround-assertions-lookaheads-and-lookbehinds-408c94eacaf7)). Comprobá que el resultado de la expresión contenga a todos los campos esperados (para esto, pueden buscar de antemano cuáles serían los usuarios/contraseñas que cumplen con la condición pedida.)*
