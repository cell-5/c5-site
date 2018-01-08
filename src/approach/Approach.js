
import React, { Component } from 'react';
import './Approach.css';


class Approach extends Component {

  constructor(props) {

    super(props);
    this.state = {
    };

  }

  render() {

    return (
      <div>
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
        <h2>Want to meet the team?</h2>
        <p><a href=".\people"/>The team</p>
        <h2> Contact us?</h2>
        <p><a href=".\contact"/>Contacts</p>
      </div>
      </div>
      );
  }
}

export default Approach;
