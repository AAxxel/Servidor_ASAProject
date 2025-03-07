const relacionDtos = require('./enfermedades_mascotas.dtos.js');
const { EnfermedadMascotaRepository } = require('../../domain/repositories/repositories.js');
const { getMascotaById } = require('../../domain/services/mascotas.services.js');
const { getEnfermedadById } = require('../../domain/services/enfermedades.services.js');

const getAllCase = async () => { 
    const list = await EnfermedadMascotaRepository.getAll();

    const mascotasSalida = await Promise.all(list.map(async element => {
        var datos = await getMascotaById(element.dataValues.idMascota);
        element.dataValues.mascota = datos;

        datos = await getEnfermedadById(element.dataValues.idEnfermedad);
        element.dataValues.enfermedad = datos;
        return element;
    }));

    return mascotasSalida.map(object => new relacionDtos.dtoResponse(object.dataValues));
};

const getObjectPerPet = async (id) => {
    const enfermedades = await EnfermedadMascotaRepository.getAllPet(id);
    const listaEnfermedadesMascotas = enfermedades.map(object => new relacionDtos.dtoUpdate(object));

    const objectLista = listaEnfermedadesMascotas;
    for(element of objectLista){
        element.enfermedad = await getEnfermedadById(element.idEnfermedad);
    }

    return objectLista.map(object => new relacionDtos.dtoResponseObjectPet(object));
}


const createCase = async (data) => {
    const object = new relacionDtos.dtoCreate(data);
    const createdObject = await EnfermedadMascotaRepository.create(object);
    return new relacionDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new relacionDtos.dtoUpdate(data);
    const updatedObject = await EnfermedadMascotaRepository.update(object);
    return new relacionDtos.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await EnfermedadMascotaRepository.destroy(id);
}

module.exports = { getAllCase, getObjectPerPet, createCase, updateCase, destroyCase };