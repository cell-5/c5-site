<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="image"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            {{ info }}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="green"
          class="white--text"

          large
          right
          top
        >
          Learn more
        </v-btn>
        <!--        <div class="font-weight-light grey&#45;&#45;text title mb-2">For the perfect meal</div>-->
        <!--        <h3 class="display-1 font-weight-light mb-2">QW cooking utensils</h3>-->
        <!--        <div class="font-weight-light title mb-2">-->
        <!--          Our Vintage kitchen utensils delight any chef.<br>-->
        <!--          Made of bamboo by hand-->
        <!--        </div>-->

        <v-chip v-for="(c, i) in category" @click="() => c.updateCategory(!c.isSelected)">{{c.text}}</v-chip>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: "PortfolioItem",
    props: {
      image: String,
      info: String,
      category: Array,
    }
  }
</script>

<style scoped>

</style>
