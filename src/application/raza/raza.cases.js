const razaDtos = require('./raza.dtos');
const { RazaRepository } = require('../../domain/repositories/repositories');
const { getEspecieById } = require('../../domain/services/especies.services.js');

const getAllCase = async () => { 
    const list = await RazaRepository.getAll();

    const razasConEspecies = await Promise.all(list.map(async element => {
        var idEspecie = element.dataValues.idEspecie;
        var datos = await getEspecieById(idEspecie);
        console.log(datos);
        element.dataValues.nombreEspecie = datos.nombreEspecie;
        return element;
    }));

    return razasConEspecies.map(object => new razaDtos.dtoResponse(object.dataValues));
}

const getCase = async (id) => { 
    const getObject = await RazaRepository.getById(id);
    return new razaDtos.dtoResponseOnly(getObject);
};

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

module.exports = { getAllCase, getCase, createCase, updateCase, destroyCase };