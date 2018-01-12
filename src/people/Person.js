
import React, { Component } from 'react';
import './Person.css';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <div className="Person">
                <div className="Header">
                    <div className="Name">{this.props.name}</div>
                    <div className="icons">
                        <div className="IconLink">
                            <a href={this.props.linkedIn}>
                                <img src={require('./linkedin.svg')} alt='a' />
                            </a>
                        </div>
                        <div className="IconLink">
                            <a href={this.props.twitter}><img src={require('./twitter.svg')} alt='b' /></a>
                        </div>
                        <div className="IconLink">
                            <a href={this.props.github}><img src={require('./github.svg')} alt='c' /></a>
                        </div>
                        <div className="IconLink">
                            <a href={'mailto:' + this.props.email}><img src={require('./gmail.svg')} alt='c' /></a>
                        </div>
                    </div>
                    <div className="Title"> {this.props.title}</div>
                </div>
                <div className="Body">
                    <div className="Blurb">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Person;
