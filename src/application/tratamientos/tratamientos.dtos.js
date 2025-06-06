class dtoCreate {
    constructor(data) {
        this.idMascEnfermedad = data.idMascEnfermedad;
        this.fechaInicio = data.fechaInicio;
        this.fechaFinal = data.fechaFinal;
        this.tipoTratamiento = data.tipoTratamiento;
        this.notas = data.notas;
    }
}

class dtoUpdate {
    constructor(data) {
        this.idTratamiento = data.idTratamiento;
        this.fechaInicio = data.fechaInicio;
        this.fechaFinal = data.fechaFinal;
        this.tipoTratamiento = data.tipoTratamiento;
        this.notas = data.notas;
    }
}

class dtoUpdateEstado {
    constructor(data) {
        this.idTratamiento = data.idTratamiento;
        this.estado = data.estado;
            }
}

class dtoResponse {
    constructor(data) {
        this.idTratamiento = data.idTratamiento;
        this.idMascEnfermedad = data.idMascEnfermedad;
        this.info = data.info;
        this.fechaInicio = data.fechaInicio;
        this.fechaFinal = data.fechaFinal;
        this.tipoTratamiento = data.tipoTratamiento;
        this.estado = data.estado;
        this.notas = data.notas; 
    }
}

class dtoTable {
    constructor(data) {
        this.idTratamiento = data.idTratamiento;
        this.nombreMascota = data.nombreMascota;
        this.nombreEnfermedad = data.nombreEnfermedad;
        this.fechaInicio = data.fechaInicio;
        this.fechaFinal = data.fechaFinal;
        this.tipoTratamiento = data.tipoTratamiento;
        this.estado = data.estado;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoUpdateEstado, dtoResponse, dtoTable };