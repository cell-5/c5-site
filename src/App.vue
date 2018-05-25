<template>
  <div id="app">
    <Header></Header>
    <main role="main">
      <HomeSection></HomeSection>
      <SolutionsSection></SolutionsSection>
      <WebSection></WebSection>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HomeSection from './components/HomeSection.vue'
import SolutionsSection from './components/SolutionsSection.vue'
import WebSection from './components/WebSection.vue'

export default {
  name: 'app',
  components: {
    Header,
    HomeSection,
    SolutionsSection,
    WebSection
  }
}
</script>

<style lang="scss" scoped>
  //@import './scss/app.scss'
  @font-face {
    font-family: 'Merriweather Sans';
    font-style: normal;
    font-weight: 400;
    src: local("Merriweather Sans"), local("MerriweatherSans-Regular"), url(https://fonts.gstatic.com/s/merriweathersans/v9/2-c99IRs1JiJN1FRAMjTN5zd9vgsFHX7QjX78w.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
}

@font-face {
    font-family: 'Merriweather Sans';
    font-style: normal;
    font-weight: 400;
    src: local("Merriweather Sans"), local("MerriweatherSans-Regular"), url(https://fonts.gstatic.com/s/merriweathersans/v9/2-c99IRs1JiJN1FRAMjTN5zd9vgsFHX1QjU.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local("Montserrat Regular"), local("Montserrat-Regular"), url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local("Montserrat Regular"), local("Montserrat-Regular"), url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local("Montserrat Regular"), local("Montserrat-Regular"), url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local("Montserrat Regular"), local("Montserrat-Regular"), url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local("Montserrat Regular"), local("Montserrat-Regular"), url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local("Montserrat Bold"), local("Montserrat-Bold"), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_dJE3gTD_u50.woff2) format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local("Montserrat Bold"), local("Montserrat-Bold"), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_dJE3g3D_u50.woff2) format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local("Montserrat Bold"), local("Montserrat-Bold"), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_dJE3gbD_u50.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local("Montserrat Bold"), local("Montserrat-Bold"), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_dJE3gfD_u50.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local("Montserrat Bold"), local("Montserrat-Bold"), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: local("Montserrat Black"), local("Montserrat-Black"), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_epG3gTD_u50.woff2) format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: local("Montserrat Black"), local("Montserrat-Black"), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_epG3g3D_u50.woff2) format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: local("Montserrat Black"), local("Montserrat-Black"), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_epG3gbD_u50.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: local("Montserrat Black"), local("Montserrat-Black"), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_epG3gfD_u50.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: local("Montserrat Black"), local("Montserrat-Black"), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_epG3gnD_g.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}

html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow-y: scroll;
    height: 100%
}

@media (min-width: 3840px) {
    html {
        font-size: 34px
    }
}

*,
*:before,
*:after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit
}

body {
    font-size: 1rem;
    height: 100%
}

h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 4vmax;
    font-weight: 500;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

@media (max-width: 767px) and (orientation: portrait) {
    h2 {
        font-size: 4vmax;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
}

h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 3vmax;
    font-weight: 500;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

@media (max-width: 767px) and (orientation: portrait) {
    h3 {
        font-size: 3vmax;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
}

.center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.container {
    position: relative
}

@media (min-width: 3840px) {
    .container {
        max-width: 3072px
    }
}

.bg-dark {
    background-color: #2c302e !important
}

.img-fluid {
    max-width: 90% !important;
    height: auto !important
}

</style>
