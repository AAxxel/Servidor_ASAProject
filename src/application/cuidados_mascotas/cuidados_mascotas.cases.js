const relacionDtos = require('./cuidados_mascotas.dtos.js');
const { CuidadoMascotasRepository } = require('../../domain/repositories/repositories.js');

const getAllCase = async () => { 
    const list = await CuidadoMascotasRepository.getAll();
    return list.map(object => new relacionDtos.dtoResponse(object));
};

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

module.exports = { getAllCase, createCase, updateCase, destroyCase };