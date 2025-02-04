class dtoCreate {
    constructor(data) {
        this.nombreRol = data.nombreRol;
        this.descripcion = data.descripcion;
    }
}

class dtoUpdate {
    constructor(data) {
        this.idRol = data.idRol;
        this.nombreRol = data.nombreRol;
        this.descripcion = data.descripcion;
    }
}

class dtoResponse {
    constructor(data) {
        this.idRol = data.idRol;
        this.nombreRol = data.nombreRol;
        this.descripcion = data.descripcion;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse };