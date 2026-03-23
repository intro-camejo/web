# Bash Complementario

- [Repositorio](https://github.com/RiedelNicolas/bash-exercise)
- [Video de la clase](https://youtu.be/dGo6IiAdvvs)

---

## Ejercicio Integrador: Sistema de Gestión de Entregas de TPs

### Contexto

Es viernes a la noche y se acaba de cerrar el deadline del TP1 de Introducción al Desarrollo de Software. Sos uno de los correctores de la materia y tu responsabilidad es organizar todas las entregas que llegaron antes de que el equipo docente empiece a corregir el lunes.

El problema: los alumnos entregan sus soluciones como archivos `.txt` en una carpeta compartida. Algunos archivos vienen con nombres crípticos (`tp_final_v3_FINAL.txt`, `entrega_juancito.txt`), y no hay garantía de que todos hayan respetado el formato pedido en el enunciado. Necesitás un script que te permita validar y organizar todas las entregas de forma automatizada, porque hacerlo a mano con más de 250 alumnos no es una opción.

Cada archivo de entrega debe tener como **primera línea** un encabezado con el siguiente formato:

```
Alumno: Apellido, Nombre - Padrón: NNNNNN
```

Donde `NNNNNN` es un número de padrón de exactamente 6 dígitos. Por ejemplo:

```
Alumno: Garcia, Juan - Padrón: 104560
```

Este encabezado es lo que permite identificar a quién pertenece cada entrega. Si un archivo no lo tiene (o está mal escrito), no se puede corregir y hay que notificarlo.

### Enunciado

Escribir un script en Bash llamado `gestionar_entregas.sh` que reciba como primer parámetro una **acción** y como segundo parámetro el **directorio de entregas**. El script va a ser tu herramienta principal para organizar el trabajo de corrección.

Las acciones posibles son:

#### 1. `inicializar`

```bash
$ bash gestionar_entregas.sh inicializar entregas
```

Debe crear la siguiente estructura de carpetas (solo si no existen):

```
entregas/
  originales/
  procesadas/
  burlas/
```

Informar por cada carpeta si fue creada o si ya existía.

#### 2. `procesar`

```bash
$ bash gestionar_entregas.sh procesar entregas
```

Debe recorrer todos los archivos `.txt` dentro de `entregas/originales/` y para cada uno:

1. **Validar el encabezado**: verificar que la primera línea del archivo cumpla con el formato `Alumno: Apellido, Nombre - Padrón: NNNNNN` (donde `NNNNNN` son exactamente 6 dígitos). Si no cumple, mostrar un error para ese archivo y **saltearlo** (no procesarlo).
2. Generar una versión procesada en `entregas/procesadas/<PADRON>.txt` usando el número de padrón extraído del encabezado (por ejemplo: `104560.txt`). La versión procesada es la que van a leer los correctores, y no necesitan ver el encabezado.
3. Eliminar la línea del encabezado del archivo procesado (la primera línea con los datos del alumno).

#### 3. `burlarme`

```bash
$ bash gestionar_entregas.sh burlarme entregas
```

Después de horas de corregir, necesitás un poco de humor. Esta acción recorre todos los archivos `.txt` dentro de `entregas/procesadas/` y para cada uno genera una versión "burlona" en `entregas/burlas/` donde **todas las vocales (a, e, o, u) se reemplazan por la letra `i`**.

Por ejemplo, si `entregas/procesadas/104560.txt` contiene:

```
La funcion recibe como parametro una lista de enteros.
```

El archivo `entregas/burlas/104560.txt` debería contener:

```
Li fincion ricibi cimi pirimitri ini listi di intiris.
```

Debe reemplazar tanto vocales minúsculas como mayúsculas (las mayúsculas se reemplazan por `I`).

#### 4. Acción inválida

Si la acción recibida no es ninguna de las anteriores, mostrar un mensaje de error con las opciones válidas.

### Validaciones generales

- Si no se pasan los 2 parámetros necesarios, mostrar un mensaje de uso: `Uso: bash gestionar_entregas.sh <accion> <directorio>`.
- Si el directorio no existe y la acción no es `inicializar`, mostrar un error.
