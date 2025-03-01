const express = require('express');
const router = express.Router();
const { amoCreate, amoGetAll, getController, amoUpdate, amoDelete, desactivarController } = require('../controllers/amos.controller');

router.get('/obtener', amoGetAll);
router.get('/obtener/:id', getController);
router.post('/crear', amoCreate);
router.put('/editar', amoUpdate);
router.put('/desactivar/:id', desactivarController);
router.delete('/eliminar/:idAmo', amoDelete);


module.exports = router;