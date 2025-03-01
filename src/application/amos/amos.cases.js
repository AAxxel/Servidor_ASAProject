const amosDtos = require('./amos.dtos');
const { AmoRepository } = require('../../domain/repositories/repositories');

const getAllAmoCase = async () => { 
    const amos = await AmoRepository.getAll();
    return amos.map(amo => new amosDtos.amosDtoResponse(amo));
}

const getCase = async (id) => { 
    const getObject = await AmoRepository.getById(id);
    return new amosDtos.amosDtoOnly(getObject);
};

const amoCreateCase = async (data) => {
    const newAmo = new amosDtos.amosDtoCreate(data);
    const cretedAmo = await AmoRepository.createAmo(newAmo);
    return new amosDtos.amosDtoResponse(cretedAmo);
}

const amoUpdateCase = async (data) => {
    const updateAmo = new amosDtos.amosDtoUpdate(data);
    const amo = await AmoRepository.updateAmo(updateAmo);
    return new amosDtos.amosDtoResponse(amo);
}

const amoDestroy = async (id) => {
    return await AmoRepository.destroyAmo(id);
}

const desactivarCase = async (id) => {
    return await AmoRepository.desactivar(id);
}

module.exports = { getAllAmoCase, amoCreateCase, amoUpdateCase, amoDestroy, desactivarCase, getCase };