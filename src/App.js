import React from 'react';
import { BrowserRouter, Routes, Route,   Navigate } from 'react-router-dom';
import './App.css';
import End from './components/End/End';
import Form from './components/Form/Form';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navigate replace to='/registration' />}/>
          <Route exact path='/registration' element={<Form/>}/>
          <Route exact path='/theme' element={<Gallery/>}/>
          <Route exact path='/done' element={<End/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
