const rolesDtos = require('./roles.dtos');
const { RolRepository } = require('../../domain/repositories/repositories');

const getAllCase = async () => { 
    const list = await RolRepository.getAll();
    return list.map(object => new rolesDtos.dtoResponse(object));
}

const getCase = async (id) => { 
    const getObject = await RolRepository.getById(id);
    return new rolesDtos.dtoResponse(getObject);
};

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

module.exports = { getAllCase, getCase, createCase, updateCase, destroyCase };