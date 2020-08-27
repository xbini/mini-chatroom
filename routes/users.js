const express = require('express');
const bunyan = require('bunyan');
const path = require('path')
const schema = require('../utils/schema');
const log = bunyan.createLogger({
  name: 'express-start',
  streams: [
    {
      level: 'info',
      closeOnExit: true,
      type: 'file',
      path: path.resolve('./logs/access.log')
    }
  ]
});

const router = express.Router();

const FIRST_NAME_POOL = ['公孙', '独孤', '上官', '归海', '欧阳', '尉迟', '汝嫣', '木易', '濮阳', '令狐'];
const LAST_NAME_POOL = ['求败', '景天', '云梦', '晨旭 ', '子墨', '永胥', '灏晗', '樊', '思远', '继承'];

const getUsers = function (size) {
  const users = [];
  const length = size || 5;
  for (let i = 0; i < length; i++) {
    users.push({
      id: i,
      name: `${FIRST_NAME_POOL[parseInt(Math.random() * 10)]}${LAST_NAME_POOL[parseInt(Math.random() * 10)]}`
    });
  }
  return users;
};
/* GET users listing. */
router.get('/', function (req, res, next) {
  const { size } = req.query;
  log.info(`${req.method} ${req.originalUrl} ${req.ip} ${req.get('user-agent')}`);
  res.json(schema(getUsers(size)));
});
router.post('/', function (req, res, next) {
  const { size } = req.query;
  res.json(schema(getUsers(size)));
});

module.exports = router;
