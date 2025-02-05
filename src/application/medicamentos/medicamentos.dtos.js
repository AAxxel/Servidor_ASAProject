class dtoCreate {
    constructor(data) {
        this.nombre = data.nombre;
        this.descripcion = data.descripcion;
        this.unidad = data.unidad;
        this.viaAdministracion = data.viaAdministracion;
    }
}

class dtoUpdate {
    constructor(data) {
        this.idMedicamento = data.idMedicamento;
        this.nombre = data.nombre;
        this.descripcion = data.descripcion;
        this.unidad = data.unidad;
        this.viaAdministracion = data.viaAdministracion;
    }
}

class dtoResponse {
    constructor(data) {
        this.idMedicamento = data.idMedicamento;
        this.nombre = data.nombre;
        this.descripcion = data.descripcion;
        this.unidad = data.unidad;
        this.viaAdministracion = data.viaAdministracion;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse };