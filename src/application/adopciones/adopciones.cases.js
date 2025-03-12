const adopcionDtos = require('./adopciones.dtos.js');
const { AdopcionRepository } = require('../../domain/repositories/repositories.js');
const { getMascotaById } = require('../../domain/services/mascotas.services.js');
const { getAmoById } = require('../../domain/services/amos.services.js');
const { isStatusAdopcionValid } = require('../../shared/utils/validarEstado.js');

const getAllCase = async () => { 
    const list = await AdopcionRepository.getAll();

    const listaAdopciones = await Promise.all(list.map(async element => {
        var idMascota = element.dataValues.idMascota;
        
        var idAmo = element.dataValues.idAmo;
        var datos = await getMascotaById(idMascota);

        element.dataValues.mascota = datos.nombre;

        datos = await getAmoById(idAmo);
        element.dataValues.amo = datos.nombre;
        return element;
    }));

    return listaAdopciones.map(object => new adopcionDtos.dtoResponse(object.dataValues));
}

const getCase = async (id) => { 
    const getObject = await AdopcionRepository.getById(id);
    return new adopcionDtos.dtoResponseOnly(getObject);
};

const createCase = async (data) => {
    const object = new adopcionDtos.dtoCreate(data);
    const createdObject = await AdopcionRepository.create(object);
    return new adopcionDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new adopcionDtos.dtoUpdate(data);
    const updatedObject = await AdopcionRepository.update(object);
    return new adopcionDtos.dtoResponse(updatedObject);
}

const updateEstado = async (data) => {

    console.log(data);
    const object = new adopcionDtos.dtoUpdateEstado(data);
   // console.log(object);
    
     const oldStatus = await AdopcionRepository.getStatusById(object.idAdopcion);

     if( !isStatusAdopcionValid(oldStatus.dataValues.estadoAdopcion, object.estadoAdopcion) ){
        throw "La actualización de estado es invalida."
     }

    const updatedObject = await AdopcionRepository.update(object);
    return updatedObject;
}

const destroyCase = async (id) => {
    return await AdopcionRepository.destroy(id);
}

module.exports = { getAllCase, getCase, createCase, updateCase, updateEstado, destroyCase };