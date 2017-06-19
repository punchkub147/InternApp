import React, { Component } from 'react'
import _ from 'lodash'

class App extends Component {



  render() {
    const { list } = this.props
    const { getKey } = this.props
    var showList = _.map(list, getKey);

    return (
      <div>
      {
        showList.map((list,key) =>
          <li key={key}>{list}</li>
        )
      }
      </div>
    );
  }
}

export default App;
