class dtoCreate {
    constructor(data) {
        this.idUsuario = data.idUsuario;
        this.idMascota = data.idMascota;
        this.fechaRescate = data.fechaRescate;
        this.ubicacion = data.ubicacion;
        this.notasRescate = data.notasRescate;
        this.estadoAnimal = data.estadoAnimal;
        this.estadoRescate = data.estadoRescate;
    }
}

class dtoUpdate {
    constructor(data) {
        this.idRescate = data.idRescate;
        this.fechaRescate = data.fechaRescate;
        this.ubicacion = data.ubicacion;
        this.notasRescate = data.notasRescate;
        this.estadoAnimal = data.estadoAnimal;
    }
}

class dtoUpdateEstado {
    constructor(data) {
        this.idRescate = data.idRescate;
        this.estadoRescate = data.estadoRescate;
    }
}

class dtoResponse {
    constructor(data) {
        this.idRescate = data.idRescate;
        this.mascota = data.mascota;
        this.fechaRescate = data.fechaRescate;
        this.ubicacion = data.ubicacion;
        this.estadoAnimal = data.estadoAnimal;
        this.estadoRescate = data.estadoRescate;
    }
}

class dtoResponseOnly {
    constructor(data) {
        this.idRescate = data.idRescate;
        this.idUsuario = data.idUsuario;
        this.idMascota = data.idMascota;
        this.fechaRescate = data.fechaRescate;
        this.ubicacion = data.ubicacion;
        this.notasRescate = data.notasRescate;
        this.estadoAnimal = data.estadoAnimal;
        this.estadoRescate = data.estadoRescate;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoUpdateEstado, dtoResponse, dtoResponseOnly };