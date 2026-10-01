# Dataset de videojuegos 🎮

Base de datos de ejemplo para la clase **SQL – JOINs** (y la parte de agrupamientos) de **Intro Camejo (FIUBA)**. Las diapos están en [`static/slides/sql-2/`](../../static/slides/sql-2/).

Todo está en un solo archivo, [`dataset.sql`](./dataset.sql): crea las tablas y carga los datos. Se puede correr las veces que haga falta, porque arranca borrando las tablas.

---

## Cómo usarlo

### Opción A: DB Fiddle (sin instalar nada)

1. Entrá a [DB Fiddle](https://www.db-fiddle.com/) y elegí **PostgreSQL 17** (arriba a la izquierda).
2. Pegá todo el contenido de `dataset.sql` en la solapa **Schema SQL**.
3. Escribí las consultas en **Query SQL** y dale a **Run**.

### Opción B: consola de la página

En [https://www.intro-camejo.com.ar/sql-juegos/](https://www.intro-camejo.com.ar/sql-juegos/) el dataset ya está cargado. Corre **SQLite** en el navegador (no Postgres): alcanza para los ejemplos de las diapos. Los botones los dejan escritos y los ejecutan.

La página lee `static/sql-juegos/dataset.sql`. Tiene que quedar **idéntico** a este `dataset.sql`.

### Opción C: Postgres en Docker + `psql`

Con el `docker-compose.yml` de la clase de Introducción a SQL levantado:

```bash
docker cp dataset.sql <container>:/dataset.sql
docker exec -it <container> psql -U postgres -d suramericanos -f /dataset.sql
```

---

## Las tablas

| Tabla | Filas | Qué guarda |
|---|---|---|
| `publicadoras` | 9 | `id`, `nombre`, `pais`, `fundacion` |
| `generos` | 13 | `id`, `nombre` |
| `plataformas` | 11 | `id`, `nombre`, `fabricante`, `lanzamiento` |
| `juegos` | 28 | `id`, `titulo`, `anio`, `precio`, `publicadora_id` (FK, **puede ser NULL**), `genero_id` (FK), `metacritic` |
| `juegos_plataformas` | 95 | Relación N:M entre juegos y plataformas |
| `ventas` | 54 | `juego_id`, `plataforma_id`, `region`, `unidades` (**cifras ilustrativas**) |

## Casos borde (a propósito)

Están para que `INNER`, `LEFT`, `RIGHT`, `FULL` y el anti-join den resultados distintos:

- **Paradox Interactive**: publicadora sin juegos cargados.
- **Hollow Knight**, **Celeste** y **Undertale**: juegos autopublicados, con `publicadora_id = NULL`.
- **Dreamcast**: plataforma sin juegos.
- **Estrategia**: género sin juegos.

## Sobre los datos

- Publicadora, año de lanzamiento original, género y plataformas de cada juego son reales. La lista de plataformas no es exhaustiva.
- El precio (USD, de lanzamiento) y el puntaje de Metacritic son aproximados.
- La tabla `ventas` es **inventada**. Sirve para practicar `SUM`, `AVG` y `GROUP BY`, no para sacar conclusiones.
