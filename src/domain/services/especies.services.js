const { EspecieRepository } = require('../repositories/repositories.js');

const getEspecieById = async (id) => {
    var datos = await EspecieRepository.getById(id);
    return datos.dataValues;
}

module.exports = { getEspecieById };