const { mascotas } = require('../../config/database.js').models;

class MascotaRepository {
    
    async getAll(){
        return mascotas.findAll();
    }

    async getById(id){
        return mascotas.findOne({ where: { idmascota: id } });
    }

    async create(data){
        return mascotas.create(data);
    }

    async update(data){
        await mascotas.update(data, {where: {idmascota: data.idmascota}});
        return mascotas.findOne({ where: { idmascota: data.idmascota } });
    }

    async destroy(id){
        return await mascotas.destroy({ where: { idmascota: id}});
    }
}

module.exports = new MascotaRepository();