# Introducción

Este programa te permite gestionar una base de datos de estudiantes en PostgreSQL. Puedes realizar acciones como agregar, consultar, editar y eliminar estudiantes.

#### Requisitos previos

- Tener instalado Node.js y npm
- Tener una base de datos PostgreSQL configurada y funcionando

#### Instalación

- Clona o descarga el repositorio del código.
- Ejecuta el siguiente comando en la carpeta del proyecto:

``npm install``

- Crea la base de datos usando el archivo que se encuentra en ``database/always_music.sql``
- Modifica el archivo index.js y cambia las variables password, user y database segun corresponda. 

````bash
const config = {
    host: 'localhost',
    user: 'postgres',
    password: '*******', // cambiar por su contraseña
    database: 'always_music', // cambiar por su base de datos
    port: 5432,
}
````

#### Uso básico

Abre una terminal y navega hasta la carpeta del proyecto.
Ejecuta el siguiente comando, reemplazando <accion> con la acción que deseas realizar y los argumentos correspondientes:

``node index.js <accion> <argumentos>``

#### Acciones disponibles:

Para evitar errores procura usar comillas simples ``''`` para ``<nombre> <rut> <curso>``

1. Accion: ``nuevo`` 
Agrega un nuevo estudiante a la base de datos.
Argumentos: ``<nombre> <rut> <curso> <nivel>``

Ejemplo: 
``node index.js nuevo 'Alain Johannes' '15.426.365-K' 'Guitarra' 20``

2. Acción ``rut`` 
Consulta un estudiante por su RUT.
Argumentos: ``<rut>``

Ejemplo: 
``node index.js rut '12345678-9'``

3. Acción ``consulta``
Muestra todos los estudiantes registrados.
Argumentos: No requiere argumentos.

Ejemplo: 
``node index.js consulta``

4. Acción ``editar``
Edita la información de un estudiante existente.
Argumentos: ``<nombre> <rut> <curso> <nivel>``
El primer argumento sirve para seleccionar el estudiante que queremos editar, los siguientes 3 argumentos se pueden modificar.

Ejemplo: 
``node index.js editar 'Alain Johannes' '14.426.365-K' 'Piano' 40``

5. Acción ``eliminar``
Elimina un estudiante de la base de datos.
Argumentos: ``<rut>``

Ejemplo: 
``node index.js eliminar '14.426.365-K'``

#### Mensajes de error

Si se proporciona un número incorrecto de argumentos, se mostrará un mensaje de error indicando la cantidad correcta de argumentos para cada acción.


Si se produce un error al conectar a la base de datos o al ejecutar una consulta, se mostrará un mensaje de error con información sobre el error.