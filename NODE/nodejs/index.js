const express = require('express');
const { Usuario } = require('./models');
const { Producto } = require('./models');
const { Proveedor } = require('./models');

const app = express();
const port = 8000;

var cors = require('cors')
app.use(cors())

app.use(express.json());


    app.get('/proveedores', async (req, res) => {
        try {
          const proveedores = await Proveedor.findAll();
          res.json(proveedores);
        } catch (error) {
          res.status(500).json({ error: 'Error al obtener los proveedores.' });
        }
      });

      app.post('/proveedores', async (req, res) => {
        const idProveedor  = req.body.idProveedor;
        const nombreProveedor = req.body.nombreProveedor;
        const apellidoProveedor = req.body.apellidoProveedor;
        const productoProveedor = req.body.productoProveedor;
        const fechaRegistro  = req.body.fechaRegistro;
        const telefonoProveedor = req.body.telefonoProveedor;

        try {
          const proveedores = await Proveedor.create({ idProveedor, nombreProveedor, apellidoProveedor, productoProveedor, fechaRegistro, telefonoProveedor });
          res.status(201).json(proveedores);
        } catch (error) {
          res.status(500).json({ error: 'Error al obtener proveedor.' });
        }
      });

  
      app.get('/proveedores', async (req, res) => {
        try {
          const proveedores = await Proveedor.findAll();
          res.json(proveedores);
        } catch (error) {
          res.status(500).json({ error: 'Error al obtener proveedor.' });
        }
      });

  
      app.get('/proveedores/:id', async (req, res) => {
        try {
          const id = req.params.id;
          const proveedor = await Proveedor.findOne({ where: { id } });
          res.json(proveedor);
        } catch (error) {
          res.status(500).json({ error: 'Error al obtener proveedor.' });
        }
      });


      app.delete('/proveedores/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const deletedProveedor = await Proveedor.destroy({ where: { id } });
            res.status(201).json({message: "Deleted Proveedor"});
        } catch (error) {
          res.status(500).json({ error: 'Error al borrar el Proveedor.' });
        }
      });


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});