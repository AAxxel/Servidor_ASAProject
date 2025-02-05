class dtoCreate {
    constructor(data) {
        this.idMascEnfermedad = data.idMascEnfermedad;
        this.fechaInicio = data.fechaInicio;
        this.fechaFinal = data.fechaFinal;
        this.tipoTratamiento = data.tipoTratamiento;
        this.estado = data.estado;
        this.notas = data.notas;
    }
}

class dtoUpdate {
    constructor(data) {
        this.idTratamiento = data.idTratamiento;
        this.fechaInicio = data.fechaInicio;
        this.fechaFinal = data.fechaFinal;
        this.tipoTratamiento = data.tipoTratamiento;
        this.estado = data.estado;
        this.notas = data.notas;
    }
}

class dtoResponse {
    constructor(data) {
        this.idTratamiento = data.idTratamiento;
        this.info = data.info;
        this.fechaInicio = data.fechaInicio;
        this.fechaFinal = data.fechaFinal;
        this.tipoTratamiento = data.tipoTratamiento;
        this.estado = data.estado;
        
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse };