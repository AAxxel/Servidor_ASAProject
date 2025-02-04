const { roles } = require('../../config/database.js').models;

class RolRepository {
    
    async getAll(){
        return roles.findAll();
    }

    async getById(id){
        return roles.findOne({ where: { idRol: id } });
    }

    async create(data){
        return roles.create(data);
    }

    async update(data){
        await roles.update(data, {where: {idRol: data.idRol}});
        return roles.findOne({ where: { idRol: data.idRol } });
    }

    async destroy(id){
        return await roles.destroy({ where: { idRol: id}});
    }
}

module.exports = new RolRepository();