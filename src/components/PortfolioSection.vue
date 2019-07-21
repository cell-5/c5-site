<template>
  <div id="portfolio">
    <Header></Header>
    <cell5-splash v-show="!isLoaded"></cell5-splash>
    <main role="main">
      <section class="portfolio">
        <div class="h-100">
          <b-row class="project-category no-gutters">
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
                            :learn-more="p.learnMore"
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
  import WhiteSpiderMedia from '../assets/img/portfolio/wsm.gif'
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
            src: WhiteSpiderMedia,
            title: "White Spider Media",
            href: 'http://whitespidermedia.com/',
            info: "A leading, bespoke media planning and buying agency.",
            category: [categories.website, categories.hosting, categories.onSiteSEO],
            learnMore: false,
          },
          {
            src: MarkEllwood,
            title: "Mark Ellwood",
            href: 'https://www.mark-ellwood.com/',
            info: "New York-based journalist",
            category: [categories.website],
            learnMore: false,
          },
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
            learnMore: false,
          },
          {
            src: Good2RentImg,
            title: "good2rent",
            href: 'http://good2rent.co.uk/',
            info: "Disruptive Tenant Referencing start-up",
            category: [categories.cloudMigration, categories.startUpDev],
            learnMore: false,
          },
          {
            src: MyValImg,
            title: "myVal",
            href: 'http://myVal.co.uk/',
            info: "Lead generation tool for estate agents",
            category: [categories.api, categories.startUpDev],
            learnMore: false,
          },
          {
            src: Atlam,
            title: "Atlam",
            // href: 'https://www.mark-ellwood.com/',
            info: "Team of engineers and technicians led by Alex Mark",
            category: [categories.website, categories.hosting],
            learnMore: false,
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
        this.updated()
      },
      '$route.query.categories': {
        handler: function () {
          this.handleClear()
          this.filterPorfolioFromURL()
        },
        deep: true,
        immediate: true
      },
    },
    methods: {
      filterPorfolioFromURL: function () {
        if (this.$route.query.categories) {
          const selectedCategories = JSON.parse(decodeURIComponent(this.$route.query.categories));
          for (let sc of selectedCategories) {
            for (let c in this.categories) {
              console.log("1", sc, "2", this.categories[c].text)
              if (sc.text === this.categories[c].text) {
                this.categories[c].updateCategory(true)
              }

            }
          }
        }
      },
      loaded() {
        const items = document.querySelectorAll('.item');
        new ImagesLoaded(items, () => {
          this.$emit("masonry-images-loaded");
          masonry = new Masonry(this.selector, this.options);
          this.$emit("masonry-loaded", masonry);
          this.isLoaded = true
        })

      },
      updated() {
        Vue.nextTick(() => {
          masonry.reloadItems()
          masonry.layout()
        })
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
    },
    created() {
      this.filterPorfolioFromURL();
    }
  };
</script>


<style scoped>

  @import 'vuetify/src/stylus/app.styl';

  .portfolio {
    position: relative;
    background: black;
    padding-top: 0.5rem;
  }

  .project-category {
    margin-top: 4.13rem;
    margin-bottom: 1rem;
  }

  .item {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1330px) {
    .grid-sizer {
      width: 90%;
    }

    .item {
      width: 90%;
      margin-left: 5vw;
      margin-right: 5vw;
    }
    
  }

  @media only screen and (min-width: 1330px) {
    .grid-sizer {
      width: 50%;
    }

    .item {
      width: 50%;
    }

    .thumbnail {
      width: 100%;
    }
  }

   @media only screen and (min-width: 2000px) {
    .grid-sizer {
      width: 33%;
    }

    .item {
      width: 33%;
    }

    .thumbnail {
      width: 100%;
    }
  }
  @media only screen and (min-width: 3000px) {
    .project-category {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }
</style>
