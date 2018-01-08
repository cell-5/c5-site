
import React, { Component } from 'react';
import './Home.css';
class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
       <div className="main">
            <div>
              <p><strong>We are a software delivery team who have lots of experience together,
              and who are keen to stay together looking for interesting and challenging projects
              to deliver to build our portfolio and prove ourselves.</strong></p>
            </div>
            <div>
              <p><strong>We work across domains, technologies, and scales of organizations. Having delivered in the largest banks and investment banks in the world,
                as well as early stage start-ups we like the variety of the work and can apply the same principles of continuous delivery, devops and XP to any project.
                </strong></p>
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
            
          </div>
       );
  }
}

export default Home;
