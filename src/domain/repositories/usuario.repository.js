const { usuarios } = require('../../config/database.js').models;

class UsuarioRepository {
    
    async getAll(){
        return usuarios.findAll();
    }

    async createAmo(data){
        return usuarios.create(data);
    }

    async updateAmo(data){
        await usuarios.update(data, {where: {idUsuario: data.idUsuario}});
        return usuarios.findOne({ where: { idUsuario: data.idUsuario } });
    }

    async destroyAmo(id){
        return await usuarios.destroy({ where: { idUsuario: id}});
    }
}

module.exports = new UsuarioRepository();