const amoCase = require('../../application/amos/amos.cases.js');

const amoCreate = async (req, res) => {
    try {
        const amo = await amoCase.amoCreate(req.body);
        res.status(201).json(amo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { amoCreate };