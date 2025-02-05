const relacionDtos = require('./enfermedades_mascotas.dtos.js');
const { EnfermedadMascotaRepository } = require('../../domain/repositories/repositories.js');

const getAllCase = async () => { 
    const list = await EnfermedadMascotaRepository.getAll();
    return list.map(object => new relacionDtos.dtoResponse(object));
};

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

module.exports = { getAllCase, createCase, updateCase, destroyCase };