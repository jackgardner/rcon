import React, { Component } from 'react';
import ApplicationNav from '../containers/ApplicationNav';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ApplicationNav />
        <div className="page-container">
          <div className="page-content">
            <div className="content-wrapper">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

