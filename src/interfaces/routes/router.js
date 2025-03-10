const express = require('express');
const router = express.Router();

const amosRouter = require('./amos.router.js');
const rolesRouter = require('./roles.router.js');
const usuariosRouter = require('./usuarios.router.js');
const especiesRouter = require('./especies.router.js');
const razaRouter = require('./raza.router.js');
const mascotasRouter = require('./mascotas.router.js');
const cuidadosRouter = require('./cuidados.router.js');
const enfermedadesRouter = require('./enfermedades.router.js');
const medicamentosRouter = require('./medicamentos.router.js');
const cuidadosMascotasRouter = require('./cuidados_mascotas.router.js');
const enfermedadesMascotasRouter = require('./enfermedades_mascotas.router.js');
const tratamientosRouter = require('./tratamientos.router.js');
const recetasRouter = require('./receta.router.js');
const rescateRouter = require('./rescates.router.js');

router.use('/amos', amosRouter);
router.use('/roles', rolesRouter);
router.use('/usuarios', usuariosRouter);
router.use('/especies', especiesRouter);
router.use('/raza', razaRouter);
router.use('/mascotas', mascotasRouter);
router.use('/cuidados', cuidadosRouter);
router.use('/enfermedades', enfermedadesRouter);
router.use('/medicamentos', medicamentosRouter);
router.use('/cuidados-mascotas', cuidadosMascotasRouter);
router.use('/enfermedades-mascotas', enfermedadesMascotasRouter);
router.use('/tratamientos', tratamientosRouter);
router.use('/recetas', recetasRouter);
router.use('/rescates', rescateRouter);

module.exports = {router};
