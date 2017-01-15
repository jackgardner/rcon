import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="page-container">
        <div className="page-content">
          <div className="content-wrapper">
            <span>Hello, {user.displayName}</span>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
