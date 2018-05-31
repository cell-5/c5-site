<template>
    <div id="portfolio">
        <Header></Header>
        <main role="main">
            <section class="portfolio">
                <div class="container">
                    <div class="row justify-content-md-center align-items-center">
                        <div class="col-md-7 col-lg-9">
                            <div class="portfolio-heading">
                                <h1 class="text-uppercase">Portfolio</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet id minima consequatur rem totam hic qui.</p>
                            </div>
                            <div class="portfolio-images">
                                <div>
                                    <a href="#">
                                        <img src="https://placehold.it/750x350" alt="Placeholder image" class="img-fluid mx-auto">
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="https://placehold.it/750x350" alt="Placeholder image" class="img-fluid mx-auto">
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="https://placehold.it/750x350" alt="Placeholder image" class="img-fluid mx-auto">
                                    </a>
                                </div>
                            </div>
                            <div class="portfolio-content">
                                <div>
                                    <article>
                                        <h2><a href="#">Melissa Twigg</a></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing  elit. Natus qui maiores, hic blanditiis asperiores. Excepturi quae deserunt hic molestias optio dignissimos soluta perspiciatis.</p>
                                    </article>
                                </div>
                                <div>
                                    <article>
                                        <h2><a href="#">Portland</a></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla reprehenderit sequi alias quibusdam, similique quod laudantium aperiam.</p>
                                    </article>
                                </div>
                                <div>
                                    <article>
                                        <h2><a href="#">That project named IDK</a></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, nobis maiores aut. Dolorum praesentium eaque reprehenderit quam, animi, ab necessitatibus.</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection></ContactSection>
            <FooterSection></FooterSection>
        </main>
    </div>
</template>

<script>
import Header from './Header.vue'
import ContactSection from './ContactSection.vue'
import FooterSection from './FooterSection.vue'

export default {
  name: 'portfolio',
  components: {
    Header,
    ContactSection,
    FooterSection
  }
}
</script>

