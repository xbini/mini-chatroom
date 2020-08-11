const express = require('express');
const router = express.Router();
const schema = require('../utils/schema');
const locations = ['sichuan', 'shanghai'];

const generateCustomerId = () => {
    const arr = [8888, 7777]
    const stamp = new Date().getTime()
    return arr[stamp % 2]
}

const generateSession = () => {
    const starbucksMemberId = generateCustomerId()
    const session = {
        customerId: starbucksMemberId,
        whiteFlag: '0',
        sessionType: 'web',
        starbucksId: parseInt(Math.random() * 10000000),
        externalId3APP: 'starbucks app',
        wx_unionId: '23333333',
        wx_openId: '23333333',
        location: locations[new Date().getTime() % 2],
        ll: locations[new Date().getTime() % 2],
        xCustomerId: generateCustomerId(),
        xSbuxMemberId: starbucksMemberId,
        xTenantMemberId: 20,
        xTenantMemberToken: null,
        xTenantBodyDigest: 'Y',
        cause: 'cause value',
        userId: 'user-01'
    }
    return session;
};

const callback = function (req, res, next) {
    const session = generateSession();
    console.log('session body:', req.body);
    console.log('request query:', req.query);
    const pure = req.query.pure;
    if (pure == 'yes') {
        return res.json(session);
    }
    return res.json(schema(session));
}

router.get('/', callback);

router.post('/', callback);

module.exports = router;
