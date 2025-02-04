class dtoCreate {
    constructor(data) {
        this.nombreEspecie = data.nombreEspecie;
    }
}

class dtoUpdate {
    constructor(data) {
        this.idEspecie = data.idEspecie;
        this.nombreEspecie = data.nombreEspecie;
    }
}

class dtoResponse {
    constructor(data) {
        this.idEspecie = data.idEspecie;
        this.nombreEspecie = data.nombreEspecie;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse };