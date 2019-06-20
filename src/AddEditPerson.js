import React, {Component} from 'react'

class AddEditPerson extends Component {
  constructor () {
    super()
    this.state = {
      nameInput: '',
      ageInput: ''
    }
  }

  render () {
    return (
      <form onSubmit={
        (event) => {
          event.preventDefault()
          this.props.addPerson(
            this.state.nameInput,
            this.state.ageInput)
          this.setState({ nameInput: '', ageInput: '' })
        }}>
        <label>Name: </label>
        <input type='text' id='name' value={this.state.nameInput} onChange={(event) => {
          this.setState({ nameInput: event.target.value })
        }}
        />
        <label>Age: </label>
        <input type='text' id='age' value={this.state.ageInput} onChange={(event) => {
          this.setState({ ageInput: event.target.value })
        }}
        />
        <input type='submit' />
      </form>
    )
  }
} 

export default AddEditPerson