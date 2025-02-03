var DataTypes = require("sequelize").DataTypes;
var _adopciones = require("./adopciones");
var _amos = require("./amos");
var _cuidados = require("./cuidados");
var _cuidados_mascotas = require("./cuidados_mascotas");
var _enfermedades = require("./enfermedades");
var _enfermedades_mascotas = require("./enfermedades_mascotas");
var _especie = require("./especie");
var _mascotas = require("./mascotas");
var _medicamento = require("./medicamento");
var _raza = require("./raza");
var _receta = require("./receta");
var _rescates = require("./rescates");
var _roles = require("./roles");
var _seguimiento_programado = require("./seguimiento_programado");
var _tratamientos = require("./tratamientos");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var adopciones = _adopciones(sequelize, DataTypes);
  var amos = _amos(sequelize, DataTypes);
  var cuidados = _cuidados(sequelize, DataTypes);
  var cuidados_mascotas = _cuidados_mascotas(sequelize, DataTypes);
  var enfermedades = _enfermedades(sequelize, DataTypes);
  var enfermedades_mascotas = _enfermedades_mascotas(sequelize, DataTypes);
  var especie = _especie(sequelize, DataTypes);
  var mascotas = _mascotas(sequelize, DataTypes);
  var medicamento = _medicamento(sequelize, DataTypes);
  var raza = _raza(sequelize, DataTypes);
  var receta = _receta(sequelize, DataTypes);
  var rescates = _rescates(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var seguimiento_programado = _seguimiento_programado(sequelize, DataTypes);
  var tratamientos = _tratamientos(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  seguimiento_programado.belongsTo(adopciones, { as: "idAdopcion_adopcione", foreignKey: "idAdopcion"});
  adopciones.hasMany(seguimiento_programado, { as: "seguimiento_programados", foreignKey: "idAdopcion"});
  adopciones.belongsTo(amos, { as: "idAmo_amo", foreignKey: "idAmo"});
  amos.hasMany(adopciones, { as: "adopciones", foreignKey: "idAmo"});
  cuidados_mascotas.belongsTo(cuidados, { as: "idCuidado_cuidado", foreignKey: "idCuidado"});
  cuidados.hasMany(cuidados_mascotas, { as: "cuidados_mascota", foreignKey: "idCuidado"});
  enfermedades_mascotas.belongsTo(enfermedades, { as: "idEnfermedad_enfermedade", foreignKey: "idEnfermedad"});
  enfermedades.hasMany(enfermedades_mascotas, { as: "enfermedades_mascota", foreignKey: "idEnfermedad"});
  tratamientos.belongsTo(enfermedades_mascotas, { as: "idMascEnfermedad_enfermedades_mascota", foreignKey: "idMascEnfermedad"});
  enfermedades_mascotas.hasMany(tratamientos, { as: "tratamientos", foreignKey: "idMascEnfermedad"});
  raza.belongsTo(especie, { as: "idEspecie_especie", foreignKey: "idEspecie"});
  especie.hasMany(raza, { as: "razas", foreignKey: "idEspecie"});
  adopciones.belongsTo(mascotas, { as: "idMascota_mascota", foreignKey: "idMascota"});
  mascotas.hasMany(adopciones, { as: "adopciones", foreignKey: "idMascota"});
  cuidados_mascotas.belongsTo(mascotas, { as: "idMascota_mascota", foreignKey: "idMascota"});
  mascotas.hasMany(cuidados_mascotas, { as: "cuidados_mascota", foreignKey: "idMascota"});
  enfermedades_mascotas.belongsTo(mascotas, { as: "idMascota_mascota", foreignKey: "idMascota"});
  mascotas.hasMany(enfermedades_mascotas, { as: "enfermedades_mascota", foreignKey: "idMascota"});
  rescates.belongsTo(mascotas, { as: "idMascota_mascota", foreignKey: "idMascota"});
  mascotas.hasMany(rescates, { as: "rescates", foreignKey: "idMascota"});
  receta.belongsTo(medicamento, { as: "idMedicamento_medicamento", foreignKey: "idMedicamento"});
  medicamento.hasMany(receta, { as: "receta", foreignKey: "idMedicamento"});
  mascotas.belongsTo(raza, { as: "idRaza_raza", foreignKey: "idRaza"});
  raza.hasMany(mascotas, { as: "mascota", foreignKey: "idRaza"});
  usuarios.belongsTo(roles, { as: "idRol_role", foreignKey: "idRol"});
  roles.hasMany(usuarios, { as: "usuarios", foreignKey: "idRol"});
  receta.belongsTo(tratamientos, { as: "idTratamiento_tratamiento", foreignKey: "idTratamiento"});
  tratamientos.hasMany(receta, { as: "receta", foreignKey: "idTratamiento"});
  adopciones.belongsTo(usuarios, { as: "idUsuario_usuario", foreignKey: "idUsuario"});
  usuarios.hasMany(adopciones, { as: "adopciones", foreignKey: "idUsuario"});
  enfermedades_mascotas.belongsTo(usuarios, { as: "idUsuario_usuario", foreignKey: "idUsuario"});
  usuarios.hasMany(enfermedades_mascotas, { as: "enfermedades_mascota", foreignKey: "idUsuario"});
  rescates.belongsTo(usuarios, { as: "idUsuario_usuario", foreignKey: "idUsuario"});
  usuarios.hasMany(rescates, { as: "rescates", foreignKey: "idUsuario"});

  return {
    adopciones,
    amos,
    cuidados,
    cuidados_mascotas,
    enfermedades,
    enfermedades_mascotas,
    especie,
    mascotas,
    medicamento,
    raza,
    receta,
    rescates,
    roles,
    seguimiento_programado,
    tratamientos,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
