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
import $ from 'jquery'

function highlightMenu ($window, $menuItem) {
  var top = $window.scrollTop()
  var items = $menuItem.map(function () {
    var target = $(this).attr('href')
    if (top >= $(target).offset().top) {
      return target
    }
  })

  var current = items[items.length - 1]

  $menuItem.parent()
    .removeClass('active')
    .end()
    .filter('a[href="' + current + '"]')
    .parent()
    .addClass('active')
}

function animateSectionScroll (flag) {
  return function (e) {
    e.preventDefault()

    if (flag && window.innerWidth <= 767) {
      $('.navbar-toggler').click()
    }

    var section = $(this).attr('href')
    $('html,body').animate({
      scrollTop: section === '#home' || section === '#' ? 0 : $(section).offset().top
    }, 150)
  }
}

function animateTopScroll (e) {
  e.preventDefault()
  $('html,body').animate({
    scrollTop: 0
  }, 500)
}

function menuEffects () {
  $('header .nav-link').on('click', animateSectionScroll(true))
  $('#logo a').on('click', animateTopScroll)
  $('.sitefooter-bottom a').on('click', animateTopScroll)
  $('.learn-more-btn').on('click', animateSectionScroll(false))
  $('.solutions-nav a').on('click', animateSectionScroll(false))
  $('.contact-us-link').on('click', animateSectionScroll(false))

  var $menuItem = $('.navbar-nav li a')

  $(window).on('scroll', function () {
    highlightMenu($(this), $menuItem)
  })
}

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
    FooterSection
  },
  mounted () {
    menuEffects()
  }
}
</script>