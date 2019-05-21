import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  // Appel de la méthode effectuant la requête Ajax
  componentDidMount() {
    this.getTodos()
      .then(res => res.json())
      .then(data => {
        this.setState({
          todos: data
        })
      })
  }

  // méthode effectuant une requpete AJAX 
  // Fausse API REST en ligne --> https://jsonplaceholder.typicode.com/
  getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos');
  }
  
  render() {
    console.log(this.state.todos);
     
    return ( 
      <div className="App">
        <header className="App-header">
        Le routage
        </header>
      </div>
     );
  }
}
 
export default App;

