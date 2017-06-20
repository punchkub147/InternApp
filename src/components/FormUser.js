import React, { Component } from 'react'
import { Form, Text } from 'react-form'
import * as conn from '../firebase'

class App extends Component {

  state = {
    name: "",
    description: "",
    redirectURL: "",
    read: true,
    write: false
  }

  handleChangeName = (event) => {
    const name = event.target.value
    this.setState({
      name: name,
    });
  }
  handleChangeDescription = (event) => {
    const description = event.target.value
    this.setState({
      description: event.target.value,
    });
  }
  handleChangeURL = (event) => {
    const redirectURL = event.target.value
    this.setState({
      redirectURL: event.target.value,
    });
  }

  submitData = (e) => {
    e.preventDefault()
    conn.setUser(this.state)
    this.setState({
      name: "",
      description: "",
      redirectURL: "",
    });
    this.props.onUpdate();
  }

  render() {
    //console.log(this.state)
    return (
      <div>
        <form onSubmit={this.submitData}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          </label>
          <label>
            description:
            <input type="text" value={this.state.description} onChange={this.handleChangeDescription} />
          </label>
          <label>
            redirectURL:
            <input type="text" value={this.state.redirectURL} onChange={this.handleChangeURL} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
