import React, { Component } from 'react';

class App extends Component {
  // Classes must have constructors if initial variables are to be set automatically
  constructor () {
    super();
    this.state = {
      nameInput: '',
      ageInput: '',
      people: [
        { name: 'Alex', age: 21 },
        { name: 'Ben', age: 18 },
        { name: 'Abe', age: 31 }
      ]
    };
  }

  // Class based method to render each person's name and age
  getPeople () {
    let people = this.state.people;
    return people.map(function (person) {
      return (
        <div key={person.name}>
          <h2>{person.name}</h2>
          <p>{person.age}</p>
        </div>
      );
    });
  }

  renderForm() {
    return (
      <form onSubmit={this.addPerson}>
        <label>Name:  </label>
        <input type="text" id="name" value={this.state.nameInput }onChange={(event) => {this.setState({nameInput: event.target.value});}}></input>
        <label>Age:  </label>
        <input type="text" id="age" value={this.state.ageInput} onChange={(event) => {this.setState({ageInput: event.target.value});}}></input>
        <input type="submit" />
      </form>
    );
  }

  addPerson = (event) => {
    event.preventDefault();

    const { people } = this.state;  // non-destructuring way of doing the same thing: const people = this.state.people;
   
    const person = {
      name: this.state.nameInput,
      age: this.state.ageInput,
    };

    people.push(person);
    this.setState({people, nameInput: '', ageInput: ''});
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
    return (
    <div>
      <h1>{this.props.greeting}</h1>
      <h2>Add Person</h2>
      <div>
        {this.renderForm()}
        {this.getPeople()}
      </div>
    </div>);
  }
}

export default App;
