'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proveedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Proveedor.init({
    idProveedor: DataTypes.INTEGER,
    nombreProveedor: DataTypes.STRING,
    apellidoProveedor: DataTypes.STRING,
    productoProveedor: DataTypes.STRING,
    fechaRegistro: DataTypes.DATEONLY,
    telefonoProveedor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Proveedor',
  });
  return Proveedor;
};