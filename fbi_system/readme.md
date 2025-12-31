# Sistema de Gestión de Misiones Secretas

Este es un proyecto ficticio que permite gestionar usuarios a través de un sistema online seguro. Utiliza Node.js con Express para el backend y HTML/CSS/Bootstrap para el frontend, implementando autenticación basada en JWT para acceder a áreas restringidas.

### Características Principales:

- **Autenticación de Agentes:** Los agentes pueden iniciar sesión con sus credenciales, recibiendo un token JWT válido con un tiempo de expiración de 2 minutos.
- **Acceso Restringido:** Una vez autenticados, los agentes pueden acceder a áreas restringidas del sitio, mostrándoles mensajes personalizados según su nivel de acceso.
- **Seguridad:** Todos los datos sensibles están protegidos mediante la utilización de tokens JWT firmados con una clave secreta almacenada de forma segura.


### Prerrequisitos
Para poder ejecutar la aplicación, se deben cumplir los siguientes prerrequisitos:

- Node.js

### Instalación
Para instalar y ejecutar la aplicación, se deben seguir los siguientes pasos:

1. Clonar el repositorio

```shell
git clone https://github.com/danilojpalma/fbi_system.git
```
2. Acceder al directorio del repositorio.

```shell
cd fbi_system
```
3. Instalar las dependencias del proyecto.

```shell
npm install
```
4. Configura la variable de entorno `JWT_SECRET_KEY` en un archivo `.env` en la raíz del proyecto.

### Uso:
Ejecuta el servidor con

```shell
npm run dev
```
Abre tu navegador web y navega hasta http://localhost:3000.

- **Inicio de Sesión:** Visita la ruta `/` para iniciar sesión con tus credenciales de agente.
- **Área Restringida:** Una vez autenticado, serás redirigido a un dashboard donde tendras acceso a un hiperenlace restringido.

### Código fuente
El código fuente de la aplicación se encuentra en el siguiente repositorio de GitHub:

[https://github.com/danilojpalma/fbi_system.git](https://github.com/danilojpalma/fbi_system.git)


Licencia
Este proyecto se encuentra bajo la licencia MIT. Para más información, consultar el archivo LICENSE.md.