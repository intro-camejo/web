---
sidebar_class_name: hidden
---

# Script SQL para crear la base de datos

```sql
-- Tabla de músicos o bandas
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

------- AGREGADO DE BANDAS -------

INSERT INTO bandas (nombre, pais_origen, fecha_creacion, genero, cant_integrantes) VALUES
('The Beatles', 'Reino Unido', 1960, 'Rock', 4),
('Queen', 'Reino Unido', 1970, 'Rock', 4),
('Soda Stereo', 'Argentina', 1982, 'Rock Alternativo', 3),
('Daft Punk', 'Francia', 1993, 'Electrónica', 2),
('Pink Floyd', 'Reino Unido', 1965, 'Rock Progresivo', 5),
('Genesis', 'Reino Unido', 1967, 'Rock Progresivo', 6),
('Radiohead', 'Reino Unido', 1985, 'Rock Alternativo', 5),
('Coldplay', 'Reino Unido', 1996, 'Rock Alternativo', 4),
('The Rolling Stones', 'Reino Unido', 1962, 'Rock', 5),
('Dire Straits', 'Reino Unido', 1977, 'Rock', 4);

------- AGREGADO DE ÁLBUMES -------

-- The Beatles (id = 1)
INSERT INTO albumes (banda_id, nombre, lanzamiento, duracion, ranking) VALUES
(1, 'Abbey Road', 1969, 47, 5),
(1, 'Sgt. Pepper''s Lonely Hearts Club Band', 1967, 40, 18);

-- Queen (id = 2)
INSERT INTO albumes (banda_id, nombre, lanzamiento, duracion, ranking) VALUES
(2, 'A Night at the Opera', 1975, 43, 1),
(2, 'The Game', 1980, 35, 13);

-- Soda Stereo (id = 3)
INSERT INTO albumes (banda_id, nombre, lanzamiento, duracion, ranking) VALUES
(3, 'Signos', 1986, 38, 3),
(3, 'Doble Vida', 1988, 42, 17);

-- Daft Punk (id = 4)
INSERT INTO albumes (banda_id, nombre, lanzamiento, duracion, ranking) VALUES
(4, 'Discovery', 2001, 60, 7),
(4, 'Random Access Memories', 2013, 74, 11);

-- Pink Floyd (id = 5)
INSERT INTO albumes (banda_id, nombre, lanzamiento, duracion, ranking) VALUES
(5, 'The Dark Side of the Moon', 1973, 43, 10),
(5, 'Wish You Were Here', 1975, 44, 6);

-- Genesis (id = 6)
INSERT INTO albumes (banda_id, nombre, lanzamiento, duracion, ranking) VALUES
(6, 'Selling England by the Pound', 1973, 53, 15),
(6, 'Invisible Touch', 1986, 46, 9);

-- Radiohead (id = 7)
INSERT INTO albumes (banda_id, nombre, lanzamiento, duracion, ranking) VALUES
(7, 'OK Computer', 1997, 53, 2),
(7, 'Kid A', 2000, 50, 8);

-- Coldplay (id = 8)
INSERT INTO albumes (banda_id, nombre, lanzamiento, duracion, ranking) VALUES
(8, 'Parachutes', 2000, 45, 20),
(8, 'A Rush of Blood to the Head', 2002, 54, 12);

-- The Rolling Stones (id = 9)
INSERT INTO albumes (banda_id, nombre, lanzamiento, duracion, ranking) VALUES
(9, 'Sticky Fingers', 1971, 45, 19),
(9, 'Exile on Main St.', 1972, 67, 16);

-- Dire Straits (id = 10)
INSERT INTO albumes (banda_id, nombre, lanzamiento, duracion, ranking) VALUES
(10, 'Brothers in Arms', 1985, 55, 4),
(10, 'Making Movies', 1980, 40, 14);

------- AGREGADO DE CANCIONES -------

-- Abbey Road (banda_id = 1)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(1, 1, 'Come Together', 4, 9),
(1, 1, 'Something', 3, 37),
(1, 1, 'Here Comes the Sun', 3, 11);

-- Sgt. Pepper (banda_id = 1)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(1, 2, 'Lucy in the Sky with Diamonds', 4, 43),
(1, 2, 'A Day in the Life', 5, 32),
(1, 2, 'With a Little Help from My Friends', 3, 46);

-- A Night at the Opera (banda_id = 2)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(2, 3, 'Bohemian Rhapsody', 6, 50),
(2, 3, 'Love of My Life', 3, 20),
(2, 3, 'You''re My Best Friend', 3, 23);

-- The Game (banda_id = 2)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(2, 4, 'Another One Bites the Dust', 4, 28),
(2, 4, 'Crazy Little Thing Called Love', 3, 5);

-- Signos (banda_id = 3)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(3, 5, 'Persiana Americana', 4, 27),
(3, 5, 'Signos', 4, 19),
(3, 5, 'El Rito', 4, 45);

-- Doble Vida (banda_id = 3)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(3, 6, 'Lo Que Sangra (La Cúpula)', 4, 16),
(3, 6, 'En la Ciudad de la Furia', 5, 40);

-- Discovery (banda_id = 4)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(4, 7, 'One More Time', 5, 51),
(4, 7, 'Digital Love', 5, 24),
(4, 7, 'Harder, Better, Faster, Stronger', 4, 48);

-- Random Access Memories (banda_id = 4)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(4, 8, 'Get Lucky', 6, 31),
(4, 8, 'Instant Crush', 5, 12);

-- The Dark Side of the Moon (banda_id = 5)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(5, 9, 'Time', 7, 30),
(5, 9, 'Money', 6, 2),
(5, 9, 'Us and Them', 7, 49);

-- Wish You Were Here (banda_id = 5)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(5, 10, 'Shine On You Crazy Diamond', 13, 54),
(5, 10, 'Wish You Were Here', 5, 21);

-- Selling England by the Pound (banda_id = 6)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(6, 11, 'Firth of Fifth', 9, 47),
(6, 11, 'The Cinema Show', 11, 6);

-- Invisible Touch (banda_id = 6)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(6, 12, 'Invisible Touch', 4, 1),
(6, 12, 'Land of Confusion', 5, 34);

-- OK Computer (banda_id = 7)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(7, 13, 'Paranoid Android', 6, 17),
(7, 13, 'Karma Police', 4, 41),
(7, 13, 'No Surprises', 3, 39);

-- Kid A (banda_id = 7)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(7, 14, 'Everything In Its Right Place', 4, 44),
(7, 14, 'Idioteque', 5, 13),
(7, 14, 'Motion Picture Soundtrack', 6, 18);

-- Parachutes (banda_id = 8)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(8, 15, 'Yellow', 4, 14),
(8, 15, 'Shiver', 5, 26),
(8, 15, 'Trouble', 4, 42);

-- A Rush of Blood to the Head (banda_id = 8)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(8, 16, 'Clocks', 5, 15),
(8, 16, 'The Scientist', 5, 3),
(8, 16, 'In My Place', 4, 38);

-- Sticky Fingers (banda_id = 9)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(9, 17, 'Brown Sugar', 3, 25),
(9, 17, 'Wild Horses', 5, 36),
(9, 17, 'Can''t You Hear Me Knocking', 7, 33);

-- Exile on Main St. (banda_id = 9)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(9, 18, 'Tumbling Dice', 5, 53),
(9, 18, 'Rocks Off', 4, 29),
(9, 18, 'Happy', 3, 7);

-- Brothers in Arms (banda_id = 10)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(10, 19, 'Money for Nothing', 8, 35),
(10, 19, 'Walk of Life', 4, 10),
(10, 19, 'Brothers in Arms', 7, 22);

-- Making Movies (banda_id = 10)
INSERT INTO canciones (banda_id, album_id, nombre, duracion, ranking) VALUES
(10, 20, 'Romeo and Juliet', 6, 52),
(10, 20, 'Tunnel of Love', 5, 4),
(10, 20, 'Expresso Love', 4, 8);

------- AGREGADO DE CONCIERTOS -------

INSERT INTO conciertos (nombre, pais, fecha) VALUES
('Festival Rock Unido', 'Argentina', 2015),
('Noche Electrónica', 'Francia', 2013),
('Clásicos del Rock', 'Reino Unido', 2018),
('Indie Fest', 'Uruguay', 2017),
('Festival Prog Legends', 'Estados Unidos', 2019),
('Show Privado The Beatles', 'Reino Unido', 1965),
('Queen Live', 'España', 1981),
('Soda Stereo Reunion', 'Argentina', 2007),
('Daft Punk Experience', 'Estados Unidos', 2014),
('Pink Floyd Tribute', 'Alemania', 2020),
('Rock Legends Festival', 'Reino Unido', 2021);

-- Festival Rock Unido (id = 1)
INSERT INTO conciertos_musicos (concierto_id, banda_id) VALUES
(1, 1), (1, 2), (1, 3), (1, 9);

-- Noche Electrónica (id = 2)
INSERT INTO conciertos_musicos (concierto_id, banda_id) VALUES
(2, 4);

-- Clásicos del Rock (id = 3)
INSERT INTO conciertos_musicos (concierto_id, banda_id) VALUES
(3, 1), (3, 2), (3, 3), (3, 5), (3, 6), (3, 9), (3, 10);

-- Indie Fest (id = 4)
INSERT INTO conciertos_musicos (concierto_id, banda_id) VALUES
(4, 3), (4, 10);

-- Festival Prog Legends (id = 5)
INSERT INTO conciertos_musicos (concierto_id, banda_id) VALUES
(5, 5), (5, 6);

-- Show Privado The Beatles (id = 6)
INSERT INTO conciertos_musicos (concierto_id, banda_id) VALUES
(6, 1);

-- Queen Live (id = 7)
INSERT INTO conciertos_musicos (concierto_id, banda_id) VALUES
(7, 2);

-- Soda Stereo Reunion (id = 8)
INSERT INTO conciertos_musicos (concierto_id, banda_id) VALUES
(8, 3);

-- Daft Punk Experience (id = 9)
INSERT INTO conciertos_musicos (concierto_id, banda_id) VALUES
(9, 4);

-- Pink Floyd Tribute (id = 10)
INSERT INTO conciertos_musicos (concierto_id, banda_id) VALUES
(10, 5);

-- Rock Legends Festival (id = 11)
INSERT INTO conciertos_musicos (concierto_id, banda_id) VALUES
(11, 7), (11, 9), (11, 10);
```
