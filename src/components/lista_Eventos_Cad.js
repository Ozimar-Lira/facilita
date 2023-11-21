import React from 'react';
import Image from 'next/image';
import './lista_Eventos.css';
import Link from 'next/link';
import Cardinscricao from './cardInsc';
import Header from './header';
import Pesquisa from './pesquisa';
import Footer from './footer';
import Cardeventos from './cardEventos';

// Remova a tag <link> que não está sendo usada no JavaScript

function Inscricoescad() {
  return (
    <div className="pagina">
      <Header />
      <Pesquisa />

      <div className="welcome-message">
        <h1 className="texto">Meus eventos cadastrados</h1>
      </div>

      {/* Mantenha login-container abaixo da imagem */}

      <div className="listaCard">
        <Cardeventos>Nome Evento 01</Cardeventos>
        <Cardeventos>Nome Evento 02</Cardeventos>
        <Cardeventos>Nome Evento 03</Cardeventos>
        <Cardeventos>Nome Evento 04</Cardeventos>
        <Cardeventos>Nome Evento 05</Cardeventos>
      </div>
      <Footer className="item-center" />
    </div>
  );
}

export default Inscricoescad;
