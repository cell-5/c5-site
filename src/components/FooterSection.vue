<template>
    <footer class="sitefooter" role="contentinfo">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="sitefooter-meta">
                        <img src="../assets/img/logo-white.svg" alt="Cell 5 company logo">
                        <span id="mantra">client-first<span class="text-orange">digital</span>solutions</span>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="sitefooter-meta">
                        <i class="fas fa-phone text-highlight"></i>
                        <a href="tel:0800 030 6674">0800 030 6674</a>

                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="sitefooter-meta">
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:hello@cell5.co.uk">hello@cell5.co.uk</a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="sitefooter-meta">
                        <i class="fas fa-map-marker text-orange"></i>
                        <address>
                            Fulham &amp; Chelmsford, UK<br>
                            San Fernando City, PH
                        </address>
                    </div>
                </div>


            </div>
        </div>
    </footer>
</template>
<style scoped>
#mantra span {
    display: block;
    line-height: 1.6;
    margin-top: 0;
}
.sitefooter {
    background: black;
    color: white;
    padding-bottom: 2em;
    padding-top: 2em;
    text-align: center
}

@media (max-width: 767px) {
    .sitefooter {
        padding: 0em 0;
        text-align: center
    }
}

@media (min-width: 992px) {
    .sitefooter [class*=col-lg-3]:not( last-of-type) {
        border-right: 1px dashed rgba(255, 255, 255, 0.2)
    }
}

@media (max-width: 991px) {
    .sitefooter [class*=col-lg-3]:nth-child(-n+2) {
        padding-bottom: 10px;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.2)
    }
}

@media (max-width: 767px) {
    .sitefooter [class*=col-lg-3]:not( last-of-type) {
        padding-bottom: 10px;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.2)
    }
}

.sitefooter-meta {
    max-width: 80%;
    margin: 1em auto 0
}

.sitefooter-meta i {
    display: block;
    font-size: 1.4rem;
    margin-bottom: 15px
}

.sitefooter-meta address,
.sitefooter-meta span,
.sitefooter-meta a {
    display: block;
    font-weight: bold;
    margin-top: 10px
}

.sitefooter-meta span,
.sitefooter-meta a {
    font-size: 1.2rem
}

.sitefooter img {
    height: 1.5em;
    width: 1.5em;
}

.sitefooter a {
    color: white
}
</style>

