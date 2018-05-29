<template>
  <header class="siteheader" role="banner">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <h1 id="logo">
                <a class="navbar-brand" href="/">
                    <img src="../assets/img/logo-white.svg" alt="cell5 logo">
                </a>
            </h1>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible-navbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsible-navbar">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#solutions">
                            Solutions
                        </a>
                    </li>
                   <!-- <li class="nav-item">
                        <a class="nav-link" href="#testimonials">
                            Testimonials
                        </a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" href="#profiles">
                            The Team
                        </a>
                    </li>
                    <li class="nav-item">
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

const $ = require('jquery')
window.$ = $
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('#logo').addClass('shrink')
  } else {
    $('#logo').removeClass('shrink')
  }
})
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
    background: #2c302e
}

header .navbar {
    max-width: 1440px;
    margin: 0 auto
}

@media (min-width: 3840px) {
    header .navbar {
        max-width: 3072px
    }
}

#logo {
    line-height: 0;
    text-align: center;
    margin: 0;
    padding: 1.5rem;
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
    height: 50px;
    width: 50px;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

#logo a {
    color: #fefffe
}

#logo a img {
    height: 100px;
    width: 100px;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

@media (max-width: 767px) and (orientation: portrait) {
    #logo a img {
        height: 50px;
        width: 50px;
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

@media only screen and (min-width: 768px) {
    ul.navbar-nav {
        position: absolute;
        right: 0
    }
}
</style>
