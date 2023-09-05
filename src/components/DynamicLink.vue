<template>
  <router-link
    v-if="isUsingVueRouter && path && path.name"
    v-bind="$attrs"
    :to="{ name: this.path.name }"
  >
    <slot name="content"></slot>
  </router-link>
  <router-link
    v-if="isUsingVueRouter && path && !path.name"
    v-bind="$attrs"
    :to="{ path: this.path }"
  >
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
};
</script>
