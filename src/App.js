import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./cell-5-logo.jpg')} className="App-logo" alt="logo" />
          <h2>Cell 5</h2>
        </header>
          <div className="main">
            <div>
              <p><strong>We are a software delivery team who have lots of experience together,
              and who are keen to stay together looking for interesting and challenging projects
              to deliver to build our portfolio and prove ourselves.</strong></p>
            </div>
            <div>
              <p> Building successful teams is hard, we know from experience and we have built our team
              over multiple product deliveries on a basis of trust, transparency and empowerment.
              We know each other’s weaknesses and strengths and we know we are better together. </p>
            </div>
            <div>
              <p><strong> But we need your help!</strong></p>
              <p><strong>We are finishing up our current contract soon and trying to start our own business
               as a one-stop software delivery shop because we know we are ready for this next step.</strong></p>
            </div>
            <div>
              <p>Do you have the need for a full stack development delivery team who can partner with you
               to get from idea to product? We can handle the full SDLC from inception, through requirements
                and business process design, test driven development, continuous delivery, infrastructure
                planning roll out and support, using agile, XP and devops. We are adaptive and delivery
                focused so not heavy on process prefering to get MVP and demos ASAP and push live products
                with discipline.</p>
            </div>
            <div>To learn more about us read on...</div>
            <div>
              <h2>Our Approach:</h2>
              <p>We adjust our practises to suit the situation. We prioritize getting to production, and getting
            an MVP live, and iterating rapidly ( continuous delivery ). We move fast and creatively but
            we know discipline is required to do this sustainably.
          </p>
              <p> We are great under pressure and continue to deliver, but we also highly value the health
            and well being of our team, so we managime effectively and set expectations to ensure we sustain
             a pace that maximizes delivery.</p>
            </div>
            <div>
              <h2>Our Practises:</h2>
              <p>We usually adopt certain practises, like pair programming, TDD, trunk based development with
              feature toggles, self-verifying production code because we have seen these work. We invest
              in our tool chain (DevOps / CI/CD / IAC) and have architectural preferences ( microservices, cloud)
               because we have seen these things work, but we continually re-evaluate / retrospect and are not
               dogmatic. We know when to pair and when not to, for instance.
          </p>
              <p> We are great under pressure and continue to deliver, but we also highly value the health
            and well being of our team, so we manage our time effectively and set expectations to ensure we sustain
             a pace that maximizes delivery.</p>
            </div>
            <div>
              <h2>What we need to succeed:</h2>
              <p>We do expect some trust, and room to manage our own process, as we believe that this gives us the
               highest chance of success. We are not the kind of developers that sit in the corner quitely
                churning through tickets without asking questions and sometimes we will challenge the status quo,
                 but we know that change takes time, and are not excessive evangelists of our own processes.
                  We do what works for us in partnership with you, and we demonstrate and deliver to prove
                   out new approaches.</p>
              <p>We do have a mixed experience team, some more junior members are empowered and coached as part
              of our delivery. We think this is part of what makes us great value and sustainable, but
              it is another reason why we need a sufficient level of autonomy on managing our own team and
              task allocations to keep everyone motivated and engaged in delivery.</p>
            </div>
            <div>
              <h2>Meet the Team</h2>
              <p><b>Meet Peter.</b> He has 10+ years delivering value as a hands-on developer, architect and team
            coach. Initially trained at Thoughtworks and going on to a career Goldman Sachs building trading systems,
            architectures, and teams, Peter has strong fundamentals as well as years of experience in Java, Javascript,
             Scala, Clojure etc. Peter met the rest of team while working as an independent contractor as an hands on
             architect and XP Coach. <b>Peter helps guide architecture and get the team unstuck. He has lots of recent
             experience automating CI/CD so he helps the team on getting to prod early and often.</b></p>
              <p><b>Meet Harry.</b>  He was a derivatives trader and entrepreneur with a keen interest in finance and
            technology before retraining as a developer. He has delivered with Peter on two client products as a
            full stack developer working on Java, Clojure and Javascript. He is currently especially keen on ReactJs
            and front end development and builds websites in his free time. In our last project he mastered the end
            to end system and was who the team called on to debug issues or get things working, he puts in extra
            hours to further his passion. <b>Harry is the team hacker,  debugger, fixer. He is often the first to blaze
             a path into the unknown,  and he knows how to get things done and keep things simple.</b></p>
            </div>
            <div>
              <h2>Recent Tech Stack:</h2>
              <p>The rate of change in our industry is phenomenal. Knowing a library, language, tool or technique,
                 is, we think, secondary, to having a passionate team who learn quickly and know how to deliver,
                  and who work great together already.</p>
              <p>Having said that the reality is people still look for specific experience, and it does
                    indeed take a few weeks or months to become proficient in something new. So here is some
                     of our current technology knowledge:</p>
              <p><b>Back End:</b> Java, Clojure, Ruby, Scala. Spring Boot, Ratpack, Vertx</p>
              <p><b>Front End:</b>  Node, Javascript, ES6+, ReactJs/Redux, Angular 1-4+, Dojo, ExtJs.</p>
              <p><b>DevOps/Cloud:</b>  Databases ( Postgres, DynamoDB, MongoDB), AWS, terraform, jenkins,
                      groovy, bash, perl, python, packer, Elastic Search, Kafka, Docker, docker-compose.  </p>
            </div>
            <div>
              <h2>What we are looking for? </h2>
              <ul>
                <li>Interesting product development challenges we can own and deliver end to end.</li>
                <li>To build longer term relationships and to establish our own portfolio of work
                  and reputation as a team and a fledgling consultancy.</li>
                <li>3-12 month contract roles to deliver products at competitive rates</li>
              </ul>
            </div>
            <div>
              <h2>How to contact us?</h2>
                <p><a href="mailto:peter@cell5.co.uk">peter@cell5.co.uk</a></p>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
