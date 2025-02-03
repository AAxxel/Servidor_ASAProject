const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adopciones', {
    idAdopcion: {
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
      allowNull: false,
      references: {
        model: 'mascotas',
        key: 'idmascota'
      }
    },
    idAmo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'amos',
        key: 'idAmo'
      }
    },
    estadoAdopcion: {
      type: DataTypes.ENUM('Pendiente','Aprobada','Rechazada','Completada','Cancelada'),
      allowNull: false
    },
    fechaAdopcion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    notasAdopcion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'adopciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAdopcion" },
        ]
      },
      {
        name: "idAdopcion",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAdopcion" },
        ]
      },
      {
        name: "adopciones_fk1",
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
      {
        name: "adopciones_fk2",
        using: "BTREE",
        fields: [
          { name: "idMascota" },
        ]
      },
      {
        name: "adopciones_fk3",
        using: "BTREE",
        fields: [
          { name: "idAmo" },
        ]
      },
    ]
  });
};
