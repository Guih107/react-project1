import React from "react";
import Header from "../components/header";

function Home() {
  return (
   <>
    <Header />
    <img src="https://pedagogiaaopedaletra.com/wp-content/uploads/2011/09/recreacaoejogos.jpg" alt="Criança brincando" />
    <nav>
      <label htmlFor="">
        <button
          onClick={() => {
            console.log("Clicou");
          }}
        >
          Infantil 3 á 6 anos
          </button>
      </label>
      <label htmlFor="">
        <button
          onClick={() => {
            console.log("Clicou");
          }}
        >
          Infantil 7 á 12 anos
        </button>
      </label>
      <label htmlFor="">
        <button>Adolescentes</button>
      </label>
      <label htmlFor="">
        <button>Adultos</button>
      </label>
    </nav>
  </>
  );
}

export default Home;