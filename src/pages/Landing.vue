<template>
  <div id="app">
    <Header></Header>
    <main role="main">
      <!-- <welcome></welcome> -->
      <HomeSection></HomeSection>
      <Solutions></Solutions>
      <Sections></Sections>
      <ProfileSection></ProfileSection>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import HomeSection from '../components/HomeSection.vue'
import Solutions from '../components/Solutions.vue'
import Sections from '../components/Sections.vue'
import ProfileSection from '../components/ProfileSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
// import Welcome from "../components/Home/Cell5Welcome.vue"

export default {
  components: {
    // Welcome,
    Header,
    HomeSection,
    Solutions,
    Sections,
    ProfileSection,
    ContactSection,
    FooterSection
  }
}
</script>