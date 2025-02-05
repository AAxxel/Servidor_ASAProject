const tratamientosDtos = require('./tratamientos.dtos');
const { TratamientoRepository } = require('../../domain/repositories/repositories');
const { getEnfermadAndMascota } = require('../../domain/services/tratamientos.services');

const getAllCase = async () => { 
    const list = await TratamientoRepository.getAll();

    const listWithRelations = await Promise.all(list.map(async object => {
        object.dataValues.info = await getEnfermadAndMascota(object.dataValues.idMascEnfermedad);
        return object;
    }));

    return listWithRelations.map(object => new tratamientosDtos.dtoResponse(object.dataValues));
}

const createCase = async (data) => {
    const object = new tratamientosDtos.dtoCreate(data);
    const createdObject = await TratamientoRepository.create(object);
    return new tratamientosDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new tratamientosDtos.dtoUpdate(data);
    const updatedObject = await TratamientoRepository.update(object);
    return new tratamientosDtos.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await TratamientoRepository.destroy(id);
}

module.exports = { getAllCase, createCase, updateCase, destroyCase };