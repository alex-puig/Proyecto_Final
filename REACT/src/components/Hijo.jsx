import React from "react";

function ComponenteHijo(props){
    const { nombre, apellido_p, apellido_m, telefono, set_Data }= props
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
                                                    height:"550px",
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
                                <label htmlFor='Nombre' style={{color:"white"}}>Nombre:</label>
                                {/* Input de Nombre */}
                                <input type={"text"} value={nombre} className="form-control" id="nombre" placeholder='Ingresa tu  Nombre'  style={{backgroundColor:"#191919",
                                        border:"2px solid #3742fa"}}></input>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='Apellido Paterno' style={{color:"white"}}>Apellido Paterno:</label>
                                {/* Input de apellido_p */}
                                <input type={"text"} value={apellido_p} className="form-control" id="apellido_p" placeholder='Ingresa tu Apellido P.'  style={{backgroundColor:"#191919",
                                        border:"2px solid #3742fa"}}></input>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='Apellido Materno' style={{color:"white"}}>Apellido Materno:</label>
                                {/* Input de apellido_m */}
                                <input type={"text"} value={apellido_m}  className="form-control" id="apellido_m" placeholder='Ingresa tu Apellido M.'  style={{backgroundColor:"#191919",
                                        border:"2px solid #3742fa"}}></input>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='Telefono' style={{color:"white"}}>Telefono:</label>
                                {/* Input de apellido_p */}
                                <input type={"text"} value={telefono}  className="form-control" id="telefono" placeholder='Ingresa tu telefono.'  style={{backgroundColor:"#191919",
                                        border:"2px solid #3742fa"}}></input>
                            </div>
                            <br></br>
                            <button type='submint' className='btn btn-primary btn-block' onClick={set_Data} style={{borderRadius:"24px",
                                                                                                                            border:"none",
                                                                                                                            background:"#5352ed"}}>Iniciar Sesión</button>
                        </form>
                    </div>
                </div>
            </body>
        </>
    );
}
export default ComponenteHijo;

 