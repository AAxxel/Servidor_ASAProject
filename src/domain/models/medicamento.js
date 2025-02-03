const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medicamento', {
    idMedicamento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    unidad: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    viaAdministracion: {
      type: DataTypes.ENUM('Oral','Inyección','Tópica','Ocular','Intravenosa','Intramuscular','Sublingual','Otros'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'medicamento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMedicamento" },
        ]
      },
      {
        name: "idMedicamento",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMedicamento" },
        ]
      },
    ]
  });
};
