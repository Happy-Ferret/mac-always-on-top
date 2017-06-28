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
        <div className="todo">
          <h2>Todo</h2>
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
      </div>
    );
  }
}

export default App;
