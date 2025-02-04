const express = require('express');
const router = express.Router();

const amosRouter = require('./amos.router.js');
const rolesRouter = require('./roles.router.js');
const usuariosRouter = require('./usuarios.router.js');

router.use('/amos', amosRouter);
router.use('/roles', rolesRouter);
router.use('/usuarios', usuariosRouter);

module.exports = {router};
