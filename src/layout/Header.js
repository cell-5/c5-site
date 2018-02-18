
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


import { Link } from 'react-router-dom';
import $ from 'jquery';

import Logo from '../logo/Logo';

class Header extends Component {

  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    $(window).on('scroll', () => {
      if ($(window).scrollTop()) {
        $('header').addClass('sticky');
      } else {
        $('header').removeClass('sticky');
      }
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <header className="Header">
        <Navbar light expand="md">
          <NavbarBrand light>
          <NavLink tag={Link} to="/" >
          <Logo/>
          </NavLink>

          </NavbarBrand>
          <div className="d-none d-lg-inline headline">sustainable, software product delivery.</div>
          <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink tag={Link} to="/">HOME</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink tag={Link} to="/people" >PEOPLE</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink tag={Link} to="/approach">APPROACH</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink  tag={Link} to="/contact">CONTACT</NavLink>
               </NavItem>
             </Nav>
           </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
