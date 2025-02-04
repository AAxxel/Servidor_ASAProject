const express = require('express');
const router = express.Router();

const amosRouter = require('./amos.router.js');
const rolesRouter = require('./roles.router.js');
const usuariosRouter = require('./usuarios.router.js');
const especiesRouter = require('./especies.router.js');
const razaRouter = require('./raza.router.js');
const mascotasRouter = require('./mascotas.router.js');

router.use('/amos', amosRouter);
router.use('/roles', rolesRouter);
router.use('/usuarios', usuariosRouter);
router.use('/especies', especiesRouter);
router.use('/raza', razaRouter);
router.use('/mascotas', mascotasRouter);

module.exports = {router};
