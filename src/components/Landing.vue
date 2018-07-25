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
import Header from './Header.vue'
import HomeSection from './HomeSection.vue'
import Solutions from './Solutions.vue'
import Sections from './Sections.vue'
import ProfileSection from './ProfileSection.vue'
import ContactSection from './ContactSection.vue'
import FooterSection from './FooterSection.vue'
import Welcome from "./Home/Cell5Welcome.vue";

export default {
  name: 'app',
  components: {
    Welcome,
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