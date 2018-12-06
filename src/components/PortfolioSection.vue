<template>
  <div id="portfolio">
    <Header></Header>
    <main role="main">
      <section class="portfolio">
        <div class="container">
          <div class="row justify-content-md-center align-items-center">
            <div class="col-lg-11">
              <div class="row">
                <div v-for="(portfolioItem, index) in this.portfolio" :key="index" class="justify-content-md-center client col-md-4">
                  <div class="portfolio-link" target="_blank">
                    <figure>
                      <img class="client-image img-fluid mx-auto" :src="portfolioItem.image" :alt="portfolioItem.alt">
                    </figure>
                    <div class="overlay">
                      <div class="overlay-content">
                        <h5>{{ portfolioItem.title }}</h5>
                        <p>
                          {{ portfolioItem.service }}
                        </p>
                        <div class="row justify-content-md-center">
                          <div class="action-hover">
                             READ MORE
                          </div>
                          <a  :href="portfolioItem.link">
                            <div class="action-hover">
                              VISIT SITE
                            </div>
                          </a>
                        </div>
                        <!--<figure>
                          <img class="title-break" src="../assets/img/cell-5-logo-white.svg" alt="cell5">
                        </figure>-->

                      </div>
                    </div>
                  </div>
                  <div class="mobile-caption">
                    <h5>{{ portfolioItem.title }}</h5>
                    <p>{{ portfolioItem.service }}</p>
                    <div>
                      <img class="title-break" src="../assets/img/cell-5-logo-black.svg" alt="cell5">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="cta" class="text-center">
            <router-link to="/#solutions" class="learn-more-btn call-to-action">Learn More</router-link>
          </div>
        </div>
      </section>
      <FooterSection></FooterSection>
    </main>
  </div>
</template>

<script>
import Header from './Header.vue'
import FooterSection from './FooterSection.vue'
import MelissaTwiggImg from '../assets/img/mtwigg-screenshot-2.jpg'
import PortlandImg from '../assets/img/portland-screenshot.jpg'
import Good2RentImg from '../assets/img/good2rent-screenshot.jpg'
import MyValImg from '../assets/img/myval-screenshot.jpg'
import WhiteSpiderMedia from '../assets/img/whitespider-screenshot.jpg'
import Cell5BlackLogo from '../assets/img/cell-5-logo-black.svg'
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
      HoverButton: [{
        text: 'READ MORE', 
      },
      {
        text: 'VISIT SITE'
      }
      ],
      cell5logo: Cell5BlackLogo
    }
  },
  components: {
    Header,
    FooterSection
  },
  mounted () {
    backToTop()
  }
}
</script>
<style scoped>
.portfolio {
  position: relative;
  background: white;
  margin-top: 4.1rem;
}

.portfolio .container {
  padding-bottom: 5em;
}
.portfolio-heading {
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
}
.portfolio-heading p {
  line-height: 1.8;
}
.portfolio-link {
  display: block;
}
.portfolio-link .img-fluid {
  max-width: 100% !important;
}
.portfolio-link:hover,
.portfolio-link:focus,
.overlay-content a {
  text-decoration: none;
}
.portfolio-link h2 {
  text-align: center;
  font-size: 1.2rem;
  color: #2c302e;
}
.portfolio a.learn-more-btn:link,
.portfolio a.learn-more-btn:visited {
  display: inline-block;
  background-color: #34b95b;
  color: white;
  border-radius: 8px;
  padding: 1rem 3rem;
  margin-top: 0.5rem;
  text-decoration: none
}

.portfolio a.learn-more-btn:hover {
  background-color: #269f49;
  color: white
}

.portfolio a.learn-more-btn:active {
  background-color: #228f42;
  color: white
}

.client {
  padding: 10px;
  text-align: center;
}

.client img {
  filter: saturate(1.3);
}

.client .client-content {
  margin: 10px;
}

.client .row {
  padding-top: 0 !important;
}

.client-image {
  border: 1px solid #ccc;
}

.portfolio-link:hover .overlay {
  opacity: .8;
  transition: all .25s linear;
}

.portfolio-link:hover .overlay-content p,
.portfolio-link:hover .overlay-content h5,
.portfolio-link:hover .overlay-content img {
  opacity: .8;
  transform: scale(1);
}

.portfolio-link:hover .overlay-content .action-hover {
  transform: scale(1);
}

.portfolio-link figure {
  margin: 0;
}

.overlay {
  padding: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  display: table;
}

.overlay-content {
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
  background: #000;
  color: #fff;
}
.overlay-content p {
  font-size: 0.9rem;  
}

.overlay-content h5,
.overlay-content p,
.overlay-content .action-hover {
  transition: all .25s linear;
  transform: scale(1.3);
}
.action-hover{
  width: 90px;
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #fff;
  font-size: 0.7rem;
  text-align: center;
  color: #fff;
}
.action-hover:hover{
  background: #fa5a06;
  color: #fff;
  border: 1px solid #fa5a06;
}
.title-break {
  height: 40px;
  margin: 10px 0 0;
}
.overlay .title-break {
  display: inline;
}
.mobile-caption{
  visibility: hidden;
  display: none;
}
.row {
  padding-top: 1em !important;
}
@media screen and (max-width: 600px) {
  .overlay {
    visibility: hidden;
    display: none;
  }
  .mobile-caption{
    visibility: visible;
    display: inline;
  }
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
