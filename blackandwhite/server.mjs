import express from 'express';
import router from './routes/router.mjs';
import path from 'path';

const __dirname = path.resolve(); 

const app = express();
const PORT = process.env.PORT ||  3000;

app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});