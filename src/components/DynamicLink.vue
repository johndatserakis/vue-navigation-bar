<script>
export default {
  name: "dynamic-link",
  render: function(h) {
    if (this.isLinkAction) {
      return h("div", {}, this.$slots.default);
    }

    if (this.isUsingVueRouter) {
      if (this.path.name) {
        // If an object with the name property is passed assume
        // it's a named route.
        return h(
          "router-link",
          { props: { to: { name: this.path.name } } },
          this.$slots.default
        );
      } else {
        // Otherwise pass along the string as a path.
        return h(
          "router-link",
          { props: { to: { path: this.path } } },
          this.$slots.default
        );
      }
    }

    return h("a", { attrs: { href: this.path } }, this.$slots.default);
  },
  props: {
    isUsingVueRouter: {
      type: Boolean,
      required: true
    },
    path: {
      type: [String, Object],
      required: true
    },
    isLinkAction: {
      type: Boolean,
      required: true
    }
  }
};
</script>
