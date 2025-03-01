const { amoCreateCase, getCase, getAllAmoCase, amoUpdateCase, amoDestroy, desactivarCase } = require('../../application/amos/amos.cases.js');
const { SUCCESS, ERROR } = require('../../shared/utils/messages.http.js');

const amoGetAll = async (req, res) => {
    try {
        const amos = await getAllAmoCase();
        res.status(201).json({ object: amos, message:  SUCCESS.FETCHED });
    } catch (error) {
        res.status(400).json({ error: error, message: ERROR.NOT_FOUND });
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

const amoCreate = async (req, res) => {
    try {
        const amo = await amoCreateCase(req.body);
        res.status(201).json({ object: amo, message: SUCCESS.CREATED });
    } catch (error) {
        res.status(400).json({ error: error, message: ERROR.SERVER_ERROR });
    }
}

const amoUpdate = async (req, res) => {
    try {
        const amo = await amoUpdateCase(req.body);
        res.status(201).json({object: amo, message: SUCCESS.UPDATED});
    } catch (error) {
        res.status(400).json({ error: error, message: ERROR.SERVER_ERROR });
    }
}

const amoDelete = async (req, res) => {
    try {
        const amo = await amoDestroy(req.params.idAmo);
        if(amo === 0){
            res.status(400).json({ error: ERROR.NOT_FOUND });
        }
        res.status(201).json({ message: SUCCESS.DELETED });
    } catch (error) {
        res.status(400).json({ error: error, message: ERROR.SERVER_ERROR });
    }
}

const desactivarController = async (req, res) => {
    try {
        const object = await desactivarCase(req.params.id);
        if(object === 0){
            res.status(400).json({ error: ERROR.NOT_FOUND });
        }
        res.status(201).json({ message: SUCCESS.DELETED });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error, message: ERROR.SERVER_ERROR });
    }
}

module.exports = { amoGetAll, getController, amoCreate, amoUpdate, amoDelete, desactivarController };