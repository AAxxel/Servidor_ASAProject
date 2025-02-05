const medicamentoDtos = require('./medicamentos.dtos');
const { MedicamentoRepository } = require('../../domain/repositories/repositories');

const getAllCase = async () => { 
    const list = await MedicamentoRepository.getAll();
    return list.map(object => new medicamentoDtos.dtoResponse(object));
}

const createCase = async (data) => {
    const object = new medicamentoDtos.dtoCreate(data);
    const createdObject = await MedicamentoRepository.create(object);
    return new medicamentoDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new medicamentoDtos.dtoUpdate(data);
    const updatedObject = await MedicamentoRepository.update(object);
    return new medicamentoDtos.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await MedicamentoRepository.destroy(id);
}

module.exports = { getAllCase, createCase, updateCase, destroyCase };