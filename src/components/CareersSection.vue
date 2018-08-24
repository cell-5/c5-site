<template>
    <section id="careers">
            <div class="container">
                <h2>Careers</h2>
                <div class="career">
                    <div id="teamList" v-for="career of careers">
                        <div class="team-member">
                            <div class="row">
                                <div class="col-lg-6">
                                    <figure class="team-member-photo">
                                        <img :src="career.job_img" :alt="career.job_title" class="img-fluid">
                                    </figure>
                                </div>
                                <div class="col-lg-6">
                                    <h3 class="team-member-name">{{ career.job_title }}</h3>
                                    <h4 class="team-member-title"></h4>
                                    <ul class="team-member-social">
                                        <li>
                                            <a href="#" target="_blank">
                                                Apply
                                            </a>
                                        </li>
                                    </ul>
                                    <p class="team-member-bio">{{ career.job_description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="careerNav">
                    <div class="careerNav-slide">
                        <div>
                            <img src="../assets/img/peter-vector.svg" alt="Peter Barry">
                        </div>
                        <div>
                            <img src="../assets/img/harry-vector.svg" alt="Harry Wynn-Williams">
                        </div>
                        <div>
                            <img src="../assets/img/pat-vector.svg" alt="Pat Bautista">
                        </div>
                        <div>
                            <img src="../assets/img/nic-vector.png" alt="Johnnica Castro">
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>
<script>
import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PeterImg from '../assets/img/peter-vector.svg'
import HarryImg from '../assets/img/harry-vector.svg'
import PatImg from '../assets/img/pat-vector.svg'
import NicImg from '../assets/img/nic-vector.png'
function careerCarousel () {
  $('.career').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    asNavFor: '.careerNav-slide',
    arrows: true,
    nextArrow: '<span class="slick-next-arrow" role="button"><i class="fa fa-angle-right"></i></span>',
    prevArrow: '<span class="slick-prev-arrow" role="button"><i class="fa fa-angle-left"></i></span>'
  })
  $('.careerNav-slide').slick({
    slidesToShow: 4,
    arrows: false,
    asNavFor: '.career',
    focusOnSelect: true
  })
}
export default {
  data () {
    return {
      careers: [
        {
          job_title: 'Junior Programmer',
          job_description: 'Provide support to design, development, implementation and maintenance of the applications that they developed for their clients.',
          job_img: PatImg,
        },
        {
          job_title: 'Cloud Architect',
          job_description: 'Responsible for deploying overseeing a company\'s cloud computing strategy. This includes cloud adoption plans, cloud application design, and cloud management and monitoring. Cloud architects oversee application architecture and deployment in cloud environments.',
          job_img: PeterImg, 
        },
        {
          job_title: 'Full Stack Developer',
          job_description: 'Responsible for front and back-end web development. Usually, good full stack developers will understand several how to work with several languages and databases including PHP, HTML, CSS, JavaScript and everything in between.',
          job_img: HarryImg, 
        },
        {
          job_title: 'Graphic Designer',
          job_description: 'Create visual concepts, by hand or using computer software, to communicate ideas that inspire, inform, or captivate consumers. They develop the overall layout and production design for advertisements, brochures, magazines, and corporate reports.',
          job_img: NicImg, 
        }
      ]
    }
  },
  mounted () {
    careerCarousel()
  }
}
</script>
<style scoped>
#careers {
    background: #fff;
    color: #000;
    padding: 6vw 0;
    position: relative
}

@media (max-width: 767px) {
    #careers {
        padding: 5rem 0
    }
}

#careers:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3.13rem;
    width: 50%;
    border-left: 3.13rem solid transparent;
    border-bottom: 3.13rem solid #2c302e
}

#careers h2 {
    text-align: center
}

.career {
    margin-top: 4em
}

@media (min-width: 1200px) {
    .team-member {
        max-width: 80%
    }
}

@media (min-width: 992px) and (max-width: 1199px) {
    .team-member {
        max-width: 700px
    }
}

@media (min-width: 992px) {
    .team-member {
        margin-left: auto;
        margin-right: auto;
    }
    .team-member-about {
        margin-bottom: 9em
    }
}

@media (max-width: 991px) {
    .team-member {
        margin: 0 30px;
        text-align: center
    }
}

.team-member-name {
    font-size: 2.6rem;
    font-weight: bold;
    margin-bottom: 10px
}

@media (max-width: 767px) {
    .team-member-name {
        font-size: 2rem
    }
}

.team-member-title {
    margin: 0 0 20px;
    text-transform: uppercase;
    font-size: 1rem
}

.team-member-bio {
    font-size: 1.1rem;
    line-height: 1.8
}

.team-member-photo {
    border-radius: 50%;
    margin: 0 auto;
    max-width: 68%;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 1rem
}

@media (max-width: 991px) {
    .team-member-photo {
        margin-bottom: 2em
    }
}

@media (max-width: 767px) {
    .team-member-photo {
        max-width: 230px
    }
}

.team-member-photo img {
    width: 100%
}

.team-member-social {
    font-size: 2rem;
    list-style: none;
    margin-bottom: 1em;
    padding-left: 0
}

@media (max-width: 767px) {
    .team-member-social {
        margin-bottom: 0.5em
    }
}

.team-member-social>li {
    display: inline-block
}

.team-member-social>li:not(:last-of-type) {
    margin-right: 15px
}

.team-member-social>li a {
    color: white
}
</style>
<style>
.careerNav {
    margin: 2em auto 0;
    max-width: 31.25rem
}

@media (min-width: 3840px) {
    .careerNav {
        max-width: 1024px
    }
}

@media (max-width: 991px) {
    .careerNav {
        display: none
    }
}

.careerNav-slide img {
    cursor: pointer;
    border: 4px solid #e1e1e1;
    background: white;
    border-radius: 50%;
    width: 4.38em;
    height: 4.38em;
}

.careerNav .slick-track {
    -webkit-transform: translate3d(0px, 0px, 0px) !important;
    transform: translate3d(0px, 0px, 0px) !important
}
.slick-next-arrow, .slick-prev-arrow {
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}
.slick-next-arrow {
  left: 100%;
}
.slick-prev-arrow {
  right: 100%;
}
@media (max-width: 767px) {
  .slick-next-arrow {
    left: auto;
    right: 0;
  }
  .slick-prev-arrow {
    left: 0;
    right: auto;
  }
}
</style>
