const { cuidados_mascotas } = require('../../config/database.js').models;

class CuidadoMascotasRepository {
    
    async getAll(){
        return cuidados_mascotas.findAll();
    }

    async getById(id){
        return cuidados_mascotas.findOne({ where: { idCuidadoMascota: id } });
    }

    async create(data){
        return cuidados_mascotas.create(data);
    }

    async update(data){
        await cuidados_mascotas.update(data, {where: {idCuidadoMascota: data.idCuidadoMascota}});
        return cuidados_mascotas.findOne({ where: { idCuidadoMascota: data.idCuidadoMascota } });
    }

    async destroy(id){
        return await cuidados_mascotas.destroy({ where: { idCuidadoMascota: id}});
    }
}

module.exports = new CuidadoMascotasRepository();