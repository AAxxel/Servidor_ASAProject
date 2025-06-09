const express = require('express');
const  multer = require('multer');
const router = express.Router();
const { getAllController, getController, createController, updateController, deleteController, desactivarController, saveImgController } = require('../controllers/mascotas.controller');

// Configuración de multer en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/obtener', getAllController);
router.get('/obtener/:id', getController);
router.post('/crear', createController);
router.post('/guardar-img-pet', upload.single('file'), saveImgController);
router.put('/editar', updateController);
router.delete('/eliminar/:id', deleteController);
router.put('/desactivar/:id', desactivarController);

module.exports = router;