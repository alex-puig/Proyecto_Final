import React, {useState} from "react";
import ComponenteHijo from "./ComponenteHijo";

function ComponentePadre(){
    // Propiedades a mandar al hijo
    const [nombre, setName] = useState(0);
    const [apellido_p, setApellido_p] = useState(0);
    const [apellido_m, setApellido_m] = useState(0);
    const [telefono, setTelefono] = useState(0);

    // Arrow function
    const aumentarContador = () => {
        console.log("valores actuales: ", email +" , " +password)
    };

    return(
        <div>
            <h3>Valor del contador desde el padre: {contador}</h3>
            <h1>Componente Padre :D</h1>
            <ComponenteHijo val1={val1} val2={val2} contador={contador} aumentarContador={aumentarContador}/>
        </div>
    );
}
export default ComponentePadre;