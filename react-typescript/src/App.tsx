import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';


class App extends Component {
  
  // Se ejecuta antes de cargar el componente
  componentWillMount() {
    console.log('Almost there ...');
  }

  // Se ejecuta despues de cargar el componente
  componentDidMount() {
    console.log('Finally .... Hell');
  }

  render(){
    //let firstValue: string = 'Manny';
    //let firstValue: number = 34;
    //let firstValue: boolean = true;
    //let firstValue: number[] = [1,2,3,4];
    let firstValue: Array<string> = ['1','2','3','Pablo'];
    let aTuple: [string, number] = ['Manny', 34];
    //Enum
    enum Codes {first = 1, second=2};
    // Any
    let anyObject: any = 'Pablo';

    // Esta es una declaracion de una funcion que devuelve void
    const warning = () : void => {
        console.log("Warning");
    }

    warning();
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              The value {firstValue} is of {typeof firstValue} type!
            </p>
            <p>
              The value tupple 0 {aTuple[0]} is of {typeof aTuple[0]} type!
            </p>
            <p>
              The value tupple 1 {aTuple[1]} is of {typeof aTuple[1]} type!
            </p>
            <p>
              The value any {anyObject} is of {typeof anyObject} type!
            </p>
            <Message></Message>
          </header>
        </div>
      );
  }
}

export default App;
