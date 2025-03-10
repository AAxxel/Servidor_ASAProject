const rescatesDto = require('./rescates.dtos');
const { RescateRepository } = require('../../domain/repositories/repositories.js');
const { getEspecieById } = require('../../domain/services/especies.services.js');

const getAllCase = async () => { 
    const list = await RescateRepository.getAll();

    const razasConEspecies = await Promise.all(list.map(async element => {
        var idEspecie = element.dataValues.idEspecie;
        var datos = await getEspecieById(idEspecie);
        element.dataValues.nombreEspecie = datos.nombreEspecie;
        return element;
    }));

    return razasConEspecies.map(object => new rescatesDto.dtoResponse(object.dataValues));
}

const getCase = async (id) => { 
    const getObject = await RescateRepository.getById(id);
    return new rescatesDto.dtoResponseOnly(getObject);
};

const createCase = async (data) => {
    const object = new rescatesDto.dtoCreate(data);
    const createdObject = await RescateRepository.create(object);
    return new rescatesDto.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new rescatesDto.dtoUpdate(data);
    const updatedObject = await RescateRepository.update(object);
    return new rescatesDto.dtoResponse(updatedObject);
}

const destroyCase = async (id) => {
    return await RescateRepository.destroy(id);
}

module.exports = { getAllCase, getCase, createCase, updateCase, destroyCase };