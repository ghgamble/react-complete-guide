import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
      state = {
            persons: [
                  { name: 'Grace', age: 34 },
                  { name: 'Eric', age: 46},
                  { name: 'Eloise', age: 61}
            ],
            showPersons: false
      }
      switchNameHandler = (newName) => {
            // console.log('Was clicked');
            // DON'T DO THIS: this.state.persons[0].name = 'Grace G';
            this.setState({
                  persons: [
                        { name: newName, age: 34 },
                        { name: 'Eric', age: 47 },
                        { name: 'Eloise', age: 61 }
                  ]
            })
      }
      nameChangedHandler = (event) => {
            this.setState({
                  persons: [
                        { name: 'Grace', age: 34 },
                        { name: event.target.value, age: 47 },
                        { name: 'Eloise', age: 61 }
                  ]
            })
      }
      togglePersonsHandler = () => {
            const doesShow = this.state.showPersons;
            this.setState({showPersons: !doesShow});
      }
      render() {
            const style = {
                  backgroundColor: 'white',
                  font: 'inherit',
                  border: '1px solid blue',
                  padding: '8px',
                  cursor: 'pointer'
            };
            let persons = null;
            if (this.state.showPersons) {
                  persons = (
                        <div>
                              <Person
                                    name={this.state.persons[0].name}
                                    age={this.state.persons[0].age} />
                              <Person
                                    name={this.state.persons[1].name}
                                    age={this.state.persons[1].age}
                                    click={this.switchNameHandler.bind(this, 'Eric!')}
                                    changed={this.nameChangedHandler}>
                                    My Hobbies: Magic</Person>
                              <Person
                                    name={this.state.persons[2].name}
                                    age={this.state.persons[2].age} />
                        </div>
                  );
            }
            return (
                  <div className="App">
                        <h1>Hi, I'm a React App</h1>
                        <p>This is really working!</p>
                        <button
                              style={style}
                              onClick={this.togglePersonsHandler}>Toggle Persons
                        </button>
                        {persons}
                  </div>
            );
      }
}

export default App;
