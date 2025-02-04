const { RazaRepository } = require('../repositories/repositories.js');

const getRazaById = async (id) => {
    var datos = await RazaRepository.getById(id);
    return datos.dataValues;
}

module.exports = { getRazaById };