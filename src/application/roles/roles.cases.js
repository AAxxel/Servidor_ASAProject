const rolesDtos = require('./roles.dtos');
const { RolRepository } = require('../../domain/repositories/repositories');

const getAllCase = async () => { 
    const list = await RolRepository.getAll();
    return list.map(object => new rolesDtos.dtoResponse(object));
}

const createCase = async (data) => {
    const object = new rolesDtos.dtoCreate(data);
    const createdObject = await RolRepository.create(object);
    return new rolesDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new rolesDtos.dtoUpdate(data);
    const updatedObject = await RolRepository.update(object);
    return new rolesDtos.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await RolRepository.destroy(id);
}

module.exports = { getAllCase, createCase, updateCase, destroyCase };