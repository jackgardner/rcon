import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import ApiConnection from '../lib/websocket'

export default class ApplicationNav extends Component {

  componentDidMount() {
    const { user } = this.props;
    ApiConnection.init(user.uid);
  }

  render () {
    const { user } = this.props;
    console.log(user);
    return <Navbar fluid className="header-highlight">
        <Navbar.Header>
          <Navbar.Brand>Gamestalker</Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <p className="navbar-text">
            <span>Hello, {user.email}</span>
            <span className="text-sm"><Link to="/logout">Logout</Link></span>
          </p>
          <p className="navbar-text">
            <span className="label bg-success">Online</span>
          </p>
          {/* <NavDropdown eventKey={2} title="Hello" id="menu">
            <MenuItem>Hello, {user.email}</MenuItem>
          </NavDropdown> */}
        </Nav>

    </Navbar>;
    //return <div className="navbar navbar-default header-highlight">
    //  <div className="navbar-header">
    //    <a className="navbar-brand">

    //    </a>
    //  </div>
    //  <div className="navbar-collapse collapse" id="navbar-mobile">
    //    <ul className="nav navbar-nav">
    //      <li><a className="sidebar-control sidebar-main-toggle hidden-xs legitRipple"><i className="icon-paragraph-justify3"></i></a></li>

    //    </ul>

    //    <div className="navbar-right">
    //      <p className="navbar-text">{user.email}</p>
    //      <p className="navbar-text"><span className="label bg-success">Online</span></p>
    //    </div>
    //  </div>
    //</div>
  }
}
