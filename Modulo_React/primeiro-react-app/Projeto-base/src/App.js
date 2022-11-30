import logo from './logo.svg';
import './App.css';
import ComponenteGenericoUm from './Components/ComponenteGenericoUm.js' 
import Saudacao from './Components/Saudacao';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import ContadorDeCliques from './Components/ContadorDeCliques';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <ul>
          <li>
            <Link to="/saudacao">Saudacao</Link>
          </li>
          <li>
            <Link to="/componentegenerico">Componente Genérico Um</Link>
          </li>
          <li>
            <Link to="/contadordecliques">Contador de Cliques</Link>
          </li>
        </ul>
      <Routes>
        <Route path="/"> </Route>
        <Route path="/saudacao" element={<Saudacao nome="Arthur" />} > </Route>
        <Route path="/componentegenerico" element={<ComponenteGenericoUm />} > </Route>
        <Route path="/contadordecliques" element={<ContadorDeCliques />} > </Route>
      </Routes>
      </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World,</p>
        <p>Iniciando um Programa React</p>
      </header>
      <body>
    
      </body>
    </div>
  );
}

export default App;
