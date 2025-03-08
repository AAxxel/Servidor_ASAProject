const { receta } = require('../../config/database.js').models;
const { tratamientos } = require('../../config/database.js').models;
const { enfermedades_mascotas } = require('../../config/database.js').models;
const { mascotas } = require('../../config/database.js').models;
const { medicamento } = require('../../config/database.js').models;

class RecetaRepository {
    
    async getAll(){
        return receta.findAll();
    }

    async obtenerRecetaConTratamiento() {
        const object = await receta.findAll({
            include: [
                {
                    model: tratamientos,
                    as: 'idTratamiento_tratamiento', // Usando el alias definido para la relación con tratamientos
                    include: [
                        {
                            model: enfermedades_mascotas,
                            as: 'idMascEnfermedad_enfermedades_mascota', // Alias de la relación con enfermedades_mascotas
                            include: [
                                {
                                    model: mascotas,
                                    as: 'idMascota_mascota', // Alias de la relación con mascotas
                                    attributes: ['idmascota', 'nombre'], // Solo los campos necesarios de la mascota
                                }
                            ]
                        }
                    ]
                },
                {
                    model: medicamento, // Modelo para el medicamento
                    as: 'idMedicamento_medicamento', // Alias para la relación con medicamentos
                    attributes: ['idMedicamento', 'nombre', 'descripcion'] // Atributos que deseas obtener
                }
            ]
        });
    
        return object;
    }
    
    

    async getById(id){
        return receta.findOne({ where: { idReceta: id } });
    }

    async create(data){
        return receta.create(data);
    }

    async update(data){
        await receta.update(data, {where: {idReceta: data.idReceta}});
        return receta.findOne({ where: { idReceta: data.idReceta } });
    }

    async destroy(id){
        return await receta.destroy({ where: { idReceta: id}});
    }
}

module.exports = new RecetaRepository();