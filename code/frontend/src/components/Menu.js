import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Página Inicial</Link>
        </li>
        <li>
          <Link to="/projeto-pesquisa">Projeto de Pesquisa</Link>
        </li>
        <li>
          <Link to="/uso-recursos">Uso dos Recursos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
