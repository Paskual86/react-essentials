import './App.css';
import restaurant from './FoodImage1.jpg'
function Header(props){
  return (
    <header>
      <h1>La cocina de {props.name}</h1>
    </header>
  )
}

function Main(props){
  return (
    <section>
      <p>Bienvenidos al {props.adjetives} lugar de comida saludable</p>
      <img src={restaurant} alt="restaurant"></img>
      { /*<img src="http://github.com/Paskual86.png" alt="restaurant"></img>*/}
      <ul style={{textAlign:"Left"}}>
        {props.dishes.map( (dish)=> (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props){
  return (
    <footer>
      <h3>Derechos {props.year}</h3>
    </footer>
  )
}

const dishes = [
  "Macaroni and cheese",
  "Salmon",
  "Tofu with vegetables"
];

//dishes.map((dish) => console.log(dish));
const dishObjects = dishes.map((dish, i) => ({id:i, title:dish}));

function App() {
  return (
    <div className="App">
      <Header name="Pablo"/>
      <Main adjetives="Mejor" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
