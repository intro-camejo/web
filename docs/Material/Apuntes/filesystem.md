---
sidebar_position: 3
---

# Filesystem

## ¿Qué es un filesystem?

Un **filesystem** (o sistema de archivos) es la forma en que el sistema operativo organiza y almacena los archivos en un disco: define cómo se guardan, cómo se nombran y cómo se recuperan los datos. Sin un filesystem, el disco sería solamente un conjunto de bytes sin estructura.

## En Unix, es un árbol

Los filesystems de los sistemas Unix tienen una estructura **jerárquica** en forma de árbol:

- Todo parte de un único directorio raíz: `/`.
- No existen letras de unidad como en Windows (`C:\`, `D:\`).
- Los discos y dispositivos que conectás se **montan** dentro de ese mismo árbol, en algún directorio.

## Directorios principales

| Directorio | Contenido |
| --- | --- |
| `/` | Raíz del sistema |
| `/home` | Carpetas personales de los usuarios |
| `/etc` | Archivos de configuración del sistema |
| `/bin` | Programas esenciales (`ls`, `cp`, `mv`...) |
| `/tmp` | Archivos temporales |
| `/var` | Datos variables (logs, caches) |
| `/usr` | Programas y bibliotecas del usuario |

## Rutas absolutas y relativas

Para ubicar un archivo dentro del árbol usamos rutas, y hay dos formas de escribirlas:

- **Ruta absoluta**: empieza desde la raíz, por ejemplo `/home/usuario/proyecto/main.c`. Siempre apunta al mismo lugar, sin importar dónde estés parado.
- **Ruta relativa**: parte del directorio actual, por ejemplo `proyecto/main.c`.

Para las rutas relativas hay dos atajos que conviene tener a mano:

- `.` es el directorio actual.
- `..` es el directorio padre.

```bash
cd /home/usuario     # ruta absoluta
cd ./proyecto        # ruta relativa
cd ..                # subir un nivel
pwd                  # ver la ruta absoluta de donde estoy
```

## Fuentes

- [Filesystem Hierarchy Standard (FHS 3.0)](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html)
- [`man hier` — descripción del árbol de directorios](https://man7.org/linux/man-pages/man7/hier.7.html)
- [Sistema de archivos — Wikipedia](https://es.wikipedia.org/wiki/Sistema_de_archivos)
- [The Linux Command Line — Cap. 2: Navegación](https://linuxcommand.org/lc3_lts0020.php)
