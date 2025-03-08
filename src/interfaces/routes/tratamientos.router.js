const express = require('express');
const router = express.Router();
const { getAllController, getOneController, createController, updateController, deleteController } = require('../controllers/tratamientos.controller');

router.get('/obtener', getAllController);
router.get('/obtener/:id', getOneController);
router.post('/crear', createController);
router.put('/editar', updateController);
router.delete('/eliminar/:id', deleteController);


module.exports = router;