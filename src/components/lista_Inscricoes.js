import React from 'react';
import Image from 'next/image';
import './lista_Eventos.css';
import Link from 'next/link';
import Cardinscricao from './cardInsc';
import Header from './header';
import Pesquisa from './pesquisa';
import Footer from './footer';

// Remova a tag <link> que não está sendo usada no JavaScript

function Inscricoes() {
  return (
    <div className="pagina">
      <Header />
      <Pesquisa />

      <div className="welcome-message">
        <h1 className="texto">Minhas Inscrições</h1>
      </div>

      {/* Mantenha login-container abaixo da imagem */}

      <div className="listaCard">
        <Cardinscricao>Nome Evento 1</Cardinscricao>
        <Cardinscricao>Nome Evento 2</Cardinscricao>
        <Cardinscricao>Nome Evento 3</Cardinscricao>
        <Cardinscricao>Nome Evento 4</Cardinscricao>
        <Cardinscricao>Nome Evento 5</Cardinscricao>
      </div>
      <Footer className="item-center" />
    </div>
  );
}

export default Inscricoes;
