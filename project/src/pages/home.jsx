import React from "react";
import Header from "../components/header";

function Home() {
  return (
   <>
    <Header />
    <div>
      <label htmlFor="">
        <button>Infantil 3 á 6 anos</button>
      </label>
      <label htmlFor="">
        <button>Infantil 7 á 12 anos</button>
      </label>
      <label htmlFor="">
        <button>Adolescentes</button>
      </label>
      <label htmlFor="">
        <button>Adultos</button>
      </label>
    </div>
  </>
  );
}

export default Home;