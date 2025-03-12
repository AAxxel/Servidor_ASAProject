const { adopciones } = require('../../config/database.js').models;

class AdopcionRepository {
    
    async getAll(){
        return adopciones.findAll();
    }

    async getById(id){
        return adopciones.findOne({ where: { idAdopcion: id } });
    }

    async create(data){
        return adopciones.create(data);
    }

    async update(data){
        await adopciones.update(data, {where: {idAdopcion: data.idAdopcion}});
        return adopciones.findOne({ where: { idAdopcion: data.idAdopcion } });
    }

    async getStatusById(id){
        return adopciones.findOne({
            attributes: ['estadoAdopcion'],
            where: { idAdopcion: id }
        });
    }

    async destroy(id){
        return await adopciones.destroy({ where: { idAdopcion: id}});
    }
}

module.exports = new AdopcionRepository();