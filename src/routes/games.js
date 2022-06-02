const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const games = require('../sample.json');

//Get games
router.get('/', (req, res) => {
    res.json(games);
});

module.exports = router;