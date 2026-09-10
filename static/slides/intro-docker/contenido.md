---
marp: true
theme: default
class: default
paginate: true
---

# Introducción a Docker

---

## ¿Les suena?

- ¿Qué es lo primero que piensan?
- ¿Lo usan?

---

![No tan rapido macuin](img/macuin.png)

---

# TENEMOS QUE REPASAR ALGUNAS COSITAS ANTES

---

## ¿Qué partes tiene una compu?

![Partes de una compu](img/partes-compu.png)

---

## Componentes Internos

![Hardware Interno](img/hardware.png)

---

## ¿Qué pasa cuando desconectamos y volvemos a conectar la compu?

![Enchufe](img/enchufe.png)

---

## Procesos

*Lo pasamos muy por arriba*

- ¿Qué ven si escriben `top` en sus terminales?

![Procesos](img/procesos.png)

---

## ¿Alguna vez jugaron Minecraft?

- ¿Qué cosas se acuerdan?
- ¿Jugaron Online?

---

## ¿Qué hace falta para jugar online?

- ¿Qué necesito para jugar con mis amigos?
- ¿Puedo jugar gratis?
- ¿En algunos casos anda mal?

---

## Estructura Cliente-Servidor

Siguiendo el ejemplo anterior...
- ¿Cuáles son los clientes y cuál es el servidor?
- ¿Cómo se hablan?

![Cliente Servidor](img/cliente-servidor.png)

---

## ¿Qué necesito para conectarme al servidor?

¿Se acuerdan?

![IP Router](img/ip-router.png)

---

## Puertos

- ¿Suenan?
- ¿A qué nivel creen que se encuentran?
- ¿Cómo sabe mi computadora cuáles conexiones quieren hablar con el Minecraft?

Así como nuestra computadora puede tener muchos procesos, estos procesos hacen uso de puertos.

*Quédense tranquilos que con la práctica lo vamos a dejar más en claro.*

---

# ¡Recreo!
## Después del intervalo vamos a hablar de Docker

---

# Docker

---

## El problema de las instalaciones

Si yo les digo que se tienen que instalar Minecraft...
- ¿Por dónde arrancan?
- Necesitamos Java... ¿Qué versión?

Para este tipo de situaciones, nos viene a ayudar **Docker**.

---

## Aplicaciones Contenerizadas

![Arquitectura Docker](img/arquitectura-docker.png)

---

## ¿Qué es un container?

Un container contiene el código y las dependencias necesarias para correr una aplicación de manera independiente.

Containers isolate software from its environment and ensure that it works uniformly despite differences for instance between development and staging.

![Docker Whale](img/docker-whale.png)

---

## Container vs Image

- **Container:** es cuando se está ejecutando.
- **Imagen:** es el conjunto que define dependencias y código.

![Container vs Image](img/container-image.png)

---

## ¿Cómo los definimos?

Declarativamente usando un `Dockerfile`.

```dockerfile
FROM ubuntu:14.04
RUN apt-get update
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get -qqy install git
```

---

## ¿Qué necesitamos?

### Linux
Docker Engine

### Mac
Docker Desktop

### Windows
WSL2 & Docker Desktop

---

## Tarea

- Poder correr `docker run hello-world`
- Responder las siguientes preguntas:
  - ¿Qué es un volumen, para qué sirve?
  - ¿Qué es docker-compose, para qué sirve?
- Levantar la web de la Materia
- Levantar servidor de Minecraft (Extra)

**Ver para la clase que viene:**
<iframe width="560" height="315" src="https://www.youtube.com/embed/CV_Uf3Dq-EU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# GRACIAS!
## La seguimos por Slack
