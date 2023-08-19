'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cliente.init({
    idCliente: {type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,},
    nombre: {type: DataTypes.STRING,
             allowNull: false,
             validate:{
                      len: [0, 150],
                    },
             },
    apellidos: {type: DataTypes.STRING,
                allowNull: false,
                validate:{
                          len: [0, 150],
                        },
                },
    rfc: {type: DataTypes.STRING,
          allowNull: false,
          validate:{
                    len: [13],
                  },
          },
    calle: {type: DataTypes.STRING,
            allowNull: false,
            validate:{
                      len: [0, 150],
                    },
            },
    numExt: {type: DataTypes.STRING,
             allowNull: false,
             validate:{
                      len: [0, 30],
                    },
             },
    numInt: {type: DataTypes.STRING,
             allowNull: false,
             validate:{
                    len: [0, 30],
                  },
             },
    colonia: {type: DataTypes.STRING,
              allowNull: false,
              validate:{
                        len: [0, 150],
                      },
              },
    municipio: {type: DataTypes.STRING,
                allowNull: false,
                validate:{
                          len: [0, 150],
                        },
                },
    estado: {type: DataTypes.STRING,
             allowNull: false,
             validate:{
                      len: [0, 150],
                    },
             },
    zipCode: {type: DataTypes.STRING,
              allowNull: false,
              validate:{
                        len: [5],
                      },
              },
    montoTotal: {type: DataTypes.FLOAT,
                allowNull: false,
                set(value) {
                  if (!isNaN(parseFloat(value))) {
                    this.setDataValue('montoTotal', parseFloat(value.toFixed(2)));
                  }
                },
                },
    fecha: DataTypes.DATEONLY,
    idFactura: {type: DataTypes.INTEGER,
                references:{
                  model: Factura,
                  key: idFactura,
                }}
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};
