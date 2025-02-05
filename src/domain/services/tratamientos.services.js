const { EnfermedadMascotaRepository } = require('../repositories/repositories.js');
const { getMascotaById } = require('./mascotas.services');
const { getEnfermedadById } = require('./enfermedades.services');
const { en } = require('@faker-js/faker');

const getEnfermadAndMascota = async (id) => {
    const relacion = await (EnfermedadMascotaRepository.getById(id));
    if(!relacion) throw new Error('No se encontro la relacion');
    var datos = relacion.dataValues;

    var objeto = {
        mascota: await getMascotaById(datos.idMascota),
        enfermedad: await getEnfermedadById(datos.idEnfermedad)
    }
    return objeto;
}

module.exports = { getEnfermadAndMascota };