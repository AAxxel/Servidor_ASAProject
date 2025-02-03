const express = require('express');
const router = express.Router();

const amosRouter = require('./amos.router.js');

router.use('/amos', amosRouter);

module.exports = {router};
