
import React, { Component } from 'react';
import './Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
    
class Header extends Component {

  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    //todo in theory media queries might 
    //collapse it if the screen is mobile etc.
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Header">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">   
            <div className="Logo">
              <img src={require('./cell5-logo-2.svg')} alt="logo" />
            </div>   
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/people">People</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/approach">Approach</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
