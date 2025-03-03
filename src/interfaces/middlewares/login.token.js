const jwt = require('jsonwebtoken');

const verificarToken = async (req, res, next) => {
    try {
        const token = req.cookies.loginToken;
        if (!token) {
            return res.status(403).json({ message: 'No token provided' });
        }
        const data = jwt.verify(token, process.env.SECRET_KEY);
        req.idUsuario = data.id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = { verificarToken };