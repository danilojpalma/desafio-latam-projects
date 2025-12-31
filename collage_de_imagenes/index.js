import express from 'express';
import routes from './routes/router.js';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = process.env.PORT || 3000;

const fileUploadConfig = fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 * 1024 son 5kb y * 1024 son 5mb
    abortOnLimits: true,
    responseOnLimit: "El tamaño del archivo a sobrepasado el límite especificado.",
});

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUploadConfig);

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
