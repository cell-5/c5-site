<template>
  <div id="portfolio">
    <Header></Header>
    <main role="main">
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="row justify-content-md-center align-items-center">
            <div class="col-lg-11">
              <div class="portfolio-heading">
                <h1>Portfolio</h1>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-6">
                  <a class="portfolio-link" target="_blank" href="http://melissatwigg.co.uk.s3-website-eu-west-1.amazonaws.com/#/">
                    <figure>
                      <img :src="MelissaTwiggImg" class="img-fluid mx-auto" alt="Melissa Twigg Portfolio Site">
                    </figure>
                    <h2>Melissa Twigg</h2>
                  </a>
                </div>
                <div class="col-md-6">
                  <a class="portfolio-link" target="_blank" href="http://portlanddecorating.co.uk/">
                    <figure>
                      <img :src="PortlandImg" class="img-fluid mx-auto" alt="Portland Decorating and Design Website">
                    </figure>
                    <h2>Portland Decorating and Design</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
    </main>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import ContactSection from './ContactSection.vue'
  import FooterSection from './FooterSection.vue'
  import MelissaTwiggImg from '../assets/img/mtwigg-screenshot.jpg'
  import PortlandImg from '../assets/img/portland-screenshot.jpg'
  import $ from 'jquery'

  function backToTop () {
    $('html,body').animate({
      scrollTop: 0
    }, 500)
  }

  export default {
    name: 'portfolio',
    data () {
      return {
        MelissaTwiggImg, PortlandImg
      }
    },
    components: {
      Header,
      ContactSection,
      FooterSection
    },
    mounted () {
      backToTop()
    }
  }
</script>
<style scoped>
  #portfolio {
    position: relative;
  }
  #portfolio:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3.13rem;
    width: 50%;
    border-left: 3.13rem solid transparent;
    border-bottom: 3.13rem solid #2c302e
  }
  .portfolio {
    background: white;
    margin-top: 10.2rem;
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
    margin-bottom: 2em;
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
    padding-top: 4em;
    padding-bottom: 4em;
  }
  @media (min-width: 1440px) {
    .portfolio .row {
      height: 100vh;
    }
  }
</style>