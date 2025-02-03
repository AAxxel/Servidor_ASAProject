const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('especie', {
    idEspecie: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreEspecie: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'especie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEspecie" },
        ]
      },
      {
        name: "idEspecie",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEspecie" },
        ]
      },
    ]
  });
};
