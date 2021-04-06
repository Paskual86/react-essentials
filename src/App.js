import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador'
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contador></Contador>
        <Formulario></Formulario>
      </header>
     
    </div>
  );
}

export default App;
