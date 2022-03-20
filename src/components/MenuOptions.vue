<template>
  <div
    v-if="$vssWidth > options.mobileBreakpoint"
    :class="[
      'vnb__menu-options',
      {'vnb__menu-options--left': type === 'left'},
      {'vnb__menu-options--right': type === 'right'},
    ]"
  >
    <div
      v-for="(option, index) in type === 'left'
      ? options.menuOptionsLeft
      : options.menuOptionsRight"
      :key="index"
      class="vnb__menu-options__option"
    >
      <desktop-menu-item-link
        v-if="option.type === 'link'"
        :option="option"
        :options="options"
        @vnb-item-clicked="vnbItemClicked"
      />

      <desktop-menu-item-button
        v-else-if="option.type === 'button'"
        :option="option"
        :options="options"
        @vnb-item-clicked="vnbItemClicked"
      />

      <desktop-menu-item-spacer v-else :option="option" />
    </div>
  </div>
</template>

<script>
import {VueScreenSizeMixin} from 'vue-screen-size';
import DesktopMenuItemButton from '../components/DesktopMenuItemButton.vue';
import DesktopMenuItemLink from '../components/DesktopMenuItemLink.vue';
import DesktopMenuItemSpacer from '../components/DesktopMenuItemSpacer.vue';

export default {
  name: 'menu-options',
  mixins: [VueScreenSizeMixin],
  props: {
    options: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data () {
    return {};
  },
  methods: {
    vnbItemClicked (text) {
      this.$emit('vnb-item-clicked', text);
    },
  },
  components: {
    DesktopMenuItemLink,
    DesktopMenuItemButton,
    DesktopMenuItemSpacer,
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
    display: flex;
    flex-direction: row;
    align-items: center;

    &--left {
      margin-right: auto;
      justify-content: flex-start;
      padding-left: 30px;
    }

    &--right {
      margin-left: auto;
      justify-content: flex-end;
      padding-right: 10px;
    }

    &__option {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
}
</style>
