<template>
  <div class="category-wrap">
    <!-- {{value}} -->
    <button
      v-for="(c, i) in this.categories"
      type="button"
      @click="c.selected = !c.selected, handleSelect(i, c.selected)"
      class="btn-1 btn-light"
      :class="{'is-active' : c.selected }"
      :key="i">
      {{c.text}}
    </button>
    <button class="btn-1 btn-light" @click="clearAll">Clear</button>
  </div>
</template>

<script>
  import categories from '../utils/category'
  import filter from '../utils/filter'
  export default {
    data() {
      return {
        categories: categories,
        isSelected: false
      }
    },
    methods: {
      handleSelect(key, selected) {
        const filter = {key, selected}
        this.$emit('handleSelect', filter);
      },
      clearAll() {
        this.$emit('clearAll');
      },
    }
  }
</script>

<style scoped lang="scss">
    .category-wrap {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
    }
    .btn-1 {
        margin: 5px 7px;
        width: inherit;
        height: 35px;
        background: #e9e9e9;
        color: #212529;
        border-radius: 0;
        border: none;
        cursor: pointer;
        font-size: 16px;
        padding: 0 15px;
        &:hover,
        &.is-active {
            color: #fff !important;
            a { color: #fff !important; }
        }

        &:hover { background-color: rgba(#212529, .8); }
        &.is-active { background-color: rgba(#212529, .9); }

        &:focus {
            outline: 0;
            box-shadow: none;
        }
        a {
            color: #212529;
            &:hover { text-decoration: none; }
        }
    }

  @media only screen and (max-width: 768px) {
    .category-wrap {
        .btn-1 {
            width: 100%;
            text-align: left;
        }
    }
  }
</style>