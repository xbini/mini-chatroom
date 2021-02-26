import express from 'express';
import indexRouter from './routes';
import chatRouter from './routes/chat';
import herosRouter from './routes/heros';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/heros', herosRouter);
app.use('/chat', chatRouter);

export default app;
