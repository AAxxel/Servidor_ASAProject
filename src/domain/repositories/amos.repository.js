const { where } = require('sequelize');

const { amos } = require('../../config/database.js').models;

class AmoRepository {
    
    async getAll(){
        return amos.findAll();
    }

    async createAmo(data){
        return amos.create(data);
    }

    async updateAmo(data){
        await amos.update(data, {where: {idAmo: data.idAmo}});
        return amos.findOne({ where: { idAmo: data.idAmo } });
    }

    async destroyAmo(id){
        return await amos.destroy({ where: { idAmo: id}});
    }

}

module.exports = new AmoRepository();