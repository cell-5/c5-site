
import React, { Component } from 'react';
import './People.css';
import Person from './Person';


class People extends Component {

  constructor(props){

    super(props);
    this.state = {
    };

  }

  render() {

    return (
      <div className="People">
        
        <h2>Meet the team:</h2>

        <Person 
          name="Peter" 
          title="Full-stack developer specializing in cloud architectures and devops." 
          twitter="https://twitter.com/peterabarry" 
          linkedIn="https://www.linkedin.com/in/peterbarry/" 
          github="https://github.com/peterabarry" 
          email="peter@cell5.co.uk"
          >
              <p>Peter has 10+ years delivering value as a hands-on developer, architect and team
                coach. Initially trained at Thoughtworks and going on to a career Goldman Sachs building trading systems,
                architectures, and teams, Peter has strong fundamentals as well as years of experience in Java, Javascript,
                Scala, Clojure etc. Peter met the rest of team while working as an independent contractor as an hands on
                architect and XP Coach.</p> 
                
              <p><b>Peter helps guide architecture and get the team unstuck. He has lots of recent
              experience automating CI/CD so he helps the team on getting to prod early and often.
              </b></p>
        </Person>

        <Person 
          name="Harry" 
          title="Full-stack developer specializing in front end applications." 
          twitter="harrys twitter coming soon" 
          linkedIn="harrys linked in" 
          github="harrys github" 
          email="harry@cell5.co.uk"
          >
              <p>Harry was a derivatives trader and entrepreneur with a keen interest in finance and technology before 
                retraining as a developer. He has delivered with Peter on two client products as a full stack developer 
                working on Java, Clojure and Javascript. He is currently especially keen on ReactJs
                and front end development and builds websites in his free time. In our last project he mastered the end
                to end system and was who the team called on to debug issues or get things working, he puts in extra
                hours to further his passion.
                </p> 
                <p>
                  <b>Harry is the team hacker,  debugger, fixer. He is often the first to blaze
                  a path into the unknown,  and he knows how to get things done and keep things simple.</b>
               </p>
        </Person>
        </div>);
  }
}

export default People;
