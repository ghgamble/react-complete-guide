import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
      constructor(props) {
            super(props);
            console.log('[App.js] Inside Constructor', props);
            this.state = {
                  persons: [
                        { id: 'oeoe', name: 'Grace', age: 34 },
                        { id: 'aple', name: 'Eric', age: 46},
                        { id: 'bioe', name: 'Eloise', age: 61}
                  ],
                  showPersons: false
            }
      }
      componentWillMount() {
            console.log('[App.js] Inside componentWillMount');
      }
      componentDidMount() {
            console.log('[App.js] inside componentDidMount');
      }
      // shouldComponentUpdate(nextProps, nextState) {
      //       console.log('UPDATE App.js Inside shouldComponentUpdate', nextProps, nextState);
      //       // return true;
      //       return nextState.persons !== this.state.persons ||
      //             nextState.showPersons !== this.state.showPersons;
      // }
      componentWillUpdate(nextProps, nextState) {
            console.log('UPDATE App.js inside componentWillUpdate', nextProps, nextState);
      }
      componentDidUpdate() {
            console.log('UPDATE App.js inside componentDidUpdate');
      }
      state = {
            persons: [
                  { id: 'oeoe', name: 'Grace', age: 34 },
                  { id: 'aple', name: 'Eric', age: 46},
                  { id: 'bioe', name: 'Eloise', age: 61}
            ],
            showPersons: false
      }
      deletePersonHandler = (personIndex) => {
            // const persons = this.state.persons.slice();
            const persons = [...this.state.persons];
            persons.splice(personIndex, 1);
            this.setState({persons: persons});
      }
      nameChangedHandler = (event, id) => {
            const personIndex = this.state.persons.findIndex(p => {
                  return p.id === id;
            });
            const person = {
                  ...this.state.persons[personIndex]
            };
            // const person = Object.assign({}, this.state.persons[personIndex]);
            person.name = event.target.value;
            const persons = [...this.state.persons];
            persons[personIndex] = person;
            this.setState({persons: persons})
      }
      togglePersonsHandler = () => {
            const doesShow = this.state.showPersons;
            this.setState({showPersons: !doesShow});
      }
      render() {
            console.log('[App.js] inside Render');
            let persons = null;
            if (this.state.showPersons) {
                  persons =
                        <Persons
                              persons={this.state.persons}
                              clicked={this.deletePersonHandler}
                              changed={this.nameChangedHandler}
                        />
            }

            return (
                  <Aux>
                        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                        <Cockpit
                              appTitle={this.props.title}
                              showPersons={this.state.showPersons}
                              persons={this.state.persons}
                              clicked={this.togglePersonsHandler}
                        />
                        {persons}
                  </Aux>
            );
      }
}

export default withClass(App, classes.App);
