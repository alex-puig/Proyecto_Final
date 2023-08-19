'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Factura.init({
    idFactura: {type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,},

    fecha: DataTypes.DATEONLY,

    idMesero: {type: DataTypes.INTEGER,
               references:{
                model: Mesero,
                key: idMesero,
               }},
    mesa: {type: DataTypes.INTEGER,
            allowNull: false,},
        
    subTotal: {type: DataTypes.FLOAT,
               allowNull: false,
               set(value) {
               if (!isNaN(parseFloat(value))) {
                    this.setDataValue('subTotal', parseFloat(value.toFixed(2)));
               }
               },
               },
            
    total: {type: DataTypes.FLOAT,
               allowNull: false,
               set(value) {
               if (!isNaN(parseFloat(value))) {
                    this.setDataValue('total', parseFloat(value.toFixed(2)));
               }
               },
               },
  }, {
    sequelize,
    modelName: 'Factura',
  });
  return Factura;
};
