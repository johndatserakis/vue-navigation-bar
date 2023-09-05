<template>
  <router-link v-if="isUsingVueRouter && path" v-bind="$attrs" :to="localPath">
    <slot name="content"></slot>
  </router-link>
  <a v-if="!isUsingVueRouter && !isLinkAction && path" v-bind="$attrs" :href="path">
    <slot name="content"></slot>
  </a>
  <a v-if="isLinkAction" v-bind="$attrs" href="javascript:void(0);">
    <slot name="content"></slot>
  </a>
</template>

<script>
export default {
  name: 'dynamic-link',
  props: {
    isUsingVueRouter: {
      type: Boolean,
      required: true,
    },
    path: {
      type: [String, Object],
      required: false,
    },
    isLinkAction: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    localPath() {
      if (!this.path) return;

      return typeof this.path === 'string' ? this.path : Object.assign({}, this.path);
    },
  },
};
</script>
