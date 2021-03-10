import express from 'express';
import herosAPIRouter from './api/heros';
import locationAPIRouter from './api/china-location';

const indexPageRouter = express.Router();

indexPageRouter.get('/', function (req, res, next) {
  res.render('index', {});
});

export const routes = [
  {
    path: '/',
    router: indexPageRouter
  },
  {
    path: '/api/china-location',
    router: locationAPIRouter
  },
  {
    path: '/api/heros',
    router: herosAPIRouter
  }
];
