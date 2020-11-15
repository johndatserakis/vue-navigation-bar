(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue-screen-size'), require('tippy.js'), require('vue2-transitions')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue-screen-size', 'tippy.js', 'vue2-transitions'], factory) :
  (global = global || self, factory(global.VueNavigationBar = {}, global.VueScreenSize, global.tippy, global.Vue2Transitions));
}(this, (function (exports, VueScreenSize, tippy, vue2Transitions) { 'use strict';

  VueScreenSize = VueScreenSize && Object.prototype.hasOwnProperty.call(VueScreenSize, 'default') ? VueScreenSize['default'] : VueScreenSize;
  var tippy__default = 'default' in tippy ? tippy['default'] : tippy;

  // https://stackoverflow.com/a/2117523/8014660
  function uuidV4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  var script = {
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

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      var options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      var hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  var __vue_script__ = script;

  /* template */

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__ = /*#__PURE__*/normalizeComponent(
      {},
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  var script$1 = {
    name: "brand-image",
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    data: function data() {
      return {};
    },
    computed: {},
    methods: {},
    components: {
      DynamicLink: __vue_component__
    }
  };

  /* script */
  var __vue_script__$1 = script$1;
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "vnb__brand-image-wrapper" },
      [
        _c(
          "dynamic-link",
          {
            staticClass: "vnb__brand-image-wrapper__link",
            attrs: {
              path: _vm.options.brandImagePath,
              isUsingVueRouter: _vm.options.isUsingVueRouter,
              "aria-label": "Homepage",
              isLinkAction: false
            },
            nativeOn: {
              click: function($event) {
                return _vm.$emit("vnb-item-clicked", "brand-image")
              }
            }
          },
          [
            _vm.options.brandImage
              ? _c("img", {
                  staticClass: "vnb-image vnb__brand-image-wrapper__link__image",
                  attrs: {
                    src: _vm.options.brandImage,
                    alt: _vm.options.brandImageAltText
                  }
                })
              : _vm._e()
          ]
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__$1 = undefined;
    /* scoped */
    var __vue_scope_id__$1 = undefined;
    /* module identifier */
    var __vue_module_identifier__$1 = undefined;
    /* functional template */
    var __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$1 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  var script$2 = {
    name: "desktop-menu-item-link",
    props: {
      option: {
        type: Object,
        required: true
      },
      options: {
        type: Object,
        required: true
      }
    },
    data: function data() {
      return {
        currentExpandedStatus: "closed"
      };
    },
    computed: {
      isExpanded: function isExpanded() {
        if (this.currentExpandedStatus === "open") {
          return true;
        }

        return false;
      }
    },
    methods: {
      // Each time a sub-menu-option is clicked, close all the tooltips
      subMenuItemSelected: function subMenuItemSelected(text) {
        this.closeAllTooltips();
      },

      // When we keydown tab on the last sub-menu-option, we want to close
      // all the tooltips
      subMenuItemTabbed: function subMenuItemTabbed(text) {
        // Let's check to see if this item is the last
        // item in the subMenuOptions array
        if (
          this.option.subMenuOptions[this.option.subMenuOptions.length - 1]
            .text === text
        ) {
          this.closeAllTooltips();
        }
      },

      menuShown: function menuShown() {
        this.currentExpandedStatus = "open";
      },
      menuHidden: function menuHidden() {
        this.currentExpandedStatus = "closed";
      },

      closeAllTooltips: function closeAllTooltips() {
        // https://atomiks.github.io/tippyjs/v6/methods/#hideall
        tippy.hideAll();
      },

      initTippy: function initTippy() {
        var this$1 = this;

        var el = document.getElementById(
          "dropdown-menu-parent-" + this.option.id
        );

        var template = document.getElementById(
          "sub-menu-options-" + this.option.id
        );
        template.style.display = "block";

        tippy__default(el, {
          theme: "light",
          content: template,
          interactive: true,
          animation: this.options.tooltipAnimationType,
          role: "Menu",
          // trigger: 'click', // for testing
          trigger: "click mouseenter focus",
          appendTo: "parent",
          arrow: true,
          inertia: false,
          placement: this.options.tooltipPlacement,
          popperOptions: {
            modifiers: [
              {
                name: 'flip',
                options: {
                  fallbackPlacements: [this.options.tooltipPlacement]
                }
              }
            ]
          },
          onShow: function (instance) {
            tippy.hideAll({exclude: instance});

            // fire the menuShown function
            this$1.menuShown();
          },
          onHide: function () {
            // fire the menuHidden function
            this$1.menuHidden();
          }
        });
      }
    },
    mounted: function mounted() {
      // Let's setup our tippy here in mounted
      if (this.option.subMenuOptions && this.option.subMenuOptions.length) {
        this.initTippy();
      }
    },
    components: {
      DynamicLink: __vue_component__
    }
  };

  /* script */
  var __vue_script__$2 = script$2;
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return !_vm.option.subMenuOptions || !_vm.option.subMenuOptions.length
      ? _c(
          "dynamic-link",
          {
            staticClass: "vnb__menu-options__option__link",
            attrs: {
              path: _vm.option.path,
              isUsingVueRouter: _vm.options.isUsingVueRouter,
              "aria-label": _vm.option.text,
              tabindex: "0",
              isLinkAction: _vm.option.isLinkAction ? true : false
            },
            nativeOn: {
              click: function($event) {
                return _vm.$emit("vnb-item-clicked", _vm.option.text)
              }
            }
          },
          [
            _vm.option.iconLeft
              ? _c("span", {
                  staticClass:
                    "vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--left",
                  domProps: { innerHTML: _vm._s(_vm.option.iconLeft) }
                })
              : _vm._e(),
            _vm._v("\n  " + _vm._s(_vm.option.text) + "\n  "),
            _vm.option.iconRight
              ? _c("span", {
                  staticClass:
                    "vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--right",
                  domProps: { innerHTML: _vm._s(_vm.option.iconRight) }
                })
              : _vm._e()
          ]
        )
      : _c(
          "span",
          {
            staticClass: "vnb__menu-options__option__link",
            attrs: {
              id: "dropdown-menu-parent-" + _vm.option.id,
              "aria-haspopup": "true",
              "aria-expanded": _vm.isExpanded ? "true" : "false",
              "aria-label": _vm.option.text,
              tabindex: "0"
            }
          },
          [
            _vm.option.iconLeft
              ? _c("span", {
                  staticClass:
                    "vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--left",
                  domProps: { innerHTML: _vm._s(_vm.option.iconLeft) }
                })
              : _vm._e(),
            _vm._v("\n  " + _vm._s(_vm.option.text) + "\n  "),
            _vm.option.iconRight
              ? _c("span", {
                  staticClass:
                    "vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--right",
                  domProps: { innerHTML: _vm._s(_vm.option.iconRight) }
                })
              : _vm._e(),
            _vm._v(" "),
            _c(
              "svg",
              {
                class: [
                  "vnb__menu-options__option__arrow",
                  { "vnb__menu-options__option__arrow--hover": _vm.isExpanded }
                ],
                style: { fill: _vm.option.arrowColor },
                attrs: {
                  height: "28pt",
                  preserveAspectRatio: "xMidYMid meet",
                  viewBox: "0 0 49 28",
                  width: "49pt",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("title", [_vm._v("Toggle Arrow")]),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d:
                      "m12 268c-7-7-12-17-12-23 0-13 232-245 245-245 6 0 64 54 129 119 119 119 132 142 90 158-11 4-44-23-113-91-53-53-101-96-106-96-6 0-53 43-105 95s-99 95-105 95-16-5-23-12z",
                    transform: "matrix(.1 0 0 -.1 0 28)"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm.option.type === "link"
              ? _c(
                  "div",
                  {
                    staticClass: "vnb__sub-menu-options",
                    attrs: { id: "sub-menu-options-" + _vm.option.id }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "vnb__sub-menu-options__option",
                        attrs: { tabindex: "-1" }
                      },
                      _vm._l(_vm.option.subMenuOptions, function(
                        subOption,
                        index
                      ) {
                        return subOption.type === "link"
                          ? _c(
                              "dynamic-link",
                              {
                                key: index,
                                staticClass:
                                  "vnb__sub-menu-options__option__link",
                                attrs: {
                                  path: subOption.path,
                                  isUsingVueRouter: _vm.options.isUsingVueRouter,
                                  "aria-label": subOption.text,
                                  tabindex: "0",
                                  isLinkAction: subOption.isLinkAction
                                    ? true
                                    : false
                                },
                                nativeOn: {
                                  click: function($event) {
                                    _vm.subMenuItemSelected(subOption.text);
                                    _vm.$emit("vnb-item-clicked", subOption.text);
                                  },
                                  keydown: function($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "tab",
                                        9,
                                        $event.key,
                                        "Tab"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.subMenuItemTabbed(subOption.text)
                                  }
                                }
                              },
                              [
                                subOption.iconLeft
                                  ? _c("span", {
                                      staticClass:
                                        "vnb__sub-menu-options__option__link__icon vnb__sub-menu-options__option__link__icon--left",
                                      domProps: {
                                        innerHTML: _vm._s(subOption.iconLeft)
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "vnb__sub-menu-options__option__link__text-wrapper"
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "vnb__sub-menu-options__option__link__text-wrapper__text"
                                      },
                                      [_vm._v(_vm._s(subOption.text))]
                                    ),
                                    _vm._v(" "),
                                    subOption.subText
                                      ? _c(
                                          "span",
                                          {
                                            staticClass:
                                              "vnb__sub-menu-options__option__link__text-wrapper__sub-text"
                                          },
                                          [_vm._v(_vm._s(subOption.subText))]
                                        )
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                subOption.iconRight
                                  ? _c("span", {
                                      staticClass:
                                        "vnb__sub-menu-options__option__link__icon vnb__sub-menu-options__option__link__icon--right",
                                      domProps: {
                                        innerHTML: _vm._s(subOption.iconRight)
                                      }
                                    })
                                  : _vm._e()
                              ]
                            )
                          : _c("hr", {
                              staticClass: "vnb__sub-menu-options__option__hr",
                              attrs: { tabindex: "-1" }
                            })
                      }),
                      1
                    )
                  ]
                )
              : _vm._e()
          ]
        )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    var __vue_inject_styles__$2 = undefined;
    /* scoped */
    var __vue_scope_id__$2 = undefined;
    /* module identifier */
    var __vue_module_identifier__$2 = undefined;
    /* functional template */
    var __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$2 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script$3 = {
    name: "desktop-menu-item-button",
    props: {
      option: {
        type: Object,
        required: true
      },
      options: {
        type: Object,
        required: true
      }
    },
    data: function data() {
      return {};
    },
    computed: {},
    methods: {},
    components: {
      DynamicLink: __vue_component__
    }
  };

  /* script */
  var __vue_script__$3 = script$3;
  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dynamic-link",
      {
        class: [
          "vnb__menu-options__option__button",
          "vnb-button",
          _vm.option.class
        ],
        attrs: {
          path: _vm.option.path,
          isUsingVueRouter: _vm.options.isUsingVueRouter,
          "aria-label": _vm.option.text,
          isLinkAction: _vm.option.isLinkAction ? true : false
        },
        nativeOn: {
          click: function($event) {
            return _vm.$emit("vnb-item-clicked", _vm.option.text)
          }
        }
      },
      [
        _vm.option.iconLeft
          ? _c("span", {
              staticClass:
                "vnb__menu-options__option__button__icon vnb__menu-options__option__button__icon--left",
              domProps: { innerHTML: _vm._s(_vm.option.iconLeft) }
            })
          : _vm._e(),
        _vm._v("\n  " + _vm._s(_vm.option.text) + "\n  "),
        _vm.option.iconRight
          ? _c("span", {
              staticClass:
                "vnb__menu-options__option__button__icon vnb__menu-options__option__button__icon--right",
              domProps: { innerHTML: _vm._s(_vm.option.iconRight) }
            })
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    var __vue_inject_styles__$3 = undefined;
    /* scoped */
    var __vue_scope_id__$3 = undefined;
    /* module identifier */
    var __vue_module_identifier__$3 = undefined;
    /* functional template */
    var __vue_is_functional_template__$3 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$3 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //

  var script$4 = {
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
      },
      computed: {
      },
      methods: {
      }
  };

  /* script */
  var __vue_script__$4 = script$4;
  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "vnb__menu-options__option__spacer" })
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    var __vue_inject_styles__$4 = undefined;
    /* scoped */
    var __vue_scope_id__$4 = undefined;
    /* module identifier */
    var __vue_module_identifier__$4 = undefined;
    /* functional template */
    var __vue_is_functional_template__$4 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$4 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  var script$5 = {
    name: "menu-options",
    mixins: [VueScreenSize.VueScreenSizeMixin],
    props: {
      options: {
        type: Object,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    },
    data: function data() {
      return {};
    },
    computed: {},
    methods: {
      vnbItemClicked: function vnbItemClicked(text) {
        this.$emit("vnb-item-clicked", text);
      }
    },
    components: {
      DesktopMenuItemLink: __vue_component__$2,
      DesktopMenuItemButton: __vue_component__$3,
      DesktopMenuItemSpacer: __vue_component__$4
    }
  };

  /* script */
  var __vue_script__$5 = script$5;
  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.$vssWidth > _vm.options.mobileBreakpoint
      ? _c(
          "div",
          {
            class: [
              "vnb__menu-options",
              { "vnb__menu-options--left": _vm.type === "left" },
              { "vnb__menu-options--right": _vm.type === "right" }
            ]
          },
          _vm._l(
            _vm.type === "left"
              ? _vm.options.menuOptionsLeft
              : _vm.options.menuOptionsRight,
            function(option, index) {
              return _c(
                "div",
                { key: index, staticClass: "vnb__menu-options__option" },
                [
                  option.type === "link"
                    ? _c("desktop-menu-item-link", {
                        attrs: { option: option, options: _vm.options },
                        on: { "vnb-item-clicked": _vm.vnbItemClicked }
                      })
                    : option.type === "button"
                    ? _c("desktop-menu-item-button", {
                        attrs: { option: option, options: _vm.options },
                        on: { "vnb-item-clicked": _vm.vnbItemClicked }
                      })
                    : _c("desktop-menu-item-spacer", {
                        attrs: { option: option }
                      })
                ],
                1
              )
            }
          ),
          0
        )
      : _vm._e()
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    var __vue_inject_styles__$5 = undefined;
    /* scoped */
    var __vue_scope_id__$5 = undefined;
    /* module identifier */
    var __vue_module_identifier__$5 = undefined;
    /* functional template */
    var __vue_is_functional_template__$5 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$5 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  var script$6 = {
      name: 'collapse-button',
      mixins: [VueScreenSize.VueScreenSizeMixin],
      props: {
          options: {
              type: Object,
              required: true
          },
          menuIsVisible: {
              type: Boolean,
              required: true
          }
      },
      data: function data () {
          return {
          }
      },
      computed: {
      },
      methods: {
          collapseButtonClicked: function collapseButtonClicked () {
              this.$emit('collapse-button-clicked');
          }
      }
  };

  /* script */
  var __vue_script__$6 = script$6;
  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.$vssWidth < _vm.options.mobileBreakpoint
      ? _c(
          "button",
          {
            staticClass: "vnb__collapse-button",
            attrs: {
              type: "button",
              "aria-expanded": _vm.menuIsVisible ? "true" : "false"
            },
            on: { click: _vm.collapseButtonClicked }
          },
          [
            _vm.options.collapseButtonImageOpen
              ? _c("img", {
                  staticClass: "vnb__collapse-button__image",
                  attrs: { src: _vm.options.collapseButtonImageOpen, alt: "Menu" }
                })
              : _c(
                  "svg",
                  {
                    staticClass: "vnb__collapse-button__image",
                    style: { fill: _vm.options.collapseButtonOpenColor },
                    attrs: {
                      height: "100pt",
                      preserveAspectRatio: "xMidYMid meet",
                      viewBox: "0 0 100 100",
                      width: "100pt",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("title", [_vm._v("Menu")]),
                    _vm._v(" "),
                    _c(
                      "g",
                      { attrs: { transform: "matrix(.1 0 0 -.1 0 100)" } },
                      [
                        _c("path", {
                          attrs: { d: "m0 850v-40h500 500v40 40h-500-500z" }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: { d: "m0 495v-45h500 500v45 45h-500-500z" }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: { d: "m0 140v-40h500 500v40 40h-500-500z" }
                        })
                      ]
                    )
                  ]
                )
          ]
        )
      : _vm._e()
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    var __vue_inject_styles__$6 = undefined;
    /* scoped */
    var __vue_scope_id__$6 = undefined;
    /* module identifier */
    var __vue_module_identifier__$6 = undefined;
    /* functional template */
    var __vue_is_functional_template__$6 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$6 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  var script$7 = {
    name: "popup",
    props: {
      options: {
        type: Object,
        required: true
      },
      menuIsVisible: {
        type: Boolean,
        required: true
      }
    },
    data: function data() {
      return {};
    },
    computed: {
      combinedMenuItems: function combinedMenuItems() {
        var combinedArray = this.options.menuOptionsLeft.concat(
          this.options.menuOptionsRight
        );
        return combinedArray;
      }
    },
    methods: {
      closeButtonClicked: function closeButtonClicked() {
        this.$emit("close-button-clicked");
      },
      itemSelected: function itemSelected(option) {
        this.$emit("vnb-item-clicked", option.text);
        this.closeButtonClicked();
      }
    },
    components: {
      DynamicLink: __vue_component__,
      SlideYDownTransition: vue2Transitions.SlideYDownTransition
    }
  };

  /* script */
  var __vue_script__$7 = script$7;
  /* template */
  var __vue_render__$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("slide-y-down-transition", [
      _vm.menuIsVisible
        ? _c("div", { staticClass: "vnb__popup" }, [
            _c("div", { staticClass: "vnb__popup__top" }, [
              _vm.options.showBrandImageInMobilePopup && _vm.options.brandImage
                ? _c("img", {
                    staticClass: "vnb-image vnb__popup__top__image",
                    attrs: {
                      src: _vm.options.brandImage,
                      alt: _vm.options.brandImageAltText
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "vnb__popup__top__close-button",
                  attrs: {
                    "aria-label": "Close Button",
                    title: "Close",
                    "aria-expanded": _vm.menuIsVisible ? "true" : "false"
                  },
                  on: { click: _vm.closeButtonClicked }
                },
                [
                  _vm.options.collapseButtonImageClose
                    ? _c("img", {
                        staticClass: "vnb__popup__top__close-button__image",
                        attrs: {
                          src: _vm.options.collapseButtonImageClose,
                          alt: "Close button"
                        }
                      })
                    : _c(
                        "svg",
                        {
                          staticClass: "vnb__popup__top__close-button__image",
                          style: { fill: _vm.options.collapseButtonCloseColor },
                          attrs: {
                            height: "100pt",
                            preserveAspectRatio: "xMidYMid meet",
                            viewBox: "0 0 100 100",
                            width: "100pt",
                            xmlns: "http://www.w3.org/2000/svg"
                          }
                        },
                        [
                          _c("title", [_vm._v("Close button")]),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "m42 967c-12-13-22-27-22-33 0-5 93-102 207-216l208-208-208-208c-114-114-207-214-207-223 0-8 11-26 25-39l26-24 214 214 215 215 215-215 214-214 26 24c14 13 25 28 25 34s-92 103-205 216-205 209-205 215 92 102 205 215 205 210 205 216c0 12-42 54-55 54-5 0-104-94-220-210l-210-210-210 210c-115 116-212 210-216 210-3 0-15-10-27-23z",
                              transform: "matrix(.1 0 0 -.1 0 100)"
                            }
                          })
                        ]
                      )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vnb__popup__bottom" }, [
              !!this.$slots["custom-section"]
                ? _c(
                    "div",
                    { staticClass: "vnb__popup__bottom__custom-section" },
                    [_vm._t("custom-section")],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "vnb__popup__bottom__menu-options" },
                _vm._l(_vm.combinedMenuItems, function(option, index) {
                  return _c(
                    "li",
                    {
                      key: index,
                      staticClass: "vnb__popup__bottom__menu-options__option"
                    },
                    [
                      !option.subMenuOptions
                        ? _c(
                            "dynamic-link",
                            {
                              class: [
                                "vnb__popup__bottom__menu-options__option__link",
                                option.class
                              ],
                              attrs: {
                                path: option.path,
                                isUsingVueRouter: _vm.options.isUsingVueRouter,
                                "aria-label": option.text,
                                isLinkAction: option.isLinkAction ? true : false
                              },
                              nativeOn: {
                                click: function($event) {
                                  return _vm.itemSelected(option)
                                }
                              }
                            },
                            [
                              option.iconLeft
                                ? _c("span", {
                                    staticClass:
                                      "vnb__popup__bottom__menu-options__option__link__icon vnb__popup__bottom__menu-options__option__link__icon--left",
                                    domProps: {
                                      innerHTML: _vm._s(option.iconLeft)
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(
                                "\n            " +
                                  _vm._s(option.text) +
                                  "\n            "
                              ),
                              option.iconRight
                                ? _c("span", {
                                    staticClass:
                                      "vnb__popup__bottom__menu-options__option__link__icon vnb__popup__bottom__menu-options__option__link__icon--right",
                                    domProps: {
                                      innerHTML: _vm._s(option.iconRight)
                                    }
                                  })
                                : _vm._e()
                            ]
                          )
                        : _c(
                            "span",
                            {
                              staticClass:
                                "vnb__popup__bottom__menu-options__option__link vnb__popup__bottom__menu-options__option__link--no-highlight"
                            },
                            [_vm._v(_vm._s(option.text))]
                          ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vnb__popup__bottom__sub-menu-options" },
                        _vm._l(option.subMenuOptions, function(subOption, index) {
                          return _c(
                            "div",
                            {
                              key: index,
                              staticClass:
                                "vnb__popup__bottom__sub-menu-options__option"
                            },
                            [
                              subOption.type === "link"
                                ? _c(
                                    "dynamic-link",
                                    {
                                      staticClass:
                                        "vnb__popup__bottom__sub-menu-options__option__link",
                                      attrs: {
                                        path: subOption.path,
                                        isUsingVueRouter:
                                          _vm.options.isUsingVueRouter,
                                        "aria-label": subOption.text,
                                        isLinkAction: option.isLinkAction
                                          ? true
                                          : false
                                      },
                                      nativeOn: {
                                        click: function($event) {
                                          return _vm.itemSelected(subOption)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(subOption.text) +
                                          "\n                "
                                      ),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "vnb__popup__bottom__sub-menu-options__option__link__sub-text"
                                        },
                                        [_vm._v(_vm._s(subOption.subText))]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        }),
                        0
                      )
                    ],
                    1
                  )
                }),
                0
              )
            ])
          ])
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    var __vue_inject_styles__$7 = undefined;
    /* scoped */
    var __vue_scope_id__$7 = undefined;
    /* module identifier */
    var __vue_module_identifier__$7 = undefined;
    /* functional template */
    var __vue_is_functional_template__$7 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$7 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  var script$8 = {
    name: "vue-navigation-bar",
    mixins: [VueScreenSize.VueScreenSizeMixin],
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    data: function data() {
      return {
        menuIsVisible: false
      };
    },
    computed: {
      finalOptions: function finalOptions() {
        // What we're doing here is giving each top-level menu-option a unique id
        if (this.options.menuOptionsLeft) {
          for (var x = 0; x < this.options.menuOptionsLeft.length; x++) {
            this.$set(this.options.menuOptionsLeft[x], "id", uuidV4());
          }
        }
        if (this.options.menuOptionsRight) {
          for (var x$1 = 0; x$1 < this.options.menuOptionsRight.length; x$1++) {
            this.$set(this.options.menuOptionsRight[x$1], "id", uuidV4());
          }
        }

        return {
          elementId: this.options.elementId ? this.options.elementId : uuidV4(),
          isUsingVueRouter: this.options.isUsingVueRouter ? true : false,
          mobileBreakpoint: this.options.mobileBreakpoint
            ? this.options.mobileBreakpoint
            : 992,
          brandImagePath: this.options.brandImagePath
            ? this.options.brandImagePath
            : "/",
          brandImage: this.options.brandImage ? this.options.brandImage : null,
          brandImageAltText: this.options.brandImageAltText
            ? this.options.brandImageAltText
            : "brand-image",
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
          showBrandImageInMobilePopup: this.options.showBrandImageInMobilePopup
            ? true
            : false,
          ariaLabelMainNav: this.options.ariaLabelMainNav
            ? this.options.ariaLabelMainNav
            : "Main Navigation",
          tooltipAnimationType: this.options.tooltipAnimationType
            ? this.options.tooltipAnimationType
            : "shift-away",
          tooltipPlacement: this.options.tooltipPlacement || "bottom",
          menuOptionsLeft: this.options.menuOptionsLeft
            ? this.options.menuOptionsLeft
            : [],
          menuOptionsRight: this.options.menuOptionsRight
            ? this.options.menuOptionsRight
            : []
        };
      }
    },
    methods: {
      closeMobilePopup: function closeMobilePopup() {
        this.menuIsVisible = false;
        this.$emit("vnb-mobile-popup-hidden");
      },
      showMobilePopup: function showMobilePopup() {
        this.menuIsVisible = true;
        this.$emit("vnb-mobile-popup-shown");
      },
      vnbItemClicked: function vnbItemClicked(text) {
        this.$emit("vnb-item-clicked", text);
      }
    },
    components: {
      BrandImage: __vue_component__$1,
      MenuOptions: __vue_component__$5,
      CollapseButton: __vue_component__$6,
      Popup: __vue_component__$7
    }
  };

  /* script */
  var __vue_script__$8 = script$8;
  /* template */
  var __vue_render__$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "nav",
      {
        staticClass: "vnb",
        attrs: {
          id: _vm.finalOptions.elementId,
          "aria-label": _vm.finalOptions.ariaLabelMainNav
        }
      },
      [
        _c("brand-image", {
          attrs: { options: _vm.finalOptions },
          on: { "vnb-item-clicked": _vm.vnbItemClicked }
        }),
        _vm._v(" "),
        _c("menu-options", {
          attrs: { options: _vm.finalOptions, type: "left" },
          on: { "vnb-item-clicked": _vm.vnbItemClicked }
        }),
        _vm._v(" "),
        _vm.$vssWidth > _vm.options.mobileBreakpoint
          ? _vm._t("custom-section")
          : _vm._e(),
        _vm._v(" "),
        _c("menu-options", {
          attrs: { options: _vm.finalOptions, type: "right" },
          on: { "vnb-item-clicked": _vm.vnbItemClicked }
        }),
        _vm._v(" "),
        _vm.finalOptions.menuOptionsLeft.length ||
        _vm.finalOptions.menuOptionsRight.length
          ? _c("collapse-button", {
              attrs: {
                options: _vm.finalOptions,
                menuIsVisible: _vm.menuIsVisible
              },
              on: { "collapse-button-clicked": _vm.showMobilePopup }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.finalOptions.menuOptionsLeft.length ||
        _vm.finalOptions.menuOptionsRight.length
          ? _c("popup", {
              attrs: {
                options: _vm.finalOptions,
                menuIsVisible: _vm.menuIsVisible
              },
              on: {
                "close-button-clicked": _vm.closeMobilePopup,
                "vnb-item-clicked": _vm.vnbItemClicked
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "custom-section",
                    fn: function() {
                      return [_vm._t("custom-section")]
                    },
                    proxy: true
                  }
                ],
                null,
                true
              )
            })
          : _vm._e()
      ],
      2
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    var __vue_inject_styles__$8 = undefined;
    /* scoped */
    var __vue_scope_id__$8 = undefined;
    /* module identifier */
    var __vue_module_identifier__$8 = undefined;
    /* functional template */
    var __vue_is_functional_template__$8 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$8 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      false,
      undefined,
      undefined,
      undefined
    );

  // Import vue component

  // install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;
    Vue.component("VueNavigationBar", __vue_component__$8);
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install
  };

  // To auto-install when vue is found
  var GlobalVue = null;
  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.default = __vue_component__$8;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
