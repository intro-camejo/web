---
marp: true
theme: uncover
class: invert
paginate: true
footer: "**Nicolás Riedel** | Introducción al Desarrollo de Software - Facultad de Ingeniería (UBA)"
style: |
  section {
    font-family: sans-serif;
    font-size: 28px;
  }
  footer {
  }
  section.title {
    text-align: center;
  }
  code {
    background: rgba(255,255,255,0.1);
    padding: 2px 8px;
    border-radius: 4px;
  }
---

<!-- _class: title -->

# La Terminal

![bg left:30% fit](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpC0Jih0kyf4bi1lB3kvLBm97tioJAfwZIg&s)

---

# Qué es una terminal?

- Es una interfaz de texto para comunicarse con la computadora.
- En lugar de hacer clic, escribimos **comandos**.
- También se la conoce como: consola, shell, línea de comandos, CLI.

![bg right:35%](https://media.tenor.com/GfSX-u7VGM4AAAAM/coding.gif)

---

# Un poco de historia

<style scoped>ul { font-size: 0.75em; }</style>

- En los años 60-70, las computadoras no tenían pantalla gráfica.
- Se interactuaba mediante **teletypes** (terminales físicas con teclado e impresora).
- Con el tiempo, los teletypes fueron reemplazados por pantallas con texto.
- Las terminales modernas son **emuladores** de aquellas terminales físicas.

![bg left:30% fit](https://i.sstatic.net/X2g7g.jpg)

---

# Shell vs Terminal

- **Terminal**: el programa que muestra la ventana con texto (ej: GNOME Terminal, iTerm2, Windows Terminal).
- **Shell**: el intérprete que entiende los comandos (ej: Bash, Zsh, Fish).
- La terminal es el "envoltorio", el shell es el "cerebro".

---

# Para qué sirve?

<style scoped>ul { font-size: 0.8em; }</style>

- Automatizar tareas repetitivas.
- Administrar servidores remotos (la mayoría no tienen interfaz gráfica).
- Instalar y gestionar software.
- Trabajar con Git y control de versiones.
- Compilar y ejecutar programas.
- Es **mucho más rápida** que la interfaz gráfica para muchas tareas.

---

# Por qué aprenderla?

- En la carrera la van a usar **constantemente**.
- En el mundo laboral es una herramienta esencial.
- Les da **control total** sobre la computadora.
- Todo desarrollador competente la usa a diario.

![bg right:35% fit](https://i.redd.it/5bthxrhomoj51.jpg)

---

# 10 comandos esenciales

<style scoped>table { font-size: 0.65em; } th { background: rgba(255,255,255,0.1); }</style>

| # | Comando | Qué hace |
|---|---------|----------|
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

---

# Vamos a probarlos!

Abran una terminal y sigan estos pasos:

```bash
pwd
mkdir mi-carpeta
cd mi-carpeta
touch archivo.txt
ls
cat archivo.txt
echo "Hola FIUBA!" > archivo.txt
cat archivo.txt
cp archivo.txt copia.txt
ls
mv copia.txt renombrado.txt
ls
rm renombrado.txt
ls
```

---

# Tips útiles

<style scoped>ul { font-size: 0.8em; }</style>

- **Tab**: autocompleta nombres de archivos y comandos.
- **Flecha arriba/abajo**: navega el historial de comandos.
- **Ctrl + C**: cancela la ejecución actual.
- **Ctrl + L**: limpia la pantalla (o escribir `clear`).
- **`--help`**: casi todos los comandos aceptan esta flag para ver ayuda.

---

<!-- _class: title -->

# GRACIAS!

---

## Fuentes

<style scoped>ul { font-size: 0.55em; }</style>

- [GNU Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
- [The Linux Command Line — William Shotts (libro gratuito)](https://linuxcommand.org/tlcl.php)
- [Ubuntu — The Linux command line for beginners](https://ubuntu.com/tutorials/command-line-for-beginners)
- [Teletipo — Wikipedia](https://es.wikipedia.org/wiki/Teletipo)
- [Emulador de terminal — Wikipedia](https://es.wikipedia.org/wiki/Emulador_de_terminal)
