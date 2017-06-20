import React, { Component } from 'react'
import './App.css'

import Router from './router'
import * as conn from './firebase'
import ListItem from './components/ListItem'
import FormUser from './components/FormUser'

class App extends Component {

  state = {
    users: {}
  }

  componentDidMount() {
    this.setStateUsers()
  }

  handleDelete = (id) => {
    conn.deleteList(id)
    this.setStateUsers()
  }

  handleUpdate = (id,value) => {
    conn.updateList(id,value)
    this.setStateUsers()
  }

  handleAdd = () => {
    var _self = this
    this.setStateUsers()
  }

  setStateUsers(){
    var _self = this
    conn.getUsers().then(function(result) {
      _self.setState({
        users: result
      })
    })
  }

  render() {
    const { users } = this.state
    
    return (
      <div className="App">
        <Router/>
        <ListItem list={users} getKey="name" onDelete={this.handleDelete} onUpdate={this.handleUpdate} />
        <FormUser onUpdate={this.handleAdd}/>
      </div>
    )
  }

}

export default App;
