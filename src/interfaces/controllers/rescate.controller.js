const { getAllCase, getCase, createCase, updateCase, destroyCase } = require('../../application/rescates/rescates.case.js');
const { SUCCESS, ERROR } = require('../../shared/utils/messages.http.js');

const getAllController = async (req, res) => {
    try {
        const lista = await getAllCase();
        res.status(201).json({ object: lista, message:  SUCCESS.FETCHED });
    } catch (error) {
        res.status(400).json({ error: error.message, message: ERROR.NOT_FOUND });
    }
}

const getAllTratamientoController = async (req, res) => {
    try {
        const lista = await getAllCaseTratamiento(req.params.id);
        res.status(200).json({ object: lista, message:  SUCCESS.FETCHED });
    } catch (error) {
        res.status(400).json({ error: error.message, message: ERROR.NOT_FOUND });
    }
}

const getController = async (req, res) => {
    try {
        const object = await getCase(req.params.id);
       // throw new Error('Error en el controlador');
        res.status(201).json({ object: object, message:  SUCCESS.FETCHED });
    } catch (error) {
        
        res.status(400).json({ error: error, message: ERROR.NOT_FOUND });
    }
}

const createController = async (req, res) => {
    try {
        req.body.idUsuario = req.idUsuario;
        const object = await createCase(req.body);
        res.status(201).json({ object: object, message: SUCCESS.CREATED });
    } catch (error) {
        res.status(400).json({ error: error.message, message: ERROR.SERVER_ERROR });
    }
}

const updateController = async (req, res) => {
    try {
        const object = await updateCase(req.body);
        res.status(201).json({object: object, message: SUCCESS.UPDATED});
    } catch (error) {
        res.status(400).json({ error: error.message, message: ERROR.SERVER_ERROR });
    }
}

const deleteController = async (req, res) => {
    try {
        const object = await destroyCase(req.params.id);
        if(object === 0){
            res.status(400).json({ error: ERROR.NOT_FOUND });
        }
        res.status(201).json({ message: SUCCESS.DELETED });
    } catch (error) {
        res.status(400).json({ error: error.message, message: ERROR.SERVER_ERROR });
    }
}

module.exports = { getAllController, getController, getAllTratamientoController, createController, updateController, deleteController };