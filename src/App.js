import './App.css';
import ListadoNombres from './components/ListadoNombres'
import Welcome from './components/Welcome';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
     <ListadoNombres></ListadoNombres>
     <Welcome name="Pablo"></Welcome>
     <Welcome name="Noe"></Welcome>
     <Card imagen="https://picsum.photos/id/237/200/300" titulo="Primer Imagen" texto="Imagen Predeterminada"></Card>
    </div>
  );
}

export default App;
