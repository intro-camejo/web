---
sidebar_position: 2
---

# La Terminal

## ¿Qué es una terminal?

Es una interfaz de texto para comunicarse con la computadora: en lugar de hacer clic, escribís **comandos**. También vas a escucharla nombrar como consola, línea de comandos o CLI (*Command Line Interface*).

## Un poco de historia

En los años 60 y 70 las computadoras no tenían pantalla gráfica. Se interactuaba con ellas mediante **teletipos**: terminales físicas con teclado e impresora, que después fueron reemplazadas por pantallas de texto. Las terminales que usamos hoy son **emuladores** de aquellas terminales físicas, de ahí el nombre.

## Shell y terminal no son lo mismo

Son dos cosas distintas que solemos usar juntas:

- **Terminal**: el programa que te muestra la ventana con texto. Por ejemplo GNOME Terminal, iTerm2 o Windows Terminal.
- **Shell**: el intérprete que entiende lo que escribís y lo ejecuta. Por ejemplo Bash, Zsh o Fish.

Dicho corto: la terminal es el envoltorio y el shell es el cerebro.

## ¿Para qué sirve?

- Automatizar tareas repetitivas.
- Administrar servidores remotos, que en su gran mayoría no tienen interfaz gráfica.
- Instalar y gestionar software.
- Trabajar con Git y control de versiones.
- Compilar y ejecutar programas.

Para muchas de estas tareas es bastante más rápida que la interfaz gráfica.

## ¿Por qué aprenderla?

La vas a usar constantemente durante la carrera y en el mundo laboral es una herramienta esencial: te da control total sobre la computadora y todo desarrollador competente la usa a diario.

## 10 comandos esenciales

| # | Comando | Qué hace |
| --- | --- | --- |
| 1 | `pwd` | Muestra en qué directorio estás |
| 2 | `ls` | Lista archivos y carpetas |
| 3 | `cd` | Cambia de directorio |
| 4 | `mkdir` | Crea un directorio nuevo |
| 5 | `touch` | Crea un archivo vacío |
| 6 | `cat` | Muestra el contenido de un archivo |
| 7 | `cp` | Copia archivos o carpetas |
| 8 | `mv` | Mueve o renombra archivos |
| 9 | `rm` | Elimina archivos o carpetas |
| 10 | `man` | Muestra el manual de un comando |

## Vamos a probarlos

Abrí una terminal y seguí estos pasos:

```bash
pwd                          # ¿dónde estoy?
mkdir mi-carpeta             # creo una carpeta
cd mi-carpeta                # me meto adentro
touch archivo.txt            # creo un archivo vacío
ls                           # lo veo listado
cat archivo.txt              # está vacío, no muestra nada
echo "Hola FIUBA!" > archivo.txt   # le escribo algo
cat archivo.txt              # ahora sí muestra el texto
cp archivo.txt copia.txt     # lo copio
ls
mv copia.txt renombrado.txt  # renombro la copia
ls
rm renombrado.txt            # la borro
ls
```

:::warning
`rm` no manda nada a la papelera: lo que borrás, se borra. Pensá dos veces antes de usarlo, sobre todo con la flag `-r`.
:::

## Tips útiles

- **Tab**: autocompleta nombres de archivos y comandos. Usalo siempre, escribís menos y te equivocás menos.
- **Flechas arriba y abajo**: navegan el historial de comandos.
- **Ctrl + C**: cancela la ejecución actual.
- **Ctrl + L**: limpia la pantalla (equivale a escribir `clear`).
- **`--help`**: casi todos los comandos aceptan esta flag para mostrar una ayuda rápida.

## Fuentes

- [GNU Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
- [The Linux Command Line — William Shotts (libro gratuito)](https://linuxcommand.org/tlcl.php)
- [Ubuntu — The Linux command line for beginners](https://ubuntu.com/tutorials/command-line-for-beginners)
- [Teletipo — Wikipedia](https://es.wikipedia.org/wiki/Teletipo)
- [Emulador de terminal — Wikipedia](https://es.wikipedia.org/wiki/Emulador_de_terminal)
