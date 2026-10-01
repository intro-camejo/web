-- =====================================================================
--  Intro Camejo (FIUBA) — Clase SQL 2: JOINs (y GROUP BY)
--  Dataset de videojuegos para PostgreSQL 17
--
--  Cómo usarlo:
--    · DB Fiddle (https://www.db-fiddle.com/): elegir "PostgreSQL 17",
--      pegar TODO este archivo en "Schema SQL" y escribir las consultas
--      en "Query SQL".
--    · psql:  psql -U postgres -d <base> -f dataset.sql
--
--  Los datos de publicadoras, juegos, géneros y plataformas son reales
--  (año de lanzamiento original, publicadora, plataformas principales).
--  El precio (USD, de lanzamiento) y el metacritic son aproximados, y la
--  lista de plataformas no es exhaustiva. La tabla `ventas` es
--  ILUSTRATIVA: las cifras son inventadas, sirven para practicar.
--
--  Casos borde a propósito (para que los JOINs den distinto):
--    · Paradox Interactive: publicadora SIN juegos cargados
--    · Hollow Knight, Celeste, Undertale: juegos SIN publicadora
--      (autopublicados, publicadora_id = NULL)
--    · Dreamcast: plataforma SIN juegos
--    · Estrategia: género SIN juegos
-- =====================================================================

DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS juegos_plataformas;
DROP TABLE IF EXISTS juegos;
DROP TABLE IF EXISTS plataformas;
DROP TABLE IF EXISTS generos;
DROP TABLE IF EXISTS publicadoras;

CREATE TABLE publicadoras (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL UNIQUE,
    pais TEXT NOT NULL,
    fundacion INTEGER NOT NULL          -- año
);

CREATE TABLE generos (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL UNIQUE
);

CREATE TABLE plataformas (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL UNIQUE,
    fabricante TEXT NOT NULL,
    lanzamiento INTEGER NOT NULL        -- año
);

CREATE TABLE juegos (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    anio INTEGER NOT NULL,              -- año de lanzamiento original
    precio NUMERIC(6, 2) NOT NULL,      -- USD, precio de lanzamiento aproximado
    publicadora_id INTEGER REFERENCES publicadoras(id),   -- NULL = autopublicado
    genero_id INTEGER NOT NULL REFERENCES generos(id),
    metacritic INTEGER                  -- 0 a 100, aproximado
);

-- Relación N:M: un juego sale en muchas plataformas y una plataforma tiene muchos juegos
CREATE TABLE juegos_plataformas (
    juego_id INTEGER NOT NULL REFERENCES juegos(id),
    plataforma_id INTEGER NOT NULL REFERENCES plataformas(id),
    PRIMARY KEY (juego_id, plataforma_id)
);

-- Ventas por juego, plataforma y región (CIFRAS ILUSTRATIVAS, no son reales)
CREATE TABLE ventas (
    juego_id INTEGER NOT NULL,
    plataforma_id INTEGER NOT NULL,
    region TEXT NOT NULL,               -- 'América', 'Europa', 'Japón', 'Resto del mundo'
    unidades INTEGER NOT NULL,
    PRIMARY KEY (juego_id, plataforma_id, region),
    FOREIGN KEY (juego_id, plataforma_id) REFERENCES juegos_plataformas (juego_id, plataforma_id)
);

-- ---------------------------------------------------------------------
-- Datos. Los id los genera SERIAL solo (1, 2, 3...) en el orden de inserción.
-- ---------------------------------------------------------------------

INSERT INTO publicadoras (nombre, pais, fundacion) VALUES
    ('Nintendo',            'Japón',          1889),  -- 1
    ('Electronic Arts',     'Estados Unidos', 1982),  -- 2
    ('Ubisoft',             'Francia',        1986),  -- 3
    ('Rockstar Games',      'Estados Unidos', 1998),  -- 4
    ('CD Projekt',          'Polonia',        1994),  -- 5
    ('Capcom',              'Japón',          1979),  -- 6
    ('Valve',               'Estados Unidos', 1996),  -- 7
    ('Mojang Studios',      'Suecia',         2009),  -- 8
    ('Paradox Interactive', 'Suecia',         2004);  -- 9 (sin juegos cargados)

INSERT INTO generos (nombre) VALUES
    ('Aventura'),     -- 1
    ('Plataformas'),  -- 2
    ('RPG'),          -- 3
    ('Acción'),       -- 4
    ('Shooter'),      -- 5
    ('Deportes'),     -- 6
    ('Carreras'),     -- 7
    ('Lucha'),        -- 8
    ('Simulación'),   -- 9
    ('Sandbox'),      -- 10
    ('Terror'),       -- 11
    ('Puzles'),       -- 12
    ('Estrategia');   -- 13 (sin juegos cargados)

INSERT INTO plataformas (nombre, fabricante, lanzamiento) VALUES
    ('PC',               'Varios',    1981),  -- 1
    ('PlayStation 2',    'Sony',      2000),  -- 2
    ('PlayStation 3',    'Sony',      2006),  -- 3
    ('PlayStation 4',    'Sony',      2013),  -- 4
    ('PlayStation 5',    'Sony',      2020),  -- 5
    ('Xbox 360',         'Microsoft', 2005),  -- 6
    ('Xbox One',         'Microsoft', 2013),  -- 7
    ('Xbox Series X|S',  'Microsoft', 2020),  -- 8
    ('Wii U',            'Nintendo',  2012),  -- 9
    ('Nintendo Switch',  'Nintendo',  2017),  -- 10
    ('Dreamcast',        'Sega',      1998);  -- 11 (sin juegos cargados)

INSERT INTO juegos (titulo, anio, precio, publicadora_id, genero_id, metacritic) VALUES
    ('The Legend of Zelda: Breath of the Wild',   2017, 59.99, 1,     1, 97),  -- 1
    ('The Legend of Zelda: Tears of the Kingdom', 2023, 69.99, 1,     1, 96),  -- 2
    ('Super Mario Odyssey',                       2017, 59.99, 1,     2, 97),  -- 3
    ('Mario Kart 8 Deluxe',                       2017, 59.99, 1,     7, 92),  -- 4
    ('Animal Crossing: New Horizons',             2020, 59.99, 1,     9, 90),  -- 5
    ('Super Smash Bros. Ultimate',                2018, 59.99, 1,     8, 93),  -- 6
    ('EA Sports FC 24',                           2023, 69.99, 2,     6, 75),  -- 7
    ('The Sims 4',                                2014, 39.99, 2,     9, 70),  -- 8
    ('Mass Effect 2',                             2010, 59.99, 2,     3, 96),  -- 9
    ('It Takes Two',                              2021, 39.99, 2,     2, 88),  -- 10
    ('Assassin''s Creed II',                      2009, 59.99, 3,     4, 90),  -- 11
    ('Rayman Legends',                            2013, 59.99, 3,     2, 91),  -- 12
    ('Far Cry 5',                                 2018, 59.99, 3,     5, 81),  -- 13
    ('Grand Theft Auto: San Andreas',             2004, 49.99, 4,     4, 95),  -- 14
    ('Grand Theft Auto V',                        2013, 59.99, 4,     4, 97),  -- 15
    ('Red Dead Redemption 2',                     2018, 59.99, 4,     4, 97),  -- 16
    ('The Witcher 3: Wild Hunt',                  2015, 59.99, 5,     3, 92),  -- 17
    ('Cyberpunk 2077',                            2020, 59.99, 5,     3, 86),  -- 18
    ('Monster Hunter: World',                     2018, 59.99, 6,     3, 90),  -- 19
    ('Resident Evil 4',                           2023, 59.99, 6,    11, 93),  -- 20 (remake)
    ('Street Fighter 6',                          2023, 59.99, 6,     8, 92),  -- 21
    ('Half-Life 2',                               2004, 49.99, 7,     5, 96),  -- 22
    ('Portal 2',                                  2011, 49.99, 7,    12, 95),  -- 23
    ('Counter-Strike 2',                          2023,  0.00, 7,     5, 82),  -- 24 (gratis)
    ('Minecraft',                                 2011, 29.99, 8,    10, 93),  -- 25
    ('Hollow Knight',                             2017, 14.99, NULL,  2, 87),  -- 26 (Team Cherry, autopublicado)
    ('Celeste',                                   2018, 19.99, NULL,  2, 92),  -- 27 (Maddy Makes Games, autopublicado)
    ('Undertale',                                 2015,  9.99, NULL,  3, 92);  -- 28 (Toby Fox, autopublicado)

-- 1 PC · 2 PS2 · 3 PS3 · 4 PS4 · 5 PS5 · 6 X360 · 7 XOne · 8 XSeries · 9 Wii U · 10 Switch · 11 Dreamcast
INSERT INTO juegos_plataformas (juego_id, plataforma_id) VALUES
    (1, 9), (1, 10),                                        -- Zelda BotW
    (2, 10),                                                -- Zelda TotK
    (3, 10),                                                -- Mario Odyssey
    (4, 10),                                                -- Mario Kart 8 Deluxe
    (5, 10),                                                -- Animal Crossing NH
    (6, 10),                                                -- Smash Ultimate
    (7, 1), (7, 4), (7, 5), (7, 7), (7, 8), (7, 10),        -- EA Sports FC 24
    (8, 1), (8, 4), (8, 7),                                 -- The Sims 4
    (9, 1), (9, 3), (9, 6),                                 -- Mass Effect 2
    (10, 1), (10, 4), (10, 5), (10, 7), (10, 8), (10, 10),  -- It Takes Two
    (11, 1), (11, 3), (11, 6),                              -- Assassin's Creed II
    (12, 1), (12, 3), (12, 4), (12, 6), (12, 7), (12, 9), (12, 10),  -- Rayman Legends
    (13, 1), (13, 4), (13, 7),                              -- Far Cry 5
    (14, 1), (14, 2),                                       -- GTA San Andreas
    (15, 1), (15, 3), (15, 4), (15, 5), (15, 6), (15, 7), (15, 8),   -- GTA V
    (16, 1), (16, 4), (16, 7),                              -- Red Dead Redemption 2
    (17, 1), (17, 4), (17, 5), (17, 7), (17, 8), (17, 10),  -- The Witcher 3
    (18, 1), (18, 4), (18, 5), (18, 7), (18, 8),            -- Cyberpunk 2077
    (19, 1), (19, 4), (19, 7),                              -- Monster Hunter: World
    (20, 1), (20, 4), (20, 5), (20, 8),                     -- Resident Evil 4
    (21, 1), (21, 4), (21, 5), (21, 8),                     -- Street Fighter 6
    (22, 1), (22, 3), (22, 6),                              -- Half-Life 2
    (23, 1), (23, 3), (23, 6), (23, 10),                    -- Portal 2
    (24, 1),                                                -- Counter-Strike 2
    (25, 1), (25, 4), (25, 7), (25, 10),                    -- Minecraft
    (26, 1), (26, 4), (26, 7), (26, 10),                    -- Hollow Knight
    (27, 1), (27, 4), (27, 7), (27, 10),                    -- Celeste
    (28, 1), (28, 4), (28, 10);                             -- Undertale

-- CIFRAS ILUSTRATIVAS (inventadas): sirven para practicar SUM / AVG / GROUP BY
INSERT INTO ventas (juego_id, plataforma_id, region, unidades) VALUES
    (1, 10, 'América', 12000000), (1, 10, 'Europa', 8500000), (1, 10, 'Japón', 5000000),
    (1, 9,  'América', 900000),   (1, 9,  'Japón', 300000),
    (2, 10, 'América', 9000000),  (2, 10, 'Europa', 6000000), (2, 10, 'Japón', 4000000),
    (3, 10, 'América', 11000000), (3, 10, 'Europa', 7500000), (3, 10, 'Japón', 3500000),
    (4, 10, 'América', 25000000), (4, 10, 'Europa', 18000000), (4, 10, 'Japón', 7000000), (4, 10, 'Resto del mundo', 4000000),
    (5, 10, 'América', 15000000), (5, 10, 'Europa', 11000000), (5, 10, 'Japón', 8000000),
    (6, 10, 'América', 14000000), (6, 10, 'Europa', 9000000), (6, 10, 'Japón', 5500000),
    (7, 4,  'Europa', 4500000),   (7, 5, 'Europa', 7000000), (7, 5, 'América', 3000000), (7, 1, 'Europa', 1500000),
    (8, 1,  'América', 6000000),  (8, 1, 'Europa', 5000000),
    (10, 5, 'América', 2000000),  (10, 10, 'Europa', 1800000),
    (12, 4, 'Europa', 1200000),
    (15, 4, 'América', 20000000), (15, 4, 'Europa', 18000000), (15, 1, 'América', 15000000), (15, 5, 'Resto del mundo', 6000000),
    (16, 4, 'América', 20000000), (16, 4, 'Europa', 14000000), (16, 1, 'Resto del mundo', 7000000),
    (17, 1, 'Europa', 12000000),  (17, 4, 'América', 9000000),
    (18, 1, 'Europa', 9000000),   (18, 5, 'América', 6000000),
    (20, 5, 'América', 3000000),  (20, 5, 'Japón', 1000000),
    (21, 5, 'Japón', 1200000),    (21, 1, 'América', 1500000),
    (25, 1, 'América', 20000000), (25, 10, 'Europa', 15000000), (25, 4, 'Resto del mundo', 10000000),
    (26, 1, 'Europa', 2500000),   (26, 10, 'América', 2000000),
    (27, 10, 'América', 1000000), (27, 1, 'Europa', 800000),
    (28, 1, 'América', 2000000),  (28, 10, 'Japón', 900000);
