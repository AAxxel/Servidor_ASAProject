const { raza } = require('../../config/database.js').models;

class RazaRepository {
    
    async getAll(){
        return raza.findAll();
    }

    async getById(id){
        return raza.findOne({ where: { idRaza: id } });
    }

    async create(data){
        return raza.create(data);
    }

    async update(data){
        await raza.update(data, {where: {idRaza: data.idRaza}});
        return raza.findOne({ where: { idRaza: data.idRaza } });
    }

    async destroy(id){
        return await raza.destroy({ where: { idRaza: id}});
    }
}

module.exports = new RazaRepository();