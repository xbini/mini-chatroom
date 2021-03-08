import express from 'express';
import indexRouter from './routes';
import herosRouter from './routes/api/heros';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/api/heros', herosRouter);

export default app;
