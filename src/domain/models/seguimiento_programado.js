const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seguimiento_programado', {
    idSeguimiento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idAdopcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adopciones',
        key: 'idAdopcion'
      }
    },
    fechaEstablecida: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaRegistro: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estadoSeguimiento: {
      type: DataTypes.ENUM('Pendiente','En Progreso','Completado','Cancelado'),
      allowNull: false
    },
    notas: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'seguimiento_programado',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSeguimiento" },
        ]
      },
      {
        name: "idSeguimiento",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSeguimiento" },
        ]
      },
      {
        name: "seguimiento_programado_fk1",
        using: "BTREE",
        fields: [
          { name: "idAdopcion" },
        ]
      },
    ]
  });
};
