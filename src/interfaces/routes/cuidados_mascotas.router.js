const express = require('express');
const router = express.Router();
const { getAllController, createController, updateController, deleteController } = require('../controllers/cuidados_mascotas.controller');

router.get('/obtener', getAllController);
router.post('/crear', createController);
router.put('/editar', updateController);
router.delete('/eliminar/:id', deleteController);


module.exports = router;