<template>
  <div class="vnb__brand-image-wrapper">
    <dynamic-link
      :path="options.brandImagePath"
      :isUsingVueRouter="options.isUsingVueRouter"
      class="vnb__brand-image-wrapper__link"
      aria-label="Homepage"
      :isLinkAction="false"
      @click="$emit('vnb-item-clicked', 'brand-image')"
    >
      <template #content>
        <img
          v-if="options.brandImage"
          :src="options.brandImage"
          :alt="options.brandImageAltText"
          class="vnb-image vnb__brand-image-wrapper__link__image"
        />
      </template>
    </dynamic-link>
  </div>
</template>

<script>
import DynamicLink from '../components/DynamicLink.vue';

export default {
  name: 'brand-image',
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {};
  },
  components: {
    DynamicLink,
  },
  emits: [
    'vnb-item-clicked',
  ]
};
</script>

<style lang="scss">
@import "../assets/css/main.scss";

.vnb {
  &__brand-image-wrapper {
    padding-left: 10px;

    &__link {
      &__image {
        max-height: 30px;
      }
    }
  }
}

.vnb-image {
  max-width: 100%;
  height: auto;
}
</style>
