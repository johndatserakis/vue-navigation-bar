<template>
  <button
    v-if="$vssWidth < options.mobileBreakpoint"
    class="vnb__collapse-button"
    @click="collapseButtonClicked"
    type="button"
    :aria-expanded="menuIsVisible ? 'true' : 'false'"
  >
    <img
      v-if="options.collapseButtonImageOpen"
      :src="options.collapseButtonImageOpen"
      :alt="'Menu'"
      class="vnb__collapse-button__image"
    />
    <svg
      v-else
      height="100pt"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 100 100"
      width="100pt"
      xmlns="http://www.w3.org/2000/svg"
      class="vnb__collapse-button__image"
      :style="{fill: options.collapseButtonOpenColor}"
    >
      <title>Menu</title>
      <g transform="matrix(.1 0 0 -.1 0 100)">
        <path d="m0 850v-40h500 500v40 40h-500-500z" />
        <path d="m0 495v-45h500 500v45 45h-500-500z" />
        <path d="m0 140v-40h500 500v40 40h-500-500z" />
      </g>
    </svg>
  </button>
</template>

<script>
import {VueScreenSizeMixin} from 'vue-screen-size';

export default {
  name: 'collapse-button',
  mixins: [VueScreenSizeMixin],
  props: {
    options: {
      type: Object,
      required: true,
    },
    menuIsVisible: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return {};
  },
  methods: {
    collapseButtonClicked () {
      this.$emit('collapse-button-clicked');
    },
  },
  emits: [
    'collapse-button-clicked',
  ]
};
</script>

<style lang="scss">
@import "../assets/css/main.scss";

.vnb {
  &__collapse-button {
    cursor: pointer;
    border: 0;
    background: transparent;
    margin-right: 10px;

    &:hover {
      opacity: 0.75;
    }

    &__image {
      max-height: 30px;
      max-width: 30px;
    }
  }
}
</style>
