<script>
export default {
  name: "dynamic-link",
  render: function(h) {
    if (this.isLinkAction) {
      return h("div", {}, this.$slots.default);
    }

    if (this.isUsingVueRouter) {
      return h(
        "router-link",
        { props: { to: { path: this.path } } },
        this.$slots.default
      );
    }

    return h("a", { attrs: { href: this.path } }, this.$slots.default);
  },
  props: {
    isUsingVueRouter: {
      type: Boolean,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    isLinkAction: {
      type: Boolean,
      required: true
    }
  }
};
</script>
