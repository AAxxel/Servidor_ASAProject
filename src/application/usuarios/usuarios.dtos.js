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
        this.fechaRegistro = data.fechaRegistro;
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
        this.nombreRol = data.nombreRol;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.email = data.email;
        this.telefono = data.telefono;
    }
}

module.exports = { dtoCreate, dtoUpdate, dtoResponse };