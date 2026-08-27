# Guía 1 - Bash 

### Tuberías y Comandos Básicos (Pipes)

1. Resolver los siguientes ejercicios ejecutando comandos en la terminal y conectándolos mediante tuberías (`|`):
    a. Listar el contenido del directorio actual y utilizar un comando para contar cuántos archivos/directorios hay en total. (Pista: `ls` y `wc`)
    b. Mostrar las primeras 10 líneas de un archivo de texto cualquiera y ordenarlas alfabéticamente. (Pista: `head` y `sort`)
    c. Buscar una palabra específica dentro de un archivo de texto y contar cuántas veces aparece usando tuberías. (Pista: `grep` y `wc`)
    d. Listar los archivos de un directorio, filtrar aquellos que contengan la letra "a" en su nombre y mostrar solo los últimos 5 resultados. (Pista: `ls`, `grep` y `tail`)
    e. Mostrar el historial de comandos ejecutados en la terminal y filtrar para ver solo las veces que se utilizó el comando `cd`. (Pista: `history` y `grep`)

### Ejercicios introductorios 

2. Crear un script de Bash en el que se defina una variable llamada nombre y que luego la imprima por pantalla. 

3. Crear un script de Bash que reciba dos números e imprima por pantalla su suma.

4. Crear un script de Bash que reciba el nombre y el apellido de un alumno, y que luego imprima por pantalla su nombre completo. 

5. Crear un script de Bash que le solicite al usuario el ingreso de su nombre y su apellido (por separado) y que luego imprima por pantalla su nombre completo. 

6. Crear un script de Bash que reciba dos números (base y altura) para luego calcular el perímetro de un rectángulo. 

### Condicionales 

7. Crear un script de Bash que le solicite al usuario el ingreso de un número e indicar si el número es mayor, menor o igual a 0. Imprimir por pantalla. 

8. Crear un script de Bash que solicite la edad del usuario y determine si es mayor o menor de edad. 

9. Crear un script de Bash que reciba un número entero e indique si el número es par o impar. 

10. Crear un script de Bash que reciba un nombre. Si el nombre ingresado es “Manu” imprimir por pantalla “Hola, profe”, de no ser así imprimir por pantalla “Hola, (nombre)”

11. Crear un script de Bash que reciba las longitudes de los lados de un triángulo y que luego indique si se trata de un triángulo equilátero, isósceles o escaleno.

12. Crear un script de Bash que realice las 4 operaciones básicas (suma, resta, multiplicación y división) a dos números enteros ingresados por el usuario. Crear una función para cada una de las operaciones. 

### Iteraciones 

13. Crear un script de Bash que imprima los primeros n números naturales. Solicitar al usuario el ingreso de n. 

14. Crear un script de Bash que solicite el ingreso de un número n y que luego calcule su factorial. 

15. Crear un script de Bash que solicite al usuario el ingreso de un número par. En caso de que sea impar, solicitarlo nuevamente.

16. Crear un script de Bash que solicite un número que representa un día de la semana, imprimir por pantalla de que día se trata. En caso de que el número esté fuera de rango, solicitarlo nuevamente.

17. Crear un script de Bash que reciba números naturales y que luego los imprima por pantalla (la cantidad de números ingresados puede variar).

18. Crear un script de Bash que reciba números de DNI y ordene a las personas de menor a mayor edad. Imprimir por pantalla los documentos ordenados. (la cantidad de números de DNI puede variar).

19. Crear un script de Bash que reciba como parámetros dos strings “contraseña” y “contraseña ingresada” e indique si la clave ingresada es correcta o incorrecta. 

### Lectura y escritura de archivos / Redirección 

20. Crear un script de Bash que imprima la fecha actual en un archivo llamado “fecha.txt”.

21. Crear un script de Bash que imprima el nombre del directorio actual en un archivo llamado “actual.txt”.

22. Crear un script de Bash que solicite al usuario un número natural n y cree n cantidad de archivos con los nombres archivo1, archivo2, etc. Escribir en todos los archivos el nombre del usuario actual. 

23. Crear un script de Bash que reciba como parámetro los nombres de dos archivos y una sus contenidos en uno nuevo llamado “concatenados.txt”.

24. Crear un script de Bash que solicite al usuario un número natural n y cree n cantidad de carpetas con los nombres carpeta1, carpeta2, etc.

25. Crear un script de Bash que solicite al usuario un número natural n e imprima en un archivo llamado “primos.txt” todos los números primos existentes hasta n.

26. Crear un script de Bash que imprima en un archivo llamado “ordenados.txt” los nombres de todos los archivos del directorio actual ordenados según sus tamaños. 

27. Crear un script de Bash que solicite al usuario los siguientes datos: 
-Nombre
-Apellido
-Legajo 
-Materia preferida 
Luego imprimir en un archivo “datos_alumno.txt” toda la información. 

### Case, parámetros posicionales y códigos de salida

28. Crear un script de Bash que muestre un menú simple de calculadora, recibiendo un número entero e imprima "Ingresa el número de la operación:" con las opciones:
    ```
    1) Sumar
    2) Restar
    3) Multiplicar
    4) Dividir
    ```
    Luego, usando `case` (no `if`/`elif`), pedir dos números y ejecutar la operación elegida. Si se ingresa una opción que no sea 1, 2, 3 o 4, imprimir "Opción inválida".

29. Crear un script de Bash que reciba una cantidad variable de argumentos (números) al ejecutarse y que imprima cuántos argumentos se pasaron. Si no se pasó ningún argumento, debe imprimir un mensaje de uso indicando cómo se debe ejecutar el script (por ejemplo: `Uso: ./script.sh num1 num2 ...`).

30. Crear un script de Bash que reciba el nombre de una carpeta como parámetro e intente crearla. Inmediatamente después, verificar el código de salida del comando: si fue 0, imprimir "Carpeta creada con éxito"; si fue distinto de 0 (por ejemplo, porque la carpeta ya existía), imprimir "No se pudo crear la carpeta".