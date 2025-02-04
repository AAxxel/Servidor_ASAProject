const { especie } = require('../../config/database.js').models;

class EspecieRepository {
    
    async getAll(){
        return especie.findAll();
    }

    async getById(id){
        return especie.findOne({ where: { idEspecie: id } });
    }

    async create(data){
        return especie.create(data);
    }

    async update(data){
        await especie.update(data, {where: {idEspecie: data.idEspecie}});
        return especie.findOne({ where: { idEspecie: data.idEspecie } });
    }

    async destroy(id){
        return await especie.destroy({ where: { idEspecie: id}});
    }
}

module.exports = new EspecieRepository();