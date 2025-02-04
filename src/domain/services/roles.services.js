const { RolRepository } = require('../repositories/repositories.js');

const getRolById = async (id) => {
    return await RolRepository.getById(id);
}

module.exports = { getRolById };