<template>
    <div id="portfolio">
        <Header></Header>
        <main role="main">
            <section class="portfolio">
                <div class="container">
                    <div class="row justify-content-md-center align-items-center">
                        <div class="col-md-7 col-lg-9">
                            <div class="portfolio-heading">
                                <h1 class="text-uppercase">Portfolio</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet id minima consequatur rem totam hic qui.</p>
                            </div>
                            <div class="portfolio-images">
                                <div>
                                    <a href="#">
                                        <img :src="MelissaTwiggImg" alt="Melissa Twigg Website" class="img-fluid mx-auto">
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img :src="PortlandImg" alt="Portland Website" class="img-fluid mx-auto">
                                    </a>
                                </div>
                            </div>
                            <div class="portfolio-content">
                                <div>
                                    <article>
                                        <h2><a href="#">Melissa Twigg</a></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing  elit. Natus qui maiores, hic blanditiis asperiores. Excepturi quae deserunt hic molestias optio dignissimos soluta perspiciatis.</p>
                                    </article>
                                </div>
                                <div>
                                    <article>
                                        <h2><a href="#">Portland</a></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla reprehenderit sequi alias quibusdam, similique quod laudantium aperiam.</p>
                                    </article>
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
import MelissaTwiggImg from '../assets/img/mtwigg.svg'
import PortlandImg from '../assets/img/portland.svg'

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
  }
}
</script>
<style>
.portfolio-images .slick-next-arrow,
.portfolio-images .slick-prev-arrow {
  color: white;
  background: #2c302e;
  padding-left: 5px;
  padding-right: 5px;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}
.portfolio-images .slick-next-arrow {
  right: 0;
  left: auto;
}
.portfolio-images .slick-prev-arrow {
  right: auto;
  left: 0;
}
.portfolio-images .slick-dots {
  top: 100%;
  bottom: auto;
  margin-top: 10px;
}
.portfolio-images .slick-dots li button:before {
  font-size: 11px;
}
</style>
<style scoped>
.portfolio {
  background: white;
  margin-top: 10.2rem;
}
.portfolio-heading {
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
}
.portfolio-images {
  margin-top: 40px;
}
.portfolio-content {
  max-width: 90%;
  margin: 50px auto 0;
}
.portfolio-content h2 {
  font-size: 1em;
  font-weight: bold;
  text-align: center;
}
.portfolio-content h2 a {
  color: inherit;
}
.portfolio-content h2 a:hover, .portfolio-content h2 a:focus {
  color: #d64933;
  text-decoration: none;
}
.portfolio-content p {
  text-align: justify;
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