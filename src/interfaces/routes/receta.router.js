const express = require('express');
const router = express.Router();
const { getAllController, getController, getAllTratamientoController, createController, updateController, deleteController } = require('../controllers/receta.controller');

router.get('/obtener', getAllController);
router.get('/obtener/:id', getController);
router.get('/obtener-tratamiento/:id', getAllTratamientoController);
router.post('/crear', createController);
router.put('/editar', updateController);
router.delete('/eliminar/:id', deleteController);


module.exports = router;