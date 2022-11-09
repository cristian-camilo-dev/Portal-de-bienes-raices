import { DataTypes } from "sequelize";
import db from "../config/db.js";

// Definimos el modelo
//.define es un metodo de sequelize que recibe dos parametros el nombre de la tabla y un objeto con los campos de la tabla

const Usuario = db.define("usuarios", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
  },
  confirmando: {
    type: DataTypes.BOOLEAN,
  },
});

export default Usuario;
