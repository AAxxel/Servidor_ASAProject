const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raza', {
    idRaza: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idEspecie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'especie',
        key: 'idEspecie'
      }
    },
    nombreRaza: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    size: {
      type: DataTypes.ENUM('Muy Pequeño','Pequeño','Mediano','Grande','Muy Grande'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'raza',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idRaza" },
        ]
      },
      {
        name: "idRaza",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idRaza" },
        ]
      },
      {
        name: "raza_fk1",
        using: "BTREE",
        fields: [
          { name: "idEspecie" },
        ]
      },
    ]
  });
};
