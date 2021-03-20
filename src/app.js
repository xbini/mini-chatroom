import express from 'express';
import { routes } from './routes';
import { CORS_HOSTS, CORS_METHODS } from './utils/constants';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/pages');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', CORS_HOSTS.join());
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', CORS_METHODS.join());
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

routes.forEach(route => app.use(route.path, route.router));

export default app;
