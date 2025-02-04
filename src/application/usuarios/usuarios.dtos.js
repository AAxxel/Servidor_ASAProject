class amosDtoCreate {
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

class amosDtoUpdate {
    constructor(data) {
        
        this.idUsuario = data.idUsuario;
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

class amosDtoResponse {
    constructor(data) {
        this.rol = data.rol;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.email = data.email;
        this.telefono = data.telefono;
    }
}

module.exports = { amosDtoCreate, amosDtoResponse, amosDtoUpdate };