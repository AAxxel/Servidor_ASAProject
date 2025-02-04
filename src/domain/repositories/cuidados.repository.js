const { cuidados } = require('../../config/database.js').models;

class CuidadoRepository {
    
    async getAll(){
        return cuidados.findAll();
    }

    async getById(id){
        return cuidados.findOne({ where: { idCuidado: id } });
    }

    async create(data){
        return cuidados.create(data);
    }

    async update(data){
        await cuidados.update(data, {where: {idCuidado: data.idCuidado}});
        return cuidados.findOne({ where: { idCuidado: data.idCuidado } });
    }

    async destroy(id){
        return await cuidados.destroy({ where: { idCuidado: id}});
    }
}

module.exports = new CuidadoRepository();