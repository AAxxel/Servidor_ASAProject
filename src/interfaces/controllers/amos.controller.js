const { amoCreateCase, getAllAmoCase, amoUpdateCase, amoDestroy } = require('../../application/amos/amos.cases.js');
const { SUCCESS, ERROR } = require('../../shared/utils/messages.http.js');

const amoGetAll = async (req, res) => {
    try {
        const amos = await getAllAmoCase();
        res.status(201).json({ object: amos, message:  SUCCESS.FETCHED });
    } catch (error) {
        res.status(400).json({ error: error.message, message: ERROR.NOT_FOUND });
    }
}

const amoCreate = async (req, res) => {
    try {
        const amo = await amoCreateCase(req.body);
        res.status(201).json({ object: amo, message: SUCCESS.CREATED });
    } catch (error) {
        res.status(400).json({ error: error.message, message: ERROR.SERVER_ERROR });
    }
}

const amoUpdate = async (req, res) => {
    try {
        const amo = await amoUpdateCase(req.body);
        res.status(201).json({object: amo, message: SUCCESS.UPDATED});
    } catch (error) {
        res.status(400).json({ error: error.message, message: ERROR.SERVER_ERROR });
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
        res.status(400).json({ error: error.message, message: ERROR.SERVER_ERROR });
    }
}

module.exports = { amoGetAll, amoCreate, amoUpdate, amoDelete };