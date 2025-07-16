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

**Importante**: para revisar tus respuestas, podés entrar a este link de [**DB Fiddle**](https://www.db-fiddle.com/f/o4BQczgY9ZnezSUYht4rCh/16) y pegar el código SQL que hayas escrito. Hay datos precargados en las tablas, por lo que no es necesario insertar datos adicionales (podés jugar con los datos que ya están o añadir más). **A modo de simplificación, no hay valores o campos nulos en los datos.**

*Para los amantes de la música: muchos datos no son reales y están puestos a modo de ejemplo. Sabemos que los Beatles no vinieron a Argentina en 2015, y que Sgt. Pepper's no es su primer álbum :)*

## Ejercicios

Se pide mostrar, en cada ejercicio:

### Nivel 0 (Introductorios)

1. **Todas las bandas musicales** con sus respectivos campos (todos). 
2. Solo el **nombre y el país de origen** de todas las bandas.
3. El **nombre y la fecha de creación** de todas las bandas, ordenadas por fecha de creación (de más reciente a más antiguo).
4. El **nombre y el país de origen** de todas las bandas que son del género "Rock".
5. **Todos los álbumes** con sus respectivos campos (todos).
6. Solo el **nombre y la duración** de todos los álbumes, ordenados por orden alfabético de nombre (de A a Z).
7. El **ranking y el nombre** de todos los álbumes, ordenados de mejor **(1)** a peor ranking.
8. El **nombre y la duración** de todas las canciones, ordenadas por duración (de más larga a más corta).
9. El **nombre y fecha** de todos los conciertos, ordenados por fecha (de más antiguo a más reciente).

### Nivel 1 (No me preocupo)

1. El **nombre y el país de origen** de todas las bandas que tienen exactamente 5 integrantes.
2. El **nombre y la duración** de todos los álbumes que tienen una duración mayor a 40 minutos.
3. El **nombre y la duración** de todas las canciones que tienen una duración menor o igual a 3 minutos.
4. El **nombre y la fecha** de todos los conciertos que se realizaron en el país "Argentina".
5. El nombre y ranking de los **mejores 7 álbumes** de la historia (según *fulanito*), ordenados alfabéticamente por nombre (de A a Z).

### Nivel 2 (Vamos calentando)

1. El nombre y ranking de las **peores 5 canciones** de la historia (según *fulanito*), ordenadas de peor a mejor ranking (¡la peor va primero!).
2. El nombre de todos los albumes de la banda **The Beatles**.
3. El nombre de todas las bandas que tienen al menos un álbum lanzado **antes o en el año 1980**. (¡que no se repitan las bandas!)
4. El **nombre y la fecha** de los conciertos que se realizaron en el país "Argentina" y que tuvieron lugar **antes del año 2010**.
5. La suma de la duración de todas las canciones de la banda **Queen**.
6. La suma de la duración de todos los álbumes de la banda **The Rolling Stones**.
7. El nombre de los conciertos a los cuales asistió la banda **Dire Straits**.
8. El nombre de las bandas que tienen al menos un álbum con una duración **menor a 40 minutos** (¡que no se repitan las bandas!).

### Nivel 3 (Me pongo las pilas)

1. El nombre de las bandas cuyos álbumes (todos) duran **más de 50 minutos**.
2. El nombre de las canciones (con el nombre de su álbum) que pertenecen a álbumes lanzados **después del año 2000**. Ordenarlas por nombre de álbum (de A a Z), y por cada álbum, por nombre de canción (de Z a A).
3. El nombre de las bandas con menos de 5 integrantes y de género "Rock Alternativo", cuyas canciones duran 4 o más minutos (todas ellas).
4. El **concierto con más bandas participantes**, mostrando el nombre del concierto y la cantidad de bandas que participaron.
5. El nombre de los álbumes cuyas bandas fueron **al menos a un concierto en el país "Argentina"**, ordenados por ranking de mejor a peor.
6. La **cantidad de canciones** que tiene cada banda, ordenadas de mayor a menor cantidad de canciones. Mostrar el nombre de la banda y la cantidad de canciones.

### Nivel 4 (Uy, qué está pasando?)

1. El **primer álbum de todas las bandas**. Mostrar el nombre de la banda, del álbum y el año de lanzamiento. ¿Y para hacerlo con el último de cada banda?
2. La **cantidad promedio de integrantes** de las bandas por cada género musical. Mostrar el género y la cantidad promedio de integrantes.
3. El nombre de las bandas que participaron en **todos los conciertos** que ocurrieron en el país "Argentina".
4. Las bandas cuyo **promedio de duración de canciones es mayor a 5 minutos**. Mostrar el nombre de la banda y el promedio de duración de sus canciones.
5. El nombre de las bandas que **no tienen conciertos registrados**.
6. El nombre y ranking de los álbumes que tienen todas sus canciones con un ranking peor o igual a 30. 
7. El nombre de las bandas que tienen a **más de la mitad de sus canciones con un ranking peor o igual a 30**. Mostrar también (para cada banda) la cantidad de canciones rankeadas peor o igual a 30, así como el promedio de ranking de TODAS las canciones de la banda.
8. El nombre de las bandas que **no tienen ninguna canción dentro del TOP 10** de canciones (según *fulanito*). Mostrar también el promedio de ranking de todas las canciones de la banda, y ranking mínimo de ellas (es decir, el de su mejor canción).
9. El nombre de las canciones cuyo **ranking es mejor que el ranking del álbum al que pertenecen**. Mostrar también el ranking de la canción, así como el nombre del álbum y su ranking. Ordenar por ranking de canción (de mejor a peor).
10. Las bandas y los conciertos donde **el concierto se realizó en el país de origen de la banda**. Mostrar (en este orden) el nombre de la banda, el del concierto, y el país de origen de la banda.

## Respuestas

Recomendamos que primero intentes resolver los ejercicios por tu cuenta. Luego, si necesitas ayuda, podés consultar el [**archivo de respuestas**](03_SQL_resp.md) que se encuentra en esta misma carpeta.