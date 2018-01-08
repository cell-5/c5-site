
import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {

  constructor(props){

    super(props);
    this.state = {
    };

  }

  render() {

    return (
    <div>
      <p>We are always keen to here of new business opportunities, projects, products or chances to collaborate!</p>
      <h2>Contact Us:</h2>
        <p><a href="mailto:peter@cell5.co.uk">Email Us</a></p>
        <p>Tel: 07871 410 885</p>
    </div>);

  }
}

export default Contact;
