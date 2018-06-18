<template>
  <div id="portfolio">
    <Header></Header>
    <main role="main">
      <section class="portfolio">
        <div class="container">
          <div class="row justify-content-md-center align-items-center">
            <div class="col-lg-11">
              <div class="row justify-content-md-center">
                <div class="client col-md-6">
                  <a class="portfolio-link" target="_blank" href="http://melissatwigg.co.uk.s3-website-eu-west-1.amazonaws.com/#/">
                    <figure class="client-image">
                      <img :src="MelissaTwiggImg" class="img-fluid mx-auto" alt="Melissa Twigg Portfolio Site">
                    </figure>
                    <div class="overlay">
                      <h5>Melissa Twigg</h5>
                      <figure>
                        <img class="title-break" src="../assets/img/cell-5-logo-black.svg" alt="cell5">
                      </figure>
                      <p>
                        Website & Hosting
                      </p>
                    </div>
                  </a>
                </div>
                <div class="client col-md-6">
                  <a class="portfolio-link" target="_blank" href="http://portlanddecorating.co.uk/">
                    <figure class="client-image">
                      <img :src="PortlandImg" class="img-fluid mx-auto" alt="Portland Decorating and Design Website">
                    </figure>
                    <div class="overlay">
                      <h5>Portland Decorating & Design</h5>
                       <figure>
                        <img class="title-break" src="../assets/img/cell-5-logo-black.svg" alt="cell5">
                      </figure>
                      <p>
                        Web rescue
                      </p>
                    </div>
                  </a>
                </div>
                <div class="client col-md-6">
                  <a class="portfolio-link" target="_blank" href="http://good2rent.co.uk/">
                    <figure class="client-image">
                      <img :src="Good2RentImg" class="img-fluid mx-auto" alt="good2rent website">
                    </figure>
                    <div class="overlay">
                      <h5>good2rent</h5>
                      <figure>
                        <img class="title-break" src="../assets/img/cell-5-logo-black.svg" alt="cell5">
                      </figure>
                      <p>
                        Cloud migration & start-up app dev
                      </p>
                    </div>
                  </a>
                </div>
                <div class="client col-md-6">
                  <a class="portfolio-link" target="_blank" href="http://myval.co.uk/">
                    <figure class="client-image">
                      <img :src="MyValImg" class="img-fluid mx-auto" alt="myVal website">
                    </figure>
                    <div class="overlay">
                      <h5>myVal</h5>
                         <figure>
                        <img class="title-break" src="../assets/img/cell-5-logo-black.svg" alt="cell5">
                      </figure>
                      <p>
                        Web rescue & API integrations
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
  import MelissaTwiggImg from '../assets/img/mtwigg-screenshot-2.jpg'
  import PortlandImg from '../assets/img/portland-screenshot.jpg'
  import Good2RentImg from '../assets/img/good2rent-screenshot.jpg'
  import MyValImg from '../assets/img/myval-screenshot.jpg'
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
        MelissaTwiggImg, PortlandImg, Good2RentImg, MyValImg
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
.client{
  padding: 15px;
  text-align: center;
  border-radius: 25px;
}
.client:hover .overlay {
  opacity: .7;
  color: black
  
}

.img-fluid{
  height: 100%;
  width: 100%;
}
.overlay {
  padding-top: 2em;
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

.client-image{
   border-radius: 97px;

}
.overlay .title-break{
  height: 16px;
  display: inline;
}
@media (hover:none){

 .client:hover { 
    /* suppress hover effect on devices that don't support hover fully */
 background: none;
  }
}
</style>
