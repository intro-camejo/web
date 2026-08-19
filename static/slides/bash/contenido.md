---
marp: true
theme: default
paginate: true
---

# Introducción a Bash
## GNU Bash (Bourne Again Shell)

---

# Historia: de Bourne a Bash

- En 1979, **Stephen Bourne** creó el **Bourne Shell (`sh`)** para UNIX.
- Fue el estándar durante años, pero tenía código cerrado.
- En 1989, **Brian Fox** creó **Bash (Bourne *Again* Shell)** para el proyecto GNU.
- Diseñado como un reemplazo 100% libre, compatible y muy mejorado.

---

# ¿Qué es Bash?

- **Bash** es un intérprete de comandos y lenguaje de scripting.
- Creado como una mejora del Bourne Shell (`sh`).
- Permite la interacción entre el usuario y el sistema operativo.
- Interpreta comandos y devuelve resultados (éxito o error).

---

# Entradas y Salidas Estándar

- **stdin**: Entrada estándar (teclado, archivos).
- **stdout**: Salida estándar (terminal, archivos).
- **stderr**: Salida de errores estándar.

---

# Variables en Bash

- Se definen sin espacios alrededor del signo `=`.
- Se accede a su valor anteponiendo el signo `$`.

```bash
nombre="José"
edad=30
echo "Mi nombre es $nombre y tengo $edad años."
```

- **Variables de Entorno**: `$HOME`, `$PATH`, `$USER`.
- **Variables Especiales**: `$0` (nombre del script), `$1`, `$2` (argumentos), `$?` (código de salida del último comando).

---

# Redirecciones y Pipelines

- `>`: Sobrescribe el archivo con la salida.
- `>>`: Añade al final del archivo.
- `<`: Usa un archivo como entrada.

```bash
echo "Hola" > archivo.txt
echo "Mundo" >> archivo.txt
```

- **Pipelines (`|`)**: Envía la salida de un comando como entrada de otro.

```bash
ls -l | grep ".txt"
```

---

# Condicionales: `if`

```bash
if [ condicion ]; then
    # comandos
elif [ otra_condicion ]; then
    # comandos
else
    # comandos
fi
```
- Operadores numéricos: `-eq` (igual), `-ne` (distinto), `-gt` (mayor), `-lt` (menor).

---

# Condicionales: `case`

Manejo de múltiples opciones ordenadas.

```bash
case variable in
    patrón1)
        comandos ;;
    patrón2)
        comandos ;;
    *)
        comandos_por_defecto ;;
esac
```

---

# Bucles: `for` y `while`

**For**:
```bash
for variable in secuencia; do
    comandos
done
```

**While** (se ejecuta mientras la condición sea verdadera):
```bash
while [ condicion ]; do
    comandos
done
```

---

# Funciones

Permiten organizar y reutilizar código en Bash.

```bash
saludar() {
    local nombre=$1
    echo "¡Hola, $nombre!"
}

saludar "Mundo"
```

---

# Ejercicios de Práctica (1/2)

1. Crear un script que le solicite al usuario el ingreso de un número e indicar si es mayor, menor o igual a 0.
2. Crear un script que reciba un número entero e indique si el número es par o impar.
3. Crear un script que le solicite al usuario su nombre y apellido (por separado) y lo imprima junto.

---

# Ejercicios de Práctica (2/2)

4. Crear un script que imprima los primeros *n* números naturales (solicitando *n* al usuario).
5. Crear un script que muestre un menú de calculadora (sumar, restar, multiplicar, dividir) usando `case` para ejecutar la opción elegida.

---

# Fin de la Presentación
