const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      Plataform: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Imagen: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      RealeaseDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
