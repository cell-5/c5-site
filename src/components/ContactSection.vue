<template>
    <section id="contact-us" class="contact">
            <div class="container">
                <h2 class="text-center">Book a
                    <strong>FREE</strong> consultation</h2>
                <br>
                <p class="text-center">It really is
                    <strong>win-win</strong>!<br>
                     <div class="center">
                    <ul>
                        <li>
                            <p>
                                <i class="fas fa-check text-highlight"></i> You get to ask our experts for advice without making any commitments.</p>
                        </li>
                        <li>
                            <p>
                                <i class="fas fa-check text-highlight"></i> It helps us because we get to understand what our clients are thinking about.</p>
                        </li>
                        <li>
                            <p>
                                <i class="fas fa-check text-highlight"></i> No SALES people here, just technical experts.</p>
                        </li>

                    </ul>
                     </div>
                </p>
                <p class="text-center">
                    <span class="text-orange">Call us: </span>  <a href="tel:0800 030 6674"> <strong>0800 030 6674</strong> </a> </p>

                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <form id="contact-form" action="https://r84zh9giqa.execute-api.eu-west-1.amazonaws.com/dev/contactUsHandler" method="post">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="text-center">
                                        <span>Or contact us:</span>
                                    </p>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="name" class="sr-only">Name</label>
                                        <input required type="text" class="form-control" name="name" id="name" placeholder="Name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="email" class="sr-only">Email</label>
                                        <input required type="email" class="form-control" name="email" id="email" placeholder="Email">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="message" class="sr-only">Message</label>
                                <textarea required name="message" rows="5" class="form-control" id="message" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" class="btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>
.contact {
    background: #2c302e;
    color: white;
    padding: 6vw 0;
    position: relative
}

@media (max-width: 767px) {
    .contact {
        padding: 5rem 0
    }
}

.contact strong {
    color: #228f42;
    font-weight: bolder
}

.contact p {
    font-size: 2rem
}

@media (max-width: 767px) {
    .contact p {
        font-size: inherit
    }
}

.contact ul {
    padding-left: 0
}

.contact ul li {
    list-style: none;
    text-align: left
}

.contact ul li .fa-check {
    font-size: 1.5rem;
    margin-right: 0.5rem
}

.contact ul li p {
    font-size: 1.5rem
}

.contact ul li .fa-check,
.contact ul li p {
    font-size: inherit
}

.contact form input,
.contact form textarea,
.contact form button {
    border-radius: 0
}

.contact form input {
    height: 45px
}

@media (min-width: 3840px) {
    .contact form input {
        height: 80px;
        font-size: 1em
    }
}

.contact form button {
    background: #d64933;
    color: white;
    min-width: 100px
}

.contact form .alert {
    margin-top: 20px
}

</style>

