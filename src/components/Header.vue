<template>
  <header class="siteheader" role="banner">
        <nav class="navbar navbar-expand-md navbar-dark">
            <h1 id="logo">
                <router-link to="/" class="navbar-brand">
                    <img src="../assets/img/logo-white.svg" alt="cell5 logo">
                </router-link>
            </h1>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible-navbar" aria-controls="collapsible-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsible-navbar">
                <ul class="navbar-nav">
	                <li class="nav-item active"><a v-scroll-to="'#home'" class="nav-link" href="#home">Home</a></li>
	                <li class="nav-item"><a v-scroll-to="'#solutions'" class="nav-link" href="#solutions">Solutions</a></li>
	                <li class="nav-item"><a v-scroll-to="'#profiles'" class="nav-link" href="#profiles">The Team</a></li>
                  <template v-if="isPortfolioPage">
                    <li class="nav-item"><a id="portfolio-link" class="nav-link" href="#portfolio">Portfolio</a></li>
                  </template>
                  <template v-else>
                    <router-link to="portfolio" tag="li" class="nav-item">
                      <a class="nav-link" data-toggle="collapse" data-target="#collapsible-navbar">Portfolio</a>
                    </router-link>
                  </template>
                  <li class="nav-item"><a v-scroll-to="'#contact-us'" class="nav-link" href="#contact-us">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import $ from 'jquery'
function scrollToSection (selector) {
  var $section = $(selector)

  if (!$section.length) {
    return
  }
  $('html,body').animate({
    scrollTop: selector === '#home' || selector === '#' ? 0 : $section.offset().top
  }, 150)
}
function animateSectionScroll () {
  var selector = $(this).attr('href')
  scrollToSection(selector)
  return false
}
function animateTopScroll (e) {
  e.preventDefault()
  $('html,body').animate({
    scrollTop: 0
  }, 500)
}
function highlightMenu ($window, $menuItem) {
  var top = $window.scrollTop()
  var items = $menuItem.map(function () {
    var selector = $(this).attr('href').replace('/', '#')
    var $target = $(selector)
    if ($target.length && top >= $target.offset().top) {
      return selector
    }
  })

  var current = items[items.length - 1]

  $menuItem.parent()
    .removeClass('active')
    .end()
    .filter('a[href="' + current + '"]')
    .parent()
    .addClass('active')
}
function menuEffects () {
  $('#portfolio-link').on('click', animateSectionScroll)
  $('#logo a').on('click', animateTopScroll)
  $('.sitefooter-bottom a').on('click', animateTopScroll)
  $('.learn-more-btn').on('click', animateSectionScroll)
  $('.solutions-nav a').on('click', animateSectionScroll)
  $('.contact-us-link').on('click', animateSectionScroll)
  var $menuItem = $('.navbar-nav li a:not(.unscrollable)')
  $('#logo').addClass('shrink')

  $(window).on('scroll', function () {
    highlightMenu($(this), $menuItem)
  })

  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide')
  })
}
export default {
  computed: {
    isHomepage () {
      return this.$route.path === '/'
    },
    isPortfolioPage () {
      $('.team').slick('slickPause')
      $('.teamNav-slide').slick('slickPause')
      return this.$route.path === '/portfolio'
    }
  },
  methods: {
    scrollOrRedirect (e) {
      let href = e.currentTarget.getAttribute('href')
      if (this.isHomepage) {
        e.preventDefault()
        scrollToSection(href)
      } else {
        this.$router.push({path: '/' + href})
      }
    }
  },
  mounted () {
    scrollToSection(window.location.hash)
    window.location.hash = ''
    menuEffects()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10
}

header.siteheader {
    background-color: rgba(0,0,0,0.5);
}

header .navbar {
    max-width: 90%;
    margin: 0 auto
}

@media (min-width: 3840px) {
  header .navbar {
    max-width: 3000px;
  }
}

#logo {
    line-height: 0;
    text-align: center;
    margin: 0;
    padding: 1.5rem 1.5rem 1.5rem 0;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

@media (max-width: 767px) and (orientation: portrait) {
    #logo {
        padding: 0 0.5rem;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }

    .navbar-collapse {
        background-color: rgba(0,0,0);
    }

    .navbar > .container { max-width: 100%; padding: 0 }
}

@media (max-width: 767px) and (orientation: landscape) {
    #logo {
        padding: 0 0.5rem;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }

    .navbar-collapse {
        background-color: rgba(0,0,0);
    }

    .navbar > .container { max-width: 100%; padding: 0; }
}

#logo * {
    margin: 0;
    padding: 0;
    line-height: 100%
}

#logo.shrink {
    padding: 0 0.5rem;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

#logo.shrink a img {
    height: 3.13rem;
    width: 3.13rem;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

#logo a {
    color: #fefffe
}

#logo a img {
    height: 6.25rem;
    width: 6.25rem;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

@media (max-width: 767px) and (orientation: portrait) {

    header.siteheader {
         background-color: black;
    }
    #logo a img {
        height: 3.13rem;
        width: 3.13rem;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }

    .navbar-collapse {
        background-color: rgba(0,0,0);
    }

    .navbar > .container { max-width: 100%; padding: 0; }
}

@media (max-width: 767px) and (orientation: landscape) {

    header.siteheader {
        background-color: black;
    }

    #logo a img {
        height: 50px;
        width: 50px;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }

    .navbar-collapse {
        background-color: rgba(0,0,0);
    }

    .navbar > .container { max-width: 100%; padding: 0; }
}

nav.navbar {
    padding: 0.5rem
}

div.navbar-collapse {
    position: relative
}

li.nav-item {
    text-align: center;
    padding: 0 1rem;
    font-family: "Montserrat", sans-serif
}

li.nav-item:hover {
    background-color: none
}

li.nav-item a {
    color: white !important;
    opacity: 0.7;
    transition: 0.4s;
}

li.nav-item.active a,
li.nav-item a:hover,
li.nav-item a:focus {
    opacity: 1;
}
@media only screen and (min-width: 768px) {
    ul.navbar-nav {
        position: absolute;
        right: 0
    }

    .navbar-collapse {
        background-color: rgba(0,0,0);
    }

    .navbar > .container { max-width: 100%; padding: 0; }
}
</style>
