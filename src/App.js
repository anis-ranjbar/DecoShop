
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';

import Produkte from './Components/Produkte/Produkte';
import Navbar from './Components/Header/Navbar';
import Shoe from './Components/Produkte/Shoe';
import Girl from './Components/Produkte/Girl';
import Mann from './Components/Produkte/Mann';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body/>} />
        <Route path="/produkte" element={<Produkte />} />
        <Route path="/Mann" element={<Mann/>} />
        <Route path='/Girl' element={<Girl/>}  />
        <Route path="/produkte" element={<Navbar />} />
        <Route path="/Shoe" element={<Shoe/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
