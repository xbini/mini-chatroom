import express from 'express';
import path from 'path';
import { okMessage } from '../utils/tools';

const chatRouter = express.Router();

chatRouter.post('/', function (req, res, next) {
    console.log(req.body.message);
    res.status(200).send(okMessage());
});

export default chatRouter;
