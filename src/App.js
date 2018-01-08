import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import Layout from './layout/Layout'

import Home from './home/Home';
import Approach from './approach/Approach';
import People from './people/People';
import Contact from './contact/Contact';


class App extends Component {
  render() {
    return (
      <Layout>
        {/**todo might be outof data history**/ }
        <Router  basename={process.env.PUBLIC_URL}>

        {/* <Link to="/">Home</Link>{' '} */}

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/people" component={People}/>
            <Route exact path="/approach" component={Approach}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </Router>
      </Layout>)
    }
  }
   
export default App;