const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mascotas', {
    idmascota: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idRaza: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'raza',
        key: 'idRaza'
      }
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    genero: {
      type: DataTypes.ENUM('Macho','Hembra'),
      allowNull: false
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: false
    },
     fechaRegistro: {
       type: DataTypes.DATE,
       defaultValue: Sequelize.NOW,
       allowNull: false
     },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'mascotas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmascota" },
        ]
      },
      {
        name: "idmascota",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmascota" },
        ]
      },
      {
        name: "mascotas_fk1",
        using: "BTREE",
        fields: [
          { name: "idRaza" },
        ]
      },
    ]
  });
};
