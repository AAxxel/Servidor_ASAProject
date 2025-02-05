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

module.exports = { dtoCreate, dtoUpdate, dtoResponse };