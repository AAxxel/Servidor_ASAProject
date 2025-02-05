const { EnfermedadRepository } = require('../repositories/repositories.js');

const getEnfermedadById = async (id) => {
    var datos = await EnfermedadRepository.getById(id);
    var datosSimpl = {
        idEnfermedad: datos.dataValues.idEnfermedad,
        nombreEnfermedad: datos.dataValues.nombreEnfermedad,
    }
    return datosSimpl;
}

module.exports = { getEnfermedadById };