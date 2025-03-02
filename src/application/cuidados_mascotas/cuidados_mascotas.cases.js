const relacionDtos = require('./cuidados_mascotas.dtos.js');
const { CuidadoMascotasRepository } = require('../../domain/repositories/repositories.js');
const { getMascotaById } = require('../../domain/services/mascotas.services.js');
const { getCuidadoById } = require('../../domain/services/cuidados.services.js');

const getAllCase = async () => { 
    const list = await CuidadoMascotasRepository.getAll();
    return list.map(object => new relacionDtos.dtoResponse(object));
};

const getObject = async () => {
    const list = await CuidadoMascotasRepository.getAll();
    const relaciones = await Promise.all(list.map(async element => {
        var datos = await getMascotaById(element.dataValues.idMascota);
        element.dataValues.mascota = datos;
        datos = await getCuidadoById(element.dataValues.idCuidado);
        element.dataValues.cuidado = datos;
        return element;
    }));
      return relaciones.map(object => new relacionDtos.dtoResponseObject(object.dataValues));
}

const getObjectPerPet = async (id) => {
    const cuidados = await CuidadoMascotasRepository.getAllPet(id);
    const listaCuidadosPets = cuidados.map(object => new relacionDtos.dtoResponse(object));

    const objectLista = listaCuidadosPets;
    for(element of objectLista){
        element.cuidado = await getCuidadoById(element.idCuidado);
    }

    return objectLista.map(object => new relacionDtos.dtoResponseObjectPet(object));
}

const createCase = async (data) => {
    const object = new relacionDtos.dtoCreate(data);
    const createdObject = await CuidadoMascotasRepository.create(object);
    return new relacionDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new relacionDtos.dtoUpdate(data);
    const updatedObject = await CuidadoMascotasRepository.update(object);
    return new relacionDtos.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await CuidadoMascotasRepository.destroy(id);
}

module.exports = { getAllCase, getObject, getObjectPerPet, createCase, updateCase, destroyCase };