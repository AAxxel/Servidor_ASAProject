const usuariosDtos = require('./usuarios.dtos');
const { UsuarioRepository } = require('../../domain/repositories/repositories.js');
const { getRolById } = require('../../domain/services/roles.services.js');

const getAllCase = async () => { 
    const list = await UsuarioRepository.getAll();

    const usuariosConRoles = await Promise.all(list.map(async element => {
        var idRol = element.dataValues.idRol;
        var datos = await getRolById(idRol);
        element.dataValues.nombreRol = datos.nombreRol;
        return element;
    }));

    return usuariosConRoles.map(object => new usuariosDtos.dtoResponse(object.dataValues));
};

const getCase = async (id) => { 
    const getObject = await UsuarioRepository.getById(id);
    return new usuariosDtos.dtoResponseIndividual(getObject);
};

const createCase = async (data) => {
    const object = new usuariosDtos.dtoCreate(data);
    const createdObject = await UsuarioRepository.create(object);
    return new usuariosDtos.dtoResponse(createdObject);
}

const updateCase = async (data) => {
    const object = new usuariosDtos.dtoUpdate(data);
    const updatedObject = await UsuarioRepository.update(object);
    return new usuariosDtos.dtoResponse(updatedObject);
}

const desactivarCase = async (id) => {
    return await UsuarioRepository.desactivar(id);
}

const destroyCase = async (id) => {
    return await UsuarioRepository.destroy(id);
}

module.exports = { getCase, getAllCase, createCase, updateCase, desactivarCase, destroyCase };