const express = require('express');
const router = express.Router();
const { getAllController, getController, createController, updateController, deleteController } = require('../controllers/medicamentos.controller');

router.get('/obtener', getAllController);
router.get('/obtener/:id', getController);
router.post('/crear', createController);
router.put('/editar', updateController);
router.delete('/eliminar/:id', deleteController);

module.exports = router;