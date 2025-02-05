const { enfermedades_mascotas } = require('../../config/database.js').models;

class EnfermedadMascotaRepository {
    
    async getAll(){
        return enfermedades_mascotas.findAll();
    }

    async getById(id){
        return enfermedades_mascotas.findOne({ where: { idEnfermedadMascota: id } });
    }

    async create(data){
        return enfermedades_mascotas.create(data);
    }

    async update(data){
        await enfermedades_mascotas.update(data, {where: {idEnfermedadMascota: data.idEnfermedadMascota}});
        return enfermedades_mascotas.findOne({ where: { idEnfermedadMascota: data.idEnfermedadMascota } });
    }

    async destroy(id){
        return await enfermedades_mascotas.destroy({ where: { idEnfermedadMascota: id}});
    }
}

module.exports = new EnfermedadMascotaRepository();