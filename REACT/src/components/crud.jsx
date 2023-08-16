import React from "react";

function Crud(){

    const data = [
        { id: "1", nombre: "Papa", apellido: "Apellido 1", telefono: "202020202020", correo: "correo@metro.com"},
        { id: "2", nombre: "Pepe", apellido: "Apellido 2", telefono: "202020202020", correo: "correo@metro.com"},
        { id: "3", nombre: "Paco", apellido: "Apellido 3", telefono: "202020202020", correo: "correo@metro.com"},
    ];

    const alerta_eliminar = () =>{
        alert(`Aqui se tiene que eliminar el usuario`)
    };

    const alerta_editar = () =>{
        alert(`Aqui se tiene que editar el usuario`)
    };

    const alerta_crear = () =>{
        alert(`Aqui se crea al usuario`)
    };




    return(
    <>
        <div style={{top: "50px", width: "100%", height: "50px", backgroundColor: "blue"}}>
            <button style={{left: "10px", position: "absolute", top: "10px"}}>Menu</button>
        </div>
        <table style={{width: "100%", height: "300px"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => 
                    (
                        <tr key={index}>
                            <td>{row.id}</td>
                            <td>{row.nombre}</td>
                            <td>{row.apellido}</td>
                            <td>{row.telefono}</td>
                            <td>{row.correo}</td>
                            <td>
                                <button onClick = {() => alerta_eliminar()}>Eliminar</button>
                                <button onClick = {() => alerta_editar()} style={{left: "10px", position: "relative"}}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
        <button onClick = {() => alerta_crear()} style={{top: "50px"}}>Crear usuario</button>






    </>

    );
}
export default Crud;