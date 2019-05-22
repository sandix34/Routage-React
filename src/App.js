import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';


class App extends Component {
  state = {
    todos: []
  }

  // Appel de la méthode effectuant la requête Ajax
  componentDidMount() {
    this.getTodos()
      .then(res => res.json()) // convertie la réponse en json
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
    //console.log(this.state.todos);
     
    return ( 
      <div className="App">
        <header className="App-header">
        Le routage
        </header>
        <Router>
          {/*routage dans le cas d'un component qui a besoin d'une prop*/}
          <Route path="/todos" render={() => (
            <Todos todos={ this.state.todos } />
          )} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Router>
        
      </div>
     );
  }
}
 
export default App;

