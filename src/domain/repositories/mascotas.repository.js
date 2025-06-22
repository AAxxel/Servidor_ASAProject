const { mascotas } = require('../../config/database.js').models;
const { petimages } = require('../../config/database.js').models;

class MascotaRepository {
    
    async getAll(){
        return mascotas.findAll({
            where: { estado: true },
            include: {
                model: petimages,
                as: 'petimages',
                required: false,
                where: {
                    isCover: 1
                }
            }
        });
    }

    async getById(id){
        return mascotas.findOne({ where: { idmascota: id } });
    }

    async create(data){
        return mascotas.create(data);
    }

    async saveImage(data){
        return petimages.create(data);
    }

    async getByIdPetImages(id){
    return petimages.findAll({ where: { idPet: id } });
    }

    async getCoverImgPets(){
        return petimages.findAll({
            where: {
                isCover: 1
            }
        });
    }

    async update(data){
        await mascotas.update(data, {where: {idmascota: data.idmascota}});
        return mascotas.findOne({ where: { idmascota: data.idmascota } });
    }

    async desactivar(id){
        return await mascotas.update({estado : false}, {where: {idmascota: id}});
    }

    async destroy(id){
        return await mascotas.destroy({ where: { idmascota: id}});
    }

        async destroyImg(id){
        return await petimages.destroy({ where: { idPetImage: id}});
    }
}

module.exports = new MascotaRepository();