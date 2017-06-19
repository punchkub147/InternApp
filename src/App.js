import React, { Component } from 'react'
import './App.css'

import Router from './router'
import * as conn from './firebase'
import ListItem from './components/ListItem'

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
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
        <ListItem list={users} getKey="id"/>
      </div>
    );
  }

}

export default App;
