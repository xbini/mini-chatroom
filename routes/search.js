const express = require('express');
const router = express.Router();
const schema = require('../utils/schema');

const generateResults = () => {
    const results = {
        value: Math.random()
    }
    return results;
};

const callback = function (req, res, next) {
    const results = generateResults();
    res.json(schema(results));
}

router.get('/', callback);

module.exports = router;
