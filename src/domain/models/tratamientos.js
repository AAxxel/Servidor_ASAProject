const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tratamientos', {
    idTratamiento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idMascEnfermedad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enfermedades_mascotas',
        key: 'idEnfermedadMascota'
      }
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaFinal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipoTratamiento: {
      type: DataTypes.ENUM('Medicamento','Cirugía','Terapia','Vacuna','Otros'),
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('En curso','Completado','Pendiente','Suspendido'),
      defaultValue: 'Pendiente',
      allowNull: false
    },
    notas: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tratamientos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTratamiento" },
        ]
      },
      {
        name: "idTratamiento",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTratamiento" },
        ]
      },
      {
        name: "tratamientos_fk1",
        using: "BTREE",
        fields: [
          { name: "idMascEnfermedad" },
        ]
      },
    ]
  });
};
