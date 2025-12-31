import express from 'express';
import path from 'path';
import router from './routes/router.js';
const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


//Routes

app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
