const express = require('express');
const router = express.Router();
const { amoCreate, amoGetAll, amoUpdate, amoDelete } = require('../controllers/amos.controller');

router.get('/obtener', amoGetAll);
router.post('/crear', amoCreate);
router.put('/editar', amoUpdate);
router.delete('/eliminar/:idAmo', amoDelete);


module.exports = router;