import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <Person name="Grace" age="34" />
            <Person name="Eric" age="46">My Hobbies: Magic</Person>
            <Person name="Eloise" age="61" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
