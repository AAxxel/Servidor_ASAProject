const { rescates } = require('../../config/database.js').models;

class RescateRepository {
    
    async getAll(){
        return rescates.findAll();
    }

    async getById(id){
        return rescates.findOne({ where: { idRescate: id } });
    }

    async create(data){
        return rescates.create(data);
    }

    async update(data){
        await rescates.update(data, {where: {idRescate: data.idRescate}});
        return rescates.findOne({ where: { idRescate: data.idRescate } });
    }

    async destroy(id){
        return await rescates.destroy({ where: { idRescate: id}});
    }
}

module.exports = new RescateRepository();