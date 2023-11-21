import React from 'react';
import './lista_Eventos.css';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function Pesquisa() {
  return (
    <div className="pesquisar relative">
      <input
        className="input pr-10" // Adiciona um padding à direita para o ícone
        type="search"
        placeholder="Pesquisar Eventos"
        required
      />
      <div className="absolute inset-y-0 right-5 flex items-center pr-3 pointer-events-none">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-300" />
      </div>
    </div>
  );
}

export default Pesquisa;
