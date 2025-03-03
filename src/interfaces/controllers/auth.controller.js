const { loginCase } = require('../../application/usuarios/usuarios.cases.js');
const { SUCCESS, ERROR } = require('../../shared/utils/messages.http.js');


const loginController = async (req, res) => {
    try {
        const amo = await loginCase(req.body);
        res.status(201).json({ object: amo, message: SUCCESS.CREATED });
    } catch (error) {
        res.status(403).json({ error: error, message: ERROR.SERVER_ERROR });
    }
}

module.exports = { loginController };