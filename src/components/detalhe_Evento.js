import React from 'react';
import Image from 'next/image';
import './lista_Eventos.css';
import Link from 'next/link';

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/versao_do_fontawesome/css/all.min.css"
  integrity="sha512-...."
  crossorigin="anonymous"
/>;

function Detalheevento() {
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
          //  className="absolute"
          style={{ background: 'white' }}
        />
      </div>

      <div className="welcome-message">
        <h1 className="texto">Detalhe Evento</h1>
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
            type="text"
            placeholder="Realizador"
            required
          />
          <input
            className="input h-48 min-h-full text-start"
            type="text"
            placeholder="Detalhes"
            required
          />

          <button className="button" type="submit">
            Confirmar Inscrição
          </button>
        </form>
      </div>
    </div>
  );
}

export default Detalheevento;
