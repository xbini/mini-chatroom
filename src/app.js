import express from 'express';
import { routes } from './routes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/pages');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.forEach(route => app.use(route.path, route.router));

export default app;
