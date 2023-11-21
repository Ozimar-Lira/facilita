import React from 'react';
import Image from 'next/image';
import './lista_Eventos.css';
import Link from 'next/link';
import Cardinscricao from './cardInsc';

// Remova a tag <link> que não está sendo usada no JavaScript

function Header() {
  return (
    <div className="imagem">
      {/* Logomarca */}
      <Image
        src="/Facilita.png"
        alt="Facilita Eventos Logo"
        width={121}
        height={110}
        priority
        // className="absolute"
        style={{ background: 'white' }}
      />
    </div>
  );
}

export default Header;
