const recetaDtos = require('./receta.dtos.js');
const { RecetaRepository } = require('../../domain/repositories/repositories.js');

const getAllCase = async () => { 
    const list = await RecetaRepository.obtenerRecetaConTratamiento();
    const response = list.map((item) => new recetaDtos.RecetaResponse(item));
    return response;
}

const getAllCaseTratamiento = async (id) => { 
    const list = await RecetaRepository.getPerTratamiento(id);
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
    return createdObject;
}

const updateCase = async (data) => {
    const object = new recetaDtos.dtoUpdate(data);
    const updatedObject = await RecetaRepository.update(object);
    return updatedObject;
}

const destroyCase = async (id) => {
    return await RecetaRepository.destroy(id);
}

module.exports = { getAllCase, getCase, getAllCaseTratamiento, createCase, updateCase, destroyCase };