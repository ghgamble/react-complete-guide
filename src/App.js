import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
      state = {
            persons: [
                  { name: 'Grace', age: 34 },
                  { name: 'Eric', age: 46},
                  { name: 'Eloise', age: 61}
            ]
      }
      switchNameHandler = () => {
            console.log('Was clicked');
      }
      render() {
            return (
                  <div className="App">
                        <h1>Hi, I'm a React App</h1>
                        <p>This is really working!</p>
                        <button onClick={this.switchNameHandler}>Switch Name</button>
                        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                        <Person name={this.state.persons[1].name} age={this.state.persons[1].name}>My Hobbies: Magic</Person>
                        <Person name={this.state.persons[2].name} age={this.state.persons[2].name} />
                  </div>
            );
            // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
      }
}

export default App;
