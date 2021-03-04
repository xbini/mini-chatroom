import express from 'express';
import path from 'path';
import ejs from 'ejs';

const template_path = path.join(__dirname, '../resource/index.ejs');
const indexRouter = express.Router();

indexRouter.get('/', function (req, res, next) {
  ejs.renderFile(template_path, {}, {}, function (err, str) {
    res.status(200).send(str);
  });
});

export default indexRouter;
