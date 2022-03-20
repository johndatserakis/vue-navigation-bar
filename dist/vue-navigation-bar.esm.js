import { VueScreenSizeMixin } from 'vue-screen-size';
import { resolveComponent, openBlock, createElementBlock, Fragment, createElementVNode, renderSlot, normalizeProps, mergeProps, createCommentVNode, createBlock, withCtx, createVNode, normalizeStyle, normalizeClass, createTextVNode, toDisplayString, renderList, withKeys } from 'vue';
import tippy, { hideAll } from 'tippy.js';

// https://stackoverflow.com/a/2117523/8014660
function uuidV4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

var script$8 = {
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

var _hoisted_1$7 = ["href"];

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = resolveComponent("router-link");

  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("template", null, [
      ($props.isLinkAction)
        ? renderSlot(_ctx.$slots, "content", normalizeProps(mergeProps({ key: 0 }, _ctx.$attrs)))
        : createCommentVNode("v-if", true)
    ]),
    ($props.isUsingVueRouter)
      ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          ($props.path.name)
            ? (openBlock(), createBlock(_component_router_link, mergeProps({ key: 0 }, _ctx.$attrs, {
                to: {name: this.path.name}
              }), {
                default: withCtx(function () { return [
                  renderSlot(_ctx.$slots, "content")
                ]; }),
                _: 3 /* FORWARDED */
              }, 16 /* FULL_PROPS */, ["to"]))
            : (openBlock(), createBlock(_component_router_link, mergeProps({ key: 1 }, _ctx.$attrs, {
                to: {path: this.path}
              }), {
                default: withCtx(function () { return [
                  renderSlot(_ctx.$slots, "content")
                ]; }),
                _: 3 /* FORWARDED */
              }, 16 /* FULL_PROPS */, ["to"]))
        ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      : (openBlock(), createElementBlock("a", mergeProps({ key: 1 }, _ctx.$attrs, { href: $props.path }), [
          renderSlot(_ctx.$slots, "content")
        ], 16 /* FULL_PROPS */, _hoisted_1$7))
  ], 64 /* STABLE_FRAGMENT */))
}

script$8.render = render$8;
script$8.__file = "src/components/DynamicLink.vue";

var script$7 = {
  name: 'brand-image',
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  data: function data () {
    return {};
  },
  components: {
    DynamicLink: script$8,
  },
  emits: [
    'vnb-item-clicked' ]
};

var _hoisted_1$6 = { class: "vnb__brand-image-wrapper" };
var _hoisted_2$4 = ["src", "alt"];

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dynamic_link = resolveComponent("dynamic-link");

  return (openBlock(), createElementBlock("div", _hoisted_1$6, [
    createVNode(_component_dynamic_link, {
      path: $props.options.brandImagePath,
      isUsingVueRouter: $props.options.isUsingVueRouter,
      class: "vnb__brand-image-wrapper__link",
      "aria-label": "Homepage",
      isLinkAction: false,
      onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.$emit('vnb-item-clicked', 'brand-image')); })
    }, {
      content: withCtx(function () { return [
        ($props.options.brandImage)
          ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: $props.options.brandImage,
              alt: $props.options.brandImageAltText,
              class: "vnb-image vnb__brand-image-wrapper__link__image"
            }, null, 8 /* PROPS */, _hoisted_2$4))
          : createCommentVNode("v-if", true)
      ]; }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["path", "isUsingVueRouter"])
  ]))
}

script$7.render = render$7;
script$7.__file = "src/components/BrandImage.vue";

var script$6 = {
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
  data: function data () {
    return {};
  },
  methods: {
    collapseButtonClicked: function collapseButtonClicked () {
      this.$emit('collapse-button-clicked');
    },
  },
  emits: [
    'collapse-button-clicked' ]
};

var _hoisted_1$5 = ["aria-expanded"];
var _hoisted_2$3 = ["src"];
var _hoisted_3$2 = /*#__PURE__*/createElementVNode("title", null, "Menu", -1 /* HOISTED */);
var _hoisted_4$2 = /*#__PURE__*/createElementVNode("g", { transform: "matrix(.1 0 0 -.1 0 100)" }, [
  /*#__PURE__*/createElementVNode("path", { d: "m0 850v-40h500 500v40 40h-500-500z" }),
  /*#__PURE__*/createElementVNode("path", { d: "m0 495v-45h500 500v45 45h-500-500z" }),
  /*#__PURE__*/createElementVNode("path", { d: "m0 140v-40h500 500v40 40h-500-500z" })
], -1 /* HOISTED */);
var _hoisted_5$2 = [
  _hoisted_3$2,
  _hoisted_4$2
];

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.$vssWidth < $props.options.mobileBreakpoint)
    ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "vnb__collapse-button",
        onClick: _cache[0] || (_cache[0] = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return ($options.collapseButtonClicked && $options.collapseButtonClicked.apply($options, args));
  }),
        type: "button",
        "aria-expanded": $props.menuIsVisible ? 'true' : 'false'
      }, [
        ($props.options.collapseButtonImageOpen)
          ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: $props.options.collapseButtonImageOpen,
              alt: 'Menu',
              class: "vnb__collapse-button__image"
            }, null, 8 /* PROPS */, _hoisted_2$3))
          : (openBlock(), createElementBlock("svg", {
              key: 1,
              height: "100pt",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 100 100",
              width: "100pt",
              xmlns: "http://www.w3.org/2000/svg",
              class: "vnb__collapse-button__image",
              style: normalizeStyle({fill: $props.options.collapseButtonOpenColor})
            }, _hoisted_5$2, 4 /* STYLE */))
      ], 8 /* PROPS */, _hoisted_1$5))
    : createCommentVNode("v-if", true)
}

script$6.render = render$6;
script$6.__file = "src/components/CollapseButton.vue";

var script$5 = {
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
  data: function data () {
    return {};
  },
  components: {
    DynamicLink: script$8,
  },
  emits: [
    'vnb-item-clicked' ]
};

var _hoisted_1$4 = ["innerHTML"];
var _hoisted_2$2 = ["innerHTML"];

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dynamic_link = resolveComponent("dynamic-link");

  return (openBlock(), createBlock(_component_dynamic_link, {
    path: $props.option.path,
    isUsingVueRouter: $props.options.isUsingVueRouter,
    class: normalizeClass(['vnb__menu-options__option__button', 'vnb-button', $props.option.class]),
    "aria-label": $props.option.text,
    isLinkAction: $props.option.isLinkAction ? true : false,
    onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.$emit('vnb-item-clicked', $props.option.text)); })
  }, {
    content: withCtx(function () { return [
      ($props.option.iconLeft)
        ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "vnb__menu-options__option__button__icon vnb__menu-options__option__button__icon--left",
            innerHTML: $props.option.iconLeft
          }, null, 8 /* PROPS */, _hoisted_1$4))
        : createCommentVNode("v-if", true),
      createTextVNode(" " + toDisplayString($props.option.text) + " ", 1 /* TEXT */),
      ($props.option.iconRight)
        ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: "vnb__menu-options__option__button__icon vnb__menu-options__option__button__icon--right",
            innerHTML: $props.option.iconRight
          }, null, 8 /* PROPS */, _hoisted_2$2))
        : createCommentVNode("v-if", true)
    ]; }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["path", "isUsingVueRouter", "class", "aria-label", "isLinkAction"]))
}

script$5.render = render$5;
script$5.__file = "src/components/DesktopMenuItemButton.vue";

var script$4 = {
  name: 'desktop-menu-item-link',
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
  data: function data () {
    return {
      currentExpandedStatus: 'closed',
    };
  },
  computed: {
    isExpanded: function isExpanded () {
      if (this.currentExpandedStatus === 'open') {
        return true;
      }

      return false;
    },
  },
  methods: {
    // Each time a sub-menu-option is clicked, close all the tooltips
    subMenuItemSelected: function subMenuItemSelected (text) {
      this.closeAllTooltips();
    },

    // When we keydown tab on the last sub-menu-option, we want to close
    // all the tooltips
    subMenuItemTabbed: function subMenuItemTabbed (text) {
      // Let's check to see if this item is the last
      // item in the subMenuOptions array
      if (this.option.subMenuOptions[this.option.subMenuOptions.length - 1].text === text) {
        this.closeAllTooltips();
      }
    },

    menuShown: function menuShown () {
      this.currentExpandedStatus = 'open';
    },
    menuHidden: function menuHidden () {
      this.currentExpandedStatus = 'closed';
    },

    closeAllTooltips: function closeAllTooltips () {
      // https://atomiks.github.io/tippyjs/v6/methods/#hideall
      hideAll();
    },

    initTippy: function initTippy () {
      var this$1$1 = this;

      var el = document.getElementById('dropdown-menu-parent-' + this.option.id);

      var template = document.getElementById('sub-menu-options-' + this.option.id);
      template.style.display = 'block';

      tippy(el, {
        theme: 'light',
        content: template,
        interactive: true,
        animation: this.options.tooltipAnimationType,
        role: 'Menu',
        // trigger: 'click', // for testing
        trigger: 'click mouseenter focus',
        appendTo: 'parent',
        arrow: true,
        inertia: false,
        placement: this.options.tooltipPlacement,
        popperOptions: {
          modifiers: [
            {
              name: 'flip',
              options: {
                fallbackPlacements: [this.options.tooltipPlacement],
              },
            } ],
        },
        onShow: function (instance) {
          hideAll({exclude: instance});

          // fire the menuShown function
          this$1$1.menuShown();
        },
        onHide: function () {
          // fire the menuHidden function
          this$1$1.menuHidden();
        },
      });
    },
  },
  mounted: function mounted () {
    // Let's setup our tippy here in mounted
    if (this.option.subMenuOptions && this.option.subMenuOptions.length) {
      this.initTippy();
    }
  },
  components: {
    DynamicLink: script$8,
  },
  emits: [
    'vnb-item-clicked' ]
};

var _hoisted_1$3 = ["innerHTML"];
var _hoisted_2$1 = ["innerHTML"];
var _hoisted_3$1 = ["id", "aria-expanded", "aria-label"];
var _hoisted_4$1 = ["innerHTML"];
var _hoisted_5$1 = ["innerHTML"];
var _hoisted_6$1 = /*#__PURE__*/createElementVNode("title", null, "Toggle Arrow", -1 /* HOISTED */);
var _hoisted_7$1 = /*#__PURE__*/createElementVNode("path", {
  d: "m12 268c-7-7-12-17-12-23 0-13 232-245 245-245 6 0 64 54 129 119 119 119 132 142 90 158-11 4-44-23-113-91-53-53-101-96-106-96-6 0-53 43-105 95s-99 95-105 95-16-5-23-12z",
  transform: "matrix(.1 0 0 -.1 0 28)"
}, null, -1 /* HOISTED */);
var _hoisted_8$1 = [
  _hoisted_6$1,
  _hoisted_7$1
];
var _hoisted_9$1 = ["id"];
var _hoisted_10$1 = {
  class: "vnb__sub-menu-options__option",
  tabindex: "-1"
};
var _hoisted_11$1 = ["innerHTML"];
var _hoisted_12$1 = { class: "vnb__sub-menu-options__option__link__text-wrapper" };
var _hoisted_13$1 = { class: "vnb__sub-menu-options__option__link__text-wrapper__text" };
var _hoisted_14$1 = {
  key: 0,
  class: "vnb__sub-menu-options__option__link__text-wrapper__sub-text"
};
var _hoisted_15$1 = ["innerHTML"];
var _hoisted_16$1 = {
  key: 1,
  class: "vnb__sub-menu-options__option__hr",
  tabindex: "-1"
};

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dynamic_link = resolveComponent("dynamic-link");

  return (!$props.option.subMenuOptions || !$props.option.subMenuOptions.length)
    ? (openBlock(), createBlock(_component_dynamic_link, {
        key: 0,
        path: $props.option.path,
        isUsingVueRouter: $props.options.isUsingVueRouter,
        class: "vnb__menu-options__option__link",
        "aria-label": $props.option.text,
        tabindex: "0",
        isLinkAction: $props.option.isLinkAction ? true : false,
        onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.$emit('vnb-item-clicked', $props.option.text)); })
      }, {
        content: withCtx(function () { return [
          ($props.option.iconLeft)
            ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--left",
                innerHTML: $props.option.iconLeft
              }, null, 8 /* PROPS */, _hoisted_1$3))
            : createCommentVNode("v-if", true),
          createTextVNode(" " + toDisplayString($props.option.text) + " ", 1 /* TEXT */),
          ($props.option.iconRight)
            ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: "vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--right",
                innerHTML: $props.option.iconRight
              }, null, 8 /* PROPS */, _hoisted_2$1))
            : createCommentVNode("v-if", true)
        ]; }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["path", "isUsingVueRouter", "aria-label", "isLinkAction"]))
    : (openBlock(), createElementBlock("span", {
        key: 1,
        class: "vnb__menu-options__option__link",
        id: 'dropdown-menu-parent-' + $props.option.id,
        "aria-haspopup": "true",
        "aria-expanded": $options.isExpanded ? 'true' : 'false',
        "aria-label": $props.option.text,
        tabindex: "0"
      }, [
        ($props.option.iconLeft)
          ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--left",
              innerHTML: $props.option.iconLeft
            }, null, 8 /* PROPS */, _hoisted_4$1))
          : createCommentVNode("v-if", true),
        createTextVNode(" " + toDisplayString($props.option.text) + " ", 1 /* TEXT */),
        ($props.option.iconRight)
          ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: "vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--right",
              innerHTML: $props.option.iconRight
            }, null, 8 /* PROPS */, _hoisted_5$1))
          : createCommentVNode("v-if", true),
        (openBlock(), createElementBlock("svg", {
          height: "28pt",
          preserveAspectRatio: "xMidYMid meet",
          viewBox: "0 0 49 28",
          width: "49pt",
          xmlns: "http://www.w3.org/2000/svg",
          style: normalizeStyle({fill: $props.option.arrowColor}),
          class: normalizeClass([
        'vnb__menu-options__option__arrow',
        {'vnb__menu-options__option__arrow--hover': $options.isExpanded} ])
        }, _hoisted_8$1, 6 /* CLASS, STYLE */)),
        ($props.option.type === 'link')
          ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "vnb__sub-menu-options",
              id: 'sub-menu-options-' + $props.option.id
            }, [
              createElementVNode("div", _hoisted_10$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($props.option.subMenuOptions, function (subOption, index) {
                  return (openBlock(), createElementBlock("div", null, [
                    (subOption.type === 'link')
                      ? (openBlock(), createBlock(_component_dynamic_link, {
                          path: subOption.path,
                          isUsingVueRouter: $props.options.isUsingVueRouter,
                          key: index,
                          class: "vnb__sub-menu-options__option__link",
                          onClick: function ($event) {
  $options.subMenuItemSelected(subOption.text);
_ctx.$emit('vnb-item-clicked', subOption.text);
            },
                          "aria-label": subOption.text,
                          tabindex: "0",
                          onKeydown: withKeys(function ($event) { return ($options.subMenuItemTabbed(subOption.text)); }, ["tab"]),
                          isLinkAction: subOption.isLinkAction ? true : false
                        }, {
                          content: withCtx(function () { return [
                            (subOption.iconLeft)
                              ? (openBlock(), createElementBlock("span", {
                                  key: 0,
                                  class: "vnb__sub-menu-options__option__link__icon vnb__sub-menu-options__option__link__icon--left",
                                  innerHTML: subOption.iconLeft
                                }, null, 8 /* PROPS */, _hoisted_11$1))
                              : createCommentVNode("v-if", true),
                            createElementVNode("span", _hoisted_12$1, [
                              createElementVNode("span", _hoisted_13$1, toDisplayString(subOption.text), 1 /* TEXT */),
                              (subOption.subText)
                                ? (openBlock(), createElementBlock("span", _hoisted_14$1, toDisplayString(subOption.subText), 1 /* TEXT */))
                                : createCommentVNode("v-if", true)
                            ]),
                            (subOption.iconRight)
                              ? (openBlock(), createElementBlock("span", {
                                  key: 1,
                                  class: "vnb__sub-menu-options__option__link__icon vnb__sub-menu-options__option__link__icon--right",
                                  innerHTML: subOption.iconRight
                                }, null, 8 /* PROPS */, _hoisted_15$1))
                              : createCommentVNode("v-if", true)
                          ]; }),
                          _: 2 /* DYNAMIC */
                        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["path", "isUsingVueRouter", "onClick", "aria-label", "onKeydown", "isLinkAction"]))
                      : (openBlock(), createElementBlock("hr", _hoisted_16$1))
                  ]))
                }), 256 /* UNKEYED_FRAGMENT */))
              ])
            ], 8 /* PROPS */, _hoisted_9$1))
          : createCommentVNode("v-if", true)
      ], 8 /* PROPS */, _hoisted_3$1))
}

script$4.render = render$4;
script$4.__file = "src/components/DesktopMenuItemLink.vue";

var script$3 = {
  name: 'desktop-menu-item-spacer',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  data: function data () {
    return {
    }
  }
};

var _hoisted_1$2 = { class: "vnb__menu-options__option__spacer" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$2))
}

script$3.render = render$3;
script$3.__file = "src/components/DesktopMenuItemSpacer.vue";

var script$2 = {
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
  data: function data () {
    return {};
  },
  methods: {
    vnbItemClicked: function vnbItemClicked (text) {
      this.$emit('vnb-item-clicked', text);
    },
  },
  components: {
    DesktopMenuItemLink: script$4,
    DesktopMenuItemButton: script$5,
    DesktopMenuItemSpacer: script$3,
  },
  emits: [
    'vnb-item-clicked' ]
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_desktop_menu_item_link = resolveComponent("desktop-menu-item-link");
  var _component_desktop_menu_item_button = resolveComponent("desktop-menu-item-button");
  var _component_desktop_menu_item_spacer = resolveComponent("desktop-menu-item-spacer");

  return (_ctx.$vssWidth > $props.options.mobileBreakpoint)
    ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([
      'vnb__menu-options',
      {'vnb__menu-options--left': $props.type === 'left'},
      {'vnb__menu-options--right': $props.type === 'right'} ])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.type === 'left'
      ? $props.options.menuOptionsLeft
      : $props.options.menuOptionsRight, function (option, index) {
          return (openBlock(), createElementBlock("div", {
            key: index,
            class: "vnb__menu-options__option"
          }, [
            (option.type === 'link')
              ? (openBlock(), createBlock(_component_desktop_menu_item_link, {
                  key: 0,
                  option: option,
                  options: $props.options,
                  onVnbItemClicked: $options.vnbItemClicked
                }, null, 8 /* PROPS */, ["option", "options", "onVnbItemClicked"]))
              : (option.type === 'button')
                ? (openBlock(), createBlock(_component_desktop_menu_item_button, {
                    key: 1,
                    option: option,
                    options: $props.options,
                    onVnbItemClicked: $options.vnbItemClicked
                  }, null, 8 /* PROPS */, ["option", "options", "onVnbItemClicked"]))
                : (openBlock(), createBlock(_component_desktop_menu_item_spacer, {
                    key: 2,
                    option: option
                  }, null, 8 /* PROPS */, ["option"]))
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 2 /* CLASS */))
    : createCommentVNode("v-if", true)
}

script$2.render = render$2;
script$2.__file = "src/components/MenuOptions.vue";

var script$1 = {
  name: 'popup',
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
  data: function data () {
    return {};
  },
  computed: {
    combinedMenuItems: function combinedMenuItems () {
      var combinedArray = this.options.menuOptionsLeft.concat(this.options.menuOptionsRight);
      return combinedArray;
    },
  },
  methods: {
    closeButtonClicked: function closeButtonClicked () {
      this.$emit('close-button-clicked');
    },
    itemSelected: function itemSelected (option) {
      this.$emit('vnb-item-clicked', option.text);
      this.closeButtonClicked();
    },
  },
  components: {
    DynamicLink: script$8,
  },
  emits: [
    'close-button-clicked',
    'vnb-item-clicked' ]
};

var _hoisted_1$1 = {
  key: 0,
  class: "vnb__popup"
};
var _hoisted_2 = { class: "vnb__popup__top" };
var _hoisted_3 = ["src", "alt"];
var _hoisted_4 = ["aria-expanded"];
var _hoisted_5 = ["src"];
var _hoisted_6 = /*#__PURE__*/createElementVNode("title", null, "Close button", -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/createElementVNode("path", {
  d: "m42 967c-12-13-22-27-22-33 0-5 93-102 207-216l208-208-208-208c-114-114-207-214-207-223 0-8 11-26 25-39l26-24 214 214 215 215 215-215 214-214 26 24c14 13 25 28 25 34s-92 103-205 216-205 209-205 215 92 102 205 215 205 210 205 216c0 12-42 54-55 54-5 0-104-94-220-210l-210-210-210 210c-115 116-212 210-216 210-3 0-15-10-27-23z",
  transform: "matrix(.1 0 0 -.1 0 100)"
}, null, -1 /* HOISTED */);
var _hoisted_8 = [
  _hoisted_6,
  _hoisted_7
];
var _hoisted_9 = { class: "vnb__popup__bottom" };
var _hoisted_10 = {
  key: 0,
  class: "vnb__popup__bottom__custom-section"
};
var _hoisted_11 = { class: "vnb__popup__bottom__menu-options" };
var _hoisted_12 = ["innerHTML"];
var _hoisted_13 = ["innerHTML"];
var _hoisted_14 = {
  key: 1,
  class: "vnb__popup__bottom__menu-options__option__link vnb__popup__bottom__menu-options__option__link--no-highlight"
};
var _hoisted_15 = { class: "vnb__popup__bottom__sub-menu-options" };
var _hoisted_16 = { class: "vnb__popup__bottom__sub-menu-options__option__link__sub-text" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dynamic_link = resolveComponent("dynamic-link");

  return ($props.menuIsVisible)
    ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", _hoisted_2, [
          ($props.options.showBrandImageInMobilePopup && $props.options.brandImage)
            ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: $props.options.brandImage,
                alt: $props.options.brandImageAltText,
                class: "vnb-image vnb__popup__top__image"
              }, null, 8 /* PROPS */, _hoisted_3))
            : createCommentVNode("v-if", true),
          createElementVNode("button", {
            class: "vnb__popup__top__close-button",
            onClick: _cache[0] || (_cache[0] = function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              return ($options.closeButtonClicked && $options.closeButtonClicked.apply($options, args));
  }),
            "aria-label": "Close Button",
            title: "Close",
            "aria-expanded": $props.menuIsVisible ? 'true' : 'false'
          }, [
            ($props.options.collapseButtonImageClose)
              ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: $props.options.collapseButtonImageClose,
                  alt: 'Close button',
                  class: "vnb__popup__top__close-button__image"
                }, null, 8 /* PROPS */, _hoisted_5))
              : (openBlock(), createElementBlock("svg", {
                  key: 1,
                  height: "100pt",
                  preserveAspectRatio: "xMidYMid meet",
                  viewBox: "0 0 100 100",
                  width: "100pt",
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "vnb__popup__top__close-button__image",
                  style: normalizeStyle({fill: $props.options.collapseButtonCloseColor})
                }, _hoisted_8, 4 /* STYLE */))
          ], 8 /* PROPS */, _hoisted_4)
        ]),
        createElementVNode("div", _hoisted_9, [
          (!!this.$slots['custom-section'])
            ? (openBlock(), createElementBlock("div", _hoisted_10, [
                renderSlot(_ctx.$slots, "custom-section")
              ]))
            : createCommentVNode("v-if", true),
          createElementVNode("ul", _hoisted_11, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.combinedMenuItems, function (option, index) {
              return (openBlock(), createElementBlock("li", {
                key: index,
                class: "vnb__popup__bottom__menu-options__option"
              }, [
                (!option.subMenuOptions)
                  ? (openBlock(), createBlock(_component_dynamic_link, {
                      key: 0,
                      path: option.path,
                      isUsingVueRouter: $props.options.isUsingVueRouter,
                      class: normalizeClass(['vnb__popup__bottom__menu-options__option__link', option.class]),
                      onClick: function ($event) { return ($options.itemSelected(option)); },
                      "aria-label": option.text,
                      isLinkAction: option.isLinkAction ? true : false
                    }, {
                      content: withCtx(function () { return [
                        (option.iconLeft)
                          ? (openBlock(), createElementBlock("span", {
                              key: 0,
                              class: "vnb__popup__bottom__menu-options__option__link__icon vnb__popup__bottom__menu-options__option__link__icon--left",
                              innerHTML: option.iconLeft
                            }, null, 8 /* PROPS */, _hoisted_12))
                          : createCommentVNode("v-if", true),
                        createTextVNode(" " + toDisplayString(option.text) + " ", 1 /* TEXT */),
                        (option.iconRight)
                          ? (openBlock(), createElementBlock("span", {
                              key: 1,
                              class: "vnb__popup__bottom__menu-options__option__link__icon vnb__popup__bottom__menu-options__option__link__icon--right",
                              innerHTML: option.iconRight
                            }, null, 8 /* PROPS */, _hoisted_13))
                          : createCommentVNode("v-if", true)
                      ]; }),
                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["path", "isUsingVueRouter", "class", "onClick", "aria-label", "isLinkAction"]))
                  : (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString(option.text), 1 /* TEXT */)),
                createElementVNode("div", _hoisted_15, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(option.subMenuOptions, function (subOption, index) {
                    return (openBlock(), createElementBlock("div", {
                      key: index,
                      class: "vnb__popup__bottom__sub-menu-options__option"
                    }, [
                      (subOption.type === 'link')
                        ? (openBlock(), createBlock(_component_dynamic_link, {
                            key: 0,
                            path: subOption.path,
                            isUsingVueRouter: $props.options.isUsingVueRouter,
                            class: "vnb__popup__bottom__sub-menu-options__option__link",
                            onClick: function ($event) { return ($options.itemSelected(subOption)); },
                            "aria-label": subOption.text,
                            isLinkAction: option.isLinkAction ? true : false
                          }, {
                            content: withCtx(function () { return [
                              createTextVNode(toDisplayString(subOption.text) + " ", 1 /* TEXT */),
                              createElementVNode("span", _hoisted_16, toDisplayString(subOption.subText), 1 /* TEXT */)
                            ]; }),
                            _: 2 /* DYNAMIC */
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["path", "isUsingVueRouter", "onClick", "aria-label", "isLinkAction"]))
                        : createCommentVNode("v-if", true)
                    ]))
                  }), 128 /* KEYED_FRAGMENT */))
                ])
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ])
      ]))
    : createCommentVNode("v-if", true)
}

script$1.render = render$1;
script$1.__file = "src/components/Popup.vue";

var script = {
  name: 'vue-navigation-bar',
  mixins: [VueScreenSizeMixin],
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  data: function data () {
    return {
      menuIsVisible: false,
    };
  },
  computed: {
    finalOptions: function finalOptions () {
      // What we're doing here is giving each top-level menu-option a unique id
      if (this.options.menuOptionsLeft) {
        for (var x = 0; x < this.options.menuOptionsLeft.length; x++) {
          this.options.menuOptionsLeft[x].id = uuidV4();
        }
      }
      if (this.options.menuOptionsRight) {
        for (var x$1 = 0; x$1 < this.options.menuOptionsRight.length; x$1++) {
          this.options.menuOptionsRight[x$1].id = uuidV4();
        }
      }

      return {
        elementId: this.options.elementId ? this.options.elementId : uuidV4(),
        isUsingVueRouter: this.options.isUsingVueRouter ? true : false,
        mobileBreakpoint: this.options.mobileBreakpoint ? this.options.mobileBreakpoint : 992,
        brandImagePath: this.options.brandImagePath ? this.options.brandImagePath : '/',
        brandImage: this.options.brandImage ? this.options.brandImage : null,
        brandImageAltText: this.options.brandImageAltText
          ? this.options.brandImageAltText
          : 'brand-image',
        collapseButtonImageOpen: this.options.collapseButtonImageOpen
          ? this.options.collapseButtonImageOpen
          : null,
        collapseButtonImageClose: this.options.collapseButtonImageClose
          ? this.options.collapseButtonImageClose
          : null,
        collapseButtonOpenColor: this.options.collapseButtonOpenColor
          ? this.options.collapseButtonOpenColor
          : '#373737',
        collapseButtonCloseColor: this.options.collapseButtonCloseColor
          ? this.options.collapseButtonCloseColor
          : '#373737',
        showBrandImageInMobilePopup: this.options.showBrandImageInMobilePopup ? true : false,
        ariaLabelMainNav: this.options.ariaLabelMainNav
          ? this.options.ariaLabelMainNav
          : 'Main Navigation',
        tooltipAnimationType: this.options.tooltipAnimationType
          ? this.options.tooltipAnimationType
          : 'shift-away',
        tooltipPlacement: this.options.tooltipPlacement || 'bottom',
        menuOptionsLeft: this.options.menuOptionsLeft ? this.options.menuOptionsLeft : [],
        menuOptionsRight: this.options.menuOptionsRight ? this.options.menuOptionsRight : [],
      };
    },
  },
  methods: {
    closeMobilePopup: function closeMobilePopup () {
      this.menuIsVisible = false;
      this.$emit('vnb-mobile-popup-hidden');
    },
    showMobilePopup: function showMobilePopup () {
      this.menuIsVisible = true;
      this.$emit('vnb-mobile-popup-shown');
    },
    vnbItemClicked: function vnbItemClicked (text) {
      this.$emit('vnb-item-clicked', text);
    },
  },
  components: {
    BrandImage: script$7,
    MenuOptions: script$2,
    CollapseButton: script$6,
    Popup: script$1,
  },
  emits: [
    'vnb-mobile-popup-hidden',
    'vnb-mobile-popup-shown',
    'vnb-item-clicked' ]
};

var _hoisted_1 = ["id", "aria-label"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_brand_image = resolveComponent("brand-image");
  var _component_menu_options = resolveComponent("menu-options");
  var _component_collapse_button = resolveComponent("collapse-button");
  var _component_popup = resolveComponent("popup");

  return (openBlock(), createElementBlock("nav", {
    class: "vnb",
    id: $options.finalOptions.elementId,
    "aria-label": $options.finalOptions.ariaLabelMainNav
  }, [
    createVNode(_component_brand_image, {
      options: $options.finalOptions,
      onVnbItemClicked: $options.vnbItemClicked
    }, null, 8 /* PROPS */, ["options", "onVnbItemClicked"]),
    createVNode(_component_menu_options, {
      options: $options.finalOptions,
      type: 'left',
      onVnbItemClicked: $options.vnbItemClicked
    }, null, 8 /* PROPS */, ["options", "onVnbItemClicked"]),
    (_ctx.$vssWidth > $props.options.mobileBreakpoint)
      ? renderSlot(_ctx.$slots, "custom-section", { key: 0 })
      : createCommentVNode("v-if", true),
    createVNode(_component_menu_options, {
      options: $options.finalOptions,
      type: 'right',
      onVnbItemClicked: $options.vnbItemClicked
    }, null, 8 /* PROPS */, ["options", "onVnbItemClicked"]),
    ($options.finalOptions.menuOptionsLeft.length || $options.finalOptions.menuOptionsRight.length)
      ? (openBlock(), createBlock(_component_collapse_button, {
          key: 1,
          options: $options.finalOptions,
          menuIsVisible: $data.menuIsVisible,
          onCollapseButtonClicked: $options.showMobilePopup
        }, null, 8 /* PROPS */, ["options", "menuIsVisible", "onCollapseButtonClicked"]))
      : createCommentVNode("v-if", true),
    ($options.finalOptions.menuOptionsLeft.length || $options.finalOptions.menuOptionsRight.length)
      ? (openBlock(), createBlock(_component_popup, {
          key: 2,
          options: $options.finalOptions,
          menuIsVisible: $data.menuIsVisible,
          onCloseButtonClicked: $options.closeMobilePopup,
          onVnbItemClicked: $options.vnbItemClicked
        }, {
          "custom-section": withCtx(function () { return [
            renderSlot(_ctx.$slots, "custom-section")
          ]; }),
          _: 3 /* FORWARDED */
        }, 8 /* PROPS */, ["options", "menuIsVisible", "onCloseButtonClicked", "onVnbItemClicked"]))
      : createCommentVNode("v-if", true)
  ], 8 /* PROPS */, _hoisted_1))
}

script.render = render;
script.__file = "src/vue-navigation-bar.vue";

// Import vue component

// install function executed by Vue.use()
function install(app) {
  if (install.installed) { return; }

  install.installed = true;
  app.component('VueNavigationBar', script);
}

var plugin = { install: install };

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export { script as default, install };
