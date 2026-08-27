---
marp: true
theme: default
paginate: true
---

# Bash Parte 2
## Clase del 27 de Agosto

---

# ¿Qué vimos hasta ahora?

- **Estructuras de Control**: `if` con `[[ ]]`, `while`.
- **Interacción**: `read` para pedir datos al usuario.
- **Aritmética**: Operaciones matemáticas en bash.
- **Organización**: Funciones.

---

# Recordando: `if` con `[[ ]]`

El doble corchete `[[ ]]` es una mejora de bash sobre el `[ ]` tradicional.
- Es más seguro con variables vacías o con espacios.
- Permite operadores lógicos `&&` y `||` dentro.
- Soporta *pattern matching* (ej: `[[ $var == *.txt ]]`).

```bash
read -p "Ingresá un nombre: " nombre

if [[ $nombre == "Admin" ]]; then
    echo "¡Bienvenido Administrador!"
elif [[ -z $nombre ]]; then
    echo "No ingresaste nada."
fi
```

---

# Recordando: Aritmética y `read`

Podemos hacer operaciones matemáticas usando `(( ))` o `$(( ))`:

```bash
read -p "Ingresá el primer número: " num1
read -p "Ingresá el segundo número: " num2

suma=$((num1 + num2))

if [[ $suma -gt 10 ]]; then
    echo "La suma ($suma) es mayor a 10"
fi
```

---

# Profundizando: Subshells `$()`

Un subshell `$()` ejecuta un comando y **captura su salida** para usarla en una variable o como argumento de otro comando.

```bash
# Guardar la fecha actual en una variable
fecha_actual=$(date +%Y-%m-%d)
echo "Hoy es: $fecha_actual"

# Listar la cantidad de archivos
cantidad=$(ls -l | wc -l)
echo "Hay $cantidad líneas en el output"
```

*Nota:* Eviten usar las comillas invertidas `` `comando` ``. `$()` es moderno, más legible y permite anidar comandos.

---

# Completando: Redirecciones

Todo proceso tiene 3 canales estándar:
1. **stdin** (Entrada, 0)
2. **stdout** (Salida normal, 1)
3. **stderr** (Salida de errores, 2)

```bash
# Sobrescribe el archivo con la salida (stdout)
echo "Hola" > archivo.txt

# Agrega al final del archivo (stdout)
echo "Mundo" >> archivo.txt

# Redirige los errores (stderr) al archivo de log
ls /directorio/inexistente 2> errores.log
```

---

# Completando: Pipelines (`|`)

El pipeline (`|`) conecta la **salida estándar (stdout)** del comando de la izquierda con la **entrada estándar (stdin)** del comando de la derecha.

```bash
# ls lista los archivos, grep filtra los que tienen ".txt"
ls -l | grep ".txt"

# cat lee el archivo, wc -l cuenta las líneas
cat mi_archivo.txt | wc -l
```

¡Es la base de la filosofía UNIX! Pequeñas herramientas que hacen bien una sola cosa, conectadas entre sí.

---

# Siguiente tema: Regex

Las Expresiones Regulares son una herramienta fundamental en UNIX para buscar y manipular patrones de texto de forma avanzada.

<div style="display:flex; align-items:center; justify-content:center; gap: 30px; margin-top:40px;">
  <img src="img/gonza.jpeg" style="width: 200px; height: 200px; object-fit: cover; border-radius: 50%; border: 4px solid var(--accent);" />
  <div style="text-align: left;">
    <h3 style="margin: 0; font-size: 1.5em; color: var(--accent);">Gonza</h3>
    <p style="margin: 0; font-size: 1.2em; color: var(--muted);">Toma la posta 🚀</p>
  </div>
</div>

---

# Fin del Repaso
## ¡A programar!
