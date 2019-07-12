<template>
  <div id="portfolio">
    <Header></Header>
    <cell5-splash v-show="!isLoaded" @masonry-loaded=""></cell5-splash>
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


            <portfolio-item :key="i"
                            :title="p.title"
                            :info="p.info"
                            :image="p.src"
                            :category="p.category"
                            :href="p.href">
            </portfolio-item>
          </div>
        </div>
      </section>
      <FooterSection></FooterSection>
    </main>
  </div>
</template>

<script>
  import Header from "./Header.vue";
  import FooterSection from "./FooterSection.vue";
  import Categories from "./portfolio/Categories";
  import categories from './portfolio/categories'
  import PortfolioItem from "./portfolio/PortfolioItem.vue"
  import MelissaTwiggImg from '../assets/img/portfolio/mtwigg-screenshot-2.jpg'
  import PortlandImg from '../assets/img/portfolio/portland-screenshot.jpg'
  import Good2RentImg from '../assets/img/portfolio/good2rent-screenshot.jpg'
  import MyValImg from '../assets/img/portfolio/myval-screenshot.jpg'
  import WhiteSpiderMedia from '../assets/img/portfolio/white-spider-media.png'
  import MarkEllwood from '../assets/img/portfolio/mark-ellwood.gif'
  import Atlam from '../assets/img/portfolio/atlam.gif'
  import Cell5Splash from './Home/Cell5Welcome.vue'

  import Vue from "vue";

  const Masonry = require('masonry-layout');
  const ImagesLoaded = require('imagesloaded');
  let masonry


  export default {
    name: "portfolio",
    components: {
      Cell5Splash,
      Categories,
      Header,
      FooterSection,
      PortfolioItem
    },
    data() {
      return {
        categories: categories,
        selector: ".viewer",
        isLoaded: false,
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
            info: "London-based freelance journalist",
            category: [categories.website, categories.hosting],
            learnMore: false,
          },
          {
            src: PortlandImg,
            title: 'Portland Decorating & Design',
            href: 'http://portlanddecorating.co.uk/',
            info: "London based painter and decorator",
            category: [categories.webRescue, categories.onSiteSEO],
          },
          {
            src: Good2RentImg,
            title: "good2rent",
            href: 'http://good2rent.co.uk/',
            info: "Disruptive Tenant Referencing start-up",
            category: [categories.cloudMigration, categories.startUpDev],
          },
          {
            src: MyValImg,
            title: "myVal",
            href: 'http://myVal.co.uk/',
            info: "Lead generation tool for estate agents",
            category: [categories.api, categories.startUpDev],
          },
          {
            src: WhiteSpiderMedia,
            title: "White Spider Media",
            href: 'http://whitespidermedia.co.uk/',
            info: "A leading, bespoke media planning and buying agency.",
            category: [categories.website, categories.hosting, categories.onSiteSEO],
          },
          {
            src: MarkEllwood,
            title: "Mark Ellwood",
            href: 'https://www.mark-ellwood.com/',
            info: "New York-based journalist",
            category: [categories.website],
          },
          {
            src: Atlam,
            title: "Atlam",
            // href: 'https://www.mark-ellwood.com/',
            info: "Team of engineers and technicians led by Alex Mark",
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
      filteredPortfolio: function () {
        console.log("CALLED")
        this.updated()
      }
    },
    methods: {
      loaded() {
        ImagesLoaded(this.selector, () => {
          this.$emit("masonry-images-loaded");
          masonry = new Masonry(this.selector, this.options);
          this.$emit("masonry-loaded", masonry);
          this.isLoaded = true
        });
      },
      updated() {
        Vue.nextTick(() => {
          masonry.reloadItems()
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

  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .7;
    position: absolute;
    width: 100%;
  }

  .portfolio {
    position: relative;
    background: white;
  }

  .project-category {
    /*position: fixed;*/
    margin-top: 5em;
    margin-bottom: 1em;
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
      width: 33%;
    }
  }


</style>
