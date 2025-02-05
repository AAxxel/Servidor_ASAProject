class dtoCreate {
    constructor(data) {
        this.nombreEnfermedad = data.nombreEnfermedad;
        this.descripcion = data.descripcion;
        this.contagiosa = data.contagiosa;
    }
}
class dtoUpdate {
    constructor(data) {
        this.idEnfermedad = data.idEnfermedad;
        this.nombreEnfermedad = data.nombreEnfermedad;
        this.descripcion = data.descripcion;
        this.contagiosa = data.contagiosa;
    }
}
class dtoResponse {
    constructor(data) {
        this.idEnfermedad = data.idEnfermedad;
        this.nombreEnfermedad = data.nombreEnfermedad;
        this.descripcion = data.descripcion;
        this.contagiosa = data.contagiosa;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse };