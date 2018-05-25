<template>
    <section id="profiles">
            <div class="container">
                <h2>Meet The Team</h2>
                <div class="team">
                    <div>
                        <div class="team-member">
                            <div class="row">
                                <div class="col-lg-6">
                                    <figure class="team-member-photo">
                                        <img src="../assets/img/peter-vector.svg" alt="Peter Barry" class="img-fluid">
                                    </figure>
                                </div>
                                <div class="col-lg-6">
                                    <h3 class="team-member-name">Peter Barry</h3>
                                    <h4 class="team-member-title">Fullstack Developer</h4>
                                    <ul class="team-member-social">
                                        <li>
                                            <a href="https://uk.linkedin.com/in/peterbarry/" target="_blank">
                                                <span class="fab fa-linkedin"></span>
                                            </a>
                                        </li>
                                        <!-- <li>
                                            <a href="#" target="_blank">
                                                <span class="fab fa-facebook"></span>
                                            </a>
                                        </li> -->
                                        <!-- <li>
                                            <a href="#" target="_blank">
                                                <span class="fas fa-file-pdf"></span>
                                            </a>
                                        </li> -->
                                    </ul>
                                    <p class="team-member-bio">Peter is our Cloud specialist. He has 15 years experience building all sizes of web, mobile and cloud solutions.
                                    These days he is focused on AWS cloud architectures, but also on consulting on general IT strategy and DevOps.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="team-member">
                            <div class="row">
                                <div class="col-lg-6">
                                    <figure class="team-member-photo">
                                        <img src="../assets/img/harry-vector.svg" alt="Harry Wynn-Williams" class="img-fluid">
                                    </figure>
                                </div>
                                <div class="col-lg-6">
                                    <h3 class="team-member-name">Harry Wynn-Williams</h3>
                                    <h4 class="team-member-title">Fullstack Developer</h4>
                                    <ul class="team-member-social">
                                        <li>
                                            <a href="https://www.linkedin.com/in/harry-wynn-williams-59b89040/" target="_blank">
                                                <span class="fab fa-linkedin"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/harrywinmillion" target="_blank">
                                                <span class="fab fa-twitter"></span>
                                            </a>
                                        </li>
                                        <!-- <li>
                                            <a href="#" target="_blank">
                                                <span class="fas fa-file-pdf"></span>
                                            </a>
                                        </li> -->
                                    </ul>
                                    <p class="team-member-bio">Harry is the team hacker. He is just as comfortable working in legacy codebases as
                                        a new shiny Javascript framework. Currently passionate about VueJs but tech agnostic at heart and always working in the
                                        client's best interest. Get in touch if you need our resident web doctor to give your site an MOT.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="team-member">
                            <div class="row">
                                <div class="col-lg-6">
                                    <figure class="team-member-photo">
                                        <img src="../assets/img/pat-vector.svg" alt="Pat Bautista" class="img-fluid">
                                    </figure>
                                </div>
                                <div class="col-lg-6">
                                    <article class="team-member-about">
                                        <h3 class="team-member-name">Pat Bautista</h3>
                                        <h4 class="team-member-title">Back-end Developer</h4>
                                        <ul class="team-member-social">
                                            <li>
                                                <a href="https://www.linkedin.com/in/pat-bautista/" target="_blank">
                                                    <span class="fab fa-linkedin"></span>
                                                </a>
                                            </li>
                                            <!-- <li>
                                                <a href="#" target="_blank">
                                                    <span class="fab fa-facebook"></span>
                                                </a>
                                            </li> -->
                                            <!-- <li>
                                                <a href="#" target="_blank">
                                                    <span class="fas fa-file-pdf"></span>
                                                </a>
                                            </li> -->
                                        </ul>
                                        <p class="team-member-bio">
                                            Pat is the newest member to Cell 5. He's specialized in REST API development and integration but can put his hands in just about anything. Always get the job done.
                                        </p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="teamNav">
                    <div class="teamNav-slide">
                        <div>
                            <img src="../assets/img/peter-vector.svg" alt="Peter Barry">
                        </div>
                        <div>
                            <img src="../assets/img/harry-vector.svg" alt="Harry Wynn-Williams">
                        </div>
                        <div>
                            <img src="../assets/img/pat-vector.svg" alt="Pat Bautista">
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<style scoped>
#profiles {
    background: #d64933;
    color: white;
    padding: 6vw 0;
    position: relative
}

@media (max-width: 767px) {
    #profiles {
        padding: 5rem 0
    }
}

#profiles:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 50px;
    width: 50%;
    border-left: 50px solid transparent;
    border-bottom: 50px solid #2c302e
}

#profiles h2 {
    text-align: center
}

.team {
    margin-top: 4em
}

@media (min-width: 3840px) {
    .team-member {
        max-width: 2048px !important
    }
}

@media (min-width: 1200px) {
    .team-member {
        max-width: 1000px
    }
}

@media (min-width: 992px) {
    .team-member {
        margin: 0 auto
    }
}

@media (min-width: 992px) and (max-width: 1199px) {
    .team-member {
        max-width: 700px
    }
}

@media (max-width: 991px) {
    .team-member {
        margin: 0 30px;
        text-align: center
    }
}

@media (min-width: 992px) {
    .team-member-about {
        margin-bottom: 9em
    }
}

.team-member-name {
    font-size: 2.6rem;
    font-weight: bold;
    margin-bottom: 10px
}

@media (max-width: 767px) {
    .team-member-name {
        font-size: 2rem
    }
}

.team-member-title {
    margin: 0 0 20px;
    text-transform: uppercase
}

.team-member-bio {
    font-size: 1.1rem;
    line-height: 1.8
}

.team-member-photo {
    border-radius: 50%;
    margin: 0 auto;
    max-width: 350px;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 1rem
}

@media (min-width: 3840px) {
    .team-member-photo {
        max-width: 700px
    }
}

@media (max-width: 991px) {
    .team-member-photo {
        margin-bottom: 2em
    }
}

@media (max-width: 767px) {
    .team-member-photo {
        max-width: 230px
    }
}

.team-member-photo img {
    width: 100%
}

.team-member-social {
    font-size: 2rem;
    list-style: none;
    margin-bottom: 1em;
    padding-left: 0
}

@media (max-width: 767px) {
    .team-member-social {
        margin-bottom: 0.5em
    }
}

.team-member-social>li {
    display: inline-block
}

.team-member-social>li:not(:last-of-type) {
    margin-right: 15px
}

.team-member-social>li a {
    color: white
}

.teamNav {
    margin: 2em auto 0;
    max-width: 500px
}

@media (min-width: 3840px) {
    .teamNav {
        max-width: 1024px
    }
}

@media (max-width: 991px) {
    .teamNav {
        display: none
    }
}

.teamNav-slide img {
    cursor: pointer;
    border: 4px solid #e1e1e1;
    background: white;
    border-radius: 50%;
    width: 70px;
    height: 70px
}

@media (min-width: 3840px) {
    .teamNav-slide img {
        height: 100px;
        width: 100px
    }
}

.teamNav .slick-track {
    -webkit-transform: translate3d(0px, 0px, 0px) !important;
    transform: translate3d(0px, 0px, 0px) !important
}
</style>

