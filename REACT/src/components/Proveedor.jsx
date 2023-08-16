import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProveedorList = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    // Al cargar el componente, inicia el temporizador para obtener los proveedores cada 5 segundos
    const timer = setInterval(fetchProveedores, 5000);

    // Al desmontar el componente, limpia el temporizador
    return () => {
      clearInterval(timer);
    };
  }, []);

  const fetchProveedores = async () => {
    try {
      const response = await axios.get('http://localhost:8000/proveedores/'); // Reemplaza 'URL_DEL_API' por la URL de tu API
      setProveedores(response.data);
    } catch (error) {
      console.error('Error al obtener los proveedores:', error);
    }
  };

  const handleInfoClick = (proveedor) => {
    // Aquí puedes implementar la lógica para mostrar la información del proveedor con el ID específico
    window.alert(`ID del proveedor: ${proveedor.idProveedor}
Nombre proveedor: ${proveedor.nombreProveedor}
Apellido proveedor: ${proveedor.apellidoProveedor}
Producto del proveedor: ${proveedor.productoProveedor}
Fecha proveedor: ${proveedor.fechaRegistro}
Telefono proveedor: ${proveedor.telefonoProveedor}`);
  };

  return (
    <div>
      <button>Agregrar</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Producto</th>
            <th>Fecha de Registro</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <tr key={proveedor.idProveedor}>
              <td>{proveedor.idProveedor}</td>
              <td>{proveedor.nombreProveedor}</td>
              <td>{proveedor.apellidoProveedor}</td>
              <td>{proveedor.productoProveedor}</td>
              <td>{proveedor.fechaRegistro}</td>
              <td>{proveedor.telefonoProveedor}</td>
              <td>
                <button onClick={() => handleInfoClick(proveedor)}>Info</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProveedorList;
