import React from "react";
import "./status.css";
import { useNavigate } from "react-router-dom"; // Para navegação

function Status() {

  const navigate = useNavigate(); // Hook para redirecionar

  return (
    
    <div className="Status-container">

      {/* Menu lateral */}
      <aside className="sidebar-status">
        <ul>
          {/* Botão Voltar */}
          <li><button className="back-button" onClick={() => navigate("/")}>
            
          <img
          src="/assets/back-icon.png" // Caminho da imagem
          alt="Voltar"/>

            </button></li>
          <li><button>Consultar</button></li>
          <li><button>Abrir chamado</button></li>
        </ul>
      </aside>

      {/* Conteúdo principal */}
      <main className="main-content">
        <h1>Status</h1>
        <p>Selecione uma das opções no menu para continuar.</p>
      </main>
    </div>
  );
}

export default Status;