const amosDtos = require('./amos.dtos');
const { AmoRepository } = require('../../domain/repositories/repositories');

const amoCreate = async (data) => {
    const newAmo = amosDtos.amosDtoCreate(data);
    const cretedAmo = await AmoRepository.createAmo(newAmo);
    return amosDtos.amosDtoResponse(cretedAmo);
}

module.exports = { amoCreate };