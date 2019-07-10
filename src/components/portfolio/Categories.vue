<template>
  <div class="category-wrap">
    <!-- {{value}} -->
    <button
      v-for="(c, i) in this.value"
      type="button"
      @click="handleInput(c, !c.getIsSelected())"
      class="btn-1 btn-light"
      :class="{'is-active' : c.isSelected}"
      :key="i">
      {{c.text}}
    </button>
    <button class="btn-1 btn-light" @click="clearAll">Clear</button>
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
