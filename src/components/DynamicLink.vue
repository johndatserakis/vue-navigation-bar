<template>
  <template>
    <slot v-if="isLinkAction" v-bind="$attrs" name="content"></slot>
  </template>

  <template v-if="isUsingVueRouter">
    <router-link v-if="path.name" v-bind="$attrs" :to="{name: this.path.name}">
      <slot name="content"></slot>
    </router-link>
    <router-link v-else v-bind="$attrs" :to="{path: this.path}">
      <slot name="content"></slot>
    </router-link>
  </template>
  <a v-else v-bind="$attrs" :href="path">
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
      required: true,
    },
    isLinkAction: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
