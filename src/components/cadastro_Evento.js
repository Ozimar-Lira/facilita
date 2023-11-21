import React from 'react';
import './lista_Eventos.css';
import Header from './header';

function Cadastroevento() {
  return (
    <div className="pagina">
      <Header />

      <div className="welcome-message">
        <h1 className="texto">Cadastrar Evento</h1>
      </div>

      {/* Mantenha login-container abaixo da imagem */}
      <div className="login-container">
        <form className="login-form">
          <input
            className="input"
            type="text"
            placeholder="Nome do Evento"
            required
          />
          <input
            className="input"
            type="number"
            placeholder="Qtd de participantes"
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Realizador"
            required
          />

          <input
            className="inputdetalhe"
            type="text"
            placeholder="Detalhe"
            required
          />

          <button className="button" type="submit">
            Confirmar Cadastro
          </button>

          <div className="edicao">
            <a href="/editar" className="editarevento">
              Editar Evento
            </a>
            <span className="spacer"></span>
            <a href="/excluir" className="excluirevento">
              Excluir Evento
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastroevento;
