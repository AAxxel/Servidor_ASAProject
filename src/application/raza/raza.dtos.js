class dtoCreate {
    constructor(data) {
        this.idEspecie = data.idEspecie;
        this.nombreRaza = data.nombreRaza;
        this.size = data.size;
    }
}

class dtoUpdate {
    constructor(data) {
        this.idRaza = data.idRaza;
        this.idEspecie = data.idEspecie;
        this.nombreRaza = data.nombreRaza;
        this.size = data.size;
    }
}

class dtoResponse {
    constructor(data) {
        this.idRaza = data.idRaza;
        this.nombreEspecie = data.nombreEspecie;
        this.nombreRaza = data.nombreRaza;
        this.size = data.size;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse };