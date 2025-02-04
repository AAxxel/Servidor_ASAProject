const razaDtos = require('./raza.dtos');
const { RazaRepository } = require('../../domain/repositories/repositories');

const getAllCase = async () => { 
    const list = await RazaRepository.getAll();
    return list.map(object => new razaDtos.dtoResponse(object));
}

const createCase = async (data) => {
    const object = new razaDtos.dtoCreate(data);
    const createdObject = await RazaRepository.create(object);
    return new razaDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new razaDtos.dtoUpdate(data);
    const updatedObject = await RazaRepository.update(object);
    return new razaDtos.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await RazaRepository.destroy(id);
}

module.exports = { getAllCase, createCase, updateCase, destroyCase };