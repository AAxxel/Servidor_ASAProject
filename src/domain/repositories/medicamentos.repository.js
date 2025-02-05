const { medicamento } = require('../../config/database.js').models;

class MedicamentoRepository {
    
    async getAll(){
        return medicamento.findAll();
    }

    async getById(id){
        return medicamento.findOne({ where: { idMedicamento: id } });
    }

    async create(data){
        return medicamento.create(data);
    }

    async update(data){
        await medicamento.update(data, {where: {idMedicamento: data.idMedicamento}});
        return medicamento.findOne({ where: { idMedicamento: data.idMedicamento } });
    }

    async destroy(id){
        return await medicamento.destroy({ where: { idMedicamento: id}});
    }
}

module.exports = new MedicamentoRepository();