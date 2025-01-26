import React from "react";
import "./pacientes.css";
import { useNavigate } from "react-router-dom"; // Para navegação

function Pacientes() {

  const navigate = useNavigate(); // Hook para redirecionar

  return (
    
    <div className="pacientes-container">

      {/* Menu lateral */}
      <aside className="sidebar">
        <ul>
          {/* Botão Voltar */}
          <li><button className="back-button" onClick={() => navigate("/")}>
            
          <img
          src="/assets/back-icon.png" // Caminho da imagem
          alt="Voltar"/>

            </button></li>
          <li><button>Editar</button></li>
          <li><button>Incluir</button></li>
          <li><button>Excluir</button></li>
        </ul>
      </aside>

      {/* Conteúdo principal */}
      <main className="main-content">
        <h1>Pacientes</h1>
        <p>Selecione uma das opções no menu para continuar.</p>
      </main>
    </div>
  );
}

export default Pacientes;