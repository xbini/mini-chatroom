const express = require('express');
const router = express.Router();
const schema = require('../utils/schema');
const locations = ['sichuan', 'shanghai'];

const generateSession = () => {
    var session = {
        customerId: parseInt(Math.random() * 10000000),
        externalId3APP: 'starbucks app',
        wx_unionId: '23333333',
        wx_openId: '23333333',
        location: locations[new Date().getTime() % 2]
    }
    return session;
};

const callback = function (req, res, next) {
    const session = generateSession();
    res.json(schema(session));
}

router.get('/', callback);

router.post('/', callback);

module.exports = router;
