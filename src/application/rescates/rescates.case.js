const rescatesDto = require('./rescates.dtos');
const { RescateRepository } = require('../../domain/repositories/repositories.js');
const { isStatusRescateValid } = require('../../shared/utils/validarEstado.js');
const { getMascotaById } = require('../../domain/services/mascotas.services.js');

const getAllCase = async () => { 
    const list = await RescateRepository.getAll();
    const nombresMascotas =  await Promise.all(list.map( async (object) => {
        
        if(!object.dataValues.idMascota || object.dataValues.idMascota === null){
            object.dataValues.mascota = "Pendiente";
        }
        else {
            var datos = await getMascotaById(object.dataValues.idMascota);
            object.dataValues.mascota = datos.nombre;
        }
        
        return object;
    })) ;

    return nombresMascotas.map(object => new rescatesDto.dtoResponse(object.dataValues));
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

const updateEstado = async (data) => {
    const object = new rescatesDto.dtoUpdateEstado(data);
    
     const oldStatus = await RescateRepository.getStatusById(object.idRescate);

     if( !isStatusRescateValid(oldStatus.dataValues.estadoRescate, object.estadoRescate) ){
        throw "La actualización de estado es invalida."
     }

    const updatedObject = await RescateRepository.update(object);
    return updatedObject;
}

const destroyCase = async (id) => {
    return await RescateRepository.destroy(id);
}

module.exports = { getAllCase, getCase, createCase, updateCase, updateEstado, destroyCase };