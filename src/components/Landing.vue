<template>
  <div id="app">
    <Header></Header>
    <main role="main">
      <HomeSection></HomeSection>
      <SolutionsSection></SolutionsSection>
      <WebSection></WebSection>
      <MobileSection></MobileSection>
      <DesignSection></DesignSection>
      <CloudSection></CloudSection>
      <MarketingSection></MarketingSection>
      <EcommerceSection></EcommerceSection>
      <LegacyCodeSection></LegacyCodeSection>
      <StartUpSection></StartUpSection>
      <ProfileSection></ProfileSection>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
      <ThankYouSection></ThankYouSection>
    </main>
  </div>
</template>

<script>
import Header from './Header.vue'
import HomeSection from './HomeSection.vue'
import SolutionsSection from './SolutionsSection.vue'
import WebSection from './WebSection.vue'
import MobileSection from './MobileSection.vue'
import DesignSection from './DesignSection.vue'
import CloudSection from './CloudSection.vue'
import MarketingSection from './MarketingSection.vue'
import EcommerceSection from './EcommerceSection.vue'
import LegacyCodeSection from './LegacyCodeSection.vue'
import StartUpSection from './StartUpSection.vue'
import ProfileSection from './ProfileSection.vue'
import ContactSection from './ContactSection.vue'
import FooterSection from './FooterSection.vue'
import ThankYouSection from './ThankYouSection.vue'
import base from '../base.js'

export default {
  name: 'app',
  components: {
    Header,
    HomeSection,
    SolutionsSection,
    WebSection,
    MobileSection,
    DesignSection,
    CloudSection,
    MarketingSection,
    EcommerceSection,
    LegacyCodeSection,
    StartUpSection,
    ProfileSection,
    ContactSection,
    FooterSection,
    ThankYouSection
  },
  mounted () {
    base()
  }
}
</script>