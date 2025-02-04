class dtoCreate {
    constructor(data) {
        this.nombreCuidado = data.nombreCuidado;
        this.descripcion = data.descripcion;
    }
}
class dtoUpdate {
    constructor(data) {
        this.idCuidado = data.idCuidado;
        this.nombreCuidado = data.nombreCuidado;
        this.descripcion = data.descripcion;
    }
}
class dtoResponse {
    constructor(data) {
        this.idCuidado = data.idCuidado;
        this.nombreCuidado = data.nombreCuidado;
        this.descripcion = data.descripcion;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse };