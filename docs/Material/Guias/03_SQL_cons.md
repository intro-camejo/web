---
draft: false
---

# Guía 3 - SQL

## Introducción

En esta guía, trabajaremos con SQL para realizar consultas sobre una base de datos ficticia. La base de datos contiene información sobre **bandas musicales, álbumes, canciones y conciertos**. A continuación, se presentan las tablas y sus relaciones:

```sql
-- Tabla de bandas musicales
CREATE TABLE bandas (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    pais_origen TEXT NOT NULL,
    fecha_creacion INTEGER NOT NULL,
    genero TEXT NOT NULL,
    cant_integrantes INTEGER NOT NULL
);

-- Tabla de álbumes
CREATE TABLE albumes (
    id SERIAL PRIMARY KEY,
    banda_id INTEGER NOT NULL REFERENCES bandas(id),
    nombre TEXT NOT NULL,
    lanzamiento INTEGER NOT NULL,
    duracion INTEGER NOT NULL,  -- duración en minutos
    ranking INTEGER UNIQUE NOT NULL  -- ranking global entre todos los álbumes
);

-- Tabla de canciones
CREATE TABLE canciones (
    id SERIAL PRIMARY KEY,
    banda_id INTEGER NOT NULL REFERENCES bandas(id),
    album_id INTEGER NOT NULL REFERENCES albumes(id),
    nombre TEXT NOT NULL,
    duracion INTEGER NOT NULL,  -- duración en minutos
    ranking INTEGER UNIQUE NOT NULL  -- ranking global entre todas las canciones
);

-- Tabla de conciertos
CREATE TABLE conciertos (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    pais TEXT NOT NULL,
    fecha INTEGER NOT NULL  -- año
);

-- Tabla intermedia para relación muchos-a-muchos entre conciertos y músicos
CREATE TABLE conciertos_musicos (
    concierto_id INTEGER NOT NULL REFERENCES conciertos(id),
    banda_id INTEGER NOT NULL REFERENCES bandas(id),
    PRIMARY KEY (concierto_id, banda_id)
);
```

**Importante**: para revisar tus respuestas, podés entrar a este link de [**DB Fiddle**](https://www.db-fiddle.com/f/o4BQczgY9ZnezSUYht4rCh/198) y pegar el código SQL que hayas escrito. Hay datos precargados en las tablas, por lo que no es necesario insertar datos adicionales (podés jugar con los datos que ya están o añadir más). **A modo de simplificación, no hay valores o campos nulos en los datos.**

*Para los amantes de la música: muchos datos no son reales y están puestos a modo de ejemplo. Sabemos que los Beatles no vinieron a Argentina en 2015, y que Sgt. Pepper's no es su primer álbum :)*

## Ejercicios

Se pide mostrar, en cada ejercicio:

### Nivel 0

1. **Todas las bandas musicales** con sus respectivos campos (todos). 
2. Solo el **nombre y el país de origen** de todas las bandas.
3. El **nombre y la fecha de creación** de todas las bandas, ordenadas por fecha de creación (de más reciente a más antiguo).
4. El **nombre y el país de origen** de todas las bandas que son del género "Rock".
5. **Todos los álbumes** con sus respectivos campos (todos).
6. Solo el **nombre y la duración** de todos los álbumes, ordenados por orden alfabético de nombre (de A a Z).
7. El **ranking y el nombre** de todos los álbumes, ordenados de mejor **(1)** a peor ranking.
8. El **nombre y la duración** de todas las canciones, ordenadas por duración (de más larga a más corta).
9. El **nombre y fecha** de todos los conciertos, ordenados por fecha (de más antiguo a más reciente).

### Nivel 1

10. El **nombre y el país de origen** de todas las bandas que tienen exactamente 5 integrantes.
11. El **nombre y la duración** de todos los álbumes que tienen una duración mayor a 40 minutos.
12. El **nombre y la duración** de todas las canciones que tienen una duración menor o igual a 3 minutos.
13. El **nombre y la fecha** de todos los conciertos que se realizaron en el país "Argentina".

### Nivel 2

14. El nombre y ranking de las **peores 5 canciones** de la historia, ordenadas de peor a mejor ranking.
15. El nombre de todos los albumes de la banda **The Beatles**.
16. El nombre de todas las bandas que tienen al menos un álbum lanzado **antes o en el año 1980**. (¡que no se repitan las bandas!)
17. El **nombre y la fecha** de los conciertos que se realizaron en el país "Argentina" y que tuvieron lugar **antes del año 2010**.
18. La suma de la duración de todas las canciones de la banda **Queen**.
19. La suma de la duración de todos los álbumes de la banda **The Rolling Stones**.
20. El nombre de los conciertos a los cuales asistió la banda **Dire Straits**.
21. El nombre de las bandas que tienen al menos un álbum con una duración **menor a 45 minutos** (¡que no se repitan las bandas!).

### Nivel 3

22. El nombre de las bandas cuyos álbumes (todos) duran **más de 50 minutos**.
23. El nombre de las canciones (con el nombre de su álbum) que pertenecen a álbumes lanzados **después del año 2000**. Ordenarlas por nombre de álbum (de A a Z), y por cada álbum, por nombre de canción (de Z a A).
24. El nombre de las bandas con menos de 5 integrantes y de género "Rock Alternativo", cuyas canciones duran 4 o más minutos (todas ellas).
25. El **concierto con más bandas participantes**, mostrando el nombre del concierto y la cantidad de bandas que participaron.
26. El nombre de los álbumes cuyas bandas fueron **al menos a un concierto en el país "Argentina"**, ordenados por ranking de mejor a peor.
27. La **cantidad de canciones** que tiene cada banda, ordenadas de mayor a menor cantidad de canciones. Mostrar el nombre de la banda y la cantidad de canciones.

### Nivel 4

28. El **primer álbum de todas las bandas**. Mostrar el nombre de la banda, del álbum y el año de lanzamiento. ¿Y para hacerlo con el último de cada banda?
29. La **cantidad promedio de integrantes** de las bandas por cada género musical. Mostrar el género, la cantidad de bandas y la cantidad promedio de integrantes.
30. El nombre de las bandas que participaron en **todos los conciertos** que ocurrieron en el país "Argentina".
31. Las bandas cuyo **promedio de duración de canciones es mayor a 5 minutos**. Mostrar el nombre de la banda y el promedio de duración de sus canciones.
32. El nombre de las bandas que **no tienen conciertos registrados**.
33. El nombre y ranking de los álbumes que tienen todas sus canciones con un ranking peor o igual a 30. 
34. El nombre de las bandas que tienen a **más de la mitad de sus canciones con un ranking peor o igual a 30**. Mostrar también (para cada banda) la cantidad de canciones que cumplen con esa condición, así como el promedio de ranking de TODAS las canciones de la banda.
35. El nombre de las bandas que **no tienen ninguna canción dentro del TOP 10** de canciones. Mostrar también el promedio de ranking de todas las canciones de la banda, y ranking mínimo de ellas (es decir, el de su mejor canción).
36. El nombre de las canciones cuyo **ranking es mejor que el ranking del álbum al que pertenecen**. Mostrar también el ranking de la canción, así como el nombre del álbum y su ranking. Ordenar por ranking de canción (de mejor a peor).
37. Las bandas y los conciertos donde **el concierto se realizó en el país de origen de la banda**. Mostrar (en este orden) el nombre de la banda, el del concierto, y el país de origen de la banda.
38. Por cada concierto, mostrar su nombre y el **porcentaje de bandas participantes** cuyo país de origen es el mismo que el país del concierto.
39. Los conciertos en los cuales participó la banda con el **álbum más largo**. En caso de empate, considerar todas las bandas con el álbum más largo. Ordenar los conciertos por fecha (de más reciente a más antiguo).
40. El nombre de los álbumes que tienen una **duración mayor al promedio de duración** de todos los álbumes de su **mismo género musical**. Mostrar el género de la banda, el nombre y la duración del álbum.

## Respuestas

Recomendamos que primero intentes resolver los ejercicios por tu cuenta. Luego, si necesitas ayuda, podés consultar el [**archivo de respuestas**](03_SQL_resp.md) que se encuentra en esta misma carpeta.