const express = require('express');
const router = express.Router();
const { getAllController, getController, createController, updateController, deleteController, desactivarController } = require('../controllers/mascotas.controller');

router.get('/obtener', getAllController);
router.get('/obtener/:id', getController);
router.post('/crear', createController);
router.put('/editar', updateController);
router.delete('/eliminar/:id', deleteController);
router.put('/desactivar/:id', desactivarController);

module.exports = router;