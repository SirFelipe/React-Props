import React from 'react';
import logo from './logo.svg';
import './App.css';
import Produto from "./Produto.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Produto nome="Mouse" valor="45,00" cor={["Branco", "Preto", "Vermelho"]} envio={["Correios ", "Sedex ", "Ricardo Express "]}></Produto>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
