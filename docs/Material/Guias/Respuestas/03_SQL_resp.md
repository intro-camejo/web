---
draft: false
---

# Guía 3 - SQL (Respuestas)

***Nota**: estas respuestas son únicamente a modo de ejemplo. Puede ser que al ver la guía resuelvas los ejercicios de manera diferente, y estarán bien siempre y cuando cumplan con los requisitos del enunciado. ¡Ante cualquier duda o consulta, no dudes en preguntar!*

## Parte 1: Creación y manipulación de datos

**1. Crear la tabla `bandas`**

```sql
CREATE TABLE bandas (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    pais_origen TEXT NOT NULL,
    fecha_creacion INTEGER NOT NULL,
    genero TEXT NOT NULL,
    cant_integrantes INTEGER NOT NULL
);
```

**2. Crear las tablas `albumes`, `canciones` y `conciertos`**

```sql
CREATE TABLE albumes (
    id SERIAL PRIMARY KEY,
    banda_id INTEGER NOT NULL REFERENCES bandas(id),
    nombre TEXT NOT NULL,
    lanzamiento INTEGER NOT NULL,
    duracion INTEGER NOT NULL,
    ranking INTEGER UNIQUE NOT NULL
);

CREATE TABLE canciones (
    id SERIAL PRIMARY KEY,
    banda_id INTEGER NOT NULL REFERENCES bandas(id),
    album_id INTEGER NOT NULL REFERENCES albumes(id),
    nombre TEXT NOT NULL,
    duracion INTEGER NOT NULL,
    ranking INTEGER UNIQUE NOT NULL
);

CREATE TABLE conciertos (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    pais TEXT NOT NULL,
    fecha INTEGER NOT NULL
);
```

**3. Crear la tabla `conciertos_musicos`**

```sql
CREATE TABLE conciertos_musicos (
    concierto_id INTEGER NOT NULL REFERENCES conciertos(id),
    banda_id INTEGER NOT NULL REFERENCES bandas(id),
    PRIMARY KEY (concierto_id, banda_id)
);
```

:::note
Esta tabla representa una **relación muchos a muchos entre conciertos y bandas**, ya que una banda puede participar en varios conciertos y un concierto puede tener varias bandas. Para definir la `PRIMARY KEY`, usamos la combinación de `concierto_id` y `banda_id`, lo que asegura que no se repita la misma banda en el mismo concierto. Adicionalmente, si solo definiéramos `concierto_id` como clave primaria, no podríamos registrar más de una banda por concierto, y si solo definiéramos `banda_id` como clave primaria, no podríamos registrar más de un concierto por banda.
:::

**4. Modificación de estructura con `website`**

- Agregar una columna `website` a la tabla `bandas`:

```sql
ALTER TABLE bandas
ADD COLUMN website TEXT;
```

- Eliminar la columna `website` de la tabla `bandas`:

```sql
ALTER TABLE bandas
DROP COLUMN website;
```

**5. Insertar datos en `bandas`, `albumes` y `canciones`**

```sql
INSERT INTO bandas (nombre, pais_origen, fecha_creacion, genero, cant_integrantes)
VALUES ('The Beatles', 'Reino Unido', 1960, 'Rock', 4);

INSERT INTO albumes (banda_id, nombre, lanzamiento, duracion, ranking)
VALUES (1, 'Abbey Road', 1969, 47, 1);

INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking)
VALUES 
    (1, 1, 'Come Together', 4, 5),
    (1, 1, 'Something', 3, 12);
```

:::note
Aquí asumimos que el ID de "**The Beatles**" es **1**, y que el ID del álbum "**Abbey Road**" también es **1**. En un escenario real, deberíamos **obtener estos IDs después de insertar los registros**, por ejemplo, utilizando consultas en las tablas `bandas` y `albumes` para obtener los IDs correspondientes antes de insertar las canciones.
:::

**6. Actualización de datos en `albumes` y `bandas`**

```sql
UPDATE albumes
SET duracion = 45
WHERE nombre = 'Abbey Road';

UPDATE bandas
SET cant_integrantes = cant_integrantes + 1
WHERE genero = 'Rock';
```

**7. Eliminación de datos en `canciones` y `bandas`**

- Eliminar canciones con duración **menor a 2 minutos**:

```sql
DELETE FROM canciones
WHERE duracion <= 2;
```

- Intentar eliminar la banda "**The Beatles**":

```sql
DELETE FROM bandas
WHERE nombre = 'The Beatles';
```

:::note
Si intentamos eliminar la banda "**The Beatles**" sin antes eliminar sus álbumes y canciones, obtendremos un **error de restricción de clave foránea** (`Foreign Key Constraint Error`), ya que existen registros en las tablas `albumes` y `canciones` que hacen referencia a esa banda. Para poder eliminar la banda, primero debemos eliminar sus álbumes y canciones, o bien, configurar las restricciones de clave foránea con la opción `ON DELETE CASCADE` al momento de crear las tablas, lo que permitiría eliminar automáticamente los registros relacionados en las tablas `albumes` y `canciones`.
:::

**8. Eliminación de datos con `CASCADE`**

```sql
-- Para la tabla albumes
ALTER TABLE albumes
DROP CONSTRAINT albumes_banda_id_fkey,
ADD CONSTRAINT albumes_banda_id_fkey 
    FOREIGN KEY (banda_id) REFERENCES bandas(id) ON DELETE CASCADE;

-- Para la tabla canciones
ALTER TABLE canciones
DROP CONSTRAINT canciones_banda_id_fkey,
ADD CONSTRAINT canciones_banda_id_fkey 
    FOREIGN KEY (banda_id) REFERENCES bandas(id) ON DELETE CASCADE;
```

:::note
Esta forma de solucionarlo en PostgreSQL consiste en modificar la Foreign Key **eliminando la restricción** (constraint) **por su nombre automático** (`<tabla>_<columna>_fkey`) y redefiniéndola con `ON DELETE CASCADE`. De esta manera, al eliminar una banda, se eliminarán automáticamente todos sus álbumes y canciones relacionados.
:::

**9. Eliminación de tablas con `DROP TABLE`**

```sql
-- ORDEN CORRECTO (de las tablas dependientes a las independientes):
DROP TABLE canciones;
DROP TABLE conciertos_musicos;
DROP TABLE albumes;
DROP TABLE conciertos;
DROP TABLE bandas;
```

- **¿Es posible eliminarlas sin afectar a las demás?** No en cualquier orden. Si intentamos eliminar primero la tabla bandas antes que canciones o albumes, la base de datos no lo permitirá debido a las **referencias de clave foránea** (a menos que usemos `DROP TABLE bandas CASCADE`).

- **¿Qué ocurre con los datos?** Una vez eliminada una tabla con DROP TABLE, tanto la estructura del esquema como todos sus datos **se borran permanentemente**. Por esa razón, es importante tener cuidado al eliminar tablas, especialmente si contienen datos importantes.

- Para **eliminar únicamente los datos** de las tablas sin eliminar la estructura, se puede usar el comando `TRUNCATE TABLE <nombre_tabla>;`. Esto eliminará todos los registros de la tabla pero mantendrá su definición y estructura intacta.

```sql
TRUNCATE TABLE canciones;
TRUNCATE TABLE conciertos_musicos;
TRUNCATE TABLE albumes;
TRUNCATE TABLE conciertos;
TRUNCATE TABLE bandas;
```

## Parte 2: Consultas sobre la base de datos

### Nivel 0

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

### Nivel 1

**10. El nombre y el país de origen de todas las bandas que tienen exactamente 5 integrantes.**

```sql
SELECT nombre, pais_origen FROM bandas
WHERE cant_integrantes = 5;
```

**11. El nombre y la duración de todos los álbumes que tienen una duración mayor a 40 minutos.**

```sql
SELECT nombre, duracion FROM albumes
WHERE duracion > 40;
```

**12. El nombre y la duración de todas las canciones que tienen una duración menor o igual a 3 minutos.**

```sql
SELECT nombre, duracion FROM canciones
WHERE duracion <= 3;
```

**13. El nombre y la fecha de todos los conciertos que se realizaron en el país "Argentina".**

```sql
SELECT nombre, fecha FROM conciertos
WHERE pais = 'Argentina';
```

### Nivel 2

**14. El nombre y ranking de las peores 5 canciones de la historia, ordenadas de peor a mejor ranking.**

```sql
SELECT nombre, ranking FROM canciones
ORDER BY ranking DESC
LIMIT 5;
```

**15. El nombre de todos los álbumes de la banda "The Beatles".**

```sql
SELECT a.nombre FROM albumes a
JOIN bandas b ON a.banda_id = b.id
WHERE b.nombre = 'The Beatles';
```

**16. El nombre de todas las bandas que tienen al menos un álbum lanzado antes o en el año 1980.**

```sql
SELECT DISTINCT b.nombre FROM bandas b
JOIN albumes a ON b.id = a.banda_id
WHERE a.lanzamiento <= 1980;
```

**17. El nombre y la fecha de los conciertos que se realizaron en el país "Argentina" y que tuvieron lugar antes del año 2010.**

```sql
SELECT nombre, fecha FROM conciertos
WHERE pais = 'Argentina' AND fecha < 2010;
```

**18. La suma de la duración de todas las canciones de la banda "Queen".**

```sql
SELECT SUM(c.duracion) AS duracion_total FROM canciones c
JOIN bandas b ON c.banda_id = b.id
WHERE b.nombre = 'Queen';
```

**19. La suma de la duración de todos los álbumes de la banda "The Rolling Stones".**

```sql
SELECT SUM(a.duracion) AS duracion_total FROM albumes a
JOIN bandas b ON a.banda_id = b.id
WHERE b.nombre = 'The Rolling Stones';
```

**20. El nombre de los conciertos a los cuales asistió la banda "Dire Straits".**

```sql
SELECT c.nombre FROM conciertos c
JOIN conciertos_musicos cm ON c.id = cm.concierto_id
JOIN bandas b ON cm.banda_id = b.id
WHERE b.nombre = 'Dire Straits';
```

**21. El nombre de las bandas que tienen al menos un álbum con una duración menor a 45 minutos.**

```sql
SELECT DISTINCT b.nombre FROM bandas b
JOIN albumes a ON b.id = a.banda_id
WHERE a.duracion < 45;
```

:::note
Sin `DISTINCT`, el resultado podría incluir a la misma banda varias veces si tiene más de un álbum con duración menor a 45 minutos. Probar eliminando `DISTINCT` para ver la diferencia en DB Fiddle (también se puede comprobar manualmente viendo las duraciones en la pestaña `Schema SQL`).
:::

### Nivel 3

**22. El nombre de las bandas cuyos álbumes (todos) duran más de 50 minutos.**

```sql
SELECT b.nombre
FROM bandas b
WHERE EXISTS (
    SELECT 1 FROM albumes a WHERE a.banda_id = b.id
)
AND NOT EXISTS (
    SELECT 1 FROM albumes a
    WHERE a.banda_id = b.id AND a.duracion <= 50
);
```

:::note
Si no pusiéramos el primer `EXISTS`, el resultado **incluiría a las bandas que no tienen álbumes**, ya que no cumplirían la condición de tener un álbum con duración menor o igual a 50 minutos. Por eso es importante asegurarnos de que la banda tenga al menos un álbum antes de aplicar la segunda condición.
:::

**23. El nombre de las canciones (con el nombre del álbum) que pertenecen a álbumes lanzados después del año 2000. Ordenarlas por nombre de álbum (de A a Z), y por cada álbum, por nombre de canción (de Z a A).**

```sql
SELECT c.nombre AS cancion, a.nombre AS album
FROM canciones c
JOIN albumes a ON c.album_id = a.id
WHERE a.lanzamiento > 2000
ORDER BY a.nombre ASC, c.nombre DESC;
```

**24. El nombre de las bandas con menos de 5 integrantes y de género "Rock Alternativo", cuyas canciones duran 4 o más minutos (todas ellas).**

```sql
SELECT DISTINCT b.nombre
FROM bandas b
WHERE b.cant_integrantes < 5 AND b.genero = 'Rock Alternativo'
AND EXISTS (
    SELECT 1 FROM canciones c
    WHERE c.banda_id = b.id
)
AND NOT EXISTS (
    SELECT 1 FROM canciones c
    WHERE c.banda_id = b.id AND c.duracion < 4
);
```

**25. El concierto con más bandas participantes, mostrando el nombre del concierto y la cantidad de bandas que participaron.**

```sql
SELECT c.nombre, COUNT(*) AS cantidad_bandas
FROM conciertos c
JOIN conciertos_musicos cm ON c.id = cm.concierto_id
GROUP BY c.id
ORDER BY cantidad_bandas DESC
LIMIT 1;
```

**26. El nombre de los álbumes cuyas bandas fueron al menos a un concierto en el país "Argentina", ordenados por ranking de mejor a peor.**

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

**27. La cantidad de canciones que tiene cada banda, ordenadas de mayor a menor cantidad de canciones. Mostrar el nombre de la banda y la cantidad de canciones.**

```sql
SELECT b.nombre, COUNT(*) AS cantidad_canciones
FROM bandas b
JOIN canciones c ON b.id = c.banda_id
GROUP BY b.id
ORDER BY cantidad_canciones DESC;
```

### Nivel 4

**28. El primer álbum de todas las bandas. Mostrar el nombre de la banda, del álbum y el año de lanzamiento.**

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

**29. La cantidad promedio de integrantes de las bandas por cada género musical. Mostrar el género, la cantidad de bandas y la cantidad promedio de integrantes.**

```sql
SELECT 
    genero,
    COUNT(*) AS cantidad_bandas,
    ROUND(AVG(cant_integrantes), 2) AS promedio_integrantes
FROM bandas
GROUP BY genero;
```

**30. El nombre de las bandas que participaron en todos los conciertos que ocurrieron en el país "Argentina".**

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

**31. Las bandas cuyo promedio de duración de canciones es mayor a 5 minutos. Mostrar el nombre de la banda y el promedio de duración de sus canciones.**

```sql
SELECT b.nombre, ROUND(AVG(c.duracion), 2) AS promedio_duracion
FROM bandas b
JOIN canciones c ON b.id = c.banda_id
GROUP BY b.id
HAVING AVG(c.duracion) > 5;
```

**32. El nombre de las bandas que no tienen conciertos registrados.**

```sql
SELECT b.nombre
FROM bandas b
WHERE b.id NOT IN (
    SELECT DISTINCT cm.banda_id
    FROM conciertos_musicos cm
);
```

**33. El nombre y ranking de los álbumes que tienen todas sus canciones con un ranking peor o igual a 30.**

```sql
SELECT a.nombre, a.ranking
FROM albumes a
WHERE EXISTS (
    SELECT 1 FROM canciones c
    WHERE c.album_id = a.id
)
AND NOT EXISTS (
    SELECT 1 FROM canciones c
    WHERE c.album_id = a.id AND c.ranking <= 30
);
```

:::note
Aquí también necesitamos el primer `EXISTS` para asegurarnos de que el álbum tenga al menos una canción antes de aplicar la condición de ranking. Si no, el resultado incluiría álbumes sin canciones.
:::

**34. El nombre de las bandas que tienen a más de la mitad de sus canciones con un ranking peor o igual a 30. Mostrar también (para cada banda) la cantidad de canciones que cumplen con esa condición, así como el promedio de ranking de TODAS las canciones de la banda.**

```sql
SELECT b.nombre,
       COUNT(CASE WHEN c.ranking >= 30 THEN 1 END) AS cantidad_rankeadas,
       ROUND(AVG(c.ranking), 2) AS promedio_ranking
FROM bandas b
JOIN canciones c ON b.id = c.banda_id
GROUP BY b.id
HAVING COUNT(CASE WHEN c.ranking >= 30 THEN 1 END) > COUNT(*) / 2;
```

**35. El nombre de las bandas que no tienen ninguna canción dentro del TOP 10 de canciones. Mostrar también el promedio de ranking de todas las canciones de la banda, y ranking mínimo de ellas (es decir, el de su mejor canción).**

```sql
SELECT b.nombre, ROUND(AVG(c.ranking), 2) AS promedio_ranking, 
       MIN(c.ranking) AS ranking_minimo
FROM bandas b
JOIN canciones c ON b.id = c.banda_id
GROUP BY b.id
HAVING MIN(c.ranking) > 10; -- Aseguramos que no tengan canciones en el TOP 10
```

**36. El nombre de las canciones cuyo ranking es mejor que el ranking del álbum al que pertenecen. Mostrar también el ranking de la canción, así como el nombre del álbum y su ranking. Ordenar por ranking de canción (de mejor a peor).**

```sql
SELECT c.nombre AS cancion, c.ranking AS ranking_cancion,
       a.nombre AS album, a.ranking AS ranking_album
FROM canciones c
JOIN albumes a ON c.album_id = a.id
WHERE c.ranking < a.ranking
ORDER BY c.ranking ASC;
```

**37. Las bandas y los conciertos donde el concierto se realizó en el país de origen de la banda. Mostrar (en este orden) el nombre de la banda, el del concierto, y el país de origen de la banda.**

```sql
SELECT b.nombre AS banda, c.nombre AS concierto, b.pais_origen
FROM bandas b
JOIN conciertos_musicos cm ON b.id = cm.banda_id
JOIN conciertos c ON cm.concierto_id = c.id
WHERE c.pais = b.pais_origen;
```

**38. Por cada concierto, mostrar su nombre y el porcentaje de bandas participantes cuyo país de origen es el mismo que el país del concierto.**

```sql
SELECT c.nombre,
       ROUND(
           100.0 * COUNT(CASE WHEN b.pais_origen = c.pais THEN 1 END) / COUNT(*),
           2
       ) AS porcentaje_locales
FROM conciertos c
JOIN conciertos_musicos cm ON c.id = cm.concierto_id
JOIN bandas b ON cm.banda_id = b.id
GROUP BY c.id;
```

:::warning Ojo
Si un concierto no tuviese bandas participantes, usar `COUNT(*)` en el denominador daría como resultado una **división por cero**. No se corresponde tanto con la realidad que ocurra esto. De todos modos, a modo de curiosidad, investigar cómo se podría manejar este caso para que el resultado sea `NULL` o `0` en lugar de un error.
:::

**39. Los conciertos en los cuales participó la banda con el álbum más largo. En caso de empate, considerar todas las bandas con el álbum más largo. Ordenar los conciertos por fecha (de más reciente a más antiguo).**

```sql
SELECT c.nombre AS concierto
FROM conciertos c
JOIN conciertos_musicos cm ON c.id = cm.concierto_id
JOIN bandas b ON cm.banda_id = b.id
WHERE b.id IN (
    SELECT b2.id
    FROM bandas b2
    JOIN albumes a ON b2.id = a.banda_id
    WHERE a.duracion = (
        SELECT MAX(a2.duracion)
        FROM albumes a2
    )
)
ORDER BY c.fecha DESC;
```

**40. El nombre de los álbumes que tienen una duración mayor al promedio de duración de todos los álbumes de su mismo género musical. Mostrar el género de la banda, el nombre y la duración del álbum.**

```sql
SELECT b.genero, a.nombre, a.duracion
FROM albumes a
JOIN bandas b ON a.banda_id = b.id
WHERE a.duracion > (
    SELECT AVG(a2.duracion)
    FROM albumes a2
    JOIN bandas b2 ON a2.banda_id = b2.id
    WHERE b2.genero = b.genero
);
```
