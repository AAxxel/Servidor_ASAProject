const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuidados_mascotas', {
    idCuidadoMascota: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idCuidado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cuidados',
        key: 'idCuidado'
      }
    },
    idMascota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mascotas',
        key: 'idmascota'
      }
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cuidados_mascotas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCuidadoMascota" },
        ]
      },
      {
        name: "idCuidadoMascota",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCuidadoMascota" },
        ]
      },
      {
        name: "cuidados_mascotas_fk1",
        using: "BTREE",
        fields: [
          { name: "idCuidado" },
        ]
      },
      {
        name: "cuidados_mascotas_fk2",
        using: "BTREE",
        fields: [
          { name: "idMascota" },
        ]
      },
    ]
  });
};
