const { RolRepository } = require('../repositories/repositories.js');

const getRolById = async (id) => {
    var datos = await RolRepository.getById(id);
    return datos.dataValues;
}

module.exports = { getRolById };