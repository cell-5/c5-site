<template>
    <section id="solutions" class="solution">
            <div class="solution-wrapper row align-items-center">
                <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <p class="text-center">
                        We provide fully managed technology services and product delivery for your growing business.
                    </p>

                    <div class="solutions-nav row">
                        <a href="#web" class="col-md-6 col-6">
                            <img src="../assets/img/web-dark.svg" alt="Web icon">
                            <p style="margin-left:10px;margin-right:10px;" class="call-to-action">web</p>
                        </a>
                        <a href="#mobile" class="col-md-6 col-6">
                            <img src="../assets/img/mobile-dark.svg" alt="Mobile icon">
                            <p class="call-to-action">mobile</p>
                        </a>
                        <!-- <a href="#design" class="col-md-6 col-6">
                            <img src="../assets/img/design-dark.svg" alt="Design icon">
                            <p class="call-to-action">design</p>
                        </a> -->
                        <a href="#cloud" class="col-md-6 col-6">
                            <img src="../assets/img/cloud-dark.svg" alt="Cloud icon">
                            <p class="call-to-action">cloud</p>
                        </a>
                        <!-- <a href="#marketing" class="col-md-6 col-6">
                            <img src="../assets/img/social-dark.svg" alt="Marketing icon">
                            <p class="call-to-action">marketing</p>
                        </a> -->
                        <!-- <a href="#e-commerce" class="col-md-6 col-6">
                            <img src="../assets/img/e-commerce-dark.svg" alt="E-commerce icon">
                            <p class="call-to-action">e-commerce</p>
                        </a> -->
                        <!-- <a href="#legacy-code" class="col-md-6 col-6">
                            <img src="../assets/img/legacy-dark.svg" alt="Legacy code uplift icon">
                            <p class="call-to-action">legacy code</p>
                        </a> -->
                        <a href="#start-up" class="col-md-6 col-6">
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
    height: 3.13rem;
    width: 50%;
    border-left: 3.13rem solid transparent;
    border-bottom: 3.13rem solid #2c302e
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
    width: 20vmin;
    height: 20vmin
}

#solutions div.solutions-nav a p {
    font-size: 1.2rem;
    text-align: center
}
</style>

