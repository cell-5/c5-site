<template>
  <div class="category-wrap">
    <!-- {{value}} -->
    <button
    >

    </button>
    <v-btn
      v-for="(c, i) in this.value"
      @click="handleInput(c, !c.getIsSelected())"
      :key="i"
      :depressed="c.getIsSelected()"
      :color="c.getIsSelected() ? 'black' : ''"
      :style="c.getIsSelected() ? 'color : white' : ''"
      >{{c.text}}
    </v-btn>
    <v-btn color="red" style="color: white" @click="clearAll">Clear</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'categories',
    props: {
      value: {
        type: Object
      }
    },
    methods: {
      handleInput(key, value) {
        key.updateCategory(value)
      },
      clearAll() {
        this.$emit('clearAll');
      }
    }
  }
</script>

<style scoped lang="scss">
  .category-wrap {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    
  }
  .v-btn{
    font-size: 1rem;
    height: inherit;
    margin: 6px 0.5rem;
  }
</style>
