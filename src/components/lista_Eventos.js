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

function Eventos() {
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

      <div className="pesquisar">
        <input
          className="input"
          type="search"
          placeholder="Pesquisar Eventos"
          required
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>

      <div className="welcome-message">
        <h1 className="texto">Todos os Eventos</h1>
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
            placeholder="Nome do Evento"
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Nome do Evento"
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Nome do Evento"
            required
          />
          <div className="link">
            <Link className="linkitem" href="/home">
              <Image
                src="/home.png"
                alt="Home Logo"
                width={24}
                height={24}
                priority
                //  className="absolute"
                //style={{ background: 'white' }}
              />
            </Link>
            <Link className="linkitem" href="/edit">
              <Image
                src="/edit.png"
                alt="Edit Logo"
                width={24}
                height={24}
                priority
                //  className="absolute"
                //style={{ background: 'white' }}
              />
            </Link>
            <Link className="linkitem" href="/user">
              <Image
                src="/user.png"
                alt="Home Logo"
                width={24}
                height={24}
                priority
                //  className="absolute"
                //style={{ background: 'white' }}
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Eventos;
