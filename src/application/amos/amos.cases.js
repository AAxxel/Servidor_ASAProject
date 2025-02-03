const amosDtos = require('./amos.dtos');
const { AmoRepository } = require('../../domain/repositories/repositories');

const amoCreateCase = async (data) => {

    const newAmo = new amosDtos.amosDtoCreate(data);
    const cretedAmo = await AmoRepository.createAmo(newAmo);
    return new amosDtos.amosDtoResponse(cretedAmo);
}

module.exports = { amoCreateCase };