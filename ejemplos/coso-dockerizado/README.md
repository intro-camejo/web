# Coso Dockerizado 🐳

Ejemplo práctico para la clase de **Introducción a Docker** de **Intro Camejo (FIUBA)**.

Este "coso" es una aplicación web interactiva en Python que corre dentro de un contenedor Docker aislado. Muestra información en tiempo real del contenedor (hostname/ID aislado, sistema operativo, arquitectura, uptime) e incluye un módulo de prueba para cámaras web (vinculado al caso de uso de software de videovigilancia y streaming).

---

## Cómo correrlo

### Opción A: Con Docker directo

1. **Construir la imagen:**
   ```bash
   docker build -t coso-dockerizado .
   ```

2. **Ejecutar el contenedor:**
   ```bash
   docker run -d -p 8000:8000 --name mi-coso coso-dockerizado
   ```

3. Abrí tu navegador en [http://localhost:8000](http://localhost:8000).

4. **Para detenerlo y limpiarlo:**
   ```bash
   docker stop mi-coso
   docker rm mi-coso
   ```

---

### Opción B: Con Docker Compose (Recomendado)

1. **Levantar el servicio:**
   ```bash
   docker compose up --build
   ```

2. Abrí [http://localhost:8000](http://localhost:8000).

3. **Para detenerlo:**
   Presioná `Ctrl + C` o corré:
   ```bash
   docker compose down
   ```

---

## ¿Qué demuestra este ejemplo?

- **Aislamiento de procesos y nombres:** El `Hostname` mostrado no es el nombre de tu computadora personal, sino el identificador efímero generado por Docker.
- **Portabilidad:** Corre exactamente igual en Linux, macOS o Windows (con WSL2).
- **Cero dependencias locales:** No necesitás tener Python instalado en tu máquina física; todo vive dentro de la imagen `python:3.12-alpine`.
- **Mapeo de puertos:** El flag `-p 8000:8000` conecta el puerto `8000` de tu máquina anfitriona con el puerto `8000` del contenedor.
