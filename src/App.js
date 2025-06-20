// src/App.js
import React from 'react';
import Navbar from './Navbar';
import CertificadosAlz from './CertificadosAlz'; // Nombre corregido
import './App.css';
import Contacto from './Contacto';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CertificadosAlz />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;