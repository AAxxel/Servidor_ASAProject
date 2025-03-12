const { AmoRepository } = require('../repositories/repositories.js');

const getAmoById = async (id) => {
    var datos = await AmoRepository.getById(id);
    if(!datos) throw new Error('No se encontro la mascota');
    var datosSimpl = {
        idAmo: datos.dataValues.idAmo,
        nombre: datos.dataValues.nombre,
    }
    return datosSimpl;
}

module.exports = { getAmoById };