-- Crear una base de datos llamada películas. Base de datos creada con dbeaver.
create database peliculas;

-- Tablas creadas con dbeaver
CREATE TABLE peliculas (
	id int4 NULL,
	"Pelicula" varchar(64) NULL,
	"Año estreno" int4 NULL,
	"Director" varchar(50) NULL
);

CREATE TABLE reparto (
	id_pelicula int4 NULL,
	actor varchar(50) NULL
);

-- Cargar ambos archivos a su tabla correspondiente.
-- Archivo peliculas.csv y reparto.csv cargados con dbeaver.

-- Obtener el ID de la película “Titanic”.
select id from peliculas where "Pelicula" = 'Titanic';

-- Listar a todos los actores que aparecen en la película "Titanic
select reparto.actor
from peliculas
join reparto
on peliculas.id = reparto.id_pelicula
where peliculas."Pelicula"  = 'Titanic';

-- Consultar en cuántas películas del top 100 participa Harrison Ford.
select count(peliculas."Pelicula")
from peliculas
join reparto
on peliculas.id = reparto.id_pelicula
where reparto.actor  = 'Harrison Ford';

-- Indicar las películas estrenadas entre los años 1990 y 1999 ordenadas por título de manera ascendente.
select "Pelicula" 
from peliculas 
where "Año estreno" between 1990 and 1999
order by "Pelicula" asc;

-- Hacer una consulta SQL que muestre los títulos con su longitud, la longitud debe ser nombrado para la consulta como “longitud_titulo”.
select "Pelicula", length("Pelicula") as "longitud_titulo"
from peliculas;

-- Consultar cual es la longitud más grande entre todos los títulos de las películas.
select max(length("Pelicula")) as "longitud_titulo"
from peliculas;
