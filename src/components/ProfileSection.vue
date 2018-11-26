<template>
    <section id="profiles">
            <div class="container">
                <h2>Meet The Team</h2>
                <div class="team">
                    <div id="teamList" v-for="member of members">
                        <div class="team-member">
                            <div class="row">
                                <div class="col-lg-6">
                                    <figure class="team-member-photo">
                                        <img :src="member.img" alt="Peter Barry" class="img-fluid">
                                    </figure>
                                </div>
                                <div class="col-lg-6">
                                    <h3 class="team-member-name">{{ member.name }}</h3>
                                    <h4 class="team-member-title">{{ member.title }}</h4>
                                    <ul class="team-member-social">
                                        <li>
                                            <a :href="member.linkedin" target="_blank">
                                                <span class="fab fa-linkedin"></span>
                                            </a>
                                        </li>
                                    </ul>
                                    <p class="team-member-bio">{{ member.bio }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="teamNav">
                    <div class="teamNav-slide">
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
function teamCarousel () {
  $('.team').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    asNavFor: '.teamNav-slide',
    arrows: true,
    nextArrow: '<span class="slick-next-arrow" role="button"><i class="fa fa-angle-right"></i></span>',
    prevArrow: '<span class="slick-prev-arrow" role="button"><i class="fa fa-angle-left"></i></span>'
  })
  $('.teamNav-slide').slick({
    slidesToShow: 4,
    arrows: false,
    asNavFor: '.team',
    focusOnSelect: true
  })
}
export default {
  data () {
    return {
      members: [
        {
          name: 'Peter Barry',
          img: PeterImg,
          title: 'Cloud Architect',
          linkedin: 'https://uk.linkedin.com/in/peterbarry/',
          twitter: '',
          bio: 'Peter is our Cloud specialist. He has 15 years experience building web, mobile and cloud solutions. He is passionate about cost-effective and scalable cloud architectures and consults on general I.T. strategy and DevOps.'
        },
        {
          name: 'Harry Wynn-Williams',
          img: HarryImg,
          title: 'Fullstack (front-end specialist)',
          linkedin: 'https://www.linkedin.com/in/harry-wynn-williams-59b89040/',
          twitter: 'https://twitter.com/harrywinmillion',
          bio: "Harry has experience of building web and mobile apps at an investment bank and in the gaming industry. He loves building complex UIs, especially when it's with Vue.js."
        },
        {
          name: 'Pat Bautista',
          img: PatImg,
          title: 'Fullstack (back-end specialist)',
          linkedin: 'https://www.linkedin.com/in/pat-bautista/',
          twitter: '',
          bio: 'Pat specializes in REST API development and integration. He has already built a reputation in the team for being able to solve any problem he is given.'
        },
        {
          name: 'Johnnica Castro',
          img: NicImg,
          title: 'Graphic Designer',
          linkedin: 'https://www.linkedin.com/in/johnnica-castro-723451163/',
          twitter: '',
          bio: "She is a skilled designer who is passionate about arts. She's interested in different kinds of visuals and focuses on UI/UX designing."
        }
      ]
    }
  },
  mounted () {
    teamCarousel()
  }
}
</script>
<style scoped>
#profiles {
    background: #d64933;
    color: white;
    padding: 6vw 0;
    position: relative
}
@media (max-width: 767px) {
    #profiles {
        padding: 5rem 0
    }
}
#profiles:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3.13rem;
    width: 50%;
    border-left: 3.13rem solid transparent;
    /* border-bottom: 3.13rem solid #2c302e */
}
#profiles h2 {
    text-align: center
}
.team {
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
.team-member-title {
    margin: 0 0 20px;
    text-transform: uppercase;
    font-size: 1rem
}
.team-member-bio {
    font-size: 1.1rem;
    line-height: 1.8
}
@media (max-width: 767px) {
    .team-member-name {
        font-size: 1.3rem
    }
    .team-member-title {
        font-size: .9rem;
        margin-bottom: 0.5em
    }
    .team-member-bio {
        font-size: .9rem
    }
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
        margin-bottom: 1em
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
        margin-bottom: 0.3em
    }
    .team-member-photo img {
        width: 50%
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
.teamNav {
    margin: 2em auto 0;
    max-width: 31.25rem
}
@media (min-width: 3840px) {
    .teamNav {
        max-width: 1024px
    }
}
@media (max-width: 991px) {
    .teamNav {
        display: none
    }
}
.teamNav-slide img {
    cursor: pointer;
    border: 4px solid #e1e1e1;
    background: white;
    border-radius: 50%;
    width: 4.38em;
    height: 4.38em;
}
.teamNav .slick-track {
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
