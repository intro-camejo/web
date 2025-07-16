# SQL

Este apartado contiene apuntes sobre SQL. ¡Esperamos que te sean útiles!

## Introducción

**SQL (Structured Query Language)** es un lenguaje de programación utilizado para gestionar bases de datos relacionales. Permite realizar consultas, insertar, actualizar y eliminar datos de manera eficiente. A continuación, se presentan algunos conceptos clave:

- **Base de datos**: Un conjunto organizado de datos que se pueden acceder y manipular.
- **Tabla**: Una estructura dentro de una base de datos que almacena datos en filas y columnas.
- **Consulta**: Una instrucción SQL que se utiliza para recuperar o manipular datos en una base de datos.

Notemos que hay una distinción importante entre una **Base de Datos** y una **Tabla**. Una Base de Datos puede contener múltiples Tablas, cada una con su propia estructura y datos. La base de datos puede referirse a un conjunto completo de datos, mientras que una tabla es una representación específica de esos datos en forma de filas y columnas.

Por ejemplo, en una base de datos de una empresa, podrías tener una tabla para empleados, otra para departamentos y otra para proyectos. Cada tabla contendría información específica relacionada con su tema, pero todas formarían parte de la misma base de datos.

## Manipulación de tablas y bases de datos

Para crear una base de datos en SQL, se utiliza la instrucción `CREATE DATABASE`. Por ejemplo:

```sql
CREATE DATABASE mi_base_de_datos;
```

Esta consulta crea una nueva base de datos llamada `mi_base_de_datos`. Una vez creada, se puede utilizar para crear tablas y almacenar datos.

### Creación de una tabla

Para crear una tabla dentro de una base de datos, se utiliza la instrucción `CREATE TABLE`. Por ejemplo:

```sql
CREATE TABLE empleados (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    departamento VARCHAR(50),
    salario DECIMAL(10, 2)
);
```

Esta consulta crea una tabla llamada `empleados` con cuatro columnas: `id`, `nombre`, `departamento` y `salario`. La columna `id` es de tipo entero (`INT`) y se define como la clave primaria (`PRIMARY KEY`), lo que significa que debe ser única para cada registro. Las columnas `nombre` y `departamento` son de tipo cadena de caracteres variable (`VARCHAR`) con un máximo de 50 caracteres, y la columna `salario` es de tipo decimal con dos decimales.

### Inserción de datos

Para insertar datos en una tabla, se utiliza la instrucción `INSERT INTO`. Por ejemplo:

```sql
INSERT INTO empleados (id, nombre, departamento, salario)
VALUES (1, 'Juan Pérez', 'Recursos Humanos', 3000.00);
```

Esta consulta inserta un nuevo registro en la tabla `empleados` con los valores especificados para cada columna. Se pueden insertar múltiples registros utilizando varias sentencias `INSERT INTO` o una sola sentencia con múltiples valores. En el ejemplo de arriba solo se está agregando información de un empleado llamado "Juan Pérez".

Podríamos agregar muchos más empleados en un mismo bloque:

```sql
INSERT INTO empleados (id, nombre, departamento, salario)
VALUES 
(2, 'Ana Gómez', 'Finanzas', 3500.00),
(3, 'Luis Martínez', 'IT', 4000.00),
(4, 'María López', 'Marketing', 3200.00);
```

Esto inserta tres registros en la tabla `empleados` de una sola vez, lo que es más eficiente que realizar múltiples sentencias `INSERT INTO` por separado.

### Eliminación de datos

Para eliminar datos de una tabla, se utiliza la instrucción `DELETE FROM`. Por ejemplo:

```sql
DELETE FROM empleados
WHERE id = 1;
```

Esta consulta elimina el registro de la tabla `empleados` donde el `id` es igual a 1. Es importante tener cuidado al utilizar esta instrucción, ya que **eliminará permanentemente** los datos del registro especificado.

### Actualización de datos

Para actualizar datos en una tabla, se utiliza la instrucción `UPDATE`. Por ejemplo:

```sql
UPDATE empleados
SET salario = 3200.00
WHERE id = 2;
```

Esta consulta actualiza el salario del empleado con `id` igual a 2, estableciendo su nuevo salario en `$3200.00`. Al igual que con la instrucción `DELETE`, es importante especificar correctamente la condición en la cláusula `WHERE` para evitar actualizar registros incorrectos.

### Actualización de columnas en una tabla

Para actualizar la estructura de una tabla, como agregar o eliminar columnas, se utiliza la instrucción `ALTER TABLE`. Por ejemplo, para agregar una nueva columna llamada `fecha_contratacion` a la tabla `empleados`, se puede hacer lo siguiente:

```sql
ALTER TABLE empleados
ADD fecha_contratacion DATE;
```

Si luego se quisiera eliminar esta columna, se utilizaría:

```sql
ALTER TABLE empleados
DROP COLUMN fecha_contratacion;
```

### Eliminación de una tabla

Para eliminar una tabla de una base de datos, se utiliza la instrucción `DROP TABLE`. Por ejemplo:

```sql
DROP TABLE empleados;
```

Esta consulta elimina la tabla `empleados` de la base de datos, junto con todos los datos que contiene, **a menos que existan restricciones de *foreign keys***. Al igual que con la instrucción `DELETE`, es importante tener cuidado al utilizar `DROP TABLE`, ya que **eliminará permanentemente** la tabla y sus datos.

Si se sabe que la tabla tiene restricciones de *foreign keys* y se desea eliminarla junto con todas las referencias, se puede utilizar la opción `CASCADE`:

```sql
DROP TABLE empleados CASCADE;
```

Esta consulta eliminará la tabla `empleados` y todas las referencias a ella en otras tablas, eliminando también los datos asociados.

### Quitar datos de la tabla

Para eliminar todos los datos de una tabla sin eliminar la tabla en sí, se utiliza la instrucción `TRUNCATE TABLE`. Por ejemplo:

```sql
TRUNCATE TABLE empleados;
```

Esta consulta elimina todos los registros de la tabla `empleados`, pero mantiene la estructura de la tabla intacta. Por lo tanto, la tabla seguirá existiendo y se podrá seguir utilizando para insertar nuevos datos.

### Eliminación de una base de datos

Para eliminar una base de datos completa, se utiliza la instrucción `DROP DATABASE`. Por ejemplo:

```sql
DROP DATABASE mi_base_de_datos;
```

Esta consulta elimina la base de datos `mi_base_de_datos` junto con todas las tablas y datos que contiene. Al igual que con las instrucciones `DELETE` y `DROP TABLE`, es importante tener cuidado al utilizar `DROP DATABASE`, ya que **eliminará permanentemente** la base de datos y todos sus contenidos.

## Consultas en una tabla

Ahora que ya se tiene un conjunto de tablas con datos insertados, se pueden realizar consultas para recuperar información específica. Las consultas se realizan utilizando la instrucción `SELECT`. Por ejemplo:

```sql
SELECT * FROM empleados;
```

Esta consulta selecciona todos los registros de la tabla `empleados` y muestra todas las columnas. El asterisco (`*`) indica que se deben seleccionar todas las columnas disponibles.

Para seleccionar columnas específicas, se pueden enumerar los nombres de las columnas en lugar de usar el asterisco. Por ejemplo:

```sql
SELECT nombre, salario FROM empleados;
```

Esta consulta selecciona solo las columnas `nombre` y `salario` de la tabla `empleados`, mostrando únicamente esos datos en el resultado.

### Filtrado de resultados

Para filtrar los resultados de una consulta, se utiliza la cláusula `WHERE`. Por ejemplo:

```sql
SELECT * FROM empleados
WHERE departamento = 'IT';
```

Esta consulta selecciona todos los registros de la tabla `empleados` donde el departamento es igual a **IT**. La cláusula `WHERE` permite especificar condiciones para filtrar los resultados de la consulta.

```sql
SELECT * FROM empleados
WHERE salario > 3000.00;
```

Esta consulta selecciona todos los registros de la tabla `empleados` donde el salario es mayor a **3000.00**. Se pueden utilizar operadores de comparación como `=`, `>`, `<`, `>=`, `<=` y `<>` para establecer condiciones en la cláusula `WHERE`.

```sql
SELECT * FROM empleados
WHERE nombre LIKE 'A%';
```

Esta consulta selecciona todos los registros de la tabla `empleados` donde el nombre comienza con la letra **A**. El operador `LIKE` se utiliza para realizar búsquedas basadas en patrones, y el símbolo `%` actúa como un comodín que representa cualquier secuencia de caracteres.

### Ordenamiento de resultados

Para ordenar los resultados de una consulta, se utiliza la cláusula `ORDER BY`. Por ejemplo:

```sql
SELECT * FROM empleados
ORDER BY salario DESC;
```

Esta consulta selecciona todos los registros de la tabla `empleados` y los ordena por la columna `salario` en orden descendente (`DESC`). Es decir, que los empleados estará ordenados desde el de mejor salario al de peor salario. Si se desea ordenar en orden ascendente, se puede utilizar `ASC` o simplemente omitirlo, ya que es el comportamiento predeterminado.

```sql
SELECT * FROM empleados
ORDER BY nombre ASC;
```

Esta consulta selecciona todos los registros de la tabla `empleados` y los ordena por la columna `nombre` en orden ascendente (`ASC`). En este caso los empleados estarán ordenados alfabéticamente por su nombre, desde la A hasta la Z.

```sql
SELECT * FROM empleados
WHERE departamento = 'Recursos Humanos'
ORDER BY fecha_contratacion DESC;
```

Esta consulta selecciona todos los registros de la tabla `empleados` donde el departamento es igual a **Recursos Humanos** y los ordena por la columna `fecha_contratacion` en orden descendente (`DESC`). Esto permite ver solo a los empleados del departamento de Recursos Humanos y ordenarlos por la fecha en que fueron contratados, desde el más reciente al más antiguo.

### Agrupamiento de resultados

Para agrupar los resultados de una consulta, se utiliza la cláusula `GROUP BY`. Por ejemplo:

```sql
SELECT departamento, COUNT(*) AS total_empleados
FROM empleados
GROUP BY departamento;
```

Esta consulta selecciona el departamento y el número total de empleados en cada departamento de la tabla `empleados`. La función `COUNT(*)` cuenta el número de registros en cada grupo definido por la cláusula `GROUP BY`. El resultado mostrará una lista de departamentos junto con el total de empleados en cada uno.

```sql
SELECT departamento, AVG(salario) AS salario_promedio
FROM empleados
GROUP BY departamento;
```

Esta consulta selecciona el departamento y el salario promedio de los empleados en cada departamento de la tabla `empleados`. La función `AVG(salario)` calcula el salario promedio para cada grupo definido por la cláusula `GROUP BY`. El resultado mostrará una lista de departamentos junto con el salario promedio de los empleados en cada uno.

### Funciones de agregación

SQL proporciona varias funciones de agregación que se pueden utilizar para realizar cálculos en los datos. Algunas de las funciones más comunes son:

- `COUNT()`: Cuenta el número de registros en un grupo.
- `SUM()`: Suma los valores de una columna en un grupo.
- `AVG()`: Calcula el promedio de los valores de una columna en un grupo.
- `MIN()`: Devuelve el valor mínimo de una columna en un grupo.
- `MAX()`: Devuelve el valor máximo de una columna en un grupo.

Por ejemplo, para contar el número total de empleados en la tabla `empleados`, se puede utilizar:

```sql
SELECT COUNT(*) AS total_empleados
FROM empleados;
```

Esta consulta cuenta el número total de registros en la tabla `empleados` y devuelve el resultado con el alias `total_empleados`.

## Consultas entre tablas

En SQL, es común trabajar con múltiples tablas y realizar consultas que involucren datos de varias de ellas. Esto se logra mediante el uso de **joins** (uniones) y subconsultas.

### Joins (Uniones)

Los ***joins*** permiten combinar registros de dos o más tablas basándose en una relación entre ellas. Existen varios tipos de joins, siendo el más común el `INNER JOIN`, que devuelve solo los registros que tienen coincidencias en ambas tablas.

Por ejemplo, si tenemos una tabla `departamentos` que contiene información sobre los departamentos de la empresa, y queremos obtener una lista de empleados junto con su departamento, podemos hacer lo siguiente:

```sql
SELECT empleados.nombre, departamentos.nombre AS departamento
FROM empleados
INNER JOIN departamentos ON empleados.departamento = departamentos.id;
```

Esta consulta selecciona el nombre de los empleados y el nombre de su departamento, uniendo las tablas `empleados` y `departamentos` a través de la columna `departamento` en la tabla `empleados` y la columna `id` en la tabla `departamentos`. El resultado mostrará una lista de empleados junto con el nombre de su departamento.

Otra manera de hacer este *join* es utilizando `WHERE`:

```sql
SELECT empleados.nombre, departamentos.nombre AS departamento
FROM empleados, departamentos
WHERE empleados.departamento = departamentos.id;
```

¿Cómo diferenciamos el uso de `WHERE` y `JOIN`? En realidad, ambas formas son válidas y producen el mismo resultado. Sin embargo, el uso de `JOIN` es más explícito y legible, especialmente cuando se trabaja con múltiples tablas. Además, `JOIN` permite especificar diferentes tipos de uniones, como `LEFT JOIN`, `RIGHT JOIN`, y `FULL JOIN`, que tienen diferentes comportamientos en cuanto a los registros que se incluyen en el resultado.

### Subconsultas

Las subconsultas son consultas anidadas dentro de otra consulta. Se utilizan para realizar operaciones más complejas o para filtrar resultados basados en el resultado de otra consulta.

Por ejemplo, si queremos obtener una lista de empleados cuyo salario es mayor que el salario promedio de todos los empleados, podemos hacer lo siguiente:

```sql
SELECT nombre, salario
FROM empleados
WHERE salario > (SELECT AVG(salario) FROM empleados);
```

Esta consulta selecciona el nombre y el salario de los empleados cuyo salario es mayor que el salario promedio de todos los empleados. La subconsulta `(SELECT AVG(salario) FROM empleados)` calcula el salario promedio, y luego la consulta principal filtra los empleados que cumplen con esa condición.

### Consultas avanzadas

Para realizar consultas más avanzadas, se pueden combinar múltiples joins y subconsultas. Por ejemplo, si queremos obtener una lista de empleados junto con su departamento y el salario promedio de su departamento, podemos hacer lo siguiente:

```sql
SELECT empleados.nombre, departamentos.nombre AS departamento, AVG(empleados.salario) AS salario_promedio
FROM empleados
INNER JOIN departamentos ON empleados.departamento = departamentos.id
GROUP BY empleados.nombre, departamentos.nombre;
```

Esta consulta selecciona el nombre de los empleados, el nombre de su departamento y el salario promedio de los empleados en ese departamento. Utiliza un `INNER JOIN` para combinar las tablas `empleados` y `departamentos`, y luego agrupa los resultados por el nombre del empleado y el nombre del departamento para calcular el salario promedio.

## *Primary Keys* y *Foreign Keys*

En SQL, las *primary keys* (claves primarias) y *foreign keys* (claves foráneas) son conceptos fundamentales para establecer relaciones entre tablas y garantizar la integridad de los datos.

### Primary Keys (Claves Primarias)

Una ***primary key*** es una columna o conjunto de columnas que identifica de manera única cada fila en una tabla. No puede contener valores nulos y debe ser única para cada registro. Se utiliza para garantizar que no haya duplicados en la tabla y para establecer relaciones con otras tablas.

Por ejemplo, en la tabla `empleados`, la columna `id` podría ser definida como la clave primaria:

```sql
CREATE TABLE empleados (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    departamento VARCHAR(50),
    salario DECIMAL(10, 2)
);
```

En este caso, la columna `id` es de tipo `SERIAL`, lo que significa que se generará automáticamente un valor único para cada nuevo registro insertado en la tabla. Esto asegura que cada empleado tenga un identificador único, y por lo tanto, dos empleados distintos no podrán tener el mismo `id`.

### Foreign Keys (Claves Foráneas)

Una ***foreign key*** es una columna o conjunto de columnas en una tabla que hace referencia a la ***primary key*** de otra tabla. Se utiliza para establecer y reforzar la relación entre las dos tablas. Las claves foráneas permiten la comunicación entre tablas, asegurando que los valores en la columna de la clave foránea coincidan con los valores en la columna de la clave primaria de la tabla referenciada. Es decir, que de alguna manera **una clave foránea en una tabla apunta a una clave primaria en otra tabla**.

Por ejemplo, si tenemos una tabla `departamentos` y queremos establecer una relación entre los empleados y sus departamentos, podemos definir la columna `departamento` en la tabla `empleados` como una clave foránea que hace referencia a la columna `id` en la tabla `departamentos`:

```sql
CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50)
);

CREATE TABLE empleados (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    departamento INT,
    salario DECIMAL(10, 2),
    FOREIGN KEY (depto_id) REFERENCES departamentos(id)
);
```

En este caso, la columna `depto_id` en la tabla `empleados` es una clave foránea que hace referencia a la columna `id` en la tabla `departamentos`. Esto significa que cada empleado debe pertenecer a un departamento existente, y no se permitirá insertar un registro en la tabla `empleados` con un valor de `depto_id` que no exista en la tabla `departamentos`.

A su vez, la generación de esta *foreign key* garantiza que la tabla de empleados pueda relacionarse de forma directa con la tabla de departamentos, permitiendo realizar consultas que combinen datos de ambas tablas de manera efectiva. 