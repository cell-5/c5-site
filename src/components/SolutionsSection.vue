<template>
    <section id="solutions" class="solution">
            <div class="solution-wrapper row align-items-center">
                <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <p class="text-center">
                        We provide fully managed technology services and product delivery for your growing business.
                    </p>

                    <div class="solutions-nav row">
                        <a href="#web" class="col-md-3 col-6">
                            <img src="../assets/img/web-dark.svg" alt="Web icon">
                            <p style="margin-left:10px;margin-right:10px;" class="call-to-action">web</p>
                        </a>
                        <a href="#mobile" class="col-md-3 col-6">
                            <img src="../assets/img/mobile-dark.svg" alt="Mobile icon">
                            <p class="call-to-action">mobile</p>
                        </a>
                        <a href="#design" class="col-md-3 col-6">
                            <img src="../assets/img/design-dark.svg" alt="Design icon">
                            <p class="call-to-action">design</p>
                        </a>
                        <a href="#cloud" class="col-md-3 col-6">
                            <img src="../assets/img/cloud-dark.svg" alt="Cloud icon">
                            <p class="call-to-action">cloud</p>
                        </a>
                        <a href="#marketing" class="col-md-3 col-6">
                            <img src="../assets/img/social-dark.svg" alt="Marketing icon">
                            <p class="call-to-action">marketing</p>
                        </a>
                        <a href="#e-commerce" class="col-md-3 col-6">
                            <img src="../assets/img/e-commerce-dark.svg" alt="E-commerce icon">
                            <p class="call-to-action">e-commerce</p>
                        </a>
                        <a href="#legacy-code" class="col-md-3 col-6">
                            <img src="../assets/img/legacy-dark.svg" alt="Legacy code uplift icon">
                            <p class="call-to-action">legacy code</p>
                        </a>
                        <a href="#start-up" class="col-md-3 col-6">
                            <img src="../assets/img/start-up-dark.svg" alt="Start-up growth icon">
                            <p class="call-to-action">start-up</p>
                        </a>
                    </div>
                    <p class="text-center">
                     Book a <a href="#contact-us" class="contact-us-link">free consultation</a> to discuss your needs with us.
                    </p>
                </div>
            </div>
    </section>
</template>

<style scoped>
#solutions {
    background-color: #fefffe;
    color: #2c302e;
    position: relative
}

#solutions:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 50px;
    width: 50%;
    border-left: 50px solid transparent;
    border-bottom: 50px solid #2c302e
}

#solutions h2 {
    text-align: center
}

#solutions p {
    font-size: 2vmax
}

@media (max-width: 767px) and (orientation: portrait) {
    #solutions p {
        font-size: 3.5vmax
    }
}

@media (max-width: 767px) and (orientation: landscape) {
    #solutions p {
        font-size: 3.5vmax
    }
}

#solutions div.solutions-nav {
    margin: 0;
    padding: 0
}

#solutions div.solutions-nav a {
    display: inline-block !important;
    text-align: center;
    margin: 0;
    padding: 1rem;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

#solutions div.solutions-nav a:link,
#solutions div.solutions-nav a:visited {
    color: #2c302e;
    text-decoration: none
}

#solutions div.solutions-nav a:hover {
    font-weight: bold;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear
}

#solutions div.solutions-nav a img {
    width: 12vmin;
    height: 12vmin
}

#solutions div.solutions-nav a p {
    font-size: 1.2rem;
    text-align: center
}

.solution {
    position: relative;
    margin: 0
}

.solution-wrapper {
    padding: 5rem 1rem;
    max-width: 1440px;
    margin: 0 auto
}

@media (min-width: 3840px) {
    .solution-wrapper {
        max-width: 3072px
    }
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
    height: 50px;
    width: 50%;
    border-left: 50px solid transparent;
    border-bottom: 50px solid #fefffe
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
    height: 50px;
    width: 50%;
    border-left: 50px solid transparent;
    border-bottom: 50px solid #2c302e
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
</style>

