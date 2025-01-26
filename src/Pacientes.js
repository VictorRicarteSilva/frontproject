import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pacientes.css";


function Pacientes() {

  const navigate = useNavigate(); // Hook para redirecionar

  // Estado para controlar a visibilidade do modal
  const [showModal, setShowModal] = useState(false);

  const handleIncluir = () => {
    setShowModal(true); // Mostra o modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Fecha o modal
  };

  return (
    
    <div className="pacientes-container">

      {/* Menu lateral */}
      <aside className="sidebar">
  <ul>
    {/* Botão Voltar */}
    <li>
      <button className="back-button" onClick={() => navigate("/")}>
        <img
          src="/assets/back-icon.png" // Caminho da imagem
          alt="Voltar"
        />
      </button>
    </li>
    <li><button>Editar</button></li>
    <li>
      <button onClick={handleIncluir}>Incluir</button>
    </li>
    <li><button>Excluir</button></li>
  </ul>
</aside>

      {/* Conteúdo principal */}
      <main className="main-content">
        <h1>Pacientes</h1>
        <p>Selecione uma das opções no menu para continuar.</p>
      </main>
      {/* Modal de cadastro */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Cadastrar Novo Paciente</h2>
            <form>
              <label>
                Nome:
                <input type="text" placeholder="Digite o nome" />
              </label>
              
              <label>
                CPF:
                <input type="text" placeholder="Digite o CPF" />
              </label>

              <label>
                Endereço:
                <input type="text" placeholder="Digite o endereço" />
              </label>

              <label>
                Numero da residencia:
                <input type="text" placeholder="Digite o numero residencial" />
              </label>

              <label>
                Bairro:
                <input type="text" placeholder="Digite o Bairro" />
              </label>

              <label>
                Cidade:
                <input type="text" placeholder="Digite o Bairro" />
              </label>

              <label>
                Idade:
                <input type="number" placeholder="Digite a idade" />
              </label>

              <label>
                Email:
                <input type="email" placeholder="Digite o email" />
              </label>

              <div className="modal-buttons">
                <button type="submit">Salvar</button>
                <button type="button" onClick={handleCloseModal}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pacientes;