---
marp: true
theme: uncover
class: invert
paginate: true
footer: "**Nicolás Riedel** | Introducción al Desarrollo de Software - Facultad de Ingeniería (UBA)"
style: |
  section {
    font-family: sans-serif;
  }
  footer {
    font-size: 0.5em;
  }
  section.title {
    text-align: center;
  }
  section.split {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .pros { color: #22c55e; }
  .contras { color: #ef4444; }
  .columns ul { font-size: 0.75em; }
  .columns h3 { font-size: 1em; }
  .aceptable { color: #eab308; }
  .recomendado { color: #22c55e; }
  .no-recomendado { color: #ef4444; }
---

<!-- _class: title -->

# Introducción a Linux

![bg left:30% fit](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1280px-Tux.svg.png)

---

# Les suena?

- Qué es lo primero que piensan?
- Lo usan?

---

# TODOS LO USAN

<style scoped>ul { font-size: 0.6em; }</style>

- Las 500 supercomputadoras más potentes del mundo usan Linux (100% desde 2017)
- ~90% de la infraestructura de nube pública corre Linux: 92% de las VMs de Google Cloud, 84% de las instancias EC2 de AWS, 62% de las VMs de Azure.
- Solo en 2025, más de 5.200 desarrolladores de +1.780 organizaciones contribuyeron al kernel.
- El sistema operativo Android está basado en el kernel de Linux (>70% de los celulares del mundo).
- Los vehículos autónomos utilizan Linux.
- El sistema operativo Chrome OS de Google está construido sobre Linux.
- El 92% de los servidores con SO conocido son Unix-like.
- ~4,5% de Desktop a nivel global... y más del 10% en EEUU (subiendo rápidamente)

---

## USOS CURIOSOS

<style scoped>
h2 { margin-bottom: 0.2em; }
.curiosos {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
}
.curiosos figure {
  width: 210px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.curiosos img {
  width: 210px;
  height: 190px;
  object-fit: contain;
}
.curiosos figcaption {
  font-size: 0.42em;
  line-height: 1.3;
  text-align: center;
}
</style>

<div class="curiosos">
<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pewdiepie_head_shot.jpg/500px-Pewdiepie_head_shot.jpg" />
  <figcaption><strong>PewDiePie</strong><br/>Se pasó a Linux</figcaption>
</figure>
<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/500px-Steam_icon_logo.svg.png" />
  <figcaption><strong>Steam Deck</strong><br/>Valve metió Linux en una consola</figcaption>
</figure>
<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Star_OS-Desktop_18_11_2019_14_12_22.png/500px-Red_Star_OS-Desktop_18_11_2019_14_12_22.png" />
  <figcaption><strong>Red Star OS</strong><br/>La distro de Corea del Norte</figcaption>
</figure>
<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mars_Helicopter_Ingenuity_%28transparent_background%29.png/500px-Mars_Helicopter_Ingenuity_%28transparent_background%29.png" />
  <figcaption><strong>Ingenuity</strong><br/>Voló Linux en Marte</figcaption>
</figure>
</div>

---

## QUÉ ES?

No es un sistema operativo, es un **kernel**.

![bg left:40%](https://media.tenor.com/1_rDlopCuOAAAAAM/nerd-dog-nerd.gif)

---

## ¿Qué es un sistema operativo?

<style scoped>
ul { font-size: 0.7em; }
p { font-size: 0.8em; }
</style>

El software que gestiona los recursos:

- Reparte la CPU entre los procesos
- Administra la memoria y el disco
- Habla con el hardware (placa de video, wifi, teclado)
- Les da una interfaz para usar todo eso

Windows, macOS, Android y Ubuntu son sistemas operativos.

---

## ¿Y el kernel?

<style scoped>
ul { font-size: 0.7em; }
.stack { display: flex; flex-direction: column; gap: 8px; font-size: 0.5em; }
.stack div { border: 2px solid #64748b; border-radius: 8px; padding: 8px; }
.stack .k { border-color: #22c55e; color: #22c55e; font-weight: bold; }
</style>

Es el **núcleo** del sistema operativo: la única parte que le habla directo al hardware.

<div class="stack">
  <div>Sus programas (Chrome, VS Code, la terminal)</div>
  <div>Librerías y herramientas del sistema (GNU, etc.)</div>
  <div class="k">KERNEL — procesos, memoria, drivers, archivos</div>
  <div>Hardware</div>
</div>

---

## Entonces...

<style scoped>ul { font-size: 0.75em; }</style>

- **Linux** es solo el kernel: por sí solo no les da ni una terminal.
- Un kernel + herramientas + interfaz = un sistema operativo usable.
- Esa combinación es lo que van a instalar.
- Por eso se suele hablar de **GNU/Linux**.

---

## Entran en escena las famosas "distros"

Están implementadas sobre el kernel de Linux, cada una tiene su propio enfoque y filosofía.

Nombramos algunas?

---

###  Familia de Sistemas Operativos

![width:900px](./images/os-family-tree.png)



---

## Resumen Histórico

![width:400px](https://avatars.githubusercontent.com/u/6138677?s=280&v=4)

---

# UNIX

- Desarrollado en Bell Labs (AT&T)
- Ken Thompson y Dennis Ritchie
- C fue creado para implementar Unix
- Inspirado en Multics
- Define un universo "Unix-like"

![bg right:30% fit](https://upload.wikimedia.org/wikipedia/commons/1/1b/Ken_Thompson_and_Dennis_Ritchie--1973.jpg)

---

# GNU

<style scoped>ul { font-size: 0.7em; }</style>

- GNU Project comenzado por Richard Stallman
- Es un acrónimo recursivo (**G**NU's **N**ot **U**nix)
- Introduce el concepto de Copyleft
- Introduce la GNU General Public License
- Uno de sus objetivos originales era implementar un Unix-like abierto, pero nunca llegaron a terminar el kernel.
- Implementó herramientas como:
  - GCC, GNU-Emacs, GIMP
  - BASH, GDB, entre otros.

![bg right:30% fit](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKQS46HnlFjgtoTo3MGN2aVYad68XjtMi0QPRSa_9r8kBj0oOVgjC2AmKCMw_j8Lz1eOApaXEYgm2WKqYYD9gFZj66AvZ9vvWNGYhvQ&s=10)

---

## LLEGAMOS A LINUX

<style scoped>ul { font-size: 0.75em; }</style>

- Proyecto personal del finlandés Linus Torvalds (1991)
- Ya había flotando SOs Unix-Like, pero ninguno "free" y compatible con los Intel 386.
- Utiliza GNU General Public License
- Combinado con componentes de GNU, genera un sistema operativo funcional.

![bg right:30% fit](https://cdn.britannica.com/99/124299-050-4B4D509F/Linus-Torvalds-2012.jpg)

---

## ¿Qué significa "Unix-like"?

<style scoped>
ul { font-size: 0.7em; }
ul ul { font-size: 0.9em; }
p { font-size: 0.75em; }
</style>

Un sistema que se comporta como Unix, aunque no comparta una línea de su código.

- Siguen un estándar, **POSIX** (IEEE 1003), que define:
  - las llamadas al sistema, el shell y los permisos
  - las herramientas de siempre: `ls`, `grep`, `cd`, `chmod`...

---

# <!-- fit --> POR QUÉ LE DEDICAMOS TIEMPO DE CLASE?

<style scoped>ul { font-size: 0.75em; }</style>

- Para poder seguir la cursada van a necesitar Linux o macOS.
- A lo largo de la carrera lo van a necesitar.
- Van a tener una vida profesional más feliz y competitiva.
- Mucho más rápido, simple y robusto.
- Cada vez más usado, hace años que no tengo que recurrir a otro sistema operativo.

---

# OPCIONES DE INSTALACIÓN

<style scoped>
h1 { font-size: 1.5em; }
ol { font-size: 0.7em; }
</style>

1. **Instalar el SO**
2. **Windows Subsystem for Linux (WSL2)**
3. **Máquina Virtual (VM)**

---

##### INSTALARLO NATIVAMENTE — <span class="recomendado">RECOMENDADO</span>

<style scoped>.columns ul { font-size: 0.6em; }</style>

<div class="columns">
<div>

### <span class="pros">PROS</span>
- Instalable en prácticamente cualquier computadora.
- Mejor performance que en las otras opciones (Pueden revivir una compu vieja)
- Un sistema operativo completo, van a tener un entorno cómodo.
- Les aseguro que les va a venir 10/10 para la carrera y la vida.

</div>
<div>

### <span class="contras">CONTRAS</span>
- Más invasivo que las otras opciones.
- Requiere reemplazar el sistema operativo o realizar una partición de disco (esto es simple).


</div>
</div>

---

##### WSL — <span class="aceptable">ACEPTABLE</span>

<div class="columns">
<div>

### <span class="pros">PROS</span>
- Mucho más performante que una máquina virtual.
- Pueden abrir una terminal de Linux desde Windows.
- Instalación relativamente simple.
- Pueden correr Docker fácilmente.

</div>
<div>

### <span class="contras">CONTRAS</span>
- Demandante en hardware.
- Requiere W11 o una versión actualizada de W10.
- Siguen estando en Windows.

</div>
</div>

---

##### MÁQUINA VIRTUAL (VM) — <span class="no-recomendado">NO RECOMENDADO</span>

<div class="columns">
<div>

### <span class="pros">PROS</span>
- Opción menos invasiva.
- La más fácil de instalar.

</div>
<div>

### <span class="contras">CONTRAS</span>
- Demandante en hardware.
- No es la solución más performante.
- No van a estar cómodos para trabajar.
- Siguen estando en Windows.
- Muchas muchas, muchas, muchas otras cosas...

</div>
</div>

---

#### TAREA

Para la próxima clase traten de tener una de las opciones funcionando!

Vuelvo a repetir, si tienen **macOS** van a poder seguir las clases perfectamente.

---

<!-- _class: title -->

# GRACIAS!

La seguimos por Slack

---

## Fuentes

<style scoped>ul { font-size: 0.45em; }</style>

- [IEEE Std 1003.1 (POSIX)](https://standards.ieee.org/ieee/1003.1/7700/)
- [POSIX — The Open Group Base Specifications Issue 8](https://pubs.opengroup.org/onlinepubs/9799919799/)
- [Unix-like — Wikipedia](https://es.wikipedia.org/wiki/Unix-like)
- [Microsoft — ¿Qué es WSL?](https://learn.microsoft.com/es-es/windows/wsl/about)
- [Núcleo (informática) — Wikipedia](https://es.wikipedia.org/wiki/N%C3%BAcleo_(inform%C3%A1tica))
- [GNU — Linux y el sistema GNU](https://www.gnu.org/gnu/linux-and-gnu.es.html)
- [TOP500 — Lista de junio 2026](https://www.top500.org/lists/top500/2026/06/)
- [Cloud Provider Linux Usage Breakdown (2026)](https://commandlinux.com/statistics/cloud-provider-linux-usage-breakdown/)
- [Linux Foundation — Kernel Development Report](https://www.linuxfoundation.org/blog/blog/linux-kernel-report-more-contributors-than-ever)
- [W3Techs — Linux Web Server Market Share](https://fosspost.org/linux-web-server-market-share/)
- [StatCounter — Linux supera el 10% en EEUU](https://linuxiac.com/linux-desktop-market-share-surpasses-10-in-north-america/)
