const { usuarios } = require('../../config/database.js').models;

class UsuarioRepository {
    
    async getAll(){
        return usuarios.findAll(
            {
                where: { estado: true },
            }
        );
    }

    async getById(id){
        return usuarios.findOne({ where: { idUsuario: id } });
    }

    async create(data){
        return usuarios.create(data);
    }

    async update(data){
        await usuarios.update(data, {where: {idUsuario: data.idUsuario}});
        return usuarios.findOne({ where: { idUsuario: data.idUsuario } });
    }

    async desactivar(id){
        return await usuarios.update({estado : false}, {where: {idUsuario: id}});
    }

    async destroy(id){
        return await usuarios.destroy({ where: { idUsuario: id}});
    }
}

module.exports = new UsuarioRepository();