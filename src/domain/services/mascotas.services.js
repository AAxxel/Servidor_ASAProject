const { MascotaRepository } = require('../repositories/repositories.js');

const getMascotaById = async (id) => {
    var datos = await MascotaRepository.getById(id);
    if(!datos) throw new Error('No se encontro la mascota');
    var datosSimpl = {
        idmascota: datos.dataValues.idmascota,
        nombre: datos.dataValues.nombre,
    }
    return datosSimpl;
}

module.exports = { getMascotaById };