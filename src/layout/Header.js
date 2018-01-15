
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

import Logo from '../logo/Logo';  
    
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
      <header className="Header">
        <Navbar light expand="md">
          <NavbarBrand light href="/">
           <Logo/>
          </NavbarBrand>
          <div className="d-none d-lg-inline headline">sustainable, software product delivery.</div>
          <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink href="/people">PEOPLE</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/approach">APPROACH</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/contact">CONTACT</NavLink>
               </NavItem>
             </Nav>
           </Collapse>
        </Navbar>
      </header>


      // <div class="Header">
      //   <Navbar dark expand="md">
      //     <NavbarBrand dark href="/">
            
      //     </NavbarBrand>
   
      //   </Navbar>
      // </div>
    );
  }
}

export default Header;
