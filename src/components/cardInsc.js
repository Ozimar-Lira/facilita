import React from 'react';
import Image from 'next/image';
import './lista_Eventos.css';
import Link from 'next/link';

// Remova a tag <link> que não está sendo usada no JavaScript

function Cardinscricao({ children }) {
  return (
    <div className="card bg-gray-100">
      {' '}
      {/* Remova a barra após a abertura da tag */}
      <span className="cardInicio">{children}</span>
      <div className="cardFim flex flex-row items-center">
        <Image
          src="/cancela.svg"
          alt="Home Logo"
          width={24}
          height={24}
          priority
          className="linkitem"
          //  style={{ background: 'white' }}
        />
        <div className="flex flex-col">
          <span className="spanFinal">cancelar</span>
          <span className="spanFinal">inscrição</span>
        </div>
      </div>
    </div>
  );
}

export default Cardinscricao;
