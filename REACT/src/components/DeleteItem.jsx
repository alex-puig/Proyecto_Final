import React from "react";

function delete_Button(props){
    const { val1, val2, contador, aumentarContador }= props


    return(
        <div>
            <h2>Componente Hijo</h2>
            <p>Propiedad 1: {val1}</p>
            <p>Propiedad 2: {val2}</p>
            <p>Manera entendible: {props.val1}</p>
            <br></br>

            <p>Valor actual del contador: {contador} </p>
            <button onClick={aumentarContador}> clicl me :D </button>
        </div>
    );
}
export default ComponenteHijo;