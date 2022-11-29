import logo from './logo.svg';
import './App.css';
import ComponenteGenericoUm from './Components/ComponenteGenericoUm.js' 
import Saudacao from './Components/Saudacao';

import ContadorDeClicks from './Components/ContadorDeClicks'

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World,</p>
        <p>Iniciando um Programa React</p>
      <ComponenteGenericoUm />
      <Saudacao nome= "Arthur"/>
      <ContadorDeClicks />
      
      </header>
      <body>
    
      </body>
    </div>
  );
}

export default App;
