import React, {useState} from "react";
import ComponenteHijo from "./ComponenteHijo";

function ComponentePadre(){
    // Propiedades a mandar al hijo
    const [contador, setContador] = useState(0) //Crea un nuevo estado :D
    const val1 = 'Hola';
    const val2 = 'Mundo :D';

    // Arrow function
    const aumentarContador = () => {
        setContador(contador+1);
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