
import React, { Component } from 'react';
import './Logo.css';
class Logo extends Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="Logo">
              <div className="img-bg">
                <img src={require('./cell5-single.svg')} alt="logo" />
              </div>
              <div className="Cell">
                <span className="C">C</span>
                <span className="E">E</span>
                <span className="L1">L</span>
                <span className="L2">L</span>
                <span className="five">5</span>
              </div>
        
        </div>   
       );
  }
}

export default Logo;
