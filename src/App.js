import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QRCodeGenerator from './Components/QRCodeGenerator';
function App () {
   
  return (
  <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<QRCodeGenerator/>}></Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;