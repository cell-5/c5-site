<template>
    <section id="home" class="align-items-center">
            <div class="tagline-wrapper">
                <h2 id="tagline">
                    client-first
                    <a href="#solutions" class="tagline-carousel">
                        digital, web, mobile, design, cloud, marketing, e-commerce, legacy code, start-up
                    </a>
                    solutions
                </h2>
            </div>
            <a href="#solutions" class="learn-more-btn call-to-action">Learn more</a>
    </section>
</template>

<style scoped>
#home {
    background-color: #2c302e;
    color: #fefffe;
    font-family: "Montserrat", sans-serif;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100vh;
    margin: 0;
    margin-top: 0px;
    padding: 0 10vw;
    position: relative;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    overflow: hidden
}

#home:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 50px;
    width: 50%;
    border-left: 50px solid transparent;
    border-bottom: 50px solid #fefffe
}

#home * {
    margin: 0;
    padding: 0;
    line-height: 100%
}

#home div.tagline-wrapper {
    line-height: 1.75ch;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto
}

@media (min-width: 3840px) {
    #home div.tagline-wrapper {
        max-width: 3072px
    }
}

#home div.tagline-wrapper h2 {
    font-size: 6vmax !important;
    font-weight: 700;
    text-align: left
}

@media (min-width: 3840px) {
    #home div.tagline-wrapper h2 {
        font-size: 5vmax !important
    }
}

#home div.tagline-wrapper h2 ul.slick-dots {
    display: none !important
}

#home div.tagline-wrapper a {
    display: block
}

#home div.tagline-wrapper a:link,
#home div.tagline-wrapper a:visited {
    color: #d64933;
    text-decoration: none
}

#home div.tagline-wrapper a:hover {
    color: #d64933
}

#home div.tagline-wrapper a:active {
    color: #d64933
}

#home div.tagline-wrapper a:visited:active {
    color: #d64933
}

#home a.learn-more-btn {
    position: absolute;
    bottom: 30px;
    right: 14%;
    z-index: 2
}

#home a.learn-more-btn:link,
#home a.learn-more-btn:visited {
    display: inline-block;
    background-color: #228f42;
    color: white;
    padding: 1rem 3rem;
    margin-top: 0.5rem;
    text-decoration: none
}

#home a.learn-more-btn:hover {
    background-color: #269f49;
    color: white
}

#home a.learn-more-btn:active {
    background-color: #228f42;
    color: white
}

</style>

