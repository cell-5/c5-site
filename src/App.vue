<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
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
    height: 100%;
    font-size: 100%;
}

@media (min-width: 1440px) {
    html {
        font-size: 19px
    }
}

@media (min-width: 1920px) {
    html {
        font-size: 24px
    }
}

@media (min-width: 2560px) {
    html {
        font-size: 29px
    }
}

@media (min-width: 3200px) {
    html {
        font-size: 36px
    }
}

@media (min-width: 3840px) {
    html {
        font-size: 44px
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
    position: relative;
    width: 90%;
    max-width: none !important;
}

.bg-dark {
    background-color: #2c302e !important
}

.img-fluid {
    max-width: 90% !important;
    height: auto !important
}

.solution {
    position: relative;
    margin: 0
}

.solution-wrapper {
    padding: 5rem 1rem;
    max-width: 90%;
    margin: 0 auto
}

@media (min-width: 992px) {
    .solution-wrapper {
        height: 100vh
    }
}

.solution:nth-child(odd) {
    background-color: #2c302e
}

.solution:nth-child(odd):after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3.13rem;
    width: 50%;
    border-left: 3.13rem solid transparent;
    border-bottom: 3.13rem solid #fefffe
}

.solution:nth-child(odd) p,
.solution:nth-child(odd) h3,
.solution:nth-child(odd) li {
    color: #fefffe
}

.solution:nth-child(even) {
    background-color: #fefffe
}

.solution:nth-child(even):after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3.13rem;
    width: 50%;
    border-left: 3.13rem solid transparent;
    border-bottom: 3.13rem solid #2c302e
}

.solution:nth-child(even) p,
.solution:nth-child(even) h3,
.solution:nth-child(even) li {
    color: #2c302e
}

.solution div.icon-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.solution .body-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.solution .body-wrapper div.solution-text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.solution figure {
    margin: 0 auto 1rem;
    text-align: center
}

.solution figure img {
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    margin: 0 auto
}

@media (min-width: 1200px) {
    .solution figure img {
        width: 40vmin;
        height: 40vmin
    }
}

@media (min-width: 992px) {
    .solution figure img {
        width: 40vmin;
        height: 40vmin
    }
}

@media (min-width: 992px) and (max-width: 1199px) {
    .solution figure img {
        width: 40vmin;
        height: 40vmin
    }
}

@media (max-width: 991px) {
    .solution figure img {
        width: 40vmin;
        height: 40vmin
    }
}

.solution figure figcaption {
    color: #2c302e;
    font-size: 3.2vmax;
    font-weight: bold
}

.solution h3 {
    font-size: 2rem;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

@media (max-width: 767px) and (orientation: portrait) {
    .solution h3 {
        font-size: 1.5rem;
        text-align: center;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
}

@media (max-width: 767px) and (orientation: landscape) {
    .solution h3 {
        font-size: 1.5rem;
        text-align: center;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
}

@media (min-width: 768px) and (max-width: 991px) and (orientation: portrait) {
    .solution h3 {
        font-size: 1.5rem;
        text-align: center;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
}

@media (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
    .solution h3 {
        font-size: 1.5rem;
        text-align: center;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear
    }
}

.solution p {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    line-height: 150%
}

@media (min-width: 481px) {
    .solution ul {
        text-indent: 1rem
    }
}

.solution ul li {
    font-family: "Montserrat", sans-serif;
    padding: 0.25rem 0
}

@media (max-width: 767px) and (orientation: portrait) {
    .solution ul li {
        font-size: 0.9rem;
        position: relative;
        padding-left: 1.5em
    }
}

@media (max-width: 767px) and (orientation: portrait) {
    .solution ul li i:first-of-type {
        position: absolute;
        left: 0;
        top: 7px
    }
}

a.contact-us-link:link,
a.contact-us-link:visited,
a.contact-us-link:active {
    color: #228f42
}

a.contact-us-link:hover {
    color: #269f49
}

.subtext {
    margin-bottom: 3em
}

span.text-orange {
    margin: 0px;
    padding: 0px;
    line-height: 1.2ch;
    display: inline
}

.text-orange {
    color: #d64933
}

.text-highlight {
    color: #228f42
}

.text-highlight-star {
    color: #fbeb00
}

ul {
    padding-left: 0
}

ul li {
    list-style: none;
    text-align: left
}

ul li .fas {
    font-size: 1.5rem;
    margin-right: 0.5rem
}

ul li p {
    font-size: 1.5rem
}

ul li .fas,
ul li p {
    font-size: inherit
}

</style>
