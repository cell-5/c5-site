<template>
    <div class="tagline-wrapper">
        <h2 id="tagline">
            <div class="row">
                <p class="top-bottom">client-first</p>
            </div>
            <div class="row">
                <a href="#solutions" class="tagline-carousel middle">
                    digital, web, mobile, cloud, start-up
                </a>
            </div>
            <div class="row">
                <p class="top-bottom">solutions</p>
            </div>
        </h2>
    </div>
</template>
<script>
import $ from "jquery";
import "morphext/dist/morphext.css";
import "animate.css";
import "morphext/dist/morphext.js";

function rotateText() {
  "use strict";
  const SPEED = 5000;
  $(".tagline-carousel").Morphext({
    animation: "fadeIn",
    separator: ",",
    speed: SPEED,
    complete: function() {
      var section = $(".tagline-carousel")
        .text()
        .replace(" ", "-")
        .replace(/\./g, "");
      $(".tagline-carousel").attr(
        "href",
        "#" + (section === "digital" ? "solutions" : section)
      );
    }
  });
}

export default {
  name: "SolutionsCarousel",
  mounted() {
    rotateText();
  }
};
</script>

<style scoped>


@media (min-width: 3840px) {
  .tagline-wrapper {
    max-width: 3000px;
  }
}

.tagline-wrapper h2 {
  font-size: 4.8em !important;
  font-weight: 700;
  text-align: left;
}

@media (max-width: 991px) and (orientation: landscape) {
  .tagline-wrapper h2 {
    font-size: 12vh !important;
  }
}

@media (max-width: 767px) and (orientation: portrait) {
  .tagline-wrapper h2 {
    font-size: 3em !important;
  }
}

.tagline-wrapper h2 ul.slick-dots {
  display: none !important;
}

.tagline-wrapper a {
  display: block;
}

.tagline-wrapper a:link,
.tagline-wrapper a:visited {
  color: #ffffff;
  text-decoration: none;
}

.tagline-wrapper a:hover {
  color: #ffffff;
}

.tagline-wrapper a:active {
  color: #ffffff;
}

.tagline-wrapper a:visited:active {
  color: #ffffff;
}

.middle {
  color: black;
}

.top-bottom {
  background: black;
}

.middle,
.top-bottom {
  display: inline-block;
  padding: 7px !important;
  word-wrap: break-word;
}
</style>

