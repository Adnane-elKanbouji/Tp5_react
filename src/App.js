
import './App.css';
// import NavBar from './NavBar';
import { Routes,Route, Form } from 'react-router-dom';
import Home from './Compenents/HOME/Home';
import Calculator from './Compenents/TP1/Calculator';
import Slider from "./Compenents/TP2/Slider";
import Forma_Task from './Compenents/TP3/Forma_Task';
import Tp4 from './Compenents/TP4/Tp4';
import NavBar from './Compenents/NavBar/NavBar';

function App() {
  <img src="./lo" alt="" srcset="" />
  return (
  <div className='App'>
    <NavBar/>

  <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/Tp1' element={<Calculator/>}/>
    <Route  path='/Tp2' element={<Slider/>}/>
    <Route  path='/Tp3' element={<Forma_Task/>}/>
    <Route  path='/Tp4' element={<Tp4/>}/>

  </Routes>

  
  </div>
  );
}

export default App;
