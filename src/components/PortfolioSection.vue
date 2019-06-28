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
            @click="clickFn"
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
            @click="clickFn"
            @scrollReachBottom="getData"
          ></vue-masonry-gallery>
          <div v-if="initialHeight" class="initialHeight"></div>
          <div class="lightbox-alpha animated fadeIn" v-if="visible" @click="hide">
            <div
              class="position-fixed text-white cursor-pointer close-icon"
              @click.stop="hide"
            >&times;</div>
            <div
              class="position-fixed text-white pl-2 pt-1"
            >{{ indexCount }} / {{ this.showFiltered ? this.filteredPortfolio.length: this.portfolio.length }}</div>
            <div class="d-flex lightbox-content animated">
              <div
                class="cursor-pointer align-self-center prev-icon position-absolute"
                @click.stop="prev"
                :class="{'invisible': ! hasPrev()}"
              >
                <svg
                  class="pointer-events-none"
                  fill="#fff"
                  height="48"
                  viewBox="0 0 24 24"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
                  <path d="M0-.5h24v24H0z" fill="none"></path>
                </svg>
              </div>
              <div class="lightbox-container" @click.stop>
                <img :src="this.portfolio[this.index].src">
                <div class="lightbox-container-info" ref="info">
                  <h4 ref="modal-title">{{ this.portfolio[this.index].title }}</h4>
                  <p ref="modal-description">{{ this.portfolio[this.index].info }}</p>
                </div>
              </div>
              <div
                class="cursor-pointer align-self-center next-icon position-absolute"
                @click.stop="next"
                :class="{'invisible': ! hasNext()}"
              >
                <svg
                  class="pointer-events-none"
                  fill="#fff"
                  height="48"
                  viewBox="0 0 24 24"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                  <path d="M0-.25h24v24H0z" fill="none"></path>
                </svg>
              </div>
            </div>
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
import VueMasonryGallery from "vue-masonry-gallery";
import Categories from "./Categories";
import $ from "jquery";
import { setTimeout } from "timers";

function backToTop() {
  $("html,body").animate(
    {
      scrollTop: 0
    },
    500
  );
}

export default {
  name: "portfolio",
  mounted() {
    var parentContainer = this.$refs.myGallery;
    var gparent = parentContainer.$el.querySelector(
      ".vue-masonry-gallery-scroll"
    );
    var parent = gparent.querySelector(".vue-masonry-gallery");

    //created custom function for setting gallery container height to avoid double scroll
    //and minimize adding of media query
    function heightGallery() {
      setTimeout(() => {
        var list = parent.querySelectorAll(".img-box");
        var parentOffset = parent.getBoundingClientRect();
        var arrList = Array.from(list);
        var bottom = 0;

        arrList.map(function(el) {
          var elemOffset = el.getBoundingClientRect();
          var elemBottom = elemOffset.top + el.offsetHeight - parentOffset.top;
          if (elemBottom > bottom) {
            bottom = elemBottom;
          }
        });
        [parent, gparent, parentContainer.$el].map(
          el => (el.style.minHeight = bottom + "px")
        );
      }, 500);
    }
    
    heightGallery();
    backToTop();

    //add initial height on page load and prevent page from being jumpy
    var footerFade = parentContainer.$parent.$el.querySelector("footer");
    setTimeout(() => (this.initialHeight = false), 400);
    setTimeout(() => (footerFade.style.opacity = 1), 600);

    //remove scroll on gallery pop
    document.querySelector("html").classList.add("html-overflow");

    window.addEventListener("resize", heightGallery);
    window.addEventListener("keydown", this.onKeydown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onKeydown);
  },
  created() {
    this.getData();
  },
  computed: {
    indexCount() {
      return parseInt(this.index) + 1;
    },
    filteredPortfolio() {
      if (this.filter !== "")
        return this.portfolio.filter(item => item.isSelected === true);
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
    hide() {
      this.visible = false;
      this.index = 0;
      document.querySelector("html").classList.remove("overflow-hidden");
    },
    hasNext() {
      var val = parseInt(this.index) + 1;
      if (!this.showFiltered) {
        return val < this.portfolio.length;
      } else {
        return val < this.filteredPortfolio.length;
      }
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    prev() {
      if (this.hasPrev()) {
        this.index = parseInt(this.index) - 1;
      }
    },
    next() {
      if (this.hasNext()) {
        this.index = parseInt(this.index) + 1;
      }
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case "ArrowRight":
            this.next();
            break;
          case "ArrowLeft":
            this.prev();
            break;
          case "ArrowDown":
          case "ArrowUp":
          case " ":
            e.preventDefault();
            break;
          case "Escape":
            this.hide();
            break;
        }
      }
    },
    getData() {
      return this.portfolio;
    },
    clickFn(event, { index, value }) {
      // Prevent a tag jump
      document.querySelector("html").classList.add("overflow-hidden");
      event.preventDefault();

      // Do it only when you click on the image
      if (event.target.tagName.toLowerCase() == "img") {
        this.index = index;
        this.visible = true;
        this.hasNext();
        this.hasPrev();
      }
    }
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
