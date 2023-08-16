import React , {useState} from "react";
import Hijo from "./Hijo";


function Login(){
    const [nombre, setName] = useState("");
    const [apellido_p, setApellido_p] = useState("");
    const [apellido_m, setApellido_m] = useState("");
    const [telefono, setTelefono] = useState("");

    const set_Data = () => {
        setName(nombre);
        setApellido_p(apellido_p);
        setApellido_m(apellido_m);
        setTelefono(telefono);
    };


    return(
                <>
                <p>Nombre: {nombre}</p>
                <p>apellido_p: {apellido_p}</p>
                <p>apellido_m: {apellido_m}</p>
                <p>telefono: {telefono}</p>
                <Hijo nombre={nombre} apellido_p={apellido_p} apellido_m={apellido_m} telefono={telefono} set_Data={set_Data}/>
                </>
        )
}

export default Login;
