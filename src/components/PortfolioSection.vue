<template>
  <div id="portfolio">
    <Header></Header>
    <main role="main">
      <section id="portfolio-heading">
      </section>
      <section id="portfolio">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <carousel-3d :controls-visible="true" :width="carouselWidth" v-bind:display="itemCount" :autoplay-timeout="5000" perspective="0">
              <slide v-for="(portfolioItem, index) in this.portfolio" :index="index" :key="index">                
                <template slot-scope="{ isCurrent}">
                  <img :data-index="index" :class="{ current: isCurrent }" :src="portfolioItem.image">
                  <div  v-bind:class="{ 'show-description' : isCurrent, 'hide' : !isCurrent}">
                    <h6>{{portfolioItem.title}}</h6>
                    <div class="link"><a :href="portfolioItem.link">VISIT SITE</a></div>
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
          <div>We would love to have your website listed above so get in touch and let us impress you.</div>
          <a href="/#contact-us" class="learn-more-btn">Subscribe Now</a>
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
      cell5logo: Cell5BlackLogo,
      itemCount: 0,
      carouselWidth: 0
    }
  },
  components: {
    Header,
    FooterSection,
    Carousel3d,
    Slide
  },
  methods: {
    handleResize() {
      if (window.matchMedia("only screen and (max-width: 768px)").matches) {
          this.carouselWidth = 200;
      } else if (window.matchMedia("only screen and (max-width: 1024px)").matches) {
          this.carouselWidth = 300;
      } else {  
          this.carouselWidth = 350;
      }
      if ( window.matchMedia("only screen and (max-width: 600px)").matches) {
        this.itemCount = 1;
      } else {
        this.itemCount = 5;
      }
    }
  },
  mounted () {
    backToTop(),
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  }
}
</script>
<style type="text/css">
header.siteheader {
  background: #000 !important;
}
#portfolio {
  position: relative;
  height: auto;
}
#portfolio-heading {
  background: linear-gradient(to right, #232474, #aa245c);
  padding: 40px 0;
  margin: 4.1rem 0;
}
#portfolio-heading:after {
  content: "";
  position: absolute;
  right: 0;
  top: 45px;
  height: 3.13rem;
  width: 50%;
  border-left: 3.13rem solid transparent;
  border-bottom: 3.13rem solid #fefffe;
}
.portfolio-navbar , .portfolio-navbar .nav-item {
  padding: 0 10px;
  display: inline;
  font-size: 0.8rem;
  font-weight: bold;
  word-break: break-all;
}
.portfolio-navbar  a {
  text-decoration: none;
  color: #000;
}
.portfolio-navbar  a:hover, .portfolio-navbar  a:active {
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
  margin: 1.8rem 0 0;
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
  font-size: 1rem;
  padding: 70px 0 60px;
}
.carousel-3d-slide {
  border:none !important; 
  height: auto !important;
  background: #fff;
}
.carousel-3d-slide:not(.current) {
  box-shadow: 0px 15px 60px -20px rgba(0,0,0,1);
}
.carousel-3d-slide.current {
  background: transparent;
  padding: 10px;
}
.carousel-3d-slide img {
  box-shadow: 0px 0px 10px 0px rgba(87,87,87,0.5);
}
.carousel-3d-controls {
  top: 35% !important;
}
.carousel-3d-container {
  height: 350px !important;
}
.carousel-3d-controls .prev, .carousel-3d-controls .next {
  border: 2px solid #000;
  color: #000 !important;
  z-index: 999;
  height: 51px !important;
  width: 51px !important;
  position: absolute;
  line-height: 26px !important;
  text-align: center;
  font-size: 70px !important;
  padding: 0 11px;
}
.carousel-3d-slide .show-description {
  background : #fff;
  display: block;
  color: #000;
  font-size: 0.8rem;
  text-align: center;
  padding: 30px 0;
}
.show-description .link {
  margin: 20px 0 0;
}
.show-description a {
  border: 1px solid;
  font-size: 14px;
  padding: 6px 20px;
  text-decoration: none;
}
.show-description a:hover {
  text-decoration: none;
}
.carousel-3d-slide .hide {
  display: none;
}
@media (max-width: 1200px) {
  .carousel-3d-controls .prev, .carousel-3d-controls .next {
    height: 30px !important;
    width: 30px !important;
    line-height: 15px !important;
    padding: 0 6px;
    font-size: 40px !important;
  }
}
@media (max-width: 991px) {
  .carousel-3d-container {
    height: 300px !important;
  }
  .carousel-3d-slide.current {
    margin: 15px 0 0;
  }
}
@media (max-width: 767px) {
  .carousel-3d-container {
    padding: 10px 0;
  }
  .carousel-3d-controls .prev, .carousel-3d-controls .next {
    height: 30px !important;
    width: 30px !important;
    line-height: 15px !important;
    padding: 0 6px;
    font-size: 40px !important;
  }
}
</style>
