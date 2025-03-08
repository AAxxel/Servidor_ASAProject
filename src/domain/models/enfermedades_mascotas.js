const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enfermedades_mascotas', {
    idEnfermedadMascota: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idMascota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mascotas',
        key: 'idmascota'
      }
    },
    idEnfermedad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enfermedades',
        key: 'idEnfermedad'
      }
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'idUsuario'
      }
    },
    fechaDiagnostico: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    gravedad: {
      type: DataTypes.ENUM('Leve','Moderada','Severa'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'enfermedades_mascotas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEnfermedadMascota" },
        ]
      },
      {
        name: "idEnfermedadMascota",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEnfermedadMascota" },
        ]
      },
      {
        name: "enfermedades_mascotas_fk1",
        using: "BTREE",
        fields: [
          { name: "idMascota" },
        ]
      },
      {
        name: "enfermedades_mascotas_fk2",
        using: "BTREE",
        fields: [
          { name: "idEnfermedad" },
        ]
      },
      {
        name: "enfermedades_mascotas_fk3",
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
    ]
  });
};
