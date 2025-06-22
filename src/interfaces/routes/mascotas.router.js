const express = require('express');
const  multer = require('multer');
const router = express.Router();
const { getAllController, getController, createController, updateController, deleteController, desactivarController, saveImgController, getImagesByIdController, getCoverImagesController, deleteImgController } = require('../controllers/mascotas.controller');

// Configuración de multer en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/obtener', getAllController);
router.get('/obtener/:id', getController);
router.get('/obtener-img-pet/:id', getImagesByIdController);
router.get('/obtener-img-pet', getCoverImagesController); 
router.post('/crear', createController);
router.post('/guardar-img-pet', upload.single('file'), saveImgController);
router.put('/editar', updateController);
router.delete('/eliminar/:id', deleteController); 
router.delete('/eliminar-img/:id', deleteImgController);  
router.put('/desactivar/:id', desactivarController);

module.exports = router;