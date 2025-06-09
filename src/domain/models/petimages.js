const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petimages', {
    idPetImage: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    idPet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mascotas',
        key: 'idmascota'
      }
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isCover: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
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
      {
        name: "keypetImage_idx",
        using: "BTREE",
        fields: [
          { name: "idPet" },
        ]
      },
    ]
  });
};
