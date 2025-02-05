const { enfermedades } = require('../../config/database.js').models;

class EnfermedadRepository {
    
    async getAll(){
        return enfermedades.findAll();
    }

    async getById(id){
        return enfermedades.findOne({ where: { idEnfermedad: id } });
    }

    async create(data){
        return enfermedades.create(data);
    }

    async update(data){
        await enfermedades.update(data, {where: {idEnfermedad: data.idEnfermedad}});
        return enfermedades.findOne({ where: { idEnfermedad: data.idEnfermedad } });
    }

    async destroy(id){
        return await enfermedades.destroy({ where: { idEnfermedad: id}});
    }
}

module.exports = new EnfermedadRepository();