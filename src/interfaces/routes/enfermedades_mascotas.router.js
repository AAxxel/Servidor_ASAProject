const express = require('express');
const router = express.Router();
const { getAllController, getWeherePetController, createController, updateController, deleteController } = require('../controllers/enfermedades_mascotas.controller');

router.get('/obtener', getAllController);
router.get('/obtener-object/:id', getWeherePetController);
router.post('/crear', createController);
router.put('/editar', updateController);
router.delete('/eliminar/:id', deleteController);


module.exports = router;