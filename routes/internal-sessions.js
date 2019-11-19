const express = require('express');
const router = express.Router();
const schema = require('../utils/schema');
const generateSession = () => {
    var session = {
        customerId: parseInt(Math.random() * 10000000),
        externalId3APP: 'starbucks app',
        wx_unionId: '23333333',
        wx_openId: '23333333',
    }
    return session;
};

router.get('/', function (req, res, next) {
    const session = generateSession();
    res.json(session);
});
router.post('/', function (req, res, next) {
    const session = generateSession();
    res.json(schema(session));
});

module.exports = router;
