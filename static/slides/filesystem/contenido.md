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

# Filesystem


### Sistema de archivos

![bg left:30% fit](https://static.wixstatic.com/media/eed407_693a77ef9e4b4990917f55a23d9f1f1b~mv2.jpeg/v1/fill/w_568,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/eed407_693a77ef9e4b4990917f55a23d9f1f1b~mv2.jpeg)

---

# Qué es un filesystem?

- Es la forma en que el sistema operativo **organiza y almacena** archivos en un disco.
- Define cómo se guardan, nombran y recuperan los datos.
- Sin un filesystem, el disco sería solo un conjunto de bytes sin estructura.

---

# En Unix, es un árbol

- Los filesystems Unix tienen una estructura **jerárquica** en forma de árbol.
- Todo parte de un único directorio raíz: `/`
- No existen letras de unidad como en Windows (`C:\`, `D:\`).
- Los dispositivos y discos se **montan** dentro del mismo árbol.

![bg right:35% fit](https://media.geeksforgeeks.org/wp-content/uploads/20240424105251/File-System.webp)

---

# Directorios principales

<style scoped>table { font-size: 0.65em; } th { background: rgba(255,255,255,0.1); }</style>

| Directorio | Contenido |
|------------|-----------|
| `/` | Raíz del sistema |
| `/home` | Carpetas personales de los usuarios |
| `/etc` | Archivos de configuración del sistema |
| `/bin` | Programas esenciales (ls, cp, mv...) |
| `/tmp` | Archivos temporales |
| `/var` | Datos variables (logs, caches) |
| `/usr` | Programas y bibliotecas del usuario |

---

# Rutas absolutas vs relativas

- **Ruta absoluta**: empieza desde `/` → `/home/usuario/proyecto/main.c`
- **Ruta relativa**: parte del directorio actual → `proyecto/main.c`
- `.` → directorio actual
- `..` → directorio padre

```bash
cd /home/usuario     # ruta absoluta
cd ./proyecto        # ruta relativa
cd ..                # subir un nivel
```

---

<!-- _class: title -->

# GRACIAS!

---

## Fuentes

<style scoped>ul { font-size: 0.55em; }</style>

- [Filesystem Hierarchy Standard (FHS 3.0)](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html)
- [`man hier` — descripción del árbol de directorios](https://man7.org/linux/man-pages/man7/hier.7.html)
- [Sistema de archivos — Wikipedia](https://es.wikipedia.org/wiki/Sistema_de_archivos)
- [The Linux Command Line — Cap. 2: Navegación](https://linuxcommand.org/lc3_lts0020.php)
