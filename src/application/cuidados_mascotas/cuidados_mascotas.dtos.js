class dtoCreate {
    constructor(data) {
        this.idCuidado = data.idCuidado;
        this.idMascota = data.idMascota;
        this.observaciones = data.observaciones;
    }
}
class dtoUpdate {
    constructor(data) {
        this.idCuidadoMascota = data.idCuidadoMascota;
        this.idCuidado = data.idCuidado;
        this.idMascota = data.idMascota;
        this.observaciones = data.observaciones;
    }
}
class dtoResponse {
    constructor(data) {
        this.idCuidadoMascota = data.idCuidadoMascota;
        this.idCuidado = data.idCuidado;
        this.idMascota = data.idMascota;
        this.observaciones = data.observaciones;
    }
}

class dtoResponseObject {
    constructor(data) {
        this.idCuidadoMascota = data.idCuidadoMascota;
        this.cuidado = data.cuidado;
        this.mascota = data.mascota;
        this.observaciones = data.observaciones;
    }
}

class dtoResponseObjectPet {
    constructor(data) {
        this.idCuidadoMascota = data.idCuidadoMascota;
        this.cuidado = data.cuidado;
        this.idMascota = data.idMascota;
        this.observaciones = data.observaciones;
    }
}

module.exports = { dtoCreate, dtoResponseObjectPet, dtoUpdate, dtoResponse, dtoResponseObject };