const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petimages', {
    idPetImage: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mascotas',
        key: 'idmascota'
      }
    },
    url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    idPet: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'petimages',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPetImage" },
        ]
      },
    ]
  });
};
