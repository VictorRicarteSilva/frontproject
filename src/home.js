import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home(){
  return(
    <div>
      
      <h1>Bem vindo</h1>
      <div className="home">
                
        <Link to="/pacientes" className="home_pacientes">
        <img src="/assets/user-icon.png" alt="Pacientes Ícone" className="icon" />
        <h2>Pacientes</h2>
        </Link>

        <Link to="/catalogo" className="home_catalogo">
        <img src="/assets/catalogo-icon.png" alt="Pacientes Ícone" className="icon" />
        <h2>Catalogo</h2>
        </Link>

        <Link to="/status" className="home_status">
        <img src="/assets/status-icon.png" alt="Pacientes Ícone" className="icon" />
        <h2>Status</h2>
        </Link>
        
      </div>

    </div>
  );
}

export default Home;