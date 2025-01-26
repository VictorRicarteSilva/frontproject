import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Pacientes from './Pacientes'; // Página para Pacientes
import Catalogo from './Catalogo';   // Página para Catálogo
import Status from './Status';       // Página para Status

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </Router>
  );
}

export default App;