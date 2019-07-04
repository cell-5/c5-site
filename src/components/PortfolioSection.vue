<template>
  <div id="portfolio">
    <Header></Header>
    <main role="main">
      <section class="portfolio">
        <div class="h-100">
          <b-row class="project-category">
            <b-col class="services d-flex justify-content-center flex-column flex-md-row">
              <Categories @handleSelect="handleSelect" @clearAll="clearAll"/>
            </b-col>
          </b-row>
          <vue-masonry-gallery
            ref="myGallery"
            v-if="this.filter == ''"
            :target="options.target"
            :maxCols="options.maxCols"
            :gap="options.gap"
            :mobileGap="options.mobileGap"
            :imgsArr="portfolio"
            @scrollReachBottom="getData"
          ></vue-masonry-gallery>

          <vue-masonry-gallery
            v-else
            ref="myGallery"
            :target="options.target"
            :maxCols="options.maxCols"
            :gap="options.gap"
            :mobileGap="options.mobileGap"
            :imgsArr="filteredPortfolio"
            @scrollReachBottom="getData"
          ></vue-masonry-gallery>
      </section>
      <FooterSection></FooterSection>
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import FooterSection from "./FooterSection.vue";
import VueMasonryGallery from "vue-masonry-gallery";
import Categories from "./Categories";
import JQuery from "jquery";
import { setTimeout } from "timers";

let $ = JQuery;

export default {
  name: "portfolio",
  mounted() {
    var container = document.querySelector(".vue-masonry-gallery-container")
    var parentContainer = this.$refs["myGallery"];
    var gparent = document.querySelector(
      ".vue-masonry-gallery-scroll"
    );
    var parent = document.querySelector(".vue-masonry-gallery");

    function getPosition(elm) {
      var xPos = 0, yPos = 0;
      
      while(elm) {
        xPos += (elm.offsetLeft - elm.scrollLeft + elm.clientLeft);
        yPos += (elm.offsetTop - elm.scrollTop + elm.clientTop);
        elm = elm.offsetParent;
      }
      
      return { x: xPos, y: yPos };
    }

    //created custom function for setting gallery container height to avoid double scroll
    //and minimize adding of media query
    function heightGallery() {
      setTimeout(() => {
        var list = document.querySelectorAll(".img-box");
        var parentOffset = getPosition(parent);
        var arrList = Array.from(list);
        var bottom = 0;

        arrList.map(function(el) {
          var elemOffset = getPosition(el);
          var elemBottom = elemOffset['y'] + el.offsetHeight - parentOffset['y'];
          if (elemBottom > bottom) {
            bottom = elemBottom;
          }
        });
        [gparent].map(
          el => (el.style.minHeight = bottom + 'px')
        );
      }, 500);
    }
    
    heightGallery();

    //add initial height on page load and prevent page from being jumpy
    var footerFade = document.querySelector("footer");
    setTimeout(() => (this.initialHeight = false), 400);
    setTimeout(() => (footerFade.style.opacity = 1), 600);
  },
  computed: {
    filteredPortfolio() {
      if (this.filter !== ""){
        let lists = [];
        this.portfolio.filter(item => {
            if(item.isSelected === true){
              lists.push({
                src: item.src,
                srcBig: item.srcBig,
                href: item.href,
                link: item.link,
                title: item.title,
                info: item.info,
                target: item.target,
                category: item.category,
              })
            }
          });
          return lists;
      }
    },
    portfolio() {
      return [
        {
          src: "https://placeimg.com/1024/1024/grayscale",
          srcBig: "https://placeimg.com/250/250/grayscale",
          href: null,
          link: "https://google.com",
          title: "This is first img title",
          info: "First description",
          target: "modal",
          category: ["WEBSITE", "HOSTING"],
          isSelected: false
        },
        {
          src: "https://placeimg.com/768/768/nature",
          srcBig: "https://placeimg.com/250/250/nature",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal",
          category: ["CLOUD_MIGRATION", "STARTUP_APP_DEV"],
          isSelected: false
        },
        {
          src: "https://placeimg.com/600/550/nature",
          srcBig: "https://placeimg.com/250/250/nature",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal",
          category: ["WEB_RESCUE", "API_INTEGRATION"],
          isSelected: false
        },
        {
          src: "https://placeimg.com/1024/1024/animals",
          srcBig: "https://placeimg.com/250/300/animals",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal",
          category: ["CLOUD_MIGRATION", "STARTUP_APP_DEV"],
          isSelected: false
        },
        {
          src: "https://placeimg.com/900/800/arh",
          srcBig: "https://placeimg.com/900/400/arch",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal",
          category: ["CLOUD_MIGRATION", "STARTUP_APP_DEV"],
          isSelected: false
        },
        {
          src: "https://placeimg.com/1300/1200/nature",
          srcBig: "https://placeimg.com/400/250/nature",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal",
          category: ["CLOUD_MIGRATION", "STARTUP_APP_DEV"],
          isSelected: false
        },
        {
          src: "https://placeimg.com/1300/1200/grayscale",
          srcBig: "https://placeimg.com/400/250/grayscale",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal",
          category: ["WEB_RESCUE", "API_INTEGRATION"],
          isSelected: false
        },
        {
          src: "https://placeimg.com/1300/1200/animals",
          srcBig: "https://placeimg.com/400/250/animals",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal",
          category: ["WEB_RESCUE", "ON_SITE_SEO"],
          isSelected: false
        },
        {
          src: "https://placeimg.com/1000/900/tech",
          srcBig: "https://placeimg.com/1000/900/tech",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal",
          category: ["CLOUD_MIGRATION", "STARTUP_APP_DEV"],
          isSelected: false
        },
        {
          src: "https://placeimg.com/1000/900/nature",
          srcBig: "https://placeimg.com/1000/900/nature",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal",
          category: ["CLOUD_MIGRATION", "STARTUP_APP_DEV"],
          isSelected: false
        }
      ];
    }
  },
  methods: {
    handleSelect(value) {
      if (value.isSelected) {
        this.showFiltered = true;
        this.filter.push(value.key);
        for (let index = 0; index < this.filter.length; index++) {
          const element = this.filter[index];
          this.portfolio.filter(item => {            
            if (item.category.find(cat => cat == element)) {
              item.isSelected = true;
            }
          });
        }
      } else {
        this.showFiltered = false;
        this.portfolio.filter(item => {
          if (item.category.find(cat => cat == value.key)) {
            item.isSelected = false;
          }
        });
        this.filter.splice(value.key, 1);
      }
      if (this.filter != "") {
        this.showFiltered = true;
        for (let index = 0; index < this.filter.length; index++) {
          const element = this.filter[index];
          this.portfolio.filter(item => {
            if (item.category.find(cat => cat == element)) {
              item.isSelected = true;
            }
          });
        }
      }
    },
    clearAll() {
      this.showFiltered = false;
      this.filter = [];
      this.filteredPortfolio.map(item => {
        item.isSelected = false;
        return item;
      });
    },
    getData() {
      return this.portfolio;
    },
  },
  components: {
    VueMasonryGallery,
    Categories,
    Header,
    FooterSection
  },
  data() {
    return {
      initialHeight: true,
      filter: [],
      filtered: [],
      showFiltered: false,
      visible: false,
      index: 0,
      options: {
        maxCols: 4,
        gap: 15,
        mobileGap: 5
      }
    };
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

.vue-masonry-gallery-container .vue-masonry-gallery-scroll {
  overflow-y: hidden !important;
  padding-top: 1em;
}

.vue-masonry-gallery {
  position: relative;
}

.portfolio .container {
  padding-bottom: 5em;
}
.portfolio-heading {
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
}

.lightbox-alpha {
  transition: all 0.3s ease-out;
  position: fixed;
  background: rgba(0, 0, 0, 0.95);
  height: 100%;
  width: 100%;
  z-index: 999;
  opacity: 1;
  top: 0;
  left: 0;
}

.fadeIn {
  animation-name: fadeIn;
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.lightbox-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  overflow: auto;
}

.lightbox-container {
  text-align: center;
}

.lightbox-container-info {
  background: white;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100vh - 90px);
}

.close-icon {
  top: -7px;
  right: 0;
  padding: 0 10px;
  font-size: 45px;
}

.close-icon,
.prev-icon,
.next-icon {
  background: rgba(0, 0, 0, 0.2);
}

.next-icon {
  right: 0;
}

.cursor-pointer {
  cursor: pointer;
}

.img-box {
  float: left;
}

.html-overflow {
  overflow-x: hidden;
  overflow-y: scroll;
}

@media only screen and (max-width: 767px) {
  .lightbox-content {
    width: 90%;
  }

  .lightbox-container {
    width: 100%;
  }
}

.initialHeight {
  height: 100vh;
}

footer {
  opacity: 0;
}
</style>
