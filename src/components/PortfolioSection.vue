<template>
  <div id="portfolio">
    <Header></Header>
    <main role="main">
      <section class="portfolio">
        <div class="container">
          <div class="row justify-content-md-center align-items-center">
            <div class="col-lg-11">
              <div class="portfolio-heading">
              </div>
              <div class="row justify-content-md-center">

                <div class="client col-md-6">
                  <a class="portfolio-link" target="_blank" href="http://melissatwigg.co.uk.s3-website-eu-west-1.amazonaws.com/#/">

                    <figure>
                      <img :src="MelissaTwiggImg" class="img-fluid mx-auto" alt="Melissa Twigg Portfolio Site">
                    </figure>

                    <div class="overlay">
                      <p>Meliss Twigg</p>
                      <p>
                        Website and hosting
                      </p>
                    </div>
                  </a>
                </div>

                <div class="client col-md-6">
                  <a class="portfolio-link" target="_blank" href="http://portlanddecorating.co.uk/">
                    <figure>
                      <img :src="PortlandImg" class="img-fluid mx-auto" alt="Portland Decorating and Design Website">
                    </figure>
                    <div class="overlay">
                      <p>Portland</p>
                      <p>
                        Web rescue
                      </p>
                    </div>
                  </a>
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
  .portfolio:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3.13rem;
    width: 50%;
    border-left: 3.13rem solid transparent;
    border-bottom: 3.13rem solid black
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
.client{
  padding: 15px;
}
  .client:hover .overlay {
  opacity: 0.3;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color:  black;
}


</style>