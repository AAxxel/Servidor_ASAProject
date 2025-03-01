class amosDtoCreate {
    constructor(data) {
        
        this.dni = data.dni;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.sexo = data.sexo;
        this.telefono = data.telefono;
        this.email = data.email;
        this.profesion = data.profesion;
        this.direccion = data.direccion;
        this.fechaNacimiento = data.fechaNacimiento;
        this.estadoCivil = data.estadoCivil;
    }
}

class amosDtoUpdate {
    constructor(data) {
        
        this.idAmo = data.idAmo;
        this.dni = data.dni;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.sexo = data.sexo;
        this.telefono = data.telefono;
        this.email = data.email;
        this.profesion = data.profesion;
        this.direccion = data.direccion;
        this.fechaNacimiento = data.fechaNacimiento;
        this.estadoCivil = data.estadoCivil;
    }
}

class amosDtoResponse {
    constructor(data) {
        this.idAmo = data.idAmo;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.email = data.email;
        this.telefono = data.telefono;
    }
}

class amosDtoOnly {
    constructor(data) {
        this.idAmo = data.idAmo;
        this.dni = data.dni;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.sexo = data.sexo;
        this.telefono = data.telefono;
        this.email = data.email;
        this.profesion = data.profesion;
        this.direccion = data.direccion;
        this.fechaNacimiento = data.fechaNacimiento;
        this.estadoCivil = data.estadoCivil;
        this.estado = data.estado;
    }
}

module.exports = { amosDtoCreate, amosDtoResponse, amosDtoUpdate, amosDtoOnly };