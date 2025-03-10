class RecetaCreate {
    constructor(data) {
        this.idTratamiento = data.idTratamiento;
        this.idMedicamento = data.idMedicamento;
        this.frecuenciaHoras = data.frecuenciaHoras;
        this.cantidadDiaria = data.cantidadDiaria;
        this.instruAdicionales = data.instruAdicionales;
    }
}

class RecetaUpdate {
    constructor(data) {
        this.idReceta = data.idReceta;
        this.idMedicamento = data.idMedicamento;
        this.frecuenciaHoras = data.frecuenciaHoras;
        this.cantidadDiaria = data.cantidadDiaria;
        this.instruAdicionales = data.instruAdicionales;
    }
}

class RecetaResponse {
    constructor(data) {
        this.idReceta = data.idReceta;
        this.mascota = data.dataValues.idTratamiento_tratamiento.idMascEnfermedad_enfermedades_mascota.idMascota_mascota.nombre;
        this.medicamento = data.dataValues.idMedicamento_medicamento.nombre;
        this.frecuenciaHoras = data.frecuenciaHoras;
        this.cantidadDiaria = data.cantidadDiaria;
    }
}

class RecetaResponseList {
    constructor(data) {
        this.idReceta = data.idReceta;
        this.idMedicamento = data.idMedicamento;
        this.frecuenciaHoras = data.frecuenciaHoras;
        this.cantidadDiaria = data.cantidadDiaria;
        this.instruAdicionales = data.instruAdicionales;
    }
}

class RecetaResponseOnly {
    constructor(data) {
        this.idReceta = data.idReceta;
        this.mascota = data.mascota;
        this.medicamento = data.medicamento;
        this.frecuenciaHoras = data.frecuenciaHoras;
        this.cantidadDiaria = data.cantidadDiaria;
        this.instruAdicionales = data.instruAdicionales;
    }
}

module.exports = { RecetaCreate, RecetaUpdate, RecetaResponse, RecetaResponseOnly, RecetaResponseList };
