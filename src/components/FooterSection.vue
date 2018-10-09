<template>
    <footer class="sitefooter" role="contentinfo">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="sitefooter-meta">
                        <img src="../assets/img/logo-white.svg" alt="Cell 5 company logo">
                        <span id="mantra">client-first</span>&nbsp;<span class="text-orange">digital</span>&nbsp;<span>solutions</span>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="sitefooter-meta">
                        <i class="fas fa-phone text-highlight"></i>
                        <a href="tel:020 3858 9959">020 3858 9959</a>

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
                        <i class="fas fa-map-marker text-orange"></i> England & Philippines
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="footer-cell">Cell 5 Limited (1188558) - 6 Feb 2018 - Registered Address:<address>
Ground Floor, 2 Woodberry Grove, London, England, N12 0DR</address></div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer-cell {
  margin-top: 1.2em;
    font-size: 0.75em;
    color: #888888;
}

img {
  height: 20px;
}

address{
    display: inline-block;
}

#mantra span {
    display: block;
    line-height: 1.6;
    margin-top: 0;
}
.sitefooter {
    background: black;
    color: white;
    padding-bottom: 1em;
    padding-top: 1em;
    text-align: center;
    line-height: 1em;
}

@media (max-width: 767px) {
    .sitefooter {
        padding: 0em 0;
        text-align: center
    }
}

@media (min-width: 992px) {
    .sitefooter [class*=col-lg-3]:not( last-of-type) {
        border-right: 1px dashed rgba(255, 255, 255, 0.2);
    }
}

@media (max-width: 991px) {
    .sitefooter [class*=col-lg-3]:nth-child(-n+2) {
        border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
    }
}

@media (max-width: 767px) {
    .sitefooter [class*=col-lg-3]:not( last-of-type) {
        border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
    }
}

.sitefooter a {
    color: white
}
.sitefooter-meta{
    margin-top: 0.3em;
     margin-bottom: 0.3em;
}
</style>

