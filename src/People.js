import React, { Component } from 'react'
import Person from './Person'

class People extends Component {
  render () {
    let people = this.props.people
    return people.map((person, index) => {
      return (
        <div className='person'>
          <Person
            index={index}
            person={person}
            deletePerson={this.props.deletePerson}
          />
        </div>
      )
    })
  }
}

export default People
