import React , {useState} from "react";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var clickEnElBoton = () =>{
        console.log("valores actuales: ", email +" , " +password)
    };

    return(
        <>
            {/* Fondo */}
            <body style={{background: "linear-gradient(30deg , #2f22ad, #e64b9b)",
                          height: "100vh"}}>
                {/* Contenedor de login */}
                <div className='container' style={{alignItems: "center"}}>
                    {/* Fondo de imagen */}
                    <div className='container' style={{background:"#000000",
                                                    position:"relative",
                                                    left:"2%",
                                                    top:"150px",
                                                    width:"150px",
                                                    height:"150px",
                                                    borderRadius:"100%",
                                                    zIndex:"1"}}>
                        {/* Imagen */}
                        <img src='https://www.nse.gg/media/5024/smash_ball2w.png' style= {{width:"116px",
                                                                                        height:"116px",
                                                                                        marginLeft:"2px",
                                                                                        marginTop:"16px"}}  alt="Profile"> 
                        </img>
                    </div>
                    {/* Div de formulario */}
                    <div className='container' style={{backgroundColor:"#191919",
                                                    position:"relative",
                                                    left:"19px",
                                                    width:"35%",
                                                    height:"370px",
                                                    top:"100px" }}>
                        <br></br><br></br><br></br>
                        {/* Texto de inicio de sesion */}
                        <h4 className='text-center mb-4' style={{color:"white"}}>
                            Inicio de Sesión
                        </h4>
                        <br></br>
                        {/* Formulario de Login */}
                        <form style={{top:"-30px",
                                    left:"2px",
                                    position:"relative"}}>
                            {/* El form-group es para ponerlo como fila de rejilla y no usar el row  */}
                            <div className='form-group'>
                                <label htmlFor='usuario' style={{color:"white"}}>Usuario:</label>

                                {/* Input de Email */}
                                <input type={"text"} value={email} onChange={(event) => {setEmail(event.target.value)}} className="form-control" id='usuario' placeholder='Ingresa tu  usuario'  style={{backgroundColor:"#191919",
                                        border:"2px solid #3742fa"}}></input>
                            </div>
    
                            <div className='form-group'>
                                <label htmlFor='contrasena' style={{color:"white"}}>Contraseña:</label>

                                {/* Input de Contraseña */}
                                <input type={"text"} value={password} onChange={(event) => {setPassword(event.target.value)}} className="form-control" id='contrasena'
                                 placeholder='Ingresa tu contraseña' style={{backgroundColor:"#191919",
                                border:"2px solid #3742fa"}}></input>
                            </div>
                            <br></br>
                            {/* Botón iniciar sesión  */}
                            <button type='submint' className='btn btn-primary btn-block' onClick={clickEnElBoton} style={{borderRadius:"24px",
                                                                                                                            border:"none",
                                                                                                                            background:"#5352ed"}}>Iniciar Sesión</button>
                            <button type='submint' className='btn btn-primary btn-block' style={{borderRadius:"24px",
                                                                                                border:"none",
                                                                                                background:"#5352ed"}}>Crear Cuenta</button>
                        </form>
    
                    </div>
                </div>
            </body>
        </>
        )
}

export default Login;
