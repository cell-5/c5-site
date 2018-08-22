<template>
  <div id="portfolio">
    <Header></Header>
    <main role="main">
      <section class="portfolio">
        <div class="container">
          <div class="row justify-content-md-center align-items-center">
            <div class="col-lg-11 row">
              <div v-for="(portfolioItem, index) in this.portfolio" :key="index" class="justify-content-md-center client col-md-6">
                <div>
                  <a class="portfolio-link" target="_blank" :href="portfolioItem.link">
                    <figure>
                      <img class="client-image img-fluid mx-auto" :src="portfolioItem.image" :alt="portfolioItem.alt">
                    </figure>
                    <div class="overlay">
                      <h5>{{ portfolioItem.title }}</h5>
                      <figure>
                        <img class="title-break" src="../assets/img/cell-5-logo-black.svg" alt="cell5">
                      </figure>
                      <p>
                        {{ portfolioItem.service }}
                      </p>
                    </div>
                  </a>
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
  import Header from '../components/Header.vue'
  import FooterSection from '../components/FooterSection.vue'
  import MelissaTwiggImg from '../assets/img/mtwigg-screenshot-2.jpg'
  import PortlandImg from '../assets/img/portland-screenshot.jpg'
  import Good2RentImg from '../assets/img/good2rent-screenshot.jpg'
  import MyValImg from '../assets/img/myval-screenshot.jpg'
  import Cell5BlackLogo from '../assets/img/cell-5-logo-black.svg'

  function backToTop () {
    $('html,body').animate({
      scrollTop: 0
    }, 500)
  }

  export default {
    name: 'portfolio',
    data () {
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
        }],
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
  .portfolio-link img {
    display: block;
  }
  .portfolio-link:hover,
  .portfolio-link:focus {
    text-decoration: none;
  }
  .portfolio-link h2 {
    text-align: center;
    font-size: 1.2rem;
    color: #2c302e;
  }
  .portfolio .row {
    padding-top: 2em;
    padding-bottom: 2em;
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
  padding: 15px;
  text-align: center;
  /* border-radius: 25px; */
}

.client-image {
  border-radius: 7px;
}

.client:hover .overlay {
  opacity: .7;
  color: black
}

.overlay {
  padding-top: 5em;
  padding-bottom: 2em;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color:  white;
}
.img-fluid{
  height: 100%;
  width: 100%;
}

.title-break {
  height: 16px;
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

</style>
