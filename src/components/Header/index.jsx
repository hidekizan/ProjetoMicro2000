import React from 'react';
import './header.css';
import logo from '../imagens/logo-micro2000.png';

function Header() {
  const mostrarConteudo = (pagina) => {
    console.log('Mostrar conteúdo:', pagina);
  };

  const toggleMenu = (menu) => {
    console.log('Abrir menu:', menu);
  };

  return (
    <header className="header-container">
      <section className="section-1">
        <div className="logo">
          <img className="imagem" src={logo} alt="logo" />
        </div>

        <div className="search-bar">
          <div className="input-busca">
            <input
              className="search-key"
              type="text"
              data-input="sugestion"
              placeholder="O que você está buscando?"
              name="palavra_busca"
              tabIndex="1"
              data-tray-tst="busca_palavra"
              required
              autoComplete="off"
            />
          </div>

          <div>
            <button className="bt-search" type="button">Buscar</button>
          </div>
        </div>

        <div className="home-entrar">
          <ul className="link-home">
            <li onClick={() => mostrarConteudo('home')}>Cadastre-se</li>
            <li onClick={() => mostrarConteudo('entrar')}>Entrar</li>
          </ul>
        </div>
      </section>

      <section className="section-2">
        {['Produtos', 'Serviços', 'Assistência técnica'].map((item, i) => (
          <div className="menu-item" key={i}>
            <ul className="ul-section" onClick={() => toggleMenu(`${item.toLowerCase().replace(/ /g, '-')}-menu`)}>
              <li>{item}</li>
            </ul>
          </div>
        ))}
      </section>
    </header>
  );
}

export default Header;