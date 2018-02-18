
import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <footer className="footer">
      <p>Copyright {new Date().getFullYear()}</p>
    </footer>);
  }
}

export default Footer;
