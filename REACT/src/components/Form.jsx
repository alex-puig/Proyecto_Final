import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [idProveedor, setIdProv] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [fecha, setFecha] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.stringify({
        "idProveedor": {idProveedor},
        "nombreProveedor": {name},
        "apellidoProveedor": {lastname},
        "productoProveedor": {product},
        "fechaRegistro": {fecha},
        "telefonoProveedor": {phonenumber}
      });

        
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8000/proveedores/',
        headers: { 
        'Content-Type': 'application/json'
        },
        data : data
    };
  

    alert(`The name you entered was: ${name}`)
  }

  return (
    <>
    <form  style={{float: "left", alignItems: "left", marginLeft: "10px"}} onSubmit={handleSubmit}>
      <label>Enter ID:
        <input 
          type="text" 
          value={idProveedor}
          onChange={(e) => setIdProv(e.target.value)}
        />
      </label>
      <br></br>
      <label>Enter name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br></br>
      <label>Enter lastname:
        <input 
          type="text" 
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br></br>
      <label>Enter producto:
        <input 
          type="text" 
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </label>
      <br></br>
      <label>Enter lastname:
        <input 
          type="text" 
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </label>
      <br></br>
      <label>Enter phonenumber:
        <input 
          type="text" 
          value={phonenumber}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br></br>
      <button type='submit'>Send</button> 
    
    </form>
    </>
  )
}

export default MyForm;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

