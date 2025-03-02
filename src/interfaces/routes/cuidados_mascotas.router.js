const express = require('express');
const router = express.Router();
const { getAllController, getAllObjectController, getWeherePetController, createController, updateController, deleteController } = require('../controllers/cuidados_mascotas.controller');

router.get('/obtener', getAllController);
router.get('/obtener-object', getAllObjectController);
router.get('/obtener-object/:id', getWeherePetController);
router.post('/crear', createController);
router.put('/editar', updateController);
router.delete('/eliminar/:id', deleteController);


module.exports = router;