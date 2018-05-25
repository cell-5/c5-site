<template>
    <section id="mobile" class="solution">
            <div class="solution-wrapper row align-items-center">
                <div class="icon-wrapper col d-block d-lg-none">
                    <figure>
                        <img src="../assets/img/mobile-dark.svg" alt="Mobile icon" />
                    </figure>
                </div>
                <div class="body-wrapper col-lg-7">
                    <div class="solution-text">
                        <h3>mobile</h3>

                        <p>
                            <strong>Our mobile app development package starts <span class="text-orange">at £800</span> and include</strong>:
                        </p>
                        <ul >
                            <li> <i class="fas fa-check text-highlight"></i>Strategy Workshop</li>
                            <li> <i class="fas fa-check text-highlight"></i>Competition Analysis</li>
                            <li> <i class="fas fa-check text-highlight"></i>User Experience Design</li>
                            <li> <i class="fas fa-check text-highlight"></i>Rapid Prototyping</li>
                            <li> <i class="fas fa-check text-highlight"></i>Mobile Analytics integration</li>
                            <li> <i class="fas fa-check text-highlight"></i>Publishing 1.0 <i class="fab fa-android fa-1x"></i>
                            <i class="fab fa-apple fa-1x"></i></li>
                        </ul>
                        <p>
                            <strong>We also offer: </strong>
                        </p>
                        <ul >
                            <li> <i class="fas fa-check text-highlight"></i>Application upgrade</li>
                        </ul>

                        <p> <strong>Here are our post-launch <em> extras:</em></strong></p>

                        <ul class="extras">
                            <li>
                                <i class="fas fa-star text-highlight-star"></i>Mobile Analytics and Funnel Analysis<strong> - <span class="text-orange">£250&nbsp;one&nbsp;off</span></strong>
                            </li>
                            <li>
                                <i class="fas fa-star text-highlight-star"></i>Monthly Maintenance / Annual Freshen-up<strong> - <span class="text-orange">£25&nbsp;monthly</span></strong>
                            </li>
                        </ul>
                        <p>
                            <strong>
                                <a href="#contact-us" class="contact-us-link">Call us</a> and let's talk about your idea.
                            </strong>
                        </p>
                        <!-- <p>
                            <em>
                                Most mobile applications do not exist in isolation but rely on cloud services and are part of an omni-channel offering.</br>
                                We can help you navigate, design, build and manage the entire solution when you are ready.
                            </em>
                        </p> -->

                        <!-- <div class="technologies">
                            <i style="margin-right: .5em;"class="fab fa-android fa-4x"></i>
                            <i class="fab fa-apple fa-4x"></i>
                        </div> -->
                    </div>
                </div>
                <div class="icon-wrapper col-lg-5 d-none d-lg-flex">
                    <figure>
                        <img src="img/mobile-dark.svg" alt="Mobile icon" />
                    </figure>
                </div>
            </div>
        </section>
</template>

<style scoped>
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

