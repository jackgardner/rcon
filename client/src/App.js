import React, { Component } from 'react';
import ApplicationNav from './components/ApplicationNav';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <ApplicationNav user={user} />
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
