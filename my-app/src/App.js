import { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Counter from './components/Counter';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      demo: "thanks",
  };
  this.buttonClickHandler = this.buttonClickHandler.bind(this);
}
buttonClickHandler () {
  console.log(this.state);
};
  render() {
    return(
    <div className="App">
     <Greet name = "Alina" age = "21" />
     <button type="button" onClick = {this.buttonClickHandler}> Click me </button>
     <Counter/>
    </div>
    );
}
}

export default App;
