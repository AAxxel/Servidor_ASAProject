const enfermedadesDtos = require('./enfermedades.dtos.js');
const { EnfermedadRepository } = require('../../domain/repositories/repositories.js');

const getAllCase = async () => { 
    const list = await EnfermedadRepository.getAll();
    return list.map(object => new enfermedadesDtos.dtoResponse(object));
};

const createCase = async (data) => {
    const object = new enfermedadesDtos.dtoCreate(data);
    const createdObject = await EnfermedadRepository.create(object);
    return new enfermedadesDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new enfermedadesDtos.dtoUpdate(data);
    const updatedObject = await EnfermedadRepository.update(object);
    return new enfermedadesDtos.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await EnfermedadRepository.destroy(id);
}

module.exports = { getAllCase, createCase, updateCase, destroyCase };