const mascotasDtos = require('./mascotas.dtos.js');
const { MascotaRepository } = require('../../domain/repositories/repositories.js');
const { getRazaById } = require('../../domain/services/raza.services.js');
const { getEspecieById } = require('../../domain/services/especies.services.js');

const getAllCase = async () => { 
    const list = await MascotaRepository.getAll();

    const mascotasSalida = await Promise.all(list.map(async element => {
        var idRaza = element.dataValues.idRaza;
        var datos = await getRazaById(idRaza);
        element.dataValues.nombreRaza = datos.nombreRaza;

        datos = await getEspecieById(datos.idEspecie);
        element.dataValues.nombreEspecie = datos.nombreEspecie;

        return element;
    }));

    return mascotasSalida.map(object => new mascotasDtos.dtoResponse(object.dataValues));
};

const getCase = async (id) => { 
    const getObject = await MascotaRepository.getById(id);
    return new mascotasDtos.dtoUpdate(getObject);
};

const createCase = async (data) => {
    const object = new mascotasDtos.dtoCreate(data);
    const createdObject = await MascotaRepository.create(object);
    return new mascotasDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new mascotasDtos.dtoUpdate(data);
    const updatedObject = await MascotaRepository.update(object);
    return new mascotasDtos.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await MascotaRepository.destroy(id);
}

module.exports = { getAllCase, getCase, createCase, updateCase, destroyCase };