# Collage de Imágenes

Este proyecto permite a los usuarios subir imágenes a un collage interactivo. Las imágenes se muestran en una cuadrícula, y los usuarios pueden interactuar con ellas mediante enlaces que llevan a acciones específicas, como eliminar la imagen. El proyecto utiliza Node.js con Express para el backend, y HTML/CSS/JavaScript para el frontend.

### Características:

- Subida de Imágenes: Los usuarios pueden subir nuevas imágenes a través de un formulario, especificando la posición en la cuadrícula donde se mostrará.
- Visualización de Imágenes: Todas las imágenes subidas están disponibles para visualizar en un formato de cuadrícula.
- Interacción con Imágenes: Los usuarios pueden interactuar con las imágenes a través de enlaces asociados, permitiendo acciones como ver detalles adicionales o eliminar la imagen.

### Prerrequisitos
Para poder ejecutar la aplicación, se deben cumplir los siguientes prerrequisitos:

- Node.js

### Instalación
Para instalar y ejecutar la aplicación, se deben seguir los siguientes pasos:

1. Clonar el repositorio

```shell
git clone https://github.com/danilojpalma/collage_de_imagenes.git
```
2. Acceder al directorio del repositorio.

```shell
cd collage_de_imagenes
```
3. Instalar las dependencias del proyecto.

```shell
npm install
```


### Uso:
Ejecuta el servidor con

```shell
npm run dev
```
Abre tu navegador web y navega hasta http://localhost:3000.

### Cómo subir una nueva imagen:
- Selecciona la imagen que deseas subir.
- Ingresa el número de posición donde deseas que aparezca la imagen en la cuadrícula.
- Haz clic en el botón "Subir".
- La imagen aparecerá en la posición especificada en la cuadrícula.

### Código fuente
El código fuente de la aplicación se encuentra en el siguiente repositorio de GitHub:

[https://github.com/danilojpalma/collage_de_imagenes.git](https://github.com/danilojpalma/collage_de_imagenes.git)


Licencia
Este proyecto se encuentra bajo la licencia MIT. Para más información, consultar el archivo LICENSE.md.