import express from 'express';
import { schema } from '../../utils/tools';
import locationData from '../../resource/china-location.json';

const locationAPIRouter = express.Router();

locationAPIRouter.get('/', function (req, res, next) {
    res.json(schema(locationData));
});

export default locationAPIRouter;
