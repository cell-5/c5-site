<template>
  <header class="siteheader" role="banner">
        <nav class="navbar navbar-expand-md navbar-dark">
            <h1 id="logo">
                <router-link to="/" class="navbar-brand">
                    <img src="../assets/img/logo-white.svg" alt="cell5 logo">
                </router-link>
            </h1>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible-navbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsible-navbar">
                <ul class="navbar-nav">
                		<template v-if="isHomepage">
	                    <li class="nav-item">
	                      <a class="nav-link" href="#home">
	                        Home
	                      </a>
	                    </li>
	                    <li class="nav-item">
	                     	<a class="nav-link" href="#solutions">
	                        Solutions
	                     	</a>
	                    </li>
	                    <li class="nav-item">
	                      <a class="nav-link" href="#profiles">
	                        The Team
	                      </a>
	                    </li>
                      <router-link to="portfolio" tag="li" class="nav-item">
                        <a class="nav-link unscrollable">Portfolio</a>
                      </router-link>
                    </template>
                    <li class="nav-item" :class="ctaClass">
                      <a class="nav-link" href="#contact-us">
                        Contact Us
                      </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import $ from 'jquery'
function highlightMenu ($window, $menuItem) {
  var top = $window.scrollTop()
  var items = $menuItem.map(function () {
    var selector = $(this).attr('href')
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

function animateSectionScroll (flag) {
  return function (e) {
    e.preventDefault()

    if (flag && window.innerWidth <= 767) {
      $('.navbar-toggler').click()
    }

    var selector = $(this).attr('href')
    var $section = $(selector)

    if (!$section.length) {
      return
    }
    $('html,body').animate({
      scrollTop: selector === '#home' || selector === '#' ? 0 : $section.offset().top
    }, 150)
  }
}

function animateTopScroll (e) {
  e.preventDefault()
  $('html,body').animate({
    scrollTop: 0
  }, 500)
}

function menuEffects () {
  $('header .nav-link:not(.unscrollable)').on('click', animateSectionScroll(true))
  $('#logo a').on('click', animateTopScroll)
  $('.sitefooter-bottom a').on('click', animateTopScroll)
  $('.learn-more-btn').on('click', animateSectionScroll(false))
  $('.solutions-nav a').on('click', animateSectionScroll(false))
  $('.contact-us-link').on('click', animateSectionScroll(false))

  var $menuItem = $('.navbar-nav li a:not(.unscrollable)')

  $(window).on('scroll', function () {
    highlightMenu($(this), $menuItem)
    if ($(window).scrollTop()) {
      $('#logo').addClass('shrink')
    } else {
      $('#logo').removeClass('shrink')
    }
  })
}
export default {
  computed: {
    isHomepage () {
      return this.$route.path === '/'
    },
    ctaClass () {
      if (!this.isHomepage) {
        return 'nav-cta'
      }
    }
  },
  mounted () {
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
    z-index: 9999
}

header.siteheader {
    background: #2c302e;
}

header .navbar {
    max-width: 90%;
    margin: 0 auto
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
}

@media (max-width: 767px) and (orientation: landscape) {
    #logo {
        padding: 0 0.5rem;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
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
    #logo a img {
        height: 3.13rem;
        width: 3.13rem;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
}

@media (max-width: 767px) and (orientation: landscape) {
    #logo a img {
        height: 50px;
        width: 50px;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
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

li.nav-item.nav-cta a {
  background: #d64933 !important;
  padding: 0.8em 1.5em;
}

@media only screen and (min-width: 768px) {
    ul.navbar-nav {
        position: absolute;
        right: 0
    }
}
</style>
