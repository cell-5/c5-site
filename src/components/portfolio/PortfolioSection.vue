<template>
  <div id="portfolio">
    <Header></Header>
    <main role="main">
      <section class="portfolio">
        <div class="h-100">
          <b-row class="project-category">
            <b-col class="services d-flex justify-content-center flex-column flex-md-row">
              <categories v-model="categories" @clearAll="handleClear"/>
            </b-col>
          </b-row>
        </div>
        <div class="viewer">
          <div class="grid-sizer"></div>
          <div v-for="(p, i) in filteredPortfolio" :data-index="i + 1" :key="i + 1" :class="`box-${i + 1}`"
               class="item">
            <picture>
              <!--              <source media="(min-width: 1200px)" :id="i + 1" :srcset="p.srcBig">-->
              <!--              <source media="(min-width: 768px)" :id="i + 1" :srcset="p.src">-->
              <img class="work-thumb" :id="i + 1" :src="p.src" :data-project-name="p.info">
            </picture>
          </div>
        </div>
      </section>
      <FooterSection></FooterSection>
    </main>
  </div>
</template>

<script>
  import Header from "../Header.vue";
  import FooterSection from "../FooterSection.vue";
  import Categories from "../portfolio/Categories";
  import categories from './categories'


  const Masonry = require('masonry-layout');
  const ImagesLoaded = require('imagesloaded');


  export default {
    name: "portfolio",
    components: {
      Categories,
      Header,
      FooterSection
    },
    data() {
      return {
        categories: categories,
        selector: ".viewer",
        options: {
          percentPosition: true,
          gutter: 0,
          itemSelector: ".item",
          columnWidth: ".grid-sizer"
        }
      }
    },
    computed: {
      portfolio() {
        return [
          {
            src: "https://placeimg.com/400/400/grayscale",
            href: null,
            link: "https://google.com",
            title: "This is first img title",
            info: "First description",
            target: "modal",
            category: [categories.webRescue, categories.hosting],
          },
          {
            src: "https://placeimg.com/400/400/nature",
            title: "This is second img title",
            href: null,
            link: "https://google.com",
            info:
              "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
            target: "modal",
            category: [categories.cloudMigration, categories.startUpDev],
          },
          {
            src: "https://placeimg.com/400/400/nature",
            title: "This is second img title",
            href: null,
            link: "https://google.com",
            info:
              "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
            target: "modal",
            category: [categories.webRescue, categories.api],
          }
        ];
      },
      filteredPortfolio() {
        let filterAll = this.portfolio.flatMap(item => item.category).every(c => c.isSelected === false)
        if (!filterAll) {
          return this.portfolio.filter(item => item.category.some(c => c.getIsSelected()));
        } else {
          return this.portfolio;
        }
      },
    },
    watch: {
      portfolio() {
        this.loaded();
      }
    },
    methods: {
      loaded() {
        // all images are loaded
        ImagesLoaded(this.selector, () => {
          this.$emit("masonry-images-loaded");
          // activate mansonry grid
          let masonry = new Masonry(this.selector, this.options);
          this.$emit("masonry-loaded", masonry);
        });
      },
      handleClear() {
        const values = Object.values(categories)

        for (let c in values) {
          values[c].reset()
        }

      },
      getData() {
        return this.portfolio;
      },
    },
    mounted() {
      this.loaded();
    }
  };
</script>
<style>
  .portfolio {
    margin-bottom: 5em;
    position: relative;
    background: white;
  }

  .project-category {
    padding-top: 100px;
  }

  /*.vue-masonry-gallery-container .vue-masonry-gallery-scroll {*/
  /*  overflow-y: hidden !important;*/
  /*  padding-top: 1em;*/
  /*}*/

  /*.vue-masonry-gallery {*/
  /*  position: relative;*/
  /*}*/

  /*.portfolio .container {*/
  /*  padding-bottom: 5em;*/
  /*}*/

  /*.portfolio-heading {*/
  /*  text-align: center;*/
  /*  max-width: 80%;*/
  /*  margin: 0 auto;*/
  /*}*/

  /*.lightbox-alpha {*/
  /*  transition: all 0.3s ease-out;*/
  /*  position: fixed;*/
  /*  background: rgba(0, 0, 0, 0.95);*/
  /*  height: 100%;*/
  /*  width: 100%;*/
  /*  z-index: 999;*/
  /*  opacity: 1;*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*}*/

  /*.fadeIn {*/
  /*  animation-name: fadeIn;*/
  /*}*/

  /*.animated {*/
  /*  animation-duration: 1s;*/
  /*  animation-fill-mode: both;*/
  /*}*/

  /*.lightbox-content {*/
  /*  position: absolute;*/
  /*  left: 50%;*/
  /*  top: 50%;*/
  /*  transform: translate(-50%, -50%);*/
  /*  height: auto;*/
  /*  overflow: auto;*/
  /*}*/

  /*.lightbox-container {*/
  /*  text-align: center;*/
  /*}*/

  /*.lightbox-container-info {*/
  /*  background: white;*/
  /*  padding: 10px;*/
  /*  position: absolute;*/
  /*  bottom: 0;*/
  /*  width: 100%;*/
  /*}*/

  /*img {*/
  /*  width: auto;*/
  /*  height: auto;*/
  /*  max-width: 100%;*/
  /*  max-height: calc(100vh - 90px);*/
  /*}*/

  /*.close-icon {*/
  /*  top: -7px;*/
  /*  right: 0;*/
  /*  padding: 0 10px;*/
  /*  font-size: 45px;*/
  /*}*/

  /*.close-icon,*/
  /*.prev-icon,*/
  /*.next-icon {*/
  /*  background: rgba(0, 0, 0, 0.2);*/
  /*}*/

  /*.next-icon {*/
  /*  right: 0;*/
  /*}*/

  /*.cursor-pointer {*/
  /*  cursor: pointer;*/
  /*}*/

  /*.img-box {*/
  /*  float: left;*/
  /*}*/

  /*.html-overflow {*/
  /*  overflow-x: hidden;*/
  /*  overflow-y: scroll;*/
  /*}*/

  /*@media only screen and (max-width: 767px) {*/
  /*  .lightbox-content {*/
  /*    width: 90%;*/
  /*  }*/

  /*  .lightbox-container {*/
  /*    width: 100%;*/
  /*  }*/
  /*}*/

  @media only screen and (max-width: 768px) {
    .grid-sizer {
      width: 100%;
    }

    .item {
      width: 100%;
      padding-bottom: 10px;
      padding-left: 0px;
    }

    /*.box-0 {*/
    /*  width: 100%;*/
    /*}*/
  }

  @media only screen and (min-width: 769px) {
    .grid-sizer {
      width: 33%;
    }

    .item {
      width: 33%;
      padding-bottom: 10px;
      padding-left: 10px;
    }

    /*.box-0 {*/
    /*  width: 66%;*/
    /*}*/
  }

  @media only screen and (min-width: 1200px) {
    .grid-sizer {
      width: 25%;
    }

    .item {
      width: 10%;
      padding-bottom: 10px;
      padding-left: 10px;
    }

    .box-0 {
      width: 10%;
    }
  }


</style>
