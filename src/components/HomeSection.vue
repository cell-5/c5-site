<template>
  <section id="home"
           class="align-items-center">
    <div class="particles">
      <transition name="fade">

        <vue-particles ref="particles"
                       class=""
                       color="#dedede"
                       :particleOpacity="0.7"
                       :particlesNumber="particlesCount"
                       shapeType="polygon"
                       :particleSize="2"
                       linesColor="#dedede"
                       :linesWidth="1"
                       :lineLinked="true"
                       :lineOpacity="0.4"
                       :linesDistance="150"
                       :moveSpeed="3"
                       :hoverEffect="false"
                       hoverMode="grab"
                       :clickEffect="true"
                       clickMode="push">
        </vue-particles>
      </transition>

    </div>
    <div class="tagline-wrapper">
      <h2 id="tagline">
        <div class="row">
          <p class="top-bottom">client-first</p>
        </div>
        <div class="row middle">

          <a :href="hrefSolution">

            <vue-typer @typed="typed"
                       :text='["digital","web","mobile","cloud","start-up"]'
                       :repeat='Infinity'
                       :shuffle='false'
                       initial-action='typing'
                       :pre-type-delay='70'
                       :type-delay='80'
                       :pre-erase-delay='2000'
                       :erase-delay='300'
                       erase-style='clear'
                       :erase-on-complete='false'
                       caret-animation='blink'></vue-typer>
          </a>
        </div>
        <div class="row">
          <p class="top-bottom">solutions</p>
        </div>
      </h2>
    </div>
    <a href="#solutions"
       class="learn-more-btn call-to-action">Learn More</a>
  </section>
</template>

<script>
import { VueTyper } from "vue-typer";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    VueTyper,
    FadeTransition
  },
  data: () => {
    return {
      selectedText: "",
      dur: 1000,
      particlesCount: 80
    };
  },

  methods: {
    typed: function(typedString) {
      this.selectedText = typedString;
    },
    handleResize: function() {
      let isTablet = window.matchMedia("only screen and (max-width: 1024px)");
      let isMobile = window.matchMedia("only screen and (max-width: 414px)");
      let mobileParticlesCount = 40;
      let tabletParticlesCount = 60;
      if (isMobile.matches) {
        this.particlesCount = mobileParticlesCount;
      } else if (isTablet.matches) {
        this.particlesCount = tabletParticlesCount;
      }
      console.log("particle count: ", this.particlesCount)
    }
  },
  computed: {
    hrefSolution() {
      return `#${this.selectedText}`;
    }
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.handleResize();
      });
    });
  }
  // mounted() {
  //   var x = 1
  //   // while (x < 30) {
  //   //   x++;
  //   //   document
  //   //     .querySelector("canvas.particles-js-canvas-el")
  //   //     .dispatchEvent(new Event("click")); // Fire event
  //   //   console.log("called");
  //   // } var x = 1;
  //   this.$nextTick(function() {

  //     while (x < 50) {
  //       x++;
  //       console.log(        document
  //         .querySelector("canvas.particles-js-canvas-el"))
  //       // document
  //       document
  //  .elementFromPoint(50, 50).click();
  //         // .dispatchEvent(new Event("click")); // Fire event
  //       console.log("called");
  //     }
  //   });
  // }
};
</script>

<style>
#home {
  /* background-size:cover; */
  color: #fefffe;
  font-family: "Montserrat", sans-serif;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  margin: 0;
  margin-top: 0px;
  position: relative;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  overflow: hidden;
}

.particles {
  position: absolute;
  background: linear-gradient(to bottom right, red, blue);
  width: 100%;
  height: 100%;
}

#home:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  height: 3.13rem;
  width: 50%;
  border-left: 3.13rem solid transparent;
  border-bottom: 3.13rem solid #fefffe;
}

#home * {
  margin: 0;
  line-height: 100%;
}

#home div.tagline-wrapper {
  line-height: 1.75ch;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  z-index: 3;
}

@media (min-width: 3840px) {
  #home div.tagline-wrapper {
    max-width: 3000px;
  }
}

#home div.tagline-wrapper h2 {
  font-size: 4.8em;
  font-weight: 700;
  text-align: left;
}

@media (max-width: 991px) and (orientation: landscape) {
  #home div.tagline-wrapper h2 {
    font-size: 12vh !important;
  }
}

#home div.tagline-wrapper h2 ul.slick-dots {
  display: none !important;
}

#home div.tagline-wrapper a {
  display: block;
}

#home div.tagline-wrapper a:link,
#home div.tagline-wrapper a:visited {
  color: #ffffff;
  text-decoration: none;
}

#home div.tagline-wrapper a:hover {
  color: #ffffff;
}

#home div.tagline-wrapper a:active {
  color: #ffffff;
}

#home div.tagline-wrapper a:visited:active {
  color: #ffffff;
}

#home a.learn-more-btn {
  position: absolute;
  bottom: 1.88rem;
  right: 14%;
  z-index: 2;
}

@media (max-width: 767px) and (orientation: portrait) {
  /* #home {
      background-image:url('../assets/img/header-mobile-progressive.jpg');
    } */

  #home div.tagline-wrapper h2 {
    font-size: 3em;
  }
  #home a.learn-more-btn {
    bottom: 5rem;
    right: 20%;
  }
}

#home a.learn-more-btn:link,
#home a.learn-more-btn:visited {
  display: inline-block;
  background-color: #34b95b;
  color: white;
  border-radius: 8px;
  padding: 1rem 3rem;
  margin-top: 0.5rem;
  text-decoration: none;
}

#home a.learn-more-btn:hover {
  background-color: #269f49;
  color: white;
}

#home a.learn-more-btn:active {
  background-color: #228f42;
  color: white;
}

.middle {
  color: white;
  padding: 8px 0px 8px;
}

.top-bottom {
  background: black;
}

.vue-typer .custom.char.typed {
  color: white !important;
}

char custom typed .middle,
.top-bottom {
  display: inline-block;
  padding: 7px !important;
  word-wrap: break-word;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

div#particles-js {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
