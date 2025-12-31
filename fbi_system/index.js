import express from 'express';
import router from './routes/router.js';
import { engine } from 'express-handlebars';
import cookieParser from 'cookie-parser';
import path from "path";


const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", router);
app.engine('hbs', engine({
    extname: '.hbs'}
));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

