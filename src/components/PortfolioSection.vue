<template>
  <div id="portfolio">
    <Header></Header>
    <main role="main">
      <section id="portfolio-heading">
        <div class="container text-center">
          <div class="col-md-7">
            <h1>PORTFOLIO</h1>
            This is a sample content of the section
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div class="container">
          <div class="navbar-nav">
            <ul class="text-center">
              <li class="nav-item" v-for="nav in this.portfolioNavigation"><a href="#home">{{ nav }}</a></li>
            </ul>
          </div>
          <div class="row justify-content-center align-items-center">
            <carousel-3d :controls-visible="true" :style="{height:'450px'}" :autoplay="true" :autoplay-timeout="5000"  perspective="0">
              <slide v-for="(portfolioItem, index) in this.portfolio" :index="index" :key="index">
                <template slot-scope="{ isCurrent}" >
                  <img :data-index="index" :class="{ current: isCurrent }" :src="portfolioItem.image">
                  <div  v-bind:class="{ 'show-description' : isCurrent, 'hide' : !isCurrent}">
                    <h6>{{portfolioItem.title}}</h6>
                    {{portfolioItem.service}}
                  </div>
                </template>
              </slide>
            </carousel-3d>
          </div>
        </div>
      </section>
      <div class="get-started">
        <div class="container text-center">
          <h1>Get Started Today!</h1>
          <div>This is a sample content of the section</div>
          <a href="#contact-us" class="learn-more-btn call-to-action">Subscribe Now</a>
        </div>
      </section>
    </main>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import Header from './Header.vue'
import FooterSection from './FooterSection.vue'
import MelissaTwiggImg from '../assets/img/mtwigg-screenshot.jpg'
import PortlandImg from '../assets/img/portland-screenshot.jpg'
import Good2RentImg from '../assets/img/good2rent-screenshot.jpg'
import MyValImg from '../assets/img/myval-screenshot.jpg'
import WhiteSpiderMedia from '../assets/img/whitespider-screenshot.jpg'
import Cell5BlackLogo from '../assets/img/cell-5-logo-black.svg'
import { Carousel3d, Slide } from 'vue-carousel-3d';
import $ from 'jquery'

function backToTop() {
  $('html,body').animate({
    scrollTop: 0
  }, 500)
}

export default {
  name: 'portfolio',
  data() {
    return {
      portfolio: [{
        image: MelissaTwiggImg,
        title: 'Melissa Twigg',
        service: 'Website & Hosting',
        link: 'http://melissatwigg.co.uk',
        alt: 'Melissa Twigg Portfolio Site'
      },
      {
        image: PortlandImg,
        title: 'Portland Decorating & Design',
        service: 'Web rescue & On-site SEO',
        link: 'http://portlanddecorating.co.uk/',
        alt: 'Portland Decorating and Design Website'
      },
      {
        image: Good2RentImg,
        title: 'good2rent',
        service: 'Cloud migration & start-up app dev',
        link: 'http://good2rent.co.uk/',
        alt: 'good2rent website'
      },
      {
        image: MyValImg,
        title: 'myVal',
        service: 'Web rescue & API integrations',
        link: 'http://myval.co.uk/',
        alt: 'myVal website'
      },
      {
        image: WhiteSpiderMedia,
        title: 'White Spider Media',
        service: 'My super-duper Nuxt.js project',
        link: 'https://pensive-mcclintock-1395fd.netlify.com/',
        alt: 'White Spider Media Website'
      }],
      portfolioNavigation: [
        'All','Business','Entertainment','Creative','Blog','Portfolio','One page','Shop','Other' 
      ],
      cell5logo: Cell5BlackLogo
    }
  },
  components: {
    Header,
    FooterSection,
    Carousel3d,
    Slide
  },
  mounted () {
    backToTop()
  }
}
</script>
<style scoped>
header.siteheader {
  background: #000;
}
#portfolio {
  position: relative;
  height: auto;
}
#portfolio-heading {
  color: #fff;
  background: linear-gradient(to right, #232474, #aa245c);
  padding: 30px 0 40px;
  font-size: 0.7rem;
  letter-spacing: 0.05rem;
  margin: 4.1rem 0 2rem;
}
#portfolio-heading h1{
  font-weight: bold;
  margin: 0;
}
#portfolio-heading:after {
  content: "";
  position: absolute;
  right: 0;
  top: 90px;
  height: 3.13rem;
  width: 50%;
  border-left: 3.13rem solid transparent;
  border-bottom: 3.13rem solid #fefffe;
}
.navbar-nav , .navbar-nav .nav-item {
  padding: 0 10px;
  display: inline;
  font-size: 0.8rem;
  font-weight: bold;
  word-break: break-all;
}
.navbar-nav  a {
  text-decoration: none;
  color: #000;
}
.navbar-nav  a:hover, .navbar-nav  a:active {
  text-decoration: none;
  color: #e22571;
}
a.learn-more-btn:link,
a.learn-more-btn:visited {
  display: inline-block;
  background-color: #34b95b;
  color: white;
  border-radius: 5px;
  padding: 0.7rem 3.5rem;
  margin: 1rem 0 0;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
}

a.learn-more-btn:hover {
  background-color: #269f49;
  color: white
}

a.learn-more-btn:active {
  background-color: #228f42;
  color: white
}
.get-started {
  background: linear-gradient(to right, #11052b, #230930);
  color: #fff;
  font-size: 1.4rem;
  padding: 50px 0 75px;
}
.carousel-3d-slide {
  border:none; 
  height: auto !important;
  background: #fff;
}
.carousel-3d-slide:not(.current) {
  box-shadow: 0px 15px 60px -20px rgba(0,0,0,1);
}
.carousel-3d-slide img {
  box-shadow: 0px 15px 60px -20px rgba(0,0,0,1);
}
.carousel-3d-slide .show-description {
  background : #fff;
  display: block;
  color: #000;
  font-size: 0.8rem;
  text-align: center;
  margin: 10px 0 0;
  padding: 20px 0;
}
.carousel-3d-slide .hide {
  display: none;
}
.carousel-3d-controls[data-v-43e93932] {
  background: #000 !important;
}

@media (max-width: 767px) and (orientation: portrait) {
  .overlay {
    visibility: hidden;
    display: none;
  }
  .mobile-caption{
    visibility: visible;
    display: inline;
  }
}
@media (max-width: 1200px) {
    .overlay-content h5 {
      font-size:1rem;
    }
    .overlay-content p {
      font-size: 0.8rem;
    }
    .overlay-content img {
        height: 25px;
        margin: 0;
    }
}
@media (max-width: 992px) {
    .overlay-content h5 {
      font-size: 0.8rem;
    }
    .overlay-content p {
      font-size: 0.6rem;
    }
}
</style>
