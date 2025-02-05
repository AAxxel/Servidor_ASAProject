const { tratamientos } = require('../../config/database.js').models;

class TratamientoRepository {
    
    async getAll(){
        return tratamientos.findAll();
    }

    async getById(id){
        return tratamientos.findOne({ where: { idTratamiento: id } });
    }

    async create(data){
        return tratamientos.create(data);
    }

    async update(data){
        await tratamientos.update(data, {where: {idTratamiento: data.idTratamiento}});
        return tratamientos.findOne({ where: { idTratamiento: data.idTratamiento } });
    }

    async destroy(id){
        return await tratamientos.destroy({ where: { idTratamiento: id}});
    }
}

module.exports = new TratamientoRepository();