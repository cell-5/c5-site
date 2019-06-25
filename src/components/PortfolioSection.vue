<template>
  <div id="portfolio">
    <Header></Header>
    <main role="main">
      <section class="portfolio">
        <div class="h-100">
          <vue-masonry-gallery
            :target="options.target"
            :maxCols="options.maxCols"
            :gap="options.gap"
            :mobileGap="options.mobileGap"
            :imgsArr="imgsArr"
            @click="clickFn"
            @scrollReachBottom="getData"
          ></vue-masonry-gallery>
          <div class="lightbox-alpha animated fadeIn" v-if="visible" @click="hide">
            <div
              class="position-fixed text-white cursor-pointer close-icon"
              @click.stop="hide"
            >&times;</div>
            <div
              class="position-fixed text-white pl-2 pt-1"
            >{{ indexCount }} / {{ this.imgsArr.length }}</div>
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
                <img :src="this.imgsArr[this.index].src">
                <div class="lightbox-container-info" ref="info">
                  <h4 ref="modal-title">{{ this.imgsArr[this.index].title }}</h4>
                  <p ref="modal-description">{{ this.imgsArr[this.index].info }}</p>
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
import $ from "jquery";

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
    backToTop();

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
    }
  },
  methods: {
    hide() {
      this.visible = false;
      this.index = 0;
      document.querySelector("html").classList.remove("overflow-hidden");
    },
    hasNext() {
      var val = parseInt(this.index) + 1;
      return val < this.imgsArr.length;
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
      return this.imgArr;
    },
    clickFn(event, { index, value }) {
      // Prevent a tag jump
      document.querySelector("html").classList.add("overflow-hidden");
      event.preventDefault();

      // Do it only when you click on the image
      if (event.target.tagName.toLowerCase() == "img") {
        // console.log("img clicked", index, value);
        this.index = index;
        this.visible = true;
        this.hasNext();
        this.hasPrev();
      }
    }
  },
  components: {
    VueMasonryGallery,
    Header,
    FooterSection
  },
  data() {
    return {
      visible: false,
      index: 0,
      options: {
        maxCols: 5,
        gap: 15,
        mobileGap: 5
      },
      imgsArr: [
        {
          src: "https://placeimg.com/1024/1024/grayscale",
          srcBig: "https://placeimg.com/250/250/grayscale",
          href: null,
          link: "https://google.com",
          title: "This is first img title",
          info: "First description",
          target: "modal",
          maxCols: 3
        },
        {
          src: "https://placeimg.com/768/768/nature",
          srcBig: "https://placeimg.com/250/250/nature",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal"
        },
        {
          src: "https://placeimg.com/600/550/tech",
          srcBig: "https://placeimg.com/250/250/tech",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal"
        },
        {
          src: "https://placeimg.com/1024/1024/animals",
          srcBig: "https://placeimg.com/250/300/animals",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal"
        },
        {
          src: "https://placeimg.com/900/800/arh",
          srcBig: "https://placeimg.com/900/400/arch",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal"
        },
        {
          src: "https://placeimg.com/1300/1200/nature",
          srcBig: "https://placeimg.com/400/250/nature",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal"
        },
        {
          src: "https://placeimg.com/1300/1200/grayscale",
          srcBig: "https://placeimg.com/400/250/grayscale",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal"
        },
        {
          src: "https://placeimg.com/1300/1200/animals",
          srcBig: "https://placeimg.com/400/250/animals",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal"
        },
        {
          src: "https://placeimg.com/1000/900/tech",
          srcBig: "https://placeimg.com/1000/900/tech",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal"
        },
        {
          src: "https://placeimg.com/1000/900/nature",
          srcBig: "https://placeimg.com/1000/900/nature",
          title: "This is second img title",
          href: null,
          link: "https://google.com",
          info:
            "Second desc with lorem Ipsum is simply dummy text of the printing and typesetting industry",
          target: "modal"
        }
      ]
    };
  }
};
</script>
<style>
#app {
  height: 100%;
}
#portfolio {
  height: 100%;
}

main {
  height: 100%;
}

.portfolio {
  height: calc(100% - 126px);
  position: relative;
  background: white;
}

.vue-masonry-gallery-container .vue-masonry-gallery-scroll {
  overflow-y: auto !important;
  padding-top: 5em;
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
  transition: transform 0.3s ease-out;
  /* background: hsla(0, 0%, 96%, 0.88); */
  position: fixed;
  background: rgba(0, 0, 0, 0.85);
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

@media only screen and (max-width: 767px) {
  .lightbox-content {
    width: 90%;
  }

  .lightbox-container {
    width: 100%;
  }
}

@media (max-width: 567px) {
  main {
    height: calc(100% - 35px);
  }
}
</style>
