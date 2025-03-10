const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rescates', {
    idRescate: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'idUsuario'
      }
    },
    idMascota: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mascotas',
        key: 'idmascota'
      }
    },
    fechaRescate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ubicacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    notasRescate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estadoAnimal: {
      type: DataTypes.ENUM('Bueno','Regular','Malo','Crítico'),
      allowNull: false
    },
    estadoRescate: {
      type: DataTypes.ENUM('Reportado', 'En curso', 'Completado', 'Cancelado', 'No exitoso'),
      allowNull: false,
       defaultValue: 'Reportado'
    },
    fechaRegistro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    
  }, {
    sequelize,
    tableName: 'rescates',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idRescate" },
        ]
      },
      {
        name: "idRescate",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idRescate" },
        ]
      },
      {
        name: "rescates_fk1",
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
      {
        name: "rescates_fk2",
        using: "BTREE",
        fields: [
          { name: "idMascota" },
        ]
      },
    ]
  });
};
