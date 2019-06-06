import React, { Component } from 'react';
import People from './People';
import AddEditPerson from './AddEditPerson';

class App extends Component {
  // Classes must have constructors if initial variables are to be set automatically
  constructor () {
    super();
    this.state = {
      people: [
        { name: 'Alex', age: 21 },
        { name: 'Ben', age: 18 },
        { name: 'Abe', age: 31 }
      ]
    };
  }

  deletePerson (index) {
    const { people } = this.state;
    people.splice(index, 1);
    this.setState({ people });
  }

  addPerson = (name, age) => {
    const { people } = this.state;

    const person = {
      name: name,
      age: age
    };

    people.push(person);
    this.setState({ people })
  }

  // Method to render a div countaining the name and age of the youngest person in the state's people array
  getYoungest () {
    let people = this.state.people;
    let youngest = people[0];
    for (let i = 0; i < people.length; i++) {
      if (people[i].age < youngest.age) {
        youngest = people[i];
      }
    }
    return (
      <div>
        <h1>{youngest.name}</h1>
        <p>{youngest.age}</p>
      </div>
    );
  }

  render () {
    return <div>
      <h1>{this.props.greeting}</h1>
      <h2>Add Person: </h2>
      <div>
        <AddEditPerson addPerson={this.addPerson.bind(this)} />
      </div>
      <div className="people">
        <People 
          people={this.state.people} 
          deletePerson={this.deletePerson.bind(this)} 
        />
      </div>
    </div>
  }
}

export default App;
