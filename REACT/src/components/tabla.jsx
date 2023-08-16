import React from "react";

function EjemploTabla(){
    const data = [
        { columna1: "Dato 1", columna2: "Dato A", columna3: "Valor X"},
        { columna1: "Dato 2", columna2: "Dato B", columna3: "Valor Y"},
        { columna1: "Dato 3", columna2: "Dato C", columna3: "Valor Z"},
    ];

    const handleButtonClick = (row) =>{
        alert(`Valores del registro:\nColumna 1: ${row.columna1}\nColumna 2: ${row.columna2}Columna 3: ${row.columna3}`)
    };

    return(
        <table>
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => 
                (
                    <tr key={index}>
                        <td>{row.columna1}</td>
                        <td>{row.columna2}</td>
                        <td>{row.columna3}</td>
                        <td>
                            <button onClick={() => handleButtonClick(row)}>Mostrar</button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default EjemploTabla;