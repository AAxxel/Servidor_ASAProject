class dtoCreate {
    constructor(data) {
        this.idMascota = data.idMascota;
        this.idEnfermedad = data.idEnfermedad;
        this.idUsuario = data.idUsuario;
        this.fechaDiagnostico = data.fechaDiagnostico;
        this.gravedad = data.gravedad;
    }
}
class dtoUpdate {
    constructor(data) {
        this.idEnfermedadMascota = data.idEnfermedadMascota;
        this.idMascota = data.idMascota;
        this.idEnfermedad = data.idEnfermedad;
        this.idUsuario = data.idUsuario;
        this.fechaDiagnostico = data.fechaDiagnostico;
        this.gravedad = data.gravedad;
    }
}
class dtoResponse {
    constructor(data) {
        this.idEnfermedadMascota = data.idEnfermedadMascota;
        this.mascota = data.mascota;
        this.enfermedad = data.enfermedad;
        this.usuario = data.usuario;
        this.fechaDiagnostico = data.fechaDiagnostico;
        this.gravedad = data.gravedad;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse };