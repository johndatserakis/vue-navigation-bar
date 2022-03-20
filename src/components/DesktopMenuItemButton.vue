<template>
  <dynamic-link
    :path="option.path"
    :isUsingVueRouter="options.isUsingVueRouter"
    :class="['vnb__menu-options__option__button', 'vnb-button', option.class]"
    :aria-label="option.text"
    :isLinkAction="option.isLinkAction ? true : false"
    @click="$emit('vnb-item-clicked', option.text)"
  >
    <template #content>
      <span
        v-if="option.iconLeft"
        class="vnb__menu-options__option__button__icon vnb__menu-options__option__button__icon--left"
        v-html="option.iconLeft"
      ></span>
      {{option.text}}
      <span
        v-if="option.iconRight"
        class="vnb__menu-options__option__button__icon vnb__menu-options__option__button__icon--right"
        v-html="option.iconRight"
      ></span>
    </template>
  </dynamic-link>
</template>

<script>
import DynamicLink from '../components/DynamicLink.vue';

export default {
  name: 'desktop-menu-item-button',
  props: {
    option: {
      type: Object,
      required: true,
    },
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
  &__menu-options {
    &__option {
      &__button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-weight: 400;
        color: $white;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        font-size: 0.9rem;
        line-height: 1;
        border-radius: 0.25rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 0.5rem 1rem;
        transition: background 0.2s ease-in;

        &__icon {
          svg {
            max-height: 16px;
            max-width: 16px;
          }

          &--left {
            margin-right: 5px;
          }

          &--right {
            margin-left: 5px;
          }
        }
      }
    }
  }
}

.vnb-button {
  background: $blue;

  &:hover {
    color: $white;
    background: darken($blue, 10%);
    text-decoration: none;
  }
}
</style>
