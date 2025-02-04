const express = require('express');
const router = express.Router();

const amosRouter = require('./amos.router.js');
const rolesRouter = require('./roles.router.js');

router.use('/amos', amosRouter);
router.use('/roles', rolesRouter);

module.exports = {router};
