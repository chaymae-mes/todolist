import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
        userInput: '',
        items: []
    };
}
onChange(event) {
  this.setState({
      userInput: event.target.value
  });
}
addTodo(event) {
  event.preventDefault();
  this.setState({
      userInput: '',
      items: [...this.state.items, this.state.userInput]
  });
}
deleteTodo(item) {
  // no event 
  // pass the item to indexOf
  const array = this.state.items;
  const index = array.indexOf(item);
  array.splice(index, 1);
  this.setState({
      items: array
  });
}
renderTodos() {
  return this.state.items.map((item) => {
      return (
          <div key={item}>
              {item}  <button onClick={this.deleteTodo.bind(this, item)} >supprimer</button>
          </div>    
      );
  });
}
  
    render() {
      return (
        <div className="App">
          <h1 > ma todo list:</h1>
        
          <form id="to-do-form"  >
            <input type="text"  value={this.state.userInput} placeholder="Enter task" onChange={this.onChange.bind(this)}
             />
            
            <button  onClick={this.addTodo.bind(this)} >Ajouter</button>
          </form>
         
          
          <div className="list-group">
                    {this.renderTodos()}
                </div>
                </div>
            
    
    
    
  );
}
}
export default App ;
