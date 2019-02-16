import React, { Component } from 'react';

import Menu from './template/menu'
import Routes from './main/routes'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <Routes />        
      </div>
    );
  }
}

export default App;
