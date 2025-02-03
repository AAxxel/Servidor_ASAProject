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
        this.fechaRegistro = data.fechaRegistro;
    }
}

class amosDtoResponse {
    constructor(data) {
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.email = data.email;
        this.direccion = data.direccion;
    }
}

module.exports = { amosDtoCreate, amosDtoResponse };