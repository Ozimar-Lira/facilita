import React from 'react';
import Image from 'next/image';
import './lista_Eventos.css';
import Link from 'next/link';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

// Remova a tag <link> que não está sendo usada no JavaScript

function Cardeventos({ children }) {
  return (
    <div className="card bg-gray-100">
      {' '}
      {/* Remova a barra após a abertura da tag */}
      <span className="cardInicio">{children}</span>
      <div className="cardFim flex flex-row items-center gap-4">
        <div className="icone ">
          <PencilIcon className="h-6 w-6 text-blue-900" />
          <span className="h-6 w-6 text-blue-900">Editar</span>
        </div>
        <div className="icone">
          <TrashIcon className="h-6 w-6 text-red-900" />
          <span className="h-6 w-6 text-red-900">Excluir</span>
        </div>
      </div>
    </div>
  );
}

export default Cardeventos;
