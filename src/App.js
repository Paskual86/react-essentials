import './App.css';
import restaurant from './FoodImage1.jpg'

function GrantedComponent(){
  return <div>Granted component</div>
}

function EveryoneComponent(){
  return <div>Everyone component</div>
}

function App(props) {

  if(props.authorize){
    return GrantedComponent();
  }else{
    return EveryoneComponent();
  }
}

export default App;