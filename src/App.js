import './App.css';
import ListadoNombres from './components/ListadoNombres'
import Welcome from './components/Welcome';
import Card from './components/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Link to="/">Base</Link>
      <Link to="/inicio">Card</Link>
      <Link to="/listado">Listado de Nombres</Link>

      <Switch>
        <Route path="/inicio">
          <Welcome name="Pablo"></Welcome>
          <Welcome name="Noe"></Welcome>
        </Route>
        <Route path="/listado">
          <ListadoNombres></ListadoNombres>
        </Route>
        <Route path="/">
          <Card imagen="https://picsum.photos/id/237/200/300" titulo="Primer Imagen" texto="Imagen Predeterminada"></Card>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
