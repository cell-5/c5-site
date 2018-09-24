<template>
    <div>
        <Header></Header>
        <main role="main">
            <PortfolioSection></PortfolioSection>
            <FooterSection></FooterSection>
        </main>
    </div>
</template>

<script>
//import Logo from '~/components/Logo.vue'
import PortfolioSection from '~/components/PortfolioSection.vue';
import Header from '~/components/Header.vue';
import FooterSection from '~/components/FooterSection.vue'

export default {
  components: {
    Header,
    PortfolioSection,
    FooterSection
  }
}
</script>

