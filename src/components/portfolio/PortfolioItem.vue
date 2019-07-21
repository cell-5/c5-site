<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
      class="mx-auto"
      color="grey lighten-4"
      width="98%"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="image"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            close-delay="2"
            class="d-flex transition-fast-in-fast-out item-transition v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            <h3 class="center">{{ info }}</h3>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <v-btn
          v-if="learnMore"
          absolute
          color="green"
          class="white--text"
          large
          right
          top
        >
          Learn more
        </v-btn>
        <div>

          <h3 class="display-1 font-weight-light mb-2"><a :href="href"> <i style="font-size: smaller"
                                                                           class="fas fa-link"></i></a>
            {{ title }}</h3>
        </div>


        <v-chip v-for="(c, i) in category" disabled>{{c.text}}</v-chip>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: "PortfolioItem",
    props: {
      learnMore: Boolean,
      title: String,
      image: String,
      info: String,
      href: String,
      category: Array,
    }
  }
</script>

<style scoped>
  .item-transition {
    background-image: linear-gradient(to bottom right, red, blue);
    text-align: center;
  }

  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .7 !important;
    position: absolute;
    width: 100%;
  }


</style>
