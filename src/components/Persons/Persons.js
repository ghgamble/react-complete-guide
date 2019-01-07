import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
      constructor(props) {
            super(props);
            console.log('[Persons.js] Inside Constructor', props);
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
            console.log('[Persons.js] Inside componentWillMount');
      }
      componentDidMount() {
            console.log('[Persons.js] inside componentDidMount');
      }
      render() {
            console.log('[Persons.js] inside render');
            return this.props.persons.map((person, index) => {
                  return <Person
                        click={() => this.props.clicked(index)}
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.props.changed(event, person.id)} />
            });
      }
};

export default Persons;
