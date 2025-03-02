const { CuidadoRepository } = require('../repositories/repositories.js');

const getCuidadoById = async (id) => {
    var datos = await CuidadoRepository.getById(id);
    var datosSimpl = {
        idCuidado: datos.dataValues.idCuidado,
        nombreCuidado: datos.dataValues.nombreCuidado,
    }
    return datosSimpl;
}

module.exports = { getCuidadoById };