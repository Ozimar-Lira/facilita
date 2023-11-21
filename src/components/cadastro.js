import React from 'react';
import Image from 'next/image';
import './cadastro.css';

function Cadastro() {
  return (
    <div className="pagina">
      <div className="imagem">
        {/* Logomarca */}
        <Image
          src="/Facilita.png"
          alt="Facilita Eventos Logo"
          width={121}
          height={110}
          priority
          className="absolute"
          style={{ background: 'white' }}
        />
      </div>

      <div className="welcome-message">
        <h1 className="texto">Faça o seu cadastro!</h1>
      </div>

      {/* Mantenha login-container abaixo da imagem */}
      <div className="login-container">
        <form className="login-form">
          <input
            className="input"
            type="text"
            placeholder="Nome Completo"
            required
          />
          <input className="input" type="email" placeholder="E-mail" required />
          <input
            className="input"
            type="tel"
            placeholder="+55 Telefone"
            required
          />
          <div className="Tipo">
            <input
              className="pl-2"
              type="radio"
              name="tipo"
              value="Participante"
            />
            <span className="text-gray-700 space-x-2 pr-2">Participante</span>
            <input className="pl-2" type="radio" name="tipo" value="Promotor" />
            <span className="text-gray-700 space-x-2 pr-2">
              Promotor de Evento
            </span>
          </div>
          <input
            className="input"
            type="number"
            placeholder="CPF/CNPJ"
            required
          />
          <label className="label pl-4 pr-4">
            <input type="checkbox" />
            <a href="/esqueceu-senha" className="esqueceu">
              Estou de acordo com os Termos de Uso e com o Aviso de Privacidade
              do Facilita Eventos.
            </a>
          </label>
          <button className="button" type="submit">
            Concordar e concluir
          </button>
          <a href="/login" className="login">
            Cancelar
          </a>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
