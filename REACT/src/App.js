import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Login  from "./components/Login"
// import TestComponent from "./components/TestComponent"
// import ToDoList from "./components/ToDoList"
// import EjemploTabla from './components/tabla';
// import Crud  from './components/crud'; 
// import ProveedorList from './components/Proveedor';
import MyForm from './components/Form';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
               <Route exact path='/' element={<MyForm/>}/>                
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
