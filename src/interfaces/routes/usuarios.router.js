const express = require('express');
const router = express.Router();
const { getController, getAllController, createController, updateController, desactivarController, deleteController } = require('../controllers/usuarios.controller');

router.get('/obtener', getAllController);
router.get('/obtener/:id', getController);
router.post('/crear', createController);
router.put('/editar', updateController);
router.put('/desactivar/:id', desactivarController);
router.delete('/eliminar/:id', deleteController);


module.exports = router;