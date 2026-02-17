---
sidebar_position: 4
---

# Expresiones Regulares (Regex)

Las **expresiones regulares** (en ingles *regular expressions*, abreviado **regex** o **regexp**) son secuencias de caracteres que definen un **patron de busqueda**. Se utilizan para buscar, validar, extraer y reemplazar texto dentro de cadenas de caracteres.

Son una herramienta fundamental en programacion y administracion de sistemas, ya que permiten trabajar con texto de forma extremadamente flexible y poderosa.

## Casos de uso en el mundo real

- **Validar datos de entrada**: verificar que un email, telefono o DNI tenga el formato correcto.
- **Buscar patrones en archivos**: encontrar todas las direcciones IP en un log de servidor.
- **Reemplazar texto**: cambiar todas las ocurrencias de una palabra por otra en un archivo.
- **Extraer informacion**: obtener todos los enlaces de una pagina HTML.
- **Filtrar lineas**: mostrar solo las lineas de un archivo que cumplan cierta condicion.

---

## Herramientas para practicar

Antes de empezar, es muy recomendable tener a mano estas herramientas:

### regex101.com

[https://regex101.com/](https://regex101.com/) es una herramienta online e interactiva que permite escribir una expresion regular y ver en tiempo real que partes del texto coinciden. Ademas explica paso a paso que hace cada parte de la expresion.

> Se recomienda usar esta herramienta mientras se resuelven los ejercicios de la Guia 2.

### grep en la terminal

`grep` es un comando de la terminal que permite buscar patrones (expresiones regulares) dentro de archivos. Se vera en detalle mas adelante en este apunte.

```bash
grep "patron" archivo.txt
```

### sed en la terminal

`sed` (*stream editor*) es un comando que permite buscar y reemplazar texto en archivos usando expresiones regulares. Tambien se vera en detalle mas adelante.

```bash
sed 's/patron/reemplazo/g' archivo.txt
```

---

## Caracteres Literales y Metacaracteres

### Caracteres literales

Un **caracter literal** es simplemente un caracter que se busca tal cual. Por ejemplo, la expresion regular `hola` busca exactamente la secuencia de caracteres `h`, `o`, `l`, `a`.

```
Texto:    "hola mundo, hola a todos"
Regex:    hola
Matches:  "hola" (2 coincidencias)
```

### Metacaracteres

Los **metacaracteres** son caracteres que tienen un significado especial dentro de una expresion regular. No se interpretan de forma literal, sino que cumplen funciones especificas.

Los metacaracteres son:

```
.  ^  $  *  +  ?  {  }  [  ]  \  |  (  )
```

| Metacaracter | Significado |
|---|---|
| `.` | Cualquier caracter (excepto salto de linea) |
| `^` | Inicio de linea |
| `$` | Fin de linea |
| `*` | Cero o mas repeticiones del elemento anterior |
| `+` | Una o mas repeticiones del elemento anterior |
| `?` | Cero o una repeticion del elemento anterior |
| `{n}` | Exactamente *n* repeticiones |
| `[abc]` | Clase de caracteres (cualquiera de los listados) |
| `\` | Escape (para usar un metacaracter como literal) |
| `\|` | Alternancia (uno u otro) |
| `(abc)` | Grupo de captura |

Si necesitas buscar uno de estos caracteres de forma literal, debes **escaparlo** con `\`. Esto se explica en detalle mas adelante.

---

## Clases de Caracteres

Las clases de caracteres permiten definir un **conjunto de caracteres** de los cuales se quiere buscar **uno cualquiera**. Se escriben entre corchetes `[ ]`.

### Sintaxis basica

| Expresion | Descripcion | Ejemplo de match |
|---|---|---|
| `[abc]` | Coincide con `a`, `b` o `c` | En `"banco"` matchea `b`, `a` |
| `[aeiou]` | Cualquier vocal minuscula | En `"hola"` matchea `o`, `a` |
| `[0-9]` | Cualquier digito del 0 al 9 | En `"abc123"` matchea `1`, `2`, `3` |
| `[a-z]` | Cualquier letra minuscula | En `"Hola"` matchea `o`, `l`, `a` |
| `[A-Z]` | Cualquier letra mayuscula | En `"Hola"` matchea `H` |
| `[a-zA-Z]` | Cualquier letra (minuscula o mayuscula) | En `"H0la"` matchea `H`, `l`, `a` |
| `[a-zA-Z0-9]` | Cualquier letra o digito | En `"H0la!"` matchea `H`, `0`, `l`, `a` |

### Negacion con `^`

Cuando el simbolo `^` aparece **dentro de los corchetes** como primer caracter, niega la clase. Es decir, coincide con cualquier caracter que **no** este en el conjunto.

| Expresion | Descripcion | Ejemplo de match |
|---|---|---|
| `[^abc]` | Cualquier caracter que NO sea `a`, `b` ni `c` | En `"banco"` matchea `n`, `o` |
| `[^0-9]` | Cualquier caracter que NO sea un digito | En `"abc123"` matchea `a`, `b`, `c` |
| `[^a-z]` | Cualquier caracter que NO sea minuscula | En `"Hola1!"` matchea `H`, `1`, `!` |

> **Atencion**: el `^` dentro de `[ ]` significa negacion. Fuera de `[ ]`, el `^` significa inicio de linea. Son significados distintos.

### Ejemplo practico

```
Texto:    "La computadora tiene 16 GB de RAM y 512 GB de almacenamiento."
Regex:    [0-9]
Matches:  1, 6, 5, 1, 2
```

```
Texto:    "Hola Mundo"
Regex:    [A-Z]
Matches:  H, M
```

---

## Metacaracteres Predefinidos

Muchas clases de caracteres se usan tan seguido que tienen **atajos** (shortcuts). Estos son los metacaracteres predefinidos:

| Metacaracter | Equivalente | Descripcion |
|---|---|---|
| `\d` | `[0-9]` | Cualquier digito |
| `\D` | `[^0-9]` | Cualquier caracter que NO sea un digito |
| `\w` | `[a-zA-Z0-9_]` | Cualquier caracter de "palabra" (letras, digitos, guion bajo) |
| `\W` | `[^a-zA-Z0-9_]` | Cualquier caracter que NO sea de "palabra" |
| `\s` | `[ \t\n\r]` | Cualquier espacio en blanco (espacio, tabulacion, salto de linea) |
| `\S` | `[^ \t\n\r]` | Cualquier caracter que NO sea espacio en blanco |
| `.` | (casi todo) | Cualquier caracter excepto salto de linea (`\n`) |

### Ejemplos

```
Texto:    "Tengo 3 gatos y 12 perros"
Regex:    \d
Matches:  3, 1, 2
```

```
Texto:    "Tengo 3 gatos y 12 perros"
Regex:    \d+
Matches:  3, 12
```

```
Texto:    "hola mundo"
Regex:    \w+
Matches:  "hola", "mundo"
```

```
Texto:    "hola mundo"
Regex:    \s
Matches:  " " (el espacio entre las dos palabras)
```

### El punto `.`

El punto es uno de los metacaracteres mas usados. Coincide con **cualquier caracter** excepto el salto de linea.

```
Texto:    "gato, gato, rato, pato"
Regex:    .ato
Matches:  "gato", "gato", "rato", "pato"
```

```
Texto:    "El perro corre rapido"
Regex:    .o
Matches:  "ro", "co", " r" (espacio + r), "do"
```

> **Importante**: si queres buscar un punto literal (`.`), debes escaparlo con `\`: `\.`

---

## Cuantificadores

Los cuantificadores indican **cuantas veces** debe aparecer el elemento que los precede.

| Cuantificador | Significado | Ejemplo Regex | Texto | Matches |
|---|---|---|---|---|
| `*` | Cero o mas veces | `go*l` | "gl gol gool goool" | `gl`, `gol`, `gool`, `goool` |
| `+` | Una o mas veces | `go+l` | "gl gol gool goool" | `gol`, `gool`, `goool` |
| `?` | Cero o una vez | `colou?r` | "color colour" | `color`, `colour` |
| `{n}` | Exactamente *n* veces | `\d{3}` | "12 123 1234" | `123`, `123` (de 1234) |
| `{n,}` | Al menos *n* veces | `\d{2,}` | "1 12 123 1234" | `12`, `123`, `1234` |
| `{n,m}` | Entre *n* y *m* veces | `\d{2,4}` | "1 12 123 12345" | `12`, `123`, `1234` |

### Ejemplos detallados

**El `*` (cero o mas)**:

```
Texto:    "ac abc abbc abbbc"
Regex:    ab*c
Matches:  "ac", "abc", "abbc", "abbbc"
```

Matchea `a` seguido de cero o mas `b`, seguido de `c`.

**El `+` (una o mas)**:

```
Texto:    "ac abc abbc abbbc"
Regex:    ab+c
Matches:  "abc", "abbc", "abbbc"
```

Matchea `a` seguido de una o mas `b`, seguido de `c`. No matchea `ac` porque necesita al menos una `b`.

**El `?` (cero o una)**:

```
Texto:    "color colour"
Regex:    colou?r
Matches:  "color", "colour"
```

La `u` es opcional.

**El `{n}` (exactamente n)**:

```
Texto:    "Las clases de Intro comienzan a las 7:30 AM."
Regex:    \d{2}
Matches:  "30"
```

Busca exactamente 2 digitos consecutivos.

**El `{n,m}` (entre n y m)**:

```
Texto:    "a1 ab12 abc123 abcd1234 abcde12345"
Regex:    \d{2,4}
Matches:  "12", "123", "1234", "1234" (de 12345)
```

Busca entre 2 y 4 digitos consecutivos.

---

## Anclas

Las anclas **no matchean caracteres**, sino que matchean **posiciones** dentro del texto. Sirven para indicar donde debe estar el patron.

| Ancla | Descripcion |
|---|---|
| `^` | Inicio de la linea |
| `$` | Fin de la linea |
| `\b` | Limite de palabra (*word boundary*) |
| `\B` | NO limite de palabra |

### `^` - Inicio de linea

```
Texto:
  "La computadora tiene 16 GB"
  "Las clases de Intro comienzan a las 7:30"
  "El gato salto sobre la mesa"

Regex:    ^L
Matches:  "L" (de "La"), "L" (de "Las")
```

Solo matchea la `L` cuando esta al inicio de la linea. No matchea la `L` que pueda aparecer en medio de una linea.

### `$` - Fin de linea

```
Texto:
  "Que dia tan bonito para un paseo por la montana!"
  "Cuantas palabras puede contener esta oracion?"

Regex:    !$
Matches:  "!" (al final de la primera linea)
```

Solo matchea el `!` cuando esta al final de la linea.

### `\b` - Limite de palabra

El limite de palabra (`\b`) es la posicion entre un caracter de palabra (`\w`) y un caracter que no es de palabra (`\W`), o el inicio/fin de la cadena.

```
Texto:    "El perro corre rapido por el parque"
Regex:    \bel\b
Matches:  "el" (la segunda ocurrencia, no "El" por diferencia de mayusculas)
```

```
Texto:    "El perro corre rapido por el parque"
Regex:    \bp\w+
Matches:  "perro", "por", "parque"
```

En el ultimo ejemplo, `\bp\w+` busca palabras que comiencen con `p`: el `\b` asegura que la `p` esta al inicio de una palabra, y `\w+` matchea el resto de los caracteres de la palabra.

> **Nota**: `\b` es muy util para la Guia 2. Por ejemplo, para encontrar "las ocurrencias de la letra c al comienzo de la palabra" se puede usar `\bc`.

---

## Grupos y Alternancia

### Grupos de captura `( )`

Los parentesis `( )` agrupan partes de una expresion regular. Esto tiene dos funciones principales:

1. **Agrupar**: aplicar cuantificadores a un grupo de caracteres en vez de a uno solo.
2. **Capturar**: guardar el texto matcheado por el grupo para poder reutilizarlo.

```
Texto:    "abcabc"
Regex:    (abc)+
Matches:  "abcabc"
```

Sin los parentesis, `abc+` matchearia `ab` seguido de una o mas `c`.

```
Texto:    "jajaja"
Regex:    (ja)+
Matches:  "jajaja"
```

### Alternancia `|`

El operador `|` funciona como un **"o" logico**. Permite matchear una cosa **u** otra.

```
Texto:    "Tengo un gato y un perro"
Regex:    gato|perro
Matches:  "gato", "perro"
```

Se puede combinar con grupos para crear alternativas dentro de un patron mas grande:

```
Texto:    "manzana, banana, pera, mandarina"
Regex:    man(zana|darina)
Matches:  "manzana", "mandarina"
```

### Referencia hacia atras (backreference)

Cuando se captura un grupo con `( )`, se puede hacer referencia al texto capturado usando `\1`, `\2`, etc., donde el numero indica el orden del grupo.

```
Texto:    "abcabc"
Regex:    (abc)\1
Matches:  "abcabc"
```

`\1` se refiere al texto que matcheo el primer grupo `(abc)`, es decir, busca que se repita exactamente lo mismo.

Esto es especialmente util para encontrar, por ejemplo, contrasenas que comiencen y terminen con el mismo caracter:

```
Regex:    ^(.).*\1$
```

- `^` - Inicio de la cadena
- `(.)` - Captura el primer caracter (cualquiera)
- `.*` - Cualquier cantidad de caracteres en el medio
- `\1` - El mismo caracter que se capturo al principio
- `$` - Fin de la cadena

---

## Escape de Caracteres Especiales

Como vimos, los metacaracteres (`. ^ $ * + ? { } [ ] \ | ( )`) tienen significados especiales. Si queres buscar uno de estos caracteres **de forma literal**, necesitas **escaparlo** con una barra invertida `\`.

| Quiero buscar | Escribo |
|---|---|
| Un punto `.` | `\.` |
| Un signo de pregunta `?` | `\?` |
| Un signo de exclamacion `!` | `!` (no es metacaracter, no necesita escape) |
| Un asterisco `*` | `\*` |
| Un parentesis `(` | `\(` |
| Un corchete `[` | `\[` |
| Una barra invertida `\` | `\\` |
| Un signo dolar `$` | `\$` |
| Un signo mas `+` | `\+` |

### Ejemplo practico

```
Texto:    "El perro corre rapido por el parque."
Regex:    \.
Matches:  "." (solo el punto literal al final)
```

Si usaras `.` sin escapar, matchearia **todos** los caracteres del texto.

```
Texto:    "El precio es $50.99"
Regex:    \$\d+\.\d+
Matches:  "$50.99"
```

Aca se escapa el `$` (para que no sea "fin de linea") y el `.` (para que no sea "cualquier caracter").

---

## Uso con `grep`

`grep` (*Global Regular Expression Print*) es un comando de la terminal que busca lineas que coincidan con un patron (expresion regular) dentro de archivos.

### Sintaxis basica

```bash
grep [opciones] "patron" archivo
```

### Modos de expresion regular

| Flag | Descripcion |
|---|---|
| (sin flag) | Expresiones regulares basicas (BRE). Algunos metacaracteres como `+`, `?`, `{`, `}`, `\|`, `(`, `)` deben escaparse con `\`. |
| `-E` | Expresiones regulares extendidas (ERE). Los metacaracteres `+`, `?`, `{`, `}`, `\|`, `(`, `)` funcionan sin escape. **Recomendado.** |
| `-P` | Expresiones regulares de Perl (PCRE). Soporta `\d`, `\w`, `\s`, `\b` y mas. El mas completo. |

> **Recomendacion**: para la mayoria de los casos, usa `grep -P` ya que soporta todos los metacaracteres vistos en este apunte, como `\d`, `\w`, `\b`, etc.

### Flags comunes

| Flag | Descripcion | Ejemplo |
|---|---|---|
| `-i` | Ignorar mayusculas/minusculas | `grep -i "hola" archivo.txt` |
| `-c` | Contar cantidad de lineas que matchean | `grep -c "hola" archivo.txt` |
| `-v` | Invertir: mostrar lineas que NO matchean | `grep -v "hola" archivo.txt` |
| `-o` | Mostrar solo la parte que matchea (no toda la linea) | `grep -o "hola" archivo.txt` |
| `-n` | Mostrar el numero de linea | `grep -n "hola" archivo.txt` |
| `-l` | Mostrar solo los nombres de archivos que contienen matches | `grep -l "hola" *.txt` |
| `-w` | Matchear solo palabras completas | `grep -w "el" archivo.txt` |

### Ejemplos con archivos de la Guia 2

Suponiendo que tenemos el archivo `oraciones.txt`:

```bash
# Encontrar las ocurrencias de la letra "s"
grep -o "s" oraciones.txt

# Encontrar todos los digitos
grep -P -o "\d" oraciones.txt

# Encontrar las ocurrencias del punto literal
grep -o "\." oraciones.txt

# Encontrar la letra "c" al comienzo de una palabra
grep -P -o "\bc" oraciones.txt

# Encontrar palabras que comienzan con "p"
grep -P -o "\bp\w+" oraciones.txt

# Lineas que comienzan con "L"
grep "^L" oraciones.txt

# Lineas que terminan con "!"
grep '!$' oraciones.txt
```

### Combinando grep con pipes

`grep` se puede combinar con otros comandos usando pipes (`|`):

```bash
# Primero extraer las contrasenas y luego filtrar las alfanumericas
cat contraseñas.csv | grep -P -o "(?<=,)[^,]+" | grep -P "^[a-zA-Z0-9]+$"
```

---

## Uso con `sed`

`sed` (*Stream Editor*) es un comando que permite buscar y reemplazar texto en archivos o flujos de datos usando expresiones regulares.

### Sintaxis basica de sustitucion

```bash
sed 's/patron/reemplazo/flags' archivo
```

- `s` indica que es una sustitucion.
- `patron` es la expresion regular a buscar.
- `reemplazo` es el texto con el que se reemplaza.
- `flags` son opcionales (por ejemplo, `g` para reemplazar todas las ocurrencias en cada linea).

### Flags comunes de sed

| Flag | Descripcion |
|---|---|
| `g` | Reemplazar **todas** las ocurrencias en cada linea (sin `g`, solo reemplaza la primera) |
| `i` | Ignorar mayusculas/minusculas (en GNU sed) |
| `-i` | Editar el archivo **in place** (modifica el archivo directamente) |
| `-E` | Usar expresiones regulares extendidas |

### Ejemplos

```bash
# Reemplazar "gato" por "perro" en un archivo (primera ocurrencia por linea)
sed 's/gato/perro/' archivo.txt

# Reemplazar TODAS las ocurrencias de "gato" por "perro"
sed 's/gato/perro/g' archivo.txt

# Eliminar todos los digitos de un archivo
sed 's/[0-9]//g' archivo.txt

# Reemplazar directamente en el archivo (cuidado: modifica el original)
sed -i 's/viejo/nuevo/g' archivo.txt

# Usar expresiones regulares extendidas
sed -E 's/[0-9]+/NUMERO/g' archivo.txt
```

### Usando grupos de captura en sed

Se pueden usar grupos `( )` en el patron y referenciarlos con `\1`, `\2`, etc. en el reemplazo:

```bash
# Invertir nombre y apellido separados por coma
sed -E 's/([a-zA-Z]+),([a-zA-Z]+)/\2 \1/g' archivo.txt
# "Garcia,Juan" -> "Juan Garcia"
```

---

## Lookahead y Lookbehind (avanzado)

Estas son aserciones que permiten verificar que algo este **antes** o **despues** del patron, sin incluirlo en el match. Son utiles en los ejercicios avanzados de la Guia 2.

| Sintaxis | Nombre | Descripcion |
|---|---|---|
| `(?=...)` | Lookahead positivo | Verifica que lo que sigue coincide con `...` |
| `(?!...)` | Lookahead negativo | Verifica que lo que sigue NO coincide con `...` |
| `(?<=...)` | Lookbehind positivo | Verifica que lo que precede coincide con `...` |
| `(?<!...)` | Lookbehind negativo | Verifica que lo que precede NO coincide con `...` |

### Ejemplo: contrasenas seguras (Guia 2, ejercicio 17)

Para verificar que una contrasena contenga al menos una minuscula, una mayuscula, un numero y un caracter especial, se usan **multiples lookaheads**:

```
Regex:    (?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])
```

- `(?=.*[a-z])` - Verifica que en algun lugar haya una minuscula.
- `(?=.*[A-Z])` - Verifica que en algun lugar haya una mayuscula.
- `(?=.*\d)` - Verifica que en algun lugar haya un digito.
- `(?=.*[@$!%*?&#])` - Verifica que en algun lugar haya un caracter especial.

Cada lookahead verifica una condicion **sin consumir caracteres**, por lo que se pueden encadenar y todas deben cumplirse.

---

## Ejemplos Practicos

### Ejemplo 1: Encontrar un caracter seguido de "o"

```
Texto:    "El perro corre rapido por el parque."
Regex:    .o
Matches:  "ro", "co", "po", " o" (dependiendo del motor)
```

En `grep`:

```bash
grep -P -o ".o" oraciones.txt
```

### Ejemplo 2: Validar un email simple

```
Regex:    \w+@\w+\.\w+
```

- `\w+` - Uno o mas caracteres de palabra (nombre de usuario)
- `@` - El simbolo arroba literal
- `\w+` - Uno o mas caracteres de palabra (dominio)
- `\.` - Un punto literal
- `\w+` - Uno o mas caracteres de palabra (extension)

```
Texto:    "Escribime a juan@gmail.com o a info@empresa.org"
Regex:    \w+@\w+\.\w+
Matches:  "juan@gmail.com", "info@empresa.org"
```

### Ejemplo 3: Extraer direcciones IP de un log

```
Regex:    \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}
```

```
Texto:    "Conexion desde 192.168.1.1 y 10.0.0.255"
Matches:  "192.168.1.1", "10.0.0.255"
```

### Ejemplo 4: Nombres de usuario con numeros (Guia 2, ejercicio 11)

```
Texto CSV:
  cool_cat123,BananaSplit99
  xXx_panda_xXx,unicornu
  spacetraveler42,42isTheAnswer!
  ...

Regex:    ^[a-zA-Z0-9_]*\d[a-zA-Z0-9_]*(?=,)
```

- Busca desde el inicio de la linea (`^`), caracteres de usuario que contengan al menos un digito, hasta la coma.

En `grep`:

```bash
grep -P -o "^[a-zA-Z0-9_]*\d[a-zA-Z0-9_]*(?=,)" contraseñas.csv
```

### Ejemplo 5: Contrasenas alfanumericas (Guia 2, ejercicio 13)

Una contrasena alfanumerica solo contiene letras y numeros (sin caracteres especiales):

```
Regex:    (?<=,)[a-zA-Z0-9]+$
```

- `(?<=,)` - Lookbehind: verifica que hay una coma antes (para tomar solo la contrasena).
- `[a-zA-Z0-9]+` - Uno o mas caracteres alfanumericos.
- `$` - Fin de la linea (la contrasena debe terminar ahi, asegurando que NO tiene caracteres especiales).

### Ejemplo 6: Contrasenas con exactamente 14 caracteres (Guia 2, ejercicio 16)

```
Regex:    (?<=,).{14}$
```

- `(?<=,)` - Despues de la coma.
- `.{14}` - Exactamente 14 caracteres de cualquier tipo.
- `$` - Fin de la linea.

### Ejemplo 7: Contrasenas que empiezan y terminan con el mismo caracter (Guia 2, ejercicio 15)

```
Regex:    (?<=,)(.).*\1$
```

- `(?<=,)` - Despues de la coma.
- `(.)` - Captura el primer caracter.
- `.*` - Cualquier cantidad de caracteres en el medio.
- `\1` - El mismo caracter capturado al principio.
- `$` - Fin de la linea.

---

## Cheat Sheet - Resumen de Tokens

### Caracteres y Clases

| Token | Descripcion | Ejemplo |
|---|---|---|
| `abc` | Texto literal | `abc` matchea "abc" |
| `.` | Cualquier caracter (excepto `\n`) | `a.c` matchea "abc", "a1c", "a c" |
| `[abc]` | Cualquiera de los caracteres listados | `[aeiou]` matchea "a", "e", "i", "o", "u" |
| `[a-z]` | Rango de caracteres | `[a-z]` matchea cualquier minuscula |
| `[^abc]` | Cualquier caracter que NO este listado | `[^0-9]` matchea cualquier no-digito |
| `\d` | Digito (`[0-9]`) | `\d` matchea "3" |
| `\D` | No digito (`[^0-9]`) | `\D` matchea "a" |
| `\w` | Caracter de palabra (`[a-zA-Z0-9_]`) | `\w` matchea "a", "1", "_" |
| `\W` | No caracter de palabra | `\W` matchea "!", " " |
| `\s` | Espacio en blanco | `\s` matchea " ", tab |
| `\S` | No espacio en blanco | `\S` matchea "a", "1" |

### Cuantificadores

| Token | Descripcion | Ejemplo |
|---|---|---|
| `*` | Cero o mas | `ab*c` matchea "ac", "abc", "abbc" |
| `+` | Una o mas | `ab+c` matchea "abc", "abbc" |
| `?` | Cero o una | `colou?r` matchea "color", "colour" |
| `{n}` | Exactamente n | `\d{3}` matchea "123" |
| `{n,}` | Al menos n | `\d{2,}` matchea "12", "123" |
| `{n,m}` | Entre n y m | `\d{2,4}` matchea "12", "123", "1234" |

### Anclas

| Token | Descripcion | Ejemplo |
|---|---|---|
| `^` | Inicio de linea | `^Hola` matchea "Hola" solo al inicio |
| `$` | Fin de linea | `mundo$` matchea "mundo" solo al final |
| `\b` | Limite de palabra | `\bgato\b` matchea "gato" como palabra completa |
| `\B` | No limite de palabra | `\Bato\B` matchea "ato" en "gatoso" |

### Grupos y Alternancia

| Token | Descripcion | Ejemplo |
|---|---|---|
| `(abc)` | Grupo de captura | `(ab)+` matchea "abab" |
| `a\|b` | Alternancia (a o b) | `gato\|perro` matchea "gato" o "perro" |
| `\1` | Referencia al grupo 1 | `(a)\1` matchea "aa" |

### Lookahead y Lookbehind

| Token | Descripcion |
|---|---|
| `(?=...)` | Lookahead positivo |
| `(?!...)` | Lookahead negativo |
| `(?<=...)` | Lookbehind positivo |
| `(?<!...)` | Lookbehind negativo |

### Flags de `grep`

| Flag | Descripcion |
|---|---|
| `-E` | Expresiones regulares extendidas (ERE) |
| `-P` | Expresiones regulares Perl (PCRE) - soporta `\d`, `\w`, etc. |
| `-i` | Ignorar mayusculas/minusculas |
| `-o` | Mostrar solo la parte matcheada |
| `-v` | Invertir: mostrar lineas que NO matchean |
| `-c` | Contar lineas que matchean |
| `-n` | Mostrar numero de linea |
| `-w` | Matchear palabras completas |

---

> Para practicar de forma interactiva, visita [https://regex101.com/](https://regex101.com/) y selecciona el flavor **PCRE2** o **Python** para tener disponibles todos los tokens vistos en este apunte.
