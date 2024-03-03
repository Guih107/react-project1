import React from "react";
import '../styles/Header.css';

function Header() {
  return (
    <div className="headerContainner">
      <header>
        <h1>Recrear</h1>
        <div>
          <label htmlFor="">
            <button className="buttonHeader">
              Login
            </button>
          </label>
          <label htmlFor="">
            <button className="buttonHeader">
              Cadastro
            </button>
          </label>
        </div>
      </header>
    </div>
    
  )
};

export default Header;