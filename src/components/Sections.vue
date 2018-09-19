<template>
    <div>
        <div v-for="section of sections">
            <section :id="section.id" :class="section.style">
                <div class="solution-wrapper row align-items-center">
                    <div :class="section.class">
                        <figure>
                            <img :src="section.img" />
                        </figure>
                    </div>
                    <div class="body-wrapper col-lg-7">
                        <div class="solution-text">
                            <h3>{{ section.title }}</h3>
                            <span v-html="section.highlightsubtext"></span>
                            <ul>
                                <li v-for="highlight of section.highlights">
                                    <span v-html="highlight.text"></span>
                                </li>
                            </ul>
                            <span v-html="section.offerssubtext"></span>
                            <ul>
                                <li v-for="offer of section.offers">
                                    <span v-html="offer.text"></span>
                                </li>
                            </ul>
                            <span v-html="section.starssubtext"></span>
                            <ul>
                                <li v-for="star of section.stars">
                                    <span v-html="star.text"></span>
                                </li>
                            </ul>
                            <span v-html="section.lead"></span>
                        <div id="cta" class="text-center">
                            <router-link to="portfolio" class="learn-more-btn call-to-action">View our Portfolio</router-link>
                        </div>
                        </div>
                    </div>
                    <div v-if="section.even" class="icon-wrapper col-lg-5 d-none d-lg-flex">
                        <figure>
                            <img :src="section.img" :alt="section.title" />
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<style>
.solution {
    position: relative;
    margin: 0
}

.solution-wrapper {
    padding: 5rem 1rem;
    max-width: 90%;
    margin: 0 auto !important;
}

@media (min-width: 3840px) {
  .solution-wrapper {
    max-width: 3000px;
  }
}

@media (min-width: 992px) {
    .solution-wrapper {
        height: 100vh
    }
}

.odd {
    background-color: #2c302e
}

.odd:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3.13rem;
    width: 50%;
    border-left: 3.13rem solid transparent;
    border-bottom: 3.13rem solid #fefffe
}

.odd p,
.odd h3,
.odd li {
    color: #fefffe
}

.even {
    background-color: #fefffe
}

.even:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3.13rem;
    width: 50%;
    border-left: 3.13rem solid transparent;
    border-bottom: 3.13rem solid #2c302e
}

.even p,
.even h3,
.even li {
    color: #2c302e
}

#start-up:after {
    border-bottom: 3.13rem solid #d64933;
}

.solution div.icon-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.solution .body-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.solution .body-wrapper div.solution-text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.solution figure {
    margin: 0 auto 1rem;
    text-align: center
}

.solution figure img {
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    margin: 0 auto
}

@media (min-width: 1200px) {
    .solution figure img {
        width: 40vmin;
        height: 40vmin
    }
}

@media (min-width: 992px) {
    .solution figure img {
        width: 40vmin;
        height: 40vmin
    }
}

@media (min-width: 992px) and (max-width: 1199px) {
    .solution figure img {
        width: 40vmin;
        height: 40vmin
    }
}

@media (max-width: 991px) {
    .solution figure img {
        width: 40vmin;
        height: 40vmin
    }
}

.solution figure figcaption {
    color: #2c302e;
    font-size: 3.2vmax;
    font-weight: bold
}

.solution h3 {
    font-size: 2rem;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

@media (max-width: 767px) and (orientation: portrait) {
    .solution h3 {
        font-size: 1.5rem;
        text-align: center;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
}

@media (max-width: 767px) and (orientation: landscape) {
    .solution h3 {
        font-size: 1.5rem;
        text-align: center;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
}

@media (min-width: 768px) and (max-width: 991px) and (orientation: portrait) {
    .solution h3 {
        font-size: 1.5rem;
        text-align: center;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
}

@media (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
    .solution h3 {
        font-size: 1.5rem;
        text-align: center;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
}

.solution p {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    line-height: 150%
}

@media (min-width: 481px) {
    .solution ul {
        text-indent: 1rem
    }
}

.solution ul li {
    font-family: "Montserrat", sans-serif;
    padding: 0.25rem 0
}

@media (max-width: 767px) and (orientation: portrait) {
    .solution ul li {
        font-size: 0.9rem;
        position: relative;
        padding-left: 1.5em
    }
}

@media (max-width: 767px) and (orientation: portrait) {
    .solution ul li i:first-of-type {
        position: absolute;
        left: 0;
        top: 7px
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.solution a.learn-more-btn:link,
.solution a.learn-more-btn:visited {
display: inline-block;
background-color: #34b95b;
color: white;
border-radius: 8px;
padding: 1rem 3rem;
margin-top: 0.5rem;
text-decoration: none
}

.solution a.learn-more-btn:hover {
background-color: #269f49;
color: white
}

.solution a.learn-more-btn:active {
background-color: #228f42;
color: white
}

</style>
<script>
import MobileImg from '../assets/img/mobile-dark-gradient.svg'
import WebImg from '../assets/img/web-light-gradient.svg'
import CloudImg from '../assets/img/cloud-light-gradient.svg'
import StartUpImg from '../assets/img/start-up-dark-gradient.svg'
export default {
  data () {
    return {
      sections: [
        {
          id: 'web',
          title: 'web',
          class: 'icon-wrapper col-lg-5',
          style: 'solution odd',
          even: false,
          img: WebImg,
          highlights: [
            {text: '<i class="fas fa-check text-highlight"></i> website conception to deployment'},
            {text: '<i class="fas fa-check text-highlight"></i> mobile device compatibility'},
            {text: '<i class="fas fa-check text-highlight"></i> web analytics &amp; on-site s.e.o.'},
            {text: '<i class="fas fa-check text-highlight"></i> completely collaborative approach'}
          ],
          highlightsubtext: '<p><strong>Our design &amp; build package includes:</strong></p>',
          stars: [
            // {text: '<i class="fas fa-star text-highlight-star"></i>  Basic Webmaster training<strong> - <span class="text-orange">£50&nbsp;once</span></strong>'},
            {text: '<i class="fas fa-star text-highlight-star"></i>  Monthly upkeep'},
            {text: '<i class="fas fa-star text-highlight-star"></i>  Optimized hosting'}
          ],
          starssubtext: '<p><strong>This package can be extended with these <em>optional extras:</em></strong></p>',
          lead: '<p class="section-lead-in"><strong>We can tailor the package based on your requirements,  <a href="#contact-us" class="contact-us-link">call us</a> to discuss.</strong></p>'
        },
        {
          id: 'mobile',
          title: 'mobile',
          class: 'icon-wrapper col d-block d-lg-none',
          style: 'solution even',
          even: true,
          img: MobileImg,
          highlights: [
              {text: '<i class="fas fa-check text-highlight"></i>Strategy Workshop'},
              {text: '<i class="fas fa-check text-highlight"></i>Competition Analysis'},
              {text: '<i class="fas fa-check text-highlight"></i>User Experience Design'},
              {text: '<i class="fas fa-check text-highlight"></i>Rapid Prototyping'},
              {text: '<i class="fas fa-check text-highlight"></i>Mobile Analytics integration'},
              {text: '<i class="fas fa-check text-highlight"></i>Publishing 1.0 <i class="fab fa-android fa-1x"></i><i class="fab fa-apple fa-1x"></i>'}
          ],
          highlightsubtext: '<p><strong>Our mobile app development package starts <span class="text-orange">at £800</span> and include</strong>:</p>',
          offers: [
              {text: '<i class="fas fa-check text-highlight"></i>Application upgrade'}
          ],
          offerssubtext: '<p><strong>We also offer: </strong></p>',
          stars: [
              {text: '<i class="fas fa-star text-highlight-star"></i>Mobile Analytics and Funnel Analysis<strong> - <span class="text-orange">£250&nbsp;one&nbsp;off</span></strong>'},
              {text: '<i class="fas fa-star text-highlight-star"></i>Monthly Maintenance / Annual Freshen-up<strong> - <span class="text-orange">£25&nbsp;monthly</span></strong>'}
          ],
          starssubtext: '<p> <strong>Here are our post-launch <em> extras:</em></strong></p>',
          lead: '<p><strong><a href="#contact-us" class="contact-us-link">Call us</a> and let us talk about your idea.</strong></p>'
        },
        {
          id: 'cloud',
          title: 'cloud',
          class: 'icon-wrapper col-lg-5',
          style: 'solution odd',
          even: false,
          img: CloudImg,
          highlights: [
              {text: '<i class="fas fa-check text-highlight"></i>On-premises to cloud native migrations'},
              {text: '<i class="fas fa-check text-highlight"></i>Hybrid cloud solutions'},
              {text: '<i class="fas fa-check text-highlight"></i>Pay-per-use lambda based architectures'},
              {text: '<i class="fas fa-check text-highlight"></i>Cloud roadmapping - helping you understand what is possible'}
          ],
          highlightsubtext: '<p><strong>We use the latest cloud technologies to deliver these solutions:</strong></p>',
          stars: [
              {text: '<i class="fas fa-star text-highlight-star"></i><abbr title="Amazon Web Services">AWS</abbr> Cloud Computing Services'},
              {text: '<i class="fas fa-star text-highlight-star"></i>Packer and Terraform <abbr title="Infrastructure as Code">IAC</abbr>'},
              {text: '<i class="fas fa-star text-highlight-star"></i>Docker and Kubernetes containerization'},
              {text: '<i class="fas fa-star text-highlight-star"></i>Jenkins, Gitlab and CodePipeline continuous delivery pipelines'}
          ],
          starssubtext: '<p><strong>Specific areas we are experts in:</strong></p>',
          lead: '<p class="section-lead-in"><strong> To discuss how we can help you make the most of cloud,  <a href="#contact-us" class="contact-us-link">call us</a></strong>.</p>'
        },
        {
          id: 'start-up',
          title: 'start-up growth',
          class: 'icon-wrapper col d-block d-lg-none',
          style: 'solution even',
          even: true,
          img: StartUpImg,
          highlights: [
              {text: '<i class="fas fa-check text-highlight"></i>Full-stack, versatile and multi-discipline team'},
              {text: '<i class="fas fa-check text-highlight"></i>Scalable Iterative architecture designs'},
              {text: '<i class="fas fa-check text-highlight"></i>Proven track record of helping start-ups'},
              {text: '<i class="fas fa-check text-highlight"></i>Disciplined approach based on best practices'},
              {text: '<i class="fas fa-check text-highlight"></i>Client-first mantra'},
              {text: '<i class="fas fa-check text-highlight"></i>A can-do attitude and willingness to go the extra mile'}
          ],
          highlightsubtext: '<p><strong>For start-ups we offer:</strong></p>',
          stars: [
              {text: '<i class="fas fa-star text-highlight-star"></i>We are entrepeneurs through and through'},
              {text: '<i class="fas fa-star text-highlight-star"></i>We excel at business analysis'},
              {text: '<i class="fas fa-star text-highlight-star"></i>We suggest profitable tech options as partners'}
          ],
          starssubtext: '<p><strong>Our backgrounds also align well with startups:</strong></p>',
          lead: '<p><strong>If you would like to see if we are a fit, <a href="#contact-us" class="contact-us-link">reach out</a></strong></p>'
        }
      ]
    }
  }
}
</script>


