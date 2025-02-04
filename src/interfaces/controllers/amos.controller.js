const { amoCreateCase, getAllAmoCase, amoUpdateCase, amoDestroy } = require('../../application/amos/amos.cases.js');

const amoGetAll = async (req, res) => {
    try {
        const amos = await getAllAmoCase();
        res.status(201).json(amos);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const amoCreate = async (req, res) => {
    try {
        const amo = await amoCreateCase(req.body);
        res.status(201).json(amo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const amoUpdate = async (req, res) => {
    try {
        const amo = await amoUpdateCase(req.body);
        res.status(201).json(amo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const amoDelete = async (req, res) => {
    try {
        const amo = await amoDestroy(req.params.idAmo);
        if(amo === 0){
            res.status(400).json({ message: 'No se encontro un registro con esta identificacion' });
        }
        res.status(201).json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



module.exports = { amoGetAll, amoCreate, amoUpdate, amoDelete };