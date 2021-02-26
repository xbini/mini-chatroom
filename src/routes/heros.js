import express from 'express';
import { schema } from '../utils/tools';

const herosRouter = express.Router();

const FIRST_NAME_POOL = ['公孙', '独孤', '上官', '归海', '欧阳', '尉迟', '汝嫣', '木易', '濮阳', '令狐'];
const LAST_NAME_POOL = ['求败', '景天', '云梦', '晨旭 ', '子墨', '永胥', '灏晗', '樊', '思远', '继承'];

const getHeros = function (size) {
  const heros = [];
  const length = size || 5;
  for (let i = 0; i < length; i++) {
    heros.push({
      id: i,
      name: `${FIRST_NAME_POOL[parseInt(Math.random() * 10)]}${LAST_NAME_POOL[parseInt(Math.random() * 10)]}`
    });
  }
  return heros;
};

herosRouter.get('/', function (req, res, next) {
  const { size } = req.query;
  res.json(schema(getHeros(size)));
});

herosRouter.post('/', function (req, res, next) {
  const { size } = req.query;
  res.json(schema(getHeros(size)));
});

export default herosRouter;
