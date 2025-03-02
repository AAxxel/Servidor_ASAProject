const cuidadosDtos = require('./cuidados.dtos.js');
const { CuidadoRepository } = require('../../domain/repositories/repositories.js');

const getAllCase = async () => { 
    const list = await CuidadoRepository.getAll();
    return list.map(object => new cuidadosDtos.dtoResponse(object));
};

const getCase = async (id) => { 
    const getObject = await CuidadoRepository.getById(id);
    return new cuidadosDtos.dtoUpdate(getObject);
};

const createCase = async (data) => {
    const object = new cuidadosDtos.dtoCreate(data);
    const createdObject = await CuidadoRepository.create(object);
    return new cuidadosDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new cuidadosDtos.dtoUpdate(data);
    const updatedObject = await CuidadoRepository.update(object);
    return new cuidadosDtos.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await CuidadoRepository.destroy(id);
}

module.exports = { getAllCase, getCase, createCase, updateCase, destroyCase };