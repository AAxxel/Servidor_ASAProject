const recetaDtos = require('./receta.dtos.js');
const { RecetaRepository } = require('../../domain/repositories/repositories.js');
const { getEspecieById } = require('../../domain/services/especies.services.js');

const getAllCase = async () => { 
    const list = await RecetaRepository.obtenerRecetaConTratamiento();
    const response = list.map((item) => new recetaDtos.dtoResponse(item));
    return response;
}

const getCase = async (id) => { 
    const getObject = await RecetaRepository.getById(id);
    return new recetaDtos.dtoResponseOnly(getObject);
};

const createCase = async (data) => {
    const object = new recetaDtos.dtoCreate(data);
    const createdObject = await RecetaRepository.create(object);
    return new recetaDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new recetaDtos.dtoUpdate(data);
    const updatedObject = await RecetaRepository.update(object);
    return new recetaDtos.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await RecetaRepository.destroy(id);
}

module.exports = { getAllCase, getCase, createCase, updateCase, destroyCase };