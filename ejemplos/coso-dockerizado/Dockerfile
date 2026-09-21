# 1. Imagen base: Linux Alpine ultraliviano con Python
FROM python:3.12-alpine

# 2. Directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos el código de la aplicación
COPY app.py .

# 4. Buenas prácticas: crear y usar un usuario sin privilegios
RUN adduser -D cosouser && chown -R cosouser:cosouser /app
USER cosouser

# 5. Puerto que expone el contenedor
EXPOSE 8000

# 6. Comando por defecto al levantar el contenedor
CMD ["python", "app.py"]
