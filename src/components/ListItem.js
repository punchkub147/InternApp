import React, { Component } from 'react'
import * as conn from '../firebase'
import _ from 'lodash'

class App extends Component {

  state = {
    edit: false,
    id: "",
    value: ""
  }


  deleteList = (id) => {
    this.props.onDelete(id);
  }
  editList = (id,value) => {
    this.setState({
      edit: true,
      id: id,
      value: value
    })
  }
  updateList = () => {
    console.log("eeeeeee ",this.state.id,this.state.value)
    this.props.onUpdate(this.state.id,this.state.value);

    this.setState({
      edit: false,
      id: "",
      value: ""
    })
  }

  handleChangeValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { list } = this.props
    const { getKey } = this.props
    const { edit } = this.state
    const { value } = this.state
    //console.log("length " ,Object.keys(list).length)
    // if (Object.keys(list).length === 0) return <div></div>
    //console.log("list ",list)

    return (
      <div>
      {
        _.map(list, (value,key) => {
          return  <li key={key}>
                    {value[getKey]} 
                    <button onClick={() => {this.editList(key,value[getKey])}}> Edit </button>
                    <button onClick={() => {this.deleteList(key)}}> X </button>
                  </li>
        })
      }
      {
        edit ? (
          <form onSubmit={this.updateList}>
            <label htmlFor="">
              Edit : 
              <input value={value} onChange={this.handleChangeValue}/>
            </label>
            <input type="submit" value="Update"/>
          </form>
        ) : ""
      }
      </div>
    );
  }
}

export default App;
