const { amos } = require('../../config/database.js').models;

class AmoRepository {
    
    async getAll(){
        return amos.findAll({
            where: {
                estado: true }
        });
    }

    async createAmo(data){
        return amos.create(data);
    }

    async getById(id){
        return amos.findOne({ where: { idAmo: id } });
    }

    async updateAmo(data){
        await amos.update(data, {where: {idAmo: data.idAmo}});
        return amos.findOne({ where: { idAmo: data.idAmo } });
    }

    async destroyAmo(id){
        return await amos.destroy({ where: { idAmo: id}});
    }

    async desactivar(id){
        return await amos.update({estado : false}, {where: {idAmo: id}});
    }

}

module.exports = new AmoRepository();