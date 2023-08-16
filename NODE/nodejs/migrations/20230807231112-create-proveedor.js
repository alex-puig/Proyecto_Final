'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Proveedors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProveedor: {
        type: Sequelize.INTEGER
      },
      nombreProveedor: {
        type: Sequelize.STRING
      },
      apellidoProveedor: {
        type: Sequelize.STRING
      },
      productoProveedor: {
        type: Sequelize.STRING
      },
      fechaRegistro: {
        type: Sequelize.DATEONLY
      },
      telefonoProveedor: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Proveedors');
  }
};