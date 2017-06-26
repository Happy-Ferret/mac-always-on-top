import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos : [
        {id: 1, name: "Learn Something", isCompleted: true},
        {id: 2, name: "Milk", isCompleted: false},
        {id: 3, name: "Tada", isCompleted: false}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo</h2>
        </div>
        <form action="">
          <input type="text"/>
        </form>
        <ul className="todo-list">
          {this.state.todos.map(todo =>
            <li key={todo.id}>
              <input type="checkbox" defaultChecked={todo.isCompleted} />{todo.name}
            </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
