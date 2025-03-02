const { getAllCase, getObject, getObjectPerPet, createCase, updateCase, destroyCase } = require('../../application/cuidados_mascotas/cuidados_mascotas.cases.js');
const { SUCCESS, ERROR } = require('../../shared/utils/messages.http.js');

const getAllController = async (req, res) => {
    try {
        const lista = await getAllCase();
        res.status(201).json({ object: lista, message:  SUCCESS.FETCHED });
    } catch (error) {
        res.status(500).json({ error: error, message: ERROR.NOT_FOUND });
    }
}

const getAllObjectController = async (req, res) => {
    try {
        const lista = await getObject();
        res.status(200).json({ object: lista, message:  SUCCESS.FETCHED });
    } catch (error) {
        res.status(500).json({ error: error, message: ERROR.NOT_FOUND });
    }
}

const getWeherePetController = async (req, res) => {
    try {
        const lista = await getObjectPerPet(req.params.id);
        res.status(200).json({ object: lista, message:  SUCCESS.FETCHED });
    } catch (error) {
        res.status(500).json({ error: error, message: ERROR.NOT_FOUND });
    }
}

const createController = async (req, res) => {
    try {
        const object = await createCase(req.body);
        res.status(201).json({ object: object, message: SUCCESS.CREATED });
    } catch (error) {
        res.status(500).json({ error: error, message: ERROR.SERVER_ERROR });
    }
}

const updateController = async (req, res) => {
    try {
        const object = await updateCase(req.body);
        res.status(201).json({object: object, message: SUCCESS.UPDATED});
    } catch (error) {
        res.status(500).json({ error: error, message: ERROR.SERVER_ERROR });
    }
}

const deleteController = async (req, res) => {
    try {
        const object = await destroyCase(req.params.id);
        if(object === 0){
            res.status(500).json({ error: ERROR.NOT_FOUND });
        }
        res.status(201).json({ message: SUCCESS.DELETED });
    } catch (error) {
        res.status(500).json({ error: error, message: ERROR.SERVER_ERROR });
    }
}

module.exports = { getAllController, getAllObjectController, getWeherePetController, createController, updateController, deleteController };