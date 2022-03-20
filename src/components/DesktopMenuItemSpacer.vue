<template>
  <div class="vnb__menu-options__option__spacer"></div>
</template>

<script>
export default {
  name: 'desktop-menu-item-spacer',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.vnb {
  &__menu-options {
    &__option {
      &__spacer {
        width: 30px;
      }
    }
  }
}
</style>
