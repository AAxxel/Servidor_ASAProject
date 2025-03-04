const { loginCase } = require('../../application/usuarios/usuarios.cases.js');
const { SUCCESS, ERROR } = require('../../shared/utils/messages.http.js');

const loginController = async (req, res) => {
    try {
        const log = await loginCase(req.body);
        res.cookie('loginToken', log, { 
            httpOnly: true,
            sameSite: 'Lax',
            maxAge: 86400 * 1000,
            path: '/', // Asegura que se use en toda la app
        });
        res.status(201).json({ object: log, message: SUCCESS.CREATED });
    } catch (error) {
        res.status(403).json({ error: error, message: ERROR.SERVER_ERROR });
    }
}

module.exports = { loginController };