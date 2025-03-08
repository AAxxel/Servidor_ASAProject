class dtoCreate {
    constructor(data) {
        this.idMascota = data.idMascota;
        this.idEnfermedad = data.idEnfermedad;
        this.idUsuario = data.idUsuario;
        this.gravedad = data.gravedad;
    }
}
class dtoUpdate {
    constructor(data) {
        this.idEnfermedadMascota = data.idEnfermedadMascota;
        this.idEnfermedad = data.idEnfermedad;
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

class dtoResponseObjectPet {
    constructor(data) {
        this.idEnfermedadMascota = data.idEnfermedadMascota;
        this.enfermedad = data.enfermedad;
        this.idMascota = data.idMascota;
        this.gravedad = data.gravedad;
        this.fechaDiagnostico = data.fechaDiagnostico;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse, dtoResponseObjectPet };