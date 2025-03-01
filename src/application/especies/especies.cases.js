const EspeciesDtos = require('./especies.dtos');
const { EspecieRepository } = require('../../domain/repositories/repositories');

const getAllCase = async () => { 
    const list = await EspecieRepository.getAll();
    return list.map(object => new EspeciesDtos.dtoResponse(object));
}

const getCase = async (id) => { 
    const getObject = await EspecieRepository.getById(id);
    return new EspeciesDtos.dtoResponse(getObject);
};

const createCase = async (data) => {
    const object = new EspeciesDtos.dtoCreate(data);
    const createdObject = await EspecieRepository.create(object);
    return new EspeciesDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new EspeciesDtos.dtoUpdate(data);
    const updatedObject = await EspecieRepository.update(object);
    return new EspeciesDtos.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await EspecieRepository.destroy(id);
}

module.exports = { getAllCase, getCase, createCase, updateCase, destroyCase };