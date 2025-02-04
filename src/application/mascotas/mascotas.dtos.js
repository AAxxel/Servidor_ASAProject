class dtoCreate {
    constructor(data) {
        this.idRaza = data.idRaza;
        this.nombre = data.nombre;
        this.genero = data.genero;
        this.fechaNacimiento = data.fechaNacimiento;
        this.fechaRegistro = data.fechaRegistro;
        
    }
}
class dtoUpdate {
    constructor(data) {
        this.idmascota = data.idmascota;
        this.idRaza = data.idRaza;
        this.nombre = data.nombre;
        this.genero = data.genero;
        this.fechaNacimiento = data.fechaNacimiento;
    }
}
class dtoResponse {
    constructor(data) {
        this.idmascota = data.idmascota;
        this.nombreRaza = data.nombreRaza;
        this.nombreEspecie = data.nombreEspecie;
        this.nombre = data.nombre;
        this.genero = data.genero;
        this.fechaNacimiento = data.fechaNacimiento;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse };