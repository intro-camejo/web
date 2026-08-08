# Respuestas - Guía de ejercicios SQL

***Nota**: estas respuestas son únicamente a modo de ejemplo. Puede ser que al ver la guía resuelvas los ejercicios de manera diferente, y estarán bien siempre y cuando cumplan con los requisitos del enunciado. ¡Ante cualquier duda o consulta, no dudes en preguntar!*

## Nivel 0

**1. Todas las bandas musicales con sus respectivos campos (todos).**

```sql
SELECT * FROM bandas;
``` 

**2. Solo el nombre y el país de origen de todas las bandas.**

```sql
SELECT nombre, pais_origen FROM bandas;
```

**3. El nombre y la fecha de creación de todas las bandas, ordenadas por fecha de creación (de más reciente a más antiguo).**

```sql
SELECT nombre, fecha_creacion FROM bandas
ORDER BY fecha_creacion DESC;
```

**4. El nombre y el país de origen de todas las bandas que son del género "Rock".**

```sql
SELECT nombre, pais_origen FROM bandas
WHERE genero = 'Rock';
```

**5. Todos los álbumes con sus respectivos campos (todos).**

```sql
SELECT * FROM albumes;
```

**6. Solo el nombre y la duración de todos los álbumes, ordenados por orden alfabético de nombre (de A a Z).**

```sql
SELECT nombre, duracion FROM albumes
ORDER BY nombre ASC;
```

**7. El ranking y el nombre de todos los álbumes, ordenados de mejor (1) a peor ranking.**

```sql
SELECT ranking, nombre FROM albumes
ORDER BY ranking ASC;
```

**8. El nombre y la duración de todas las canciones, ordenadas por duración (de más larga a más corta).**

```sql
SELECT nombre, duracion FROM canciones
ORDER BY duracion DESC;
```

**9. El nombre y fecha de todos los conciertos, ordenados por fecha (de más antiguo a más reciente).**

```sql
SELECT nombre, fecha FROM conciertos
ORDER BY fecha ASC;
```

## Nivel 1

**1. El nombre y el país de origen de todas las bandas que tienen exactamente 5 integrantes.**

```sql
SELECT nombre, pais_origen FROM bandas
WHERE cant_integrantes = 5;
```

**2. El nombre y la duración de todos los álbumes que tienen una duración mayor a 40 minutos.**

```sql
SELECT nombre, duracion FROM albumes
WHERE duracion > 40;
```

**3. El nombre y la duración de todas las canciones que tienen una duración menor o igual a 3 minutos.**

```sql
SELECT nombre, duracion FROM canciones
WHERE duracion <= 3;
```

**4. El nombre y la fecha de todos los conciertos que se realizaron en el país "Argentina".**

```sql
SELECT nombre, fecha FROM conciertos
WHERE pais = 'Argentina';
```

**5. El nombre y el ranking de los mejores 7 álbumes de la historia (según *fulanito*), ordenados alfabéticamente por nombre (de A a Z).**

```sql
SELECT nombre, ranking FROM albumes
ORDER BY ranking ASC
LIMIT 7;
```

**Nota:** En este caso, el ordenamiento por nombre alfabético no es necesario si se quiere priorizar el ranking. Si se desea ordenar alfabéticamente, se puede usar `ORDER BY nombre ASC, ranking ASC` para mantener ambos criterios.

## Nivel 2 

**1. El nombre y ranking de las peores 5 canciones de la historia (según fulanito), ordenadas de peor a mejor ranking (¡la peor va primero!).**

```sql
SELECT nombre, ranking FROM canciones
ORDER BY ranking DESC
LIMIT 5;
```

**2. El nombre de todos los álbumes de la banda "The Beatles".**

```sql
SELECT a.nombre FROM albumes a
JOIN bandas b ON a.banda_id = b.id
WHERE b.nombre = 'The Beatles';
```

**3. El nombre de todas las bandas que tienen al menos un álbum lanzado antes o en el año 1980.**

```sql
SELECT DISTINCT b.nombre FROM bandas b
JOIN albumes a ON b.id = a.banda_id
WHERE a.lanzamiento <= 1980;
```

**4. El nombre y la fecha de los conciertos que se realizaron en el país "Argentina" y que tuvieron lugar antes del año 2010.**

```sql
SELECT nombre, fecha FROM conciertos
WHERE pais = 'Argentina' AND fecha < 2010;
```

**5. La suma de la duración de todas las canciones de la banda "Queen".**

```sql
SELECT SUM(c.duracion) AS duracion_total FROM canciones c
JOIN bandas b ON c.banda_id = b.id
WHERE b.nombre = 'Queen';
```

**6. La suma de la duración de todos los álbumes de la banda "The Rolling Stones".**

```sql
SELECT SUM(a.duracion) AS duracion_total FROM albumes a
JOIN bandas b ON a.banda_id = b.id
WHERE b.nombre = 'The Rolling Stones';
```

**7. El nombre de los conciertos a los cuales asistió la banda "Dire Straits".**

```sql
SELECT c.nombre FROM conciertos c
JOIN conciertos_musicos cm ON c.id = cm.concierto_id
JOIN bandas b ON cm.banda_id = b.id
WHERE b.nombre = 'Dire Straits';
```

**8. El nombre de las bandas que tienen al menos un álbum con una duración menor a 40 minutos.**

```sql
SELECT DISTINCT b.nombre FROM bandas b
JOIN albumes a ON b.id = a.banda_id
WHERE a.duracion < 40;
```

## Nivel 3

**1. El nombre de las bandas cuyos álbumes (todos) duran más de 50 minutos.**

```sql
SELECT b.nombre
FROM bandas b
WHERE NOT EXISTS (
    SELECT 1 FROM albumes a
    WHERE a.banda_id = b.id AND a.duracion <= 50
);
```

**2. El nombre de las canciones (con el nombre del álbum) que pertenecen a álbumes lanzados después del año 2000. Ordenarlas por nombre de álbum (de A a Z), y por cada álbum, por nombre de canción (de Z a A).**

```sql
SELECT c.nombre AS cancion, a.nombre AS album
FROM canciones c
JOIN albumes a ON c.album_id = a.id
WHERE a.lanzamiento > 2000
ORDER BY a.nombre ASC, c.nombre DESC;
```

**3. El nombre de las bandas con menos de 5 integrantes y de género "Rock Alternativo", cuyas canciones duran 4 o más minutos (todas ellas).**

```sql
SELECT DISTINCT b.nombre
FROM bandas b
WHERE b.cant_integrantes < 5 AND b.genero = 'Rock Alternativo'
AND NOT EXISTS (
    SELECT 1 FROM canciones c
    WHERE c.banda_id = b.id AND c.duracion < 4
);
```

**4. El concierto con más bandas participantes, mostrando el nombre del concierto y la cantidad de bandas que participaron.**

```sql
SELECT c.nombre, COUNT(*) AS cantidad_bandas
FROM conciertos c
JOIN conciertos_musicos cm ON c.id = cm.concierto_id
GROUP BY c.id
ORDER BY cantidad_bandas DESC
LIMIT 1;
```

**5. El nombre de los álbumes cuyas bandas fueron al menos a un concierto en el país "Argentina", ordenados por ranking de mejor a peor.**

```sql
SELECT a.nombre
FROM albumes a
WHERE a.banda_id IN (
    SELECT DISTINCT cm.banda_id
    FROM conciertos_musicos cm
    JOIN conciertos c ON cm.concierto_id = c.id
    WHERE c.pais = 'Argentina'
)
ORDER BY a.ranking ASC;
```

**6. La cantidad de canciones que tiene cada banda, ordenadas de mayor a menor cantidad de canciones. Mostrar el nombre de la banda y la cantidad de canciones.**

```sql
SELECT b.nombre, COUNT(*) AS cantidad_canciones
FROM bandas b
JOIN canciones c ON b.id = c.banda_id
GROUP BY b.id
ORDER BY cantidad_canciones DESC;
```

## Nivel 4 (Uy, qué está pasando?)

**1. El primer álbum de todas las bandas. Mostrar el nombre de la banda, del álbum y el año de lanzamiento.**

```sql
SELECT b.nombre AS banda, a.nombre AS album, a.lanzamiento
FROM albumes a
JOIN bandas b ON a.banda_id = b.id
WHERE a.lanzamiento = (
    SELECT MIN(a2.lanzamiento) -- o MAX para el último álbum
    FROM albumes a2
    WHERE a2.banda_id = a.banda_id
);
```
**2. La cantidad promedio de integrantes de las bandas por cada género musical. Mostrar el género y la cantidad promedio de integrantes.**

```sql
SELECT genero, ROUND(AVG(cant_integrantes), 2) AS promedio_integrantes
FROM bandas
GROUP BY genero;
```

**3. El nombre de las bandas que participaron en todos los conciertos que ocurrieron en el país "Argentina".**

```sql
SELECT b.nombre
FROM bandas b
WHERE NOT EXISTS ( -- Si existe algún concierto argentino donde la banda
                   -- no participó, no la incluimos
    SELECT 1 
    FROM conciertos c
    WHERE c.pais = 'Argentina'
    AND NOT EXISTS (
        SELECT 1
        FROM conciertos_musicos cm
        WHERE cm.concierto_id = c.id AND cm.banda_id = b.id
    )
);
```

**4. Las bandas cuyo promedio de duración de canciones es mayor a 5 minutos. Mostrar el nombre de la banda y el promedio de duración de sus canciones.**

```sql
SELECT b.nombre, ROUND(AVG(c.duracion), 2) AS promedio_duracion
FROM bandas b
JOIN canciones c ON b.id = c.banda_id
GROUP BY b.id
HAVING AVG(c.duracion) > 5;
```

**5. El nombre de las bandas que no tienen conciertos registrados.**

```sql
SELECT b.nombre
FROM bandas b
WHERE b.id NOT IN (
    SELECT DISTINCT cm.banda_id
    FROM conciertos_musicos cm
);
```

**6. El nombre y ranking de los álbumes que tienen todas sus canciones con un ranking peor o igual a 30.**

```sql
SELECT a.nombre, a.ranking
FROM albumes a
WHERE NOT EXISTS (
    SELECT 1 FROM canciones c
    WHERE c.album_id = a.id AND c.ranking <= 30
);
```

**7. El nombre de las bandas que tienen a más de la mitad de sus canciones con un ranking peor o igual a 30. Mostrar también (para cada banda) la cantidad de canciones rankeadas peor o igual a 30, así como el promedio de ranking de TODAS las canciones de la banda.**

```sql
SELECT b.nombre,
       COUNT(CASE WHEN c.ranking > 30 THEN 1 END) AS cantidad_rankeadas,
       ROUND(AVG(c.ranking), 2) AS promedio_ranking
FROM bandas b
JOIN canciones c ON b.id = c.banda_id
GROUP BY b.id
HAVING COUNT(CASE WHEN c.ranking > 30 THEN 1 END) > COUNT(*) / 2;
```

**8. El nombre de las bandas que no tienen ninguna canción dentro del TOP 10 de canciones (según *fulanito*). Mostrar también el promedio de ranking de todas las canciones de la banda, y ranking mínimo de ellas (es decir, el de su mejor canción).**

```sql
SELECT b.nombre, ROUND(AVG(c.ranking), 2) AS promedio_ranking, 
       MIN(c.ranking) AS ranking_minimo
FROM bandas b
JOIN canciones c ON b.id = c.banda_id
GROUP BY b.id
HAVING MIN(c.ranking) > 10; -- Aseguramos que no tengan canciones en el TOP 10
```

**9. El nombre de las canciones cuyo ranking es mejor que el ranking del álbum al que pertenecen. Mostrar también el ranking de la canción, así como el nombre del álbum y su ranking. Ordenar por ranking de canción (de mejor a peor).**

```sql
SELECT c.nombre AS cancion, c.ranking AS ranking_cancion,
       a.nombre AS album, a.ranking AS ranking_album
FROM canciones c
JOIN albumes a ON c.album_id = a.id
WHERE c.ranking < a.ranking
ORDER BY c.ranking ASC;
```

**10. Las bandas y los conciertos donde el concierto se realizó en el país de origen de la banda. Mostrar (en este orden) el nombre de la banda, el del concierto, y el país de origen de la banda.**

```sql
SELECT b.nombre AS banda, c.nombre AS concierto, b.pais_origen
FROM bandas b
JOIN conciertos_musicos cm ON b.id = cm.banda_id
JOIN conciertos c ON cm.concierto_id = c.id
WHERE c.pais = b.pais_origen;
```