const express = require('express');
const router = express.Router();
const { amoCreate } = require('../controllers/amos.controller');

router.post('/crear', amoCreate);


module.exports = router;