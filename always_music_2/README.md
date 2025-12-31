# Proyecto API para gestión de estudiantes

Este proyecto es una API REST que permite el manejo de estudiantes en una base de datos PostgreSQL. La API es construida con Node.js y Express, y utiliza el paquete `pg` para la conexión a la base de datos.

## Funcionalidades

La API proporciona las siguientes funcionalidades:

- Agregar un nuevo estudiante con su nombre, RUT, curso y nivel.
- Consultar un estudiante por su RUT.
- Consultar todos los estudiantes registrados.
- Actualizar la información de un estudiante por su RUT.
- Eliminar un estudiante por su RUT.

## Prerrequisitos

Para poder ejecutar la API, se deben cumplir los siguientes prerrequisitos:

- Tener instalado Node.js 
- Tener instalado PostgreSQL .
- Tener instalado un cliente de PostgreSQL, como por ejemplo pgAdmin.

## Instalación

Para instalar la API, se deben seguir los siguientes pasos:

1. Clonar el repositorio
```bash
git clone https://github.com/danilojpalma/always_music_2.git
```
2. Acceder al directorio del repositorio.
```bash
cd always-music-2
```
3. Instalar las dependencias del proyecto.
```bash
npm install
```
4. Crear la base de datos en PostgreSQL.

Para crear la base de datos, se debe ejecutar el siguiente comando en el cliente de PostgreSQL:
```sql
CREATE DATABASE always_music;
CREATE TABLE estudiantes (
  nombre VARCHAR(100),
  rut VARCHAR(50) UNIQUE,
  curso VARCHAR (255),
  nivel INT
);
```
5. Configurar la conexión a la base de datos.

Debes crear un archivo en la carpeta raiz con el nombre `.env`, en donde se deben configurar las variables de entorno segun tu configuración en tu cliente de PostgreSQL.
```javascript

DB_HOST = localhost
DB_USER = postgres
DB_PASSWORD = contraseña
DB_DATABASE = always_music

```
6. Ejecutar la API.
```bash
npm run dev
```
La API se ejecutará en el puerto 3000 (`http://localhost:3000`).

## Cómo usarlo

Para utilizar la API, se debe realizar una solicitud HTTP a la ruta correspondiente a la funcionalidad deseada. A continuación, se detallan las rutas y los métodos HTTP que se deben utilizar:

- `GET /`: Muestra un mensaje de bienvenida.

- `GET /agregar?nombre=<nombre>&rut=<rut>&curso=<curso>&nivel=<nivel>`: Agrega un nuevo estudiante con la información proporcionada en la consulta.

![imagen agregar](https://onedrive.live.com/embed?resid=EBD9E1806310E978%21101843&authkey=%21AMKjKZ4NqPvJ6EI&width=1528&height=482)

- `GET /consultarRut?rut=<rut>`: Consulta un estudiante por su RUT y devuelve su información en formato JSON.

![imagen consultar por rut](https://onedrive.live.com/embed?resid=EBD9E1806310E978%21101845&authkey=%21ALgT0pHGzfGVNeg&width=1528&height=436)
- `GET /consultarTodos`: Consulta todos los estudiantes registrados y devuelve su información en formato JSON.

![imagen consultar todos los registros](https://onedrive.live.com/embed?resid=EBD9E1806310E978%21101847&authkey=%21APVzHyYqLjW1f6A&width=1531&height=557)

- `GET /actualizar?rutActual=<rut_actual>&nuevoNombre=<nombre_nuevo>&nuevoRut=<rut_nuevo>&nuevoCurso=<curso_nuevo>&nuevoNivel=<nivel_nuevo>`: Actualiza la información de un estudiante por su RUT.

![imagen actualizar por rut](https://onedrive.live.com/embed?resid=EBD9E1806310E978%21101849&authkey=%21ANKYXHfElEshVfo&width=1024)
- `GET /eliminar?rut=<rut>`: Elimina un estudiante por su RUT.

![imagen eliminar por rut](https://onedrive.live.com/embed?resid=EBD9E1806310E978%21101851&authkey=%21AOSMeybSzlYPmcc&width=1532&height=468)

Se recomienda utilizar una herramienta como [Thunder Client](https://www.thunderclient.com/) o [Postman](https://www.postman.com/) para realizar las solicitudes HTTP de manera más sencilla y visualizar los resultados.

## Código fuente

El código fuente de la API se encuentra en el siguiente repositorio de GitHub:

[https://github.com/danilojpalma/always_music_2](https://github.com/danilojpalma/always_music_2)

En el repositorio, se pueden encontrar los archivos de configuración de la base de datos (`db.js`), las consultas a la base de datos (`queries.js`) y las rutas de la API (`index.js`).

## Licencia

Este proyecto se encuentra bajo la licencia MIT. Para más información, consultar el archivo `LICENSE.md`.