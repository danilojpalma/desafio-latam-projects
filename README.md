### Monorepo Desafío Latam / Talento Digital

Repositorio que reúne todos los proyectos y ejercicios desarrollados durante el bootcamp de Desafío Latam y Talento Digital. Cada carpeta es un proyecto independiente (frontend, backend, bases de datos, ejercicios DOM, etc.) y suele tener su propio `README.md`, dependencias y scripts.

#### Estructura general

- `abracadabra_desafio/`: app básica con lógica en `index.js` y assets estáticos.
- `always_music/` y `always_music_2/`: API de gestión musical (Node.js, rutas y consultas a BD).
- `banco_solar/`: banca digital simulada con modelos y controladores en Express.
- `blackandwhite/`: servidor en `server.mjs` con rutas públicas.
- `citas_medicas/`: servicio de citas en `index.mjs`.
- `collage_de_imagenes/`: servidor Express para manejo de imágenes.
- `fbi_system/`: app con controladores, vistas y datos simulados.
- `like-me/`: API de posts/likes con modelos y rutas en Express.
- `mi_banco/`, `mi_repertorio/`, `roommates/`: ejercicios Node/Express con bases de datos y vistas.
- `servidores-welcome-world/`: servidor mínimo en `app.mjs`.
- Proyectos frontend estáticos: `arrays_objetos/`, `Datos_de_usuarios/`, `desafio_metodos_de_objetos/`, `desafio_variables/`, `ejercicios_DOM/`, `Javascript_Avanzado/`, `lista-animales/`, `multiplicacion-factorial/`, `piedra-papel-tijeras/`, `promesas/`, `traer_posts/`, `viajes_chile/`.
- SQL: `desafio_sql_3/`, `desafio2-Danilo-Palma-505.sql`.
- Otros: `club-deportivo/`, `collage_de_imagenes/`, `mercado_web/`, `project_1/`, `project-2/`, `sugerencia-videos/`, `super-hero-API/`.

#### Cómo usar este monorepo

1) Clonar: `git clone <url>` y entrar a la carpeta del proyecto que quieras probar.
2) Revisar el `README.md` específico del proyecto (si existe) para conocer dependencias y scripts.
3) Para proyectos Node/Express: `npm install` y luego `npm start` o el script indicado en su `package.json`.
4) Para proyectos estáticos (HTML/JS/CSS): abrir el `index.html` en el navegador o servir con `npx serve`.
5) Para ejercicios SQL: revisar los `.sql` en la carpeta correspondiente.

#### Requisitos habituales

- Node.js 18+ y npm.
- (Opcional) PostgreSQL o MySQL según el proyecto.
- Navegador web moderno para los proyectos frontend.

#### Notas Adicionales

- Cada carpeta es independiente: las dependencias no están centralizadas.
- Si algún script falla, revisar la versión de Node y el archivo `package.json` del proyecto en cuestión.

