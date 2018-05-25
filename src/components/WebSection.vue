<template>
    <section id="web" class="solution">
            <div class="solution-wrapper row align-items-center">
                <div class="icon-wrapper col-lg-5">
                    <figure>
                        <img src="../assets/img/web-light.svg" alt="Web icon" />
                    </figure>
                </div>
                <div class="body-wrapper col-lg-7">
                    <div class="solution-text">
                        <h3>web</h3>
                        <p><strong>Our design &amp; build package starts <span class="text-orange">from £350</span> and includes</strong></p>:
                            <ul>
                                <li>
                                    <i class="fas fa-check text-highlight"></i> website conception to deployment
                                </li>
                                <li>
                                    <i class="fas fa-check text-highlight"></i> mobile device compatibility
                                </li>
                                <li>
                                    <i class="fas fa-check text-highlight"></i> web analytics &amp; on-site s.e.o.
                                </li>
                                <li>
                                    <i class="fas fa-check text-highlight"></i> completely collaborative approach
                                </li>
                            </ul>

                            <p> <strong >This package can be extended with these <em>optional extras:</em></strong></p>

                            <ul class="extras">
                                <li>
                                    <i class="fas fa-star text-highlight-star"></i>  Basic Webmaster training<strong> - <span class="text-orange">£50&nbsp;once</span></strong>
                                </li>
                                <li>
                                    <i class="fas fa-star text-highlight-star"></i>  Monthly upkeep + Annual freshen-up<strong> - <span class="text-orange">£5&nbsp;a&nbsp;month</span></strong>
                                </li>
                                <li>
                                    <i class="fas fa-star text-highlight-star"></i>  Optimized hosting<strong> - <span class="text-orange">£5&nbsp;a&nbsp;month</span></strong>
                                </li>
                            </ul>
                        <p class="section-lead-in">
                            <strong>We can tailor the package based on your requirements,  <a href="#contact-us" class="contact-us-link">call us</a> to discuss.</strong>
                        </p>
                    </div>
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

