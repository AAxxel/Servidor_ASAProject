class dtoCreate {
    constructor(data) {
        this.idUsuario = data.idUsuario;
        this.idMascota = data.idMascota;
        this.idAmo = data.idAmo;
        this.estadoAdopcion = "Pendiente";
        this.fechaAdopcion = data.fechaAdopcion;
        this.notasAdopcion = data.notasAdopcion;
    }
}

class dtoUpdate {
    constructor(data) {
        this.idAdopcion = data.idAdopcion;
        this.fechaAdopcion = data.fechaAdopcion;
        this.notasAdopcion = data.notasAdopcion;
    }
}

class dtoUpdateEstado {
    constructor(data) {
        this.idAdopcion = data.idAdopcion;
        this.estadoAdopcion = data.estadoAdopcion;
    }
}

class dtoResponse {
    constructor(data) {
        this.idAdopcion = data.idAdopcion;
        this.mascota = data.mascota;
        this.amo = data.amo;
        this.estadoAdopcion = data.estadoAdopcion;
        this.fechaAdopcion = data.fechaAdopcion;
    }
}

class dtoResponseOnly {
    constructor(data) {
        this.idAdopcion = data.idAdopcion;
        this.idUsuario = data.idUsuario;
        this.idMascota = data.idMascota;
        this.idAmo = data.idAmo;
        this.estadoAdopcion = data.estadoAdopcion;
        this.fechaAdopcion = data.fechaAdopcion;
        this.notasAdopcion = data.notasAdopcion;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse, dtoUpdateEstado, dtoResponseOnly };