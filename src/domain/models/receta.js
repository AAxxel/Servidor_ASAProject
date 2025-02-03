const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receta', {
    idReceta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idTratamiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tratamientos',
        key: 'idTratamiento'
      }
    },
    idMedicamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'medicamento',
        key: 'idMedicamento'
      }
    },
    frecuenciaHoras: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidadDiaria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    instruAdicionales: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'receta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idReceta" },
        ]
      },
      {
        name: "idReceta",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idReceta" },
        ]
      },
      {
        name: "receta_fk1",
        using: "BTREE",
        fields: [
          { name: "idTratamiento" },
        ]
      },
      {
        name: "receta_fk2",
        using: "BTREE",
        fields: [
          { name: "idMedicamento" },
        ]
      },
    ]
  });
};
