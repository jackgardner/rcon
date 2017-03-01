import React, { Component } from 'react';
import ApiConnection from '../lib/websocket'
import { Navbar, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

export default class ApplicationNav extends Component {
  componentDidMount() {
    const { user } = this.props;
    ApiConnection.init(user.uid);
  }
  render() {
    const { user } = this.props;
    if (!user) return null;

    return <Navbar className="navbar-inverse">
      <Navbar.Header>
        <Navbar.Brand>
          <Navbar.Text><h4>Gamestalker</h4></Navbar.Text>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <Navbar.Text className="navbar-text">
          <p>Hello, {user.email}</p>
        </Navbar.Text>
        <Navbar.Text>
          <span className="text-sm"><Link to="/logout">Logout</Link></span>
        </Navbar.Text>
        <Navbar.Text className="navbar-text">
          <span className="label bg-success">Online</span>
        </Navbar.Text>
      </Nav>
    </Navbar>;
  }
}
