const { getRolById } = require('../../domain/services/roles.services.js');
class dtoCreate {
    constructor(data) {
        this.idRol = data.idRol;
        this.dni = data.dni;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.email = data.email;
        this.telefono = data.telefono;
        this.password = data.password;
        this.fechaNacimiento = data.fechaNacimiento;
    }
}
class dtoUpdate {
    constructor(data) {
        this.idUsuario = data.idUsuario;
        this.idRol = data.idRol;
        this.dni = data.dni;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.email = data.email;
        this.telefono = data.telefono;
        this.fechaNacimiento = data.fechaNacimiento;
    }
}
class dtoResponse {
    constructor(data) {
        this.idUsuario = data.idUsuario;
        this.nombreRol = data.nombreRol;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.email = data.email;
        this.telefono = data.telefono;
    }
}
class dtoResponseIndividual {
    constructor(data) {
        this.idUsuario = data.idUsuario;
        this.idRol = data.idRol;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.dni = data.dni;
        this.email = data.email;
        this.telefono = data.telefono;
        this.fechaNacimiento = data.fechaNacimiento;
        this.estado = data.estado;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse, dtoResponseIndividual };