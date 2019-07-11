<template>
  <div id="portfolio">
    <Header></Header>
    <main role="main">
      <section class="portfolio">
        <div class="h-100">
          <b-row class="project-category">
            <b-col class="d-flex justify-content-center flex-column flex-md-row">
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
              <img class="thumbnail" :id="i + 1" :src="p.src" :data-project-name="p.info">
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
  import MelissaTwiggImg from '../../assets/img/portfolio/mtwigg-screenshot-2.jpg'
  import PortlandImg from '../../assets/img/portfolio/portland-screenshot.jpg'
  import Good2RentImg from '../../assets/img/portfolio/good2rent-screenshot.jpg'
  import MyValImg from '../../assets/img/portfolio/myval-screenshot.jpg'
  import WhiteSpiderMedia from '../../assets/img/portfolio/white-spider-media.png'

  const Masonry = require('masonry-layout');
  const ImagesLoaded = require('imagesloaded');
  let masonry

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
            src: MelissaTwiggImg,
            href: 'http://melissatwigg.co.uk',
            title: 'Melissa Twigg',
            info: "First description",
            category: [categories.website, categories.hosting],
          },
          {
            src: PortlandImg,
            title: 'Portland Decorating & Design',
            href: 'http://portlanddecorating.co.uk/',
            info:
              "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
            category: [categories.webRescue, categories.onSiteSEO],
          },
          {
            src: Good2RentImg,
            title: "good2rent",
            href: 'http://good2rent.co.uk/',
            info:
              "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
            category: [categories.cloudMigration, categories.startUpDev],
          },
          {
            src: MyValImg,
            title: "myVal",
            href: 'http://myVal.co.uk/',
            info:
              "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
            category: [categories.api, categories.startUpDev],
          },
          {
            src: WhiteSpiderMedia,
            title: "White Spider Media",
            href: 'http://whitespidermedia.co.uk/',
            info:
              "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
            category: [categories.website, categories.hosting],
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
      filteredPortfolio: function() {
        console.log("called")
        this.loaded();

        // ImagesLoaded(this.selector, () => {
        //   masonry.layout()
        //
        // })
      }
    },
    methods: {
      loaded() {
        // all images are loaded
        ImagesLoaded(this.selector, () => {
          this.$emit("masonry-images-loaded");
          // activate mansonry grid
          masonry = new Masonry(this.selector, this.options);
          this.$emit("masonry-loaded", masonry);
          masonry.layout()
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
      width: 33%;
    }

    .item {
      width: 33%;
      padding-bottom: 10px;
      padding-left: 10px;
    }

    .thumbnail {
      width: 100%;
    }

    .box-1 {
      width: 66%;
    }
  }


</style>
