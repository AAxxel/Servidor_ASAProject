const { resources } = require('../../shared/resources/images.js')

class dtoCreate {
    constructor(data) {
        this.idRaza = data.idRaza;
        this.nombre = data.nombre;
        this.genero = data.genero;
        this.fechaNacimiento = data.fechaNacimiento;
    }
}
class dtoUpdate {
    constructor(data) {
        this.idmascota = data.idmascota;
        this.idRaza = data.idRaza;
        this.nombre = data.nombre;
        this.genero = data.genero;
        this.fechaNacimiento = data.fechaNacimiento;
        this.estado = data.estado;
    }
}
class dtoResponse {
    constructor(data) {
        if (Array.isArray(data.petimages) && data.petimages.length > 0 && data.petimages[0].url != null ) {
        this.url = data.petimages[0].url
        }
        else{
        this.url = resources.noPhoto
        }
        
        this.idmascota = data.idmascota;
        this.nombreRaza = data.nombreRaza;
        this.nombreEspecie = data.nombreEspecie;
        this.nombre = data.nombre;
        this.genero = data.genero;
        
        
    }
}

class dtoGetImgPet {
    constructor(data) {
        this.idPetImage = data.idPetImage;
        this.idPet = data.idPet;
        this.url = data.url;
        this.isCover = data.isCover;
        this.description = data.description;
    }
}

class dtoGetCoverImgPet {
    constructor(data) {
        this.idPetImage = data.idPetImage;
        this.idPet = data.idPet;
        this.url = data.url;
        this.isCover = data.isCover;
    }
}

class dtoSaveImgPet {
    constructor(data) {
        this.idPet = data.body.idMascota;
        this.file = data.file;
        this.isCover = data.body.isCover;
        this.description = data.body.description;
        this.url = ""
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse, dtoGetImgPet, dtoSaveImgPet, dtoGetCoverImgPet };